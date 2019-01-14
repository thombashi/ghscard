#!/usr/bin/env python
# encoding: utf-8

"""
.. codeauthor:: Tsuyoshi Hombashi <tsuyoshi.hombashi@gmail.com>
"""

from __future__ import absolute_import, unicode_literals

import errno
import sys

import appconfigpy
import click
import logbook
import logbook.more
import msgfy
import typepy
from appconfigpy import ConfigItem, ConfigManager, DefaultDisplayStyle
from github.GithubException import RateLimitExceededException

from .__version__ import __version__
from ._const import PROGRAM_NAME, AppConfigKey
from ._generator import CardGenerator
from ._logger import get_logger


QUIET_LOG_LEVEL = logbook.NOTSET
CONTEXT_SETTINGS = dict(help_option_names=["-h", "--help"], obj={})
CONFIG_ITEM_LIST = [
    ConfigItem(
        name=AppConfigKey.GITHUB_API_ACCESS_TOKEN,
        initial_value=None,
        prompt_text="GitHub API Personal Access Token",
        default_display_style=DefaultDisplayStyle.PART_VISIBLE,
    ),
    ConfigItem(
        name=AppConfigKey.OUTPUT_DIR, prompt_text="Output Directory Path", initial_value="."
    ),
    ConfigItem(name=AppConfigKey.INDENT, prompt_text="Indent Size", initial_value=4),
]

logbook.more.ColorizedStderrHandler(
    level=logbook.DEBUG, format_string="[{record.level_name}] {record.channel}: {record.message}"
).push_application()


class Context(object):
    LOG_LEVEL = "LOG_LEVEL"


@click.group(context_settings=CONTEXT_SETTINGS)
@click.version_option(version=__version__, message="%(prog)s %(version)s")
@click.option("--debug", "log_level", flag_value=logbook.DEBUG, help="for debug print.")
@click.option(
    "--quiet", "log_level", flag_value=QUIET_LOG_LEVEL, help="suppress execution log messages."
)
@click.pass_context
def cmd(ctx, log_level):
    ctx.obj[Context.LOG_LEVEL] = logbook.INFO if log_level is None else log_level


@cmd.command()
@click.pass_context
def configure(ctx):
    """
    Create a configuration file which includes GitHub API public access token.

    The value you provide for the GitHub API public access token written to
    the configuration file (~/.ghscard).

    Example:

        To create a new configuration:

            $ ghscard configure
            GitHub API Personal Access Token: <input access token>
    """

    appconfigpy.set_log_level(ctx.obj[Context.LOG_LEVEL])

    app_config_mgr = ConfigManager(PROGRAM_NAME, CONFIG_ITEM_LIST)

    sys.exit(app_config_mgr.configure())


@cmd.command()
@click.argument("id", type=str, nargs=-1)
@click.option("--api-token", default=None, help="GitHub API access token.")
@click.option(
    "-o",
    "--output-dir",
    metavar="PATH",
    default=None,
    help="Output path of the SQLite database file.",
)
@click.pass_context
def gen(ctx, id, api_token, output_dir):
    """
    Generate a GitHub user/repository card data file.
    ID need to either <user name> or <user name>/<repository name>.

    Example:

        $ ghscard gen thombashi/ghscard
    """

    log_level = ctx.obj[Context.LOG_LEVEL]
    logger = get_logger(log_level, "{:s} gen".format(PROGRAM_NAME))
    appconfigpy.set_log_level(log_level)

    try:
        app_configs = ConfigManager(PROGRAM_NAME, CONFIG_ITEM_LIST).load()
    except ValueError as e:
        logger.debug(msgfy.to_debug_message(e))
        app_configs = {}

    if typepy.is_not_null_string(output_dir):
        app_configs[AppConfigKey.OUTPUT_DIR] = output_dir

    if typepy.is_not_null_string(api_token):
        app_configs[AppConfigKey.GITHUB_API_ACCESS_TOKEN] = api_token

    if not id:
        logger.error(
            "command requires at least one argument: "
            "<user-name> or <user-name>/<repository-name>"
        )
        sys.exit(errno.EINVAL)

    return_code_list = []
    generator = CardGenerator(logger, app_configs)
    for gh_id in id:
        try:
            return_code_list.append(generator.generate_card(gh_id))
        except KeyboardInterrupt:
            sys.exit(errno.EINTR)
        except RateLimitExceededException as e:
            logger.error(e.data.get("message"))
            sys.exit(errno.ENOSR)

    if any(return_code_list):
        sys.exit(1)

    sys.exit(0)


if __name__ == "__main__":
    cmd()

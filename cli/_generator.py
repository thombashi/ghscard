# encoding: utf-8

"""
.. codeauthor:: Tsuyoshi Hombashi <tsuyoshi.hombashi@gmail.com>
"""

from __future__ import absolute_import
from __future__ import unicode_literals

import errno
import io
import json
import os.path
import socket

import click
import github
from github.GithubException import (
    BadCredentialsException,
    UnknownObjectException,
)
from pathvalidate import sanitize_filename
import typepy

from ._const import (
    AppConfigKey,
    CommonCardKey,
    MAX_PER_PAGE,
)
from ._detector import GithubIdDetector
from ._github_client import GitHubClient
from ._stopwatch import stopwatch
from .fetcher import (
    RepositoryCardDataFetcher,
    UserCardDataFetcher,
    OrganizationCardDataFetcher,
)


class CardGenerator(object):

    def __init__(self, logger, app_config):
        self.__logger = logger
        self.__access_token = app_config.get(
            AppConfigKey.GITHUB_API_ACCESS_TOKEN)
        self.__output_dir = app_config.get(AppConfigKey.OUTPUT_DIR)

        if typepy.is_not_null_string(self.__access_token):
            logger.debug("access token found in the configuration file")

        self.__pygh_client = github.Github(
            self.__access_token, per_page=MAX_PER_PAGE)

    def generate_card(self, github_id):
        self.__set_github_id(github_id)

        try:
            with stopwatch(
                    self.__logger,
                    "fetch {} {}".format(github_id, self.__data_fetcher.type)):
                card_data = self.__data_fetcher.fetch()
        except socket.error as e:
            self.__logger.error(e)
            return errno.ECONNRESET
        except BadCredentialsException as e:
            self.__logger.error("invalid GitHub API public access token")
            return errno.EBADRQC
        except UnknownObjectException as e:
            if e.status == 404:
                message = "'{}' {}".format(
                    self.__data_fetcher.id, e.data.get("message"))
            else:
                message = e.data.message
            self.__logger.error(
                "failed to get GitHub data: type={}, id={}, status={}, message={}".format(
                    self.__data_fetcher.type, self.__data_fetcher.id, e.status,
                    message))
            return errno.ENODATA

        card_data_text = json.dumps(card_data)

        self.__logger.debug("fetched card data: {}".format(card_data_text))

        try:
            self.__make_output_dir()
        except TypeError:
            click.echo(card_data_text)
            return 0
        except OSError as e:
            self.__logger.error(e)
            return e.args[0]

        output_path = "{:s}.json".format(os.path.join(
            self.__output_dir,
            sanitize_filename(card_data[CommonCardKey.ID], "_")))

        try:
            with io.open(output_path, "w", encoding="utf-8") as f:
                f.write(card_data_text + "\n")
        except IOError as e:
            self.__logger.error(e)
            return e.args[0]

        self.__logger.info("written {:s} data to '{:s}'".format(
            self.__detector.get_id_type().lower(), output_path))

        return 0

    def __get_data_fetcher_class(self):
        if self.__detector.is_repository():
            return RepositoryCardDataFetcher

        if self.__detector.is_user():
            return UserCardDataFetcher

        if self.__detector.is_organization():
            return OrganizationCardDataFetcher

        raise ValueError("unknown id type: {}".format(self.__detector.id))

    def __set_github_id(self, github_id):
        self.__github_id = github_id
        self.__detector = GithubIdDetector(
            self.__github_id, self.__logger, pygh_client=self.__pygh_client)
        self.__data_fetcher = self.__create_data_fetcher()

    def __create_data_fetcher(self):
        return self.__get_data_fetcher_class()(
            pygh_client=self.__pygh_client,
            ghc_client=GitHubClient(
                logger=self.__logger, github_id=self.__detector.id,
                access_token=self.__access_token),
            id=self.__detector.id,
            logger=self.__logger)

    def __make_output_dir(self):
        if os.path.isdir(self.__output_dir):
            return

        self.__logger.debug(
            "creating directory: {}".format(self.__output_dir))

        os.makedirs(self.__output_dir)

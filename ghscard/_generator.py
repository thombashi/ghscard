"""
.. codeauthor:: Tsuyoshi Hombashi <tsuyoshi.hombashi@gmail.com>
"""

import errno
import os.path
from typing import Mapping

import click
import github
import msgfy
import typepy
from github.GithubException import BadCredentialsException, UnknownObjectException
from path import Path
from pathvalidate import sanitize_filename

from ._cache import CacheManager, CacheTime
from ._const import MAX_PER_PAGE, AppConfigKey
from ._detector import GithubIdDetector
from ._github_client import GitHubClient
from ._stopwatch import stopwatch
from .fetcher import (
    AbstractCardDataFetcher,
    OrganizationCardDataFetcher,
    RepositoryCardDataFetcher,
    UserCardDataFetcher,
)


try:
    import simplejson as json
except ImportError:
    import json  # type: ignore


class CardGenerator:
    def __init__(self, logger, app_config: Mapping[str, str], is_overwrite: bool) -> None:
        self.__logger = logger
        self.__access_token = app_config.get(AppConfigKey.GITHUB_API_ACCESS_TOKEN)
        self.__output_dir = Path(app_config.get(AppConfigKey.OUTPUT_DIR))
        self.__indent = app_config.get(AppConfigKey.INDENT)

        cache_time = CacheTime(24 * (60**2))
        if is_overwrite:
            cache_time = CacheTime(0)
        self.__cache_manager = CacheManager(logger, cache_time)

        if typepy.is_not_null_string(self.__access_token):
            logger.debug("access token found in the configuration file")

        self.__pygh_client = github.Github(self.__access_token, per_page=MAX_PER_PAGE)

    def generate_card(self, github_id: str) -> int:
        self.__set_github_id(github_id)

        output_path = self.__output_dir.joinpath(
            "{:s}.json".format(sanitize_filename(github_id, "_"), null_value_handler=raise_error)
        )
        if self.__cache_manager.is_cache_available(output_path):
            self.__logger.notice(f"skip: valid card data already exist: {output_path}")
            return 0

        try:
            with stopwatch(self.__logger, f"fetch {github_id} {self.__data_fetcher.type}"):
                card_data = self.__data_fetcher.fetch()
        except OSError as e:
            self.__logger.error(msgfy.to_error_message(e))
            return errno.ECONNRESET
        except BadCredentialsException:
            self.__logger.error("invalid GitHub API public access token")
            return errno.EBADRQC
        except KeyboardInterrupt:
            self.terminate()
            raise
        except UnknownObjectException as e:
            if e.status == 404:
                message = "'{}' {}".format(self.__data_fetcher.id, e.data.get("message"))
            else:
                message = e.data.message  # type: ignore
            self.__logger.error(
                "{:s} failed to get GitHub data: type={}, id={}, status={}, "
                "message={}".format(
                    e.__class__.__name__,
                    self.__data_fetcher.type,
                    self.__data_fetcher.id,
                    e.status,
                    message,
                )
            )
            return errno.ENODATA

        card_data_text = json.dumps(card_data, indent=self.__indent, ensure_ascii=False)

        self.__logger.debug(f"fetched card data: {card_data_text}")

        try:
            self.__make_output_dir()
        except TypeError:
            click.echo(card_data_text)
            return 0
        except OSError as e:
            self.__logger.error(msgfy.to_error_message(e))

            return e.args[0]

        try:
            with open(output_path, "w", encoding="utf-8") as f:
                f.write(card_data_text + "\n")
        except OSError as e:
            self.__logger.error(msgfy.to_error_message(e))
            return e.args[0]

        self.__logger.info(
            f"written {self.__detector.get_id_type().lower():s} data to '{output_path:s}'"
        )

        return 0

    def terminate(self) -> None:
        self.__data_fetcher.terminate()

    def __get_data_fetcher_class(self):
        # pytype: disable=attribute-error

        if self.__detector.is_repository():
            return RepositoryCardDataFetcher

        if self.__detector.is_user():
            return UserCardDataFetcher

        if self.__detector.is_organization():
            return OrganizationCardDataFetcher

        raise ValueError(f"unknown id type: {self.__detector.id}")
        # pytype: enable=attribute-error

    def __set_github_id(self, github_id: str) -> None:
        self.__github_id = github_id
        self.__detector = GithubIdDetector(
            self.__github_id, self.__logger, pygh_client=self.__pygh_client
        )
        self.__data_fetcher = self.__create_data_fetcher()

    def __create_data_fetcher(self) -> AbstractCardDataFetcher:
        # pytype: disable=attribute-error
        return self.__get_data_fetcher_class()(
            pygh_client=self.__pygh_client,
            ghc_client=GitHubClient(
                logger=self.__logger, github_id=self.__detector.id, access_token=self.__access_token
            ),
            id=self.__detector.id,
            logger=self.__logger,
        )
        # pytype: enable=attribute-error

    def __make_output_dir(self) -> None:
        if os.path.isdir(self.__output_dir):
            return

        self.__logger.debug(f"creating directory: {self.__output_dir}")

        os.makedirs(self.__output_dir)

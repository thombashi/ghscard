"""
.. codeauthor:: Tsuyoshi Hombashi <tsuyoshi.hombashi@gmail.com>
"""

import re
from typing import Dict

import msgfy
import retryrequests
import typepy
from github.GithubException import RateLimitExceededException

from ._const import MAX_PER_PAGE
from ._emoji import EmojiParser
from ._stopwatch import stopwatch


class GitHubClient:
    @property
    def emojis(self) -> Dict[str, str]:
        if self.__emojis:  # type: ignore
            return self.__emojis  # type: ignore

        self.__emojis = self.get("/emojis")

        return self.__emojis

    @property
    def emoji_parser(self) -> EmojiParser:
        if self.__emoji_parser:  # type: ignore
            return self.__emoji_parser  # type: ignore

        self.__emoji_parser = EmojiParser(self.emojis)

        return self.__emoji_parser

    @property
    def repo(self):
        if self.__repos:
            return self.__repos

        self.__repos = self.get(
            f"/repos/{self.__github_id:s}",
            headers={"accept": "application/vnd.github.drax-preview+json"},
        )
        # get license: https://developer.github.com/v3/licenses/

        return self.__repos

    @property
    def branches_count(self) -> int:
        return self.__get_count("branches")

    @property
    def contributors_count(self) -> int:
        return self.__get_count("contributors")

    @property
    def pulls_count(self) -> int:
        return self.__get_count("pulls")

    @property
    def tags_count(self) -> int:
        return self.__get_count("tags")

    @property
    def starred_count(self) -> int:
        return self.__get_count("starred")

    def __init__(self, logger, github_id, access_token=None):
        self._logger = logger
        self.__github_id = github_id
        self.__access_token = access_token

        self.__emojis = None
        self.__emoji_parser = None
        self.__repos = None

    def get(self, operation: str, headers: dict = None, params: dict = None) -> dict:
        if not headers:
            headers = {}

        if not params:
            params = {}

        if typepy.is_not_null_string(self.__access_token):
            headers["authorization"] = f"token {self.__access_token:s}"

        api_url = f"https://api.github.com{operation:s}"
        response = retryrequests.get(api_url, headers=headers, params=params)
        self._logger.debug(f"API called: {response.url}")

        try:
            response_json = response.json()
        except ValueError:
            return {}

        try:
            message = response_json.get("message")
        except AttributeError:
            return response_json

        if message:
            if re.search(".* list is too large to list .* via the API", message):
                raise OSError(message)

            if response.status_code == 403 and re.search("^API rate limit exceeded for ", message):
                raise RateLimitExceededException(status=response.status_code, data=message)

        return response_json

    def get_page(self, operation: str, page) -> dict:
        return self.get(operation, params={"per_page": str(MAX_PER_PAGE), "page": page})

    def _get_branches(self, page) -> dict:
        # https://developer.github.com/v3/repos/branches/
        return self.get_page(f"/repos/{self.__github_id:s}/branches", page=page)

    def _get_contributors(self, page) -> dict:
        return self.get_page(f"/repos/{self.__github_id:s}/contributors", page=page)

    def _get_pulls(self, page) -> dict:
        # https://developer.github.com/v3/pulls/
        return self.get_page(f"/repos/{self.__github_id:s}/pulls", page=page)

    def _get_tags(self, page) -> dict:
        # https://developer.github.com/v3/git/tags/
        return self.get_page(f"/repos/{self.__github_id:s}/tags", page=page)

    def _get_releases(self, page) -> dict:
        # https://developer.github.com/v3/repos/releases/
        return self.get_page(f"/repos/{self.__github_id:s}/releases", page=page)

    def _get_starred(self, page) -> dict:
        return self.get_page(f"/users/{self.__github_id:s}/starred", page=page)

    def __get_count(self, param_name: str) -> int:
        attr_template = "__{:s}"
        method_template = "_get_{:s}"

        try:
            count = getattr(self, attr_template.format(param_name))
            if count:
                return count
        except AttributeError:
            pass

        total_count = 0
        page = 1

        with stopwatch(self._logger, f"get {param_name:s}"):
            while True:
                method_name = method_template.format(param_name)
                with stopwatch(self._logger, f"{method_name:s} page {page:d}"):
                    try:
                        subtotal_count = len(getattr(self, method_name)(page))
                    except OSError as e:
                        self._logger.debug(msgfy.to_debug_message(e))
                        # total_count = None
                        break

                if not subtotal_count:
                    break

                total_count += subtotal_count
                page += 1

            setattr(self, attr_template.format(param_name), total_count)

        return total_count

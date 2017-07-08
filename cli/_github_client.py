# encoding: utf-8

"""
.. codeauthor:: Tsuyoshi Hombashi <tsuyoshi.hombashi@gmail.com>
"""

from __future__ import absolute_import
from __future__ import unicode_literals

import re

from github.GithubException import RateLimitExceededException
import typepy

from ._const import MAX_PER_PAGE
from ._emoji import EmojiParser
from ._stopwatch import stopwatch


class GitHubClient(object):

    @property
    def emojis(self):
        if self.__emojis:
            return self.__emojis

        self.__emojis = self.get("/emojis")

        return self.__emojis

    @property
    def emoji_parser(self):
        if self.__emoji_parser:
            return self.__emoji_parser

        self.__emoji_parser = EmojiParser(self.emojis)

        return self.__emoji_parser

    @property
    def repo(self):
        if self.__repos:
            return self.__repos

        self.__repos = self.get(
            "/repos/{:s}".format(self.__github_id),
            headers={"accept": "application/vnd.github.drax-preview+json"},
        )
        # get license: https://developer.github.com/v3/licenses/

        return self.__repos

    @property
    def branches_count(self):
        return self.__get_count("branches")

    @property
    def contributors_count(self):
        return self.__get_count("contributors")

    @property
    def pulls_count(self):
        return self.__get_count("pulls")

    @property
    def tags_count(self):
        return self.__get_count("tags")

    @property
    def starred_count(self):
        return self.__get_count("starred")

    def __init__(self, logger, github_id, access_token=None):
        self._logger = logger
        self.__github_id = github_id
        self.__access_token = access_token

        self.__emojis = None
        self.__emoji_parser = None
        self.__repos = None

    def get(self, operation, headers=None, params=None):
        import requests

        if not headers:
            headers = {}

        if not params:
            params = {}

        if typepy.is_not_null_string(self.__access_token):
            headers["authorization"] = "token {:s}".format(self.__access_token)

        api_url = "https://api.github.com{:s}".format(operation)
        response = requests.get(api_url, headers=headers, params=params)
        self._logger.debug("API called: {}".format(response.url))

        try:
            response_json = response.json()
        except ValueError:
            return {}

        try:
            message = response_json.get("message")
        except AttributeError:
            return response_json

        if message:
            if re.search(
                    ".* list is too large to list .* via the API", message):
                raise IOError(message)

            if all([
                response.status_code == 403,
                re.search("^API rate limit exceeded for ", message),
            ]):
                raise RateLimitExceededException(message)

        return response_json

    def get_page(self, operation, page):
        return self.get(
            operation,
            params={
                "per_page": str(MAX_PER_PAGE),
                "page": page,
            }
        )

    def _get_branches(self, page):
        # https://developer.github.com/v3/repos/branches/
        return self.get_page(
            "/repos/{:s}/branches".format(self.__github_id), page=page)

    def _get_contributors(self, page):
        return self.get_page(
            "/repos/{:s}/contributors".format(self.__github_id), page=page)

    def _get_pulls(self, page):
        # https://developer.github.com/v3/pulls/
        return self.get_page(
            "/repos/{:s}/pulls".format(self.__github_id), page=page)

    def _get_tags(self, page):
        # https://developer.github.com/v3/git/tags/
        return self.get_page(
            "/repos/{:s}/tags".format(self.__github_id), page=page)

    def _get_releases(self, page):
        # https://developer.github.com/v3/repos/releases/
        return self.get_page(
            "/repos/{:s}/releases".format(self.__github_id), page=page)

    def _get_starred(self, page):
        return self.get_page(
            "/users/{:s}/starred".format(self.__github_id), page=page)

    def __get_count(self, param_name):
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

        with stopwatch(self._logger, "get {:s}".format(param_name)):
            while True:
                method_name = method_template.format(param_name)
                with stopwatch(self._logger, "{:s} page {:d}".format(method_name, page)):
                    try:
                        subtotal_count = len(
                            getattr(self, method_name)(page))
                    except IOError as e:
                        self._logger.debug(e)
                        total_count = None
                        break

                if not subtotal_count:
                    break

                total_count += subtotal_count
                page += 1

            setattr(self, attr_template.format(param_name), total_count)

        return total_count

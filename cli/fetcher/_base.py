# encoding: utf-8

"""
.. codeauthor:: Tsuyoshi Hombashi <tsuyoshi.hombashi@gmail.com>
"""

from __future__ import absolute_import
from __future__ import unicode_literals

import abc
import datetime
import multiprocessing

import six

from .._const import (
    CARD_DATA_VERSION,
    DATETIME_FORMAT,
    CommonCardKey,
    Result,
)
from .._error import ApiStatusError


@six.add_metaclass(abc.ABCMeta)
class AbstractCardDataFetcher(object):

    @property
    def access_token(self):
        return self.__access_token

    @abc.abstractproperty
    def type(self):   # pragma: no cover
        pass

    @property
    def id(self):
        return self.__id

    def __init__(self, pygh_client, ghc_client, id, logger):
        self.__id = id
        self._logger = logger

        self._pygh_client = pygh_client
        self._ghc_client = ghc_client

        if self._pygh_client.get_api_status() == "major":
            raise ApiStatusError("GitHub API status is in red status")

        self._pool = multiprocessing.Pool(processes=4)

    def fetch(self):
        return {
            CommonCardKey.ID: self.id,
            CommonCardKey.FETCHD_AT: datetime.datetime.now().strftime(
                DATETIME_FORMAT),
            CommonCardKey.VERSION: CARD_DATA_VERSION,
            CommonCardKey.RESULT: Result.SUCCESS,
        }

    def _get_emoji_mapping(self, text):
        try:
            emoji_list = self._ghc_client.emoji_parser.parse(text)
        except ValueError:
            emoji_list = []

        emoji_mapping = {}
        for emoji in emoji_list:
            emoji_mapping[emoji] = self._ghc_client.emoji_parser.get_url(emoji)

        return emoji_mapping

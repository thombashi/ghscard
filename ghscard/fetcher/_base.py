"""
.. codeauthor:: Tsuyoshi Hombashi <tsuyoshi.hombashi@gmail.com>
"""

import abc
import datetime
import multiprocessing
from typing import Dict, List, Union

import github

from .._const import CARD_DATA_VERSION, DATETIME_FORMAT, CommonCardKey, Result
from .._github_client import GitHubClient
from ._common import ChartData


EmojiMap = Dict[str, str]
Topics = List[str]
CardData = Dict[str, Union[int, str, None, ChartData, EmojiMap, Topics]]


class AbstractCardDataFetcher(object, metaclass=abc.ABCMeta):
    @abc.abstractproperty
    def type(self) -> str:  # pragma: no cover
        pass

    @property
    def id(self) -> str:
        return self.__id

    def __init__(
        self, pygh_client: github.Github, ghc_client: GitHubClient, id: str, logger
    ) -> None:
        self.__id = id
        self._logger = logger

        self._pygh_client = pygh_client
        self._ghc_client = ghc_client

        self._pool = multiprocessing.Pool(processes=4)

    def fetch(self) -> CardData:
        return {
            CommonCardKey.ID: self.id,
            CommonCardKey.FETCHD_AT: datetime.datetime.now().strftime(DATETIME_FORMAT),
            CommonCardKey.VERSION: CARD_DATA_VERSION,
            CommonCardKey.RESULT: Result.SUCCESS,
        }

    def terminate(self) -> None:
        self._pool.terminate()

    def _get_emoji_mapping(self, text) -> EmojiMap:
        try:
            emoji_list = self._ghc_client.emoji_parser.parse(text)
        except ValueError:
            emoji_list = []

        emoji_mapping = {}
        for emoji in emoji_list:
            emoji_mapping[emoji] = self._ghc_client.emoji_parser.get_url(emoji)

        return emoji_mapping

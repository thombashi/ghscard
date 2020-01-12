"""
.. codeauthor:: Tsuyoshi Hombashi <tsuyoshi.hombashi@gmail.com>
"""

import collections
from multiprocessing.pool import AsyncResult  # noqa
from typing import Any, Counter, Dict, List, Optional, Union  # noqa

from .._const import DATETIME_FORMAT, CardType, CommonCardKey
from ._base import AbstractCardDataFetcher, CardData
from ._common import dump_organization, to_chart_data


def ghc_starred_count_helper(ghc_client) -> Dict[str, int]:
    return {"stars": ghc_client.starred_count}


def ghc_organizations_helper(user) -> Dict[str, List[Dict[str, str]]]:
    return {"organizations": [dump_organization(organization) for organization in user.get_orgs()]}


def ghc_languages_helper(user) -> Dict[str, Dict[str, list]]:
    language_mapping = collections.Counter()  # type: Counter

    for repo in user.get_repos():
        language_mapping[repo.language] += 1

    try:
        del language_mapping[None]
    except KeyError:
        pass

    return {"languages": to_chart_data(language_mapping, 5)}


class UserCardDataFetcher(AbstractCardDataFetcher):
    @property
    def type(self) -> str:
        return CardType.USER

    def fetch(self) -> CardData:
        self._logger.debug("fetching user data: id={}".format(self.id))

        card_data = super(UserCardDataFetcher, self).fetch()
        user = self._pygh_client.get_user(self.id)

        thread_list = [
            self._pool.apply_async(ghc_starred_count_helper, args=[self._ghc_client]),
            self._pool.apply_async(ghc_organizations_helper, args=[user]),
            self._pool.apply_async(ghc_languages_helper, args=[user]),
        ]  # type: List[AsyncResult]

        # this will raise UnknownObjectException when failed to get data
        card_data["profile_name"] = user.name

        card_data[CommonCardKey.AVATAR_URL] = user.avatar_url
        card_data[CommonCardKey.CARD_TYPE] = CardType.USER
        card_data[CommonCardKey.CREATED_AT] = user.created_at.strftime(DATETIME_FORMAT)
        card_data[CommonCardKey.DESCRIPTION] = user.bio
        card_data[CommonCardKey.EMOJIS] = self._get_emoji_mapping(user.bio)
        card_data[CommonCardKey.HTML_URL] = user.html_url
        card_data[CommonCardKey.NAME] = self.id
        card_data[CommonCardKey.UPDATED_AT] = user.updated_at.strftime(DATETIME_FORMAT)
        card_data["blog"] = user.blog
        card_data["company"] = user.company
        card_data["email"] = user.email
        card_data["followers"] = user.followers
        card_data["following"] = user.following
        card_data["location"] = user.location
        card_data["public_gists"] = user.public_gists
        card_data["public_repos"] = user.public_repos

        for i, thread in enumerate(thread_list):
            thead_id = "thread {:d}/{:d}".format(i + 1, len(thread_list))
            self._logger.debug("wait for {}".format(thead_id))
            card_data.update(thread.get())
            self._logger.debug("complete {}".format(thead_id))

        return card_data

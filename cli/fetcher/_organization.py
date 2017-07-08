# encoding: utf-8

"""
.. codeauthor:: Tsuyoshi Hombashi <tsuyoshi.hombashi@gmail.com>
"""

from __future__ import absolute_import
from __future__ import unicode_literals

from .._const import (
    DATETIME_FORMAT,
    CardType,
    CommonCardKey,
)
from ._base import AbstractCardDataFetcher


class OrganizationCardDataFetcher(AbstractCardDataFetcher):

    @property
    def type(self):
        return CardType.ORGANIZATION

    def fetch(self):
        self._logger.debug("fetching org data: id={}".format(self.id))

        card_data = super(OrganizationCardDataFetcher, self).fetch()
        org = self._pygh_client.get_organization(self.id)
        description = self.__get_description()

        card_data[CommonCardKey.AVATAR_URL] = org.avatar_url
        card_data[CommonCardKey.CARD_TYPE] = CardType.ORGANIZATION
        card_data[CommonCardKey.CREATED_AT] = org.created_at.strftime(
            DATETIME_FORMAT)
        card_data[CommonCardKey.DESCRIPTION] = description
        card_data[CommonCardKey.EMOJIS] = self._get_emoji_mapping(description)
        card_data[CommonCardKey.HTML_URL] = org.html_url
        card_data[CommonCardKey.NAME] = self.id
        card_data[CommonCardKey.UPDATED_AT] = org.updated_at.strftime(
            DATETIME_FORMAT)
        card_data["blog"] = org.blog
        card_data["company"] = org.company
        card_data["email"] = org.email
        card_data["location"] = org.location
        card_data["public_gists"] = org.public_gists
        card_data["public_repos"] = org.public_repos
        card_data["public_members_count"] = sum(
            [1 for _member in org.get_public_members()])

        return card_data

    def __get_description(self):
        return self._ghc_client.get(
            "/orgs/{:s}".format(self.id)).get("description")

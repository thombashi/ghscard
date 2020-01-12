"""
.. codeauthor:: Tsuyoshi Hombashi <tsuyoshi.hombashi@gmail.com>
"""

import github
import typepy
from github.GithubException import UnknownObjectException

from ._const import CardType


class GithubIdDetector:
    @property
    def id(self):
        return self.__id

    def __init__(self, id: str, logger, pygh_client: github.Github) -> None:
        try:
            self.__id = id.strip().strip("/")
        except (TypeError, AttributeError) as e:
            raise ValueError(e)

        id_item_list = [id_item.strip() for id_item in self.__id.split("/")]
        self.__id = "/".join(id_item_list)

        if typepy.is_null_string(self.__id):
            raise ValueError("id must be a not empty string")

        logger.debug("id: {}".format(id))

        self.__pygh_client = pygh_client
        self.__card_type = self.__get_card_type()

    def is_user(self) -> bool:
        return self.get_id_type() == CardType.USER

    def is_organization(self) -> bool:
        return self.get_id_type() == CardType.ORGANIZATION

    def is_repository(self) -> bool:
        return self.get_id_type() == CardType.REPOSITORY

    def get_id_type(self) -> str:
        return self.__card_type

    def __get_card_type(self) -> str:
        id_item_list = self.id.split("/")

        if len(id_item_list) > 2:
            raise ValueError(
                "invalid format for a GitHub id: "
                "expected='<user name>' or '<user name>/<repo name>', "
                "actual='{}'".format(id)
            )

        if len(id_item_list) == 2:
            user_name, repo_name = id_item_list
            self.__validate_user_name(user_name)
            self.__validate_repo_name(repo_name)

            return CardType.REPOSITORY

        user_name = id_item_list[0]
        self.__validate_user_name(user_name)

        try:
            self.__pygh_client.get_organization(self.id)
            return CardType.ORGANIZATION
        except UnknownObjectException:
            pass

        return CardType.USER

    @staticmethod
    def __validate_user_name(user_name: str) -> None:
        if typepy.is_null_string(user_name):
            raise ValueError("user/organization name must be a not empty string")

    @staticmethod
    def __validate_repo_name(repo_name: str) -> None:
        if typepy.is_null_string(repo_name):
            raise ValueError("repository name must be a not empty string")

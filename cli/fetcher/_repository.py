# encoding: utf-8

"""
.. codeauthor:: Tsuyoshi Hombashi <tsuyoshi.hombashi@gmail.com>
"""

from __future__ import absolute_import
from __future__ import unicode_literals

import random
import time

import typepy

from .._const import (
    DATETIME_FORMAT,
    RETRY_COUNT,
    CardType,
    CommonCardKey,
    Result,
)
from ._base import AbstractCardDataFetcher
from ._common import (
    dump_organization,
    to_chart_data,
)


def ghc_client_thread_helper(ghc_client):
    return {
        "branches_count": ghc_client.branches_count,
        "pulls_count": ghc_client.pulls_count,
        "subscribers_count": ghc_client.repo.get("subscribers_count"),
        "license": ghc_client.repo.get("license"),
    }


def get_contributors_count_helper(ghc_client):
    return {"contributors_count": ghc_client.contributors_count}


def get_tags_count_helper(ghc_client):
    return {"tags_count": ghc_client.tags_count}


def get_open_issues_helper(repo):
    from collections import Counter

    issue_counter = None

    for issue in repo.get_issues():
        label_name_list = [label.name for label in issue.labels]
        if not label_name_list:
            label_name_list = ["not set"]

        if issue_counter is None:
            issue_counter = Counter(label_name_list)
        else:
            issue_counter += Counter(label_name_list)

    return {
        "open_issues": to_chart_data(issue_counter, aggregate_threshold=7),
    }


class RepositoryCardDataFetcher(AbstractCardDataFetcher):

    @property
    def type(self):
        return CardType.REPOSITORY

    def fetch(self):
        self._logger.debug("fetching repository data: id={}".format(self.id))

        thread_list = [
            self._pool.apply_async(
                ghc_client_thread_helper, args=[self._ghc_client]),
            self._pool.apply_async(
                get_contributors_count_helper, args=[self._ghc_client]),
            self._pool.apply_async(
                get_tags_count_helper, args=(self._ghc_client,)),
        ]

        card_data = super(RepositoryCardDataFetcher, self).fetch()
        repo = self._pygh_client.get_repo(self.id)

        thread_list.append(self._pool.apply_async(
            get_open_issues_helper, args=[repo]))

        card_data[CommonCardKey.AVATAR_URL] = repo.owner.avatar_url
        card_data[CommonCardKey.CARD_TYPE] = CardType.REPOSITORY
        card_data[CommonCardKey.CREATED_AT] = repo.created_at.strftime(
            DATETIME_FORMAT)
        card_data[CommonCardKey.DESCRIPTION] = repo.description
        card_data[CommonCardKey.EMOJIS] = self._get_emoji_mapping(
            repo.description)
        card_data[CommonCardKey.HTML_URL] = repo.html_url
        card_data[CommonCardKey.NAME] = repo.name
        card_data[CommonCardKey.UPDATED_AT] = repo.updated_at.strftime(
            DATETIME_FORMAT)

        languages = repo.get_languages()

        card_data["forks_count"] = repo.forks_count
        card_data["has_issues"] = repo.has_issues
        card_data["has_wiki"] = repo.has_wiki
        card_data["language"] = repo.language
        card_data["languages"] = to_chart_data(
            languages, aggregate_threshold=4)
        card_data["languages_count"] = len(languages)
        card_data["owner_name"] = repo.owner.name
        card_data["owner_html_url"] = repo.owner.html_url
        card_data["open_issues_count"] = repo.open_issues_count
        card_data["organization"] = dump_organization(repo.organization)
        card_data["repo_homepage"] = (
            None if typepy.is_null_string(repo.homepage) else repo.homepage)
        card_data["stargazers_count"] = repo.stargazers_count
        card_data["topics"] = self.__get_topics()

        for i in range(RETRY_COUNT):
            try:
                card_data["participation"] = repo.get_stats_participation().all
            except AttributeError:
                self._logger.warn(
                    "failed to get '{}' participation stats. retrying in 5 seconds".format(self.id))
                card_data["participation"] = []
                time.sleep(random.random())
                continue

            break
        else:
            self._logger.error("failed to get participation stats")
            card_data[CommonCardKey.RESULT] = Result.ERROR

        card_data["commits_last_year"] = sum(card_data["participation"])

        try:
            card_data["latest_tag"] = repo.get_tags()[0].name
        except IndexError:
            self._logger.debug("tag not found in the repository")

        for i, thread in enumerate(thread_list):
            thead_id = "thread {:d}/{:d}".format(i + 1, len(thread_list))
            self._logger.debug("wait for {}".format(thead_id))
            card_data.update(thread.get())
            self._logger.debug("complete {}".format(thead_id))

        return card_data

    # def __get_releases(self):
    #    return self._ghc_client.get("/repos/{:s}/releases".format(self.id))

    def __get_topics(self):
        values = self._ghc_client.get(
            "/repos/{:s}".format(self.id),
            headers={"accept": "application/vnd.github.mercy-preview+json"},
        )
        # get topics: https://developer.github.com/v3/repos/

        return values.get("topics")

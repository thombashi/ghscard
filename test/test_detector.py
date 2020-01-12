"""
.. codeauthor:: Tsuyoshi Hombashi <tsuyoshi.hombashi@gmail.com>
"""

import github
import logbook
import pytest
from github.GithubException import UnknownObjectException

from ghscard._const import CardType
from ghscard._detector import GithubIdDetector


def monkey_get_organization(a, b):
    raise UnknownObjectException("dummy", "dummy")


logger = logbook.Logger("test")


class Test_GithubIdDetector_constructor:
    @pytest.mark.parametrize(
        ["value", "expected"],
        [
            [None, ValueError],
            ["", ValueError],
            ["/", ValueError],
            ["//", ValueError],
            ["a/b/c", ValueError],
        ],
    )
    def test_exception(self, value, expected):
        with pytest.raises(expected):
            GithubIdDetector(value, logger, pygh_client=github.Github(None))


class Test_GithubIdDetector_id:
    @pytest.mark.parametrize(
        ["value", "expected"],
        [
            ["thombashi", "thombashi"],
            ["thombashi/", "thombashi"],
            ["/thombashi", "thombashi"],
            ["/thombashi/", "thombashi"],
            ["thombashi/ghscard", "thombashi/ghscard"],
            [" thombashi / ghscard ", "thombashi/ghscard"],
        ],
    )
    def test_normal(self, monkeypatch, value, expected):
        monkeypatch.setattr(github.Github, "get_organization", monkey_get_organization)

        detector = GithubIdDetector(value, logger, pygh_client=github.Github(None))

        assert detector.id == expected


class Test_GithubIdDetector_is_user:
    @pytest.mark.parametrize(
        ["value", "expected"],
        [["thombashi", True], ["thombashi/", True], ["/thombashi", True], ["/thombashi/", True]],
    )
    def test_normal(self, monkeypatch, value, expected):
        monkeypatch.setattr(github.Github, "get_organization", monkey_get_organization)

        detector = GithubIdDetector(value, logger, pygh_client=github.Github(None))

        assert detector.is_user() == expected


class Test_GithubIdDetector_is_organization:
    @pytest.mark.parametrize(
        ["value", "expected"],
        [["thombashi", True], ["thombashi/", True], ["/thombashi", True], ["/thombashi/", True]],
    )
    def test_normal(self, monkeypatch, value, expected):
        monkeypatch.setattr(github.Github, "get_organization", lambda a, b: a)

        detector = GithubIdDetector(value, logger, pygh_client=github.Github(None))

        assert detector.is_organization() == expected


class Test_GithubIdDetector_is_repository:
    @pytest.mark.parametrize(
        ["value", "expected"], [["thombashi/ghscard", True], [" thombashi / ghscard ", True]]
    )
    def test_normal(self, value, expected):
        detector = GithubIdDetector(value, logger, pygh_client=github.Github(None))

        assert detector.is_repository() == expected


class Test_GithubIdDetector_get_id_type:
    @pytest.mark.parametrize(
        ["value", "expected"],
        [["thombashi", CardType.USER], ["thombashi/ghscard", CardType.REPOSITORY]],
    )
    def test_normal(self, monkeypatch, value, expected):
        monkeypatch.setattr(github.Github, "get_organization", monkey_get_organization)

        detector = GithubIdDetector(value, logger, pygh_client=github.Github(None))

        assert detector.get_id_type() == expected

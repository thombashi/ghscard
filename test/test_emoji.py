# encoding: utf-8

"""
.. codeauthor:: Tsuyoshi Hombashi <tsuyoshi.hombashi@gmail.com>
"""

from __future__ import print_function
from __future__ import unicode_literals

import json

import pytest

from cli._emoji import EmojiParser


emojis = {
    "+1": "https://assets-cdn.github.com/images/icons/emoji/unicode/1f44d.png?v7",
    "-1": "https://assets-cdn.github.com/images/icons/emoji/unicode/1f44e.png?v7",
    "100": "https://assets-cdn.github.com/images/icons/emoji/unicode/1f4af.png?v7",
    "1234": "https://assets-cdn.github.com/images/icons/emoji/unicode/1f522.png?v7",
    "1st_place_medal": "https://assets-cdn.github.com/images/icons/emoji/unicode/1f947.png?v7",
    "2nd_place_medal": "https://assets-cdn.github.com/images/icons/emoji/unicode/1f948.png?v7",
    "3rd_place_medal": "https://assets-cdn.github.com/images/icons/emoji/unicode/1f949.png?v7",
    "8ball": "https://assets-cdn.github.com/images/icons/emoji/unicode/1f3b1.png?v7",
    "a": "https://assets-cdn.github.com/images/icons/emoji/unicode/1f170.png?v7",
    "ab": "https://assets-cdn.github.com/images/icons/emoji/unicode/1f18e.png?v7",
    "abc": "https://assets-cdn.github.com/images/icons/emoji/unicode/1f524.png?v7",
    "abcd": "https://assets-cdn.github.com/images/icons/emoji/unicode/1f521.png?v7",
    "accept": "https://assets-cdn.github.com/images/icons/emoji/unicode/1f251.png?v7",
    "aerial_tramway": "https://assets-cdn.github.com/images/icons/emoji/unicode/1f6a1.png?v7",
    "afghanistan": "https://assets-cdn.github.com/images/icons/emoji/unicode/1f1e6-1f1eb.png?v7",
    "airplane": "https://assets-cdn.github.com/images/icons/emoji/unicode/2708.png?v7",
}


@pytest.fixture
def emoji_parser():
    return EmojiParser(emojis)


class Test_Emoji_constructor(object):

    @pytest.mark.parametrize(["value", "expected"], [
        [None, ValueError],
    ])
    def test_exception(self, emoji_parser, value, expected):
        with pytest.raises(expected):
            EmojiParser(value)


class Test_Emoji_parse(object):

    @pytest.mark.parametrize(["value", "expected"], [
        [":+1:", ["+1"]],
        ["a:-1:b", ["-1"]],
        ["a:-1:b:accept:c", ["-1", "accept"]],

        ["", []],
        [":", []],
        [":+1", []],
    ])
    def test_normal(self, emoji_parser, value, expected):
        assert emoji_parser.parse(value) == expected

    @pytest.mark.parametrize(["value", "expected"], [
        [None, ValueError],
        [1, ValueError],
    ])
    def test_exception(self, emoji_parser, value, expected):
        with pytest.raises(expected):
            emoji_parser.parse(value)


class Test_Emoji_get_url(object):

    @pytest.mark.parametrize(["value", "expected"], [
        [
            "1st_place_medal",
            "https://assets-cdn.github.com/images/icons/emoji/unicode/1f947.png?v7"
        ],
        [
            ":1st_place_medal:",
            "https://assets-cdn.github.com/images/icons/emoji/unicode/1f947.png?v7"
        ],
    ])
    def test_normal(self, emoji_parser, value, expected):
        assert emoji_parser.get_url(value) == expected

    @pytest.mark.parametrize(["value", "expected"], [
        [None, ValueError],
        [1, ValueError],
    ])
    def test_exception(self, emoji_parser, value, expected):
        with pytest.raises(expected):
            emoji_parser.get_url(value)

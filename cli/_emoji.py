# encoding: utf-8

"""
.. codeauthor:: Tsuyoshi Hombashi <tsuyoshi.hombashi@gmail.com>
"""

from __future__ import absolute_import
from __future__ import unicode_literals

import re


class EmojiParser(object):

    __re_emoji = re.compile(":[\+a-zA-Z0-9_-]+:")

    def __init__(self, emoji_kv_mapping):
        if not emoji_kv_mapping:
            raise ValueError("required emoji key-value mapping")

        self.__emoji_mapping = emoji_kv_mapping

    def get_url(self, emoji):
        try:
            emoji = emoji.strip().strip(":")
        except (TypeError, AttributeError) as e:
            raise ValueError(e)

        return self.__emoji_mapping.get(emoji)

    def parse(self, text):
        emoji_list = []

        try:
            for emoji_candidate in self.__re_emoji.findall(text):
                emoji_candidate = emoji_candidate.strip(":")

                if emoji_candidate in self.__emoji_mapping:
                    emoji_list.append(emoji_candidate)
        except (TypeError, AttributeError) as e:
            raise ValueError(e)

        return emoji_list

"""
.. codeauthor:: Tsuyoshi Hombashi <tsuyoshi.hombashi@gmail.com>
"""

import re
from typing import Dict, cast


class EmojiParser:

    __re_emoji = re.compile(r":[\+a-zA-Z0-9_-]+:")

    def __init__(self, emoji_kv_mapping: Dict[str, str]) -> None:
        if not emoji_kv_mapping:
            raise ValueError("required emoji key-value mapping")

        self.__emoji_mapping = emoji_kv_mapping

    def get_url(self, emoji: str) -> str:
        try:
            emoji = emoji.strip().strip(":")
        except (TypeError, AttributeError) as e:
            raise ValueError(e)

        return cast(str, self.__emoji_mapping.get(emoji))

    def parse(self, text: str) -> list:
        emoji_list = []

        try:
            for emoji_candidate in self.__re_emoji.findall(text):
                emoji_candidate = emoji_candidate.strip(":")

                if emoji_candidate in self.__emoji_mapping:
                    emoji_list.append(emoji_candidate)
        except (TypeError, AttributeError) as e:
            raise ValueError(e)

        return emoji_list

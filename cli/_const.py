# encoding: utf-8

"""
.. codeauthor:: Tsuyoshi Hombashi <tsuyoshi.hombashi@gmail.com>
"""

from __future__ import absolute_import
from __future__ import unicode_literals


PROGRAM_NAME = "ghscard"
PROGRAM_VERSION = "0.0.1"

CARD_DATA_VERSION = 2
DATETIME_FORMAT = "%Y-%m-%dT%H:%M:%S%z"
MAX_PER_PAGE = 100
RETRY_COUNT = 3


class AppConfigKey(object):
    GITHUB_API_ACCESS_TOKEN = "github_api_personal_access_token"
    OUTPUT_DIR = "output_dir"


class CardType(object):
    USER = "User"
    ORGANIZATION = "Organization"
    REPOSITORY = "Repository"


class CommonCardKey(object):
    AVATAR_URL = "avatar_url"
    CARD_TYPE = "card_type"
    CREATED_AT = "created_at"
    DESCRIPTION = "description"
    EMOJIS = "emojis"
    FETCHD_AT = "fetched_at"
    HTML_URL = "html_url"
    ID = "id"
    NAME = "name"
    RESULT = "result"
    UPDATED_AT = "updated_at"
    VERSION = "data_version"


class Result(object):
    SUCCESS = "success"
    ERROR = "error"

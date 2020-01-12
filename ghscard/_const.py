"""
.. codeauthor:: Tsuyoshi Hombashi <tsuyoshi.hombashi@gmail.com>
"""

PROGRAM_NAME = "ghscard"

CARD_DATA_VERSION = 2
DATETIME_FORMAT = "%Y-%m-%dT%H:%M:%S%z"
MAX_PER_PAGE = 100
RETRY_COUNT = 3


class AppConfigKey:
    GITHUB_API_ACCESS_TOKEN = "github_api_personal_access_token"
    OUTPUT_DIR = "output_dir"
    INDENT = "indent"


class CardType:
    USER = "User"
    ORGANIZATION = "Organization"
    REPOSITORY = "Repository"


class CommonCardKey:
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


class Result:
    SUCCESS = "success"
    ERROR = "error"

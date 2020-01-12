"""
.. codeauthor:: Tsuyoshi Hombashi <tsuyoshi.hombashi@gmail.com>
"""


class ApiStatusError(Exception):
    """
    Raised when GitHub API is in red status.
    """

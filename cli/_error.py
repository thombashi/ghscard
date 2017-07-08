# encoding: utf-8

"""
.. codeauthor:: Tsuyoshi Hombashi <tsuyoshi.hombashi@gmail.com>
"""

from __future__ import absolute_import
from __future__ import unicode_literals


class ApiStatusError(Exception):
    """
    Raised when GitHub API is in red status.
    """

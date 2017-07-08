# encoding: utf-8

"""
.. codeauthor:: Tsuyoshi Hombashi <tsuyoshi.hombashi@gmail.com>
"""

from __future__ import absolute_import
from __future__ import unicode_literals

import logbook
import typepy


def get_logger(log_level, extra_name):
    logger_name_list = []
    if typepy.is_not_null_string(extra_name):
        logger_name_list.append(extra_name)

    logger = logbook.Logger(" ".join(logger_name_list))
    logger.level = log_level
    if log_level == logbook.NOTSET:
        logger.disable()

    return logger

"""
.. codeauthor:: Tsuyoshi Hombashi <tsuyoshi.hombashi@gmail.com>
"""

import logbook
import typepy


def get_logger(log_level: int, extra_name: str):
    logger_name_list = []
    if typepy.is_not_null_string(extra_name):
        logger_name_list.append(extra_name)

    logger = logbook.Logger(" ".join(logger_name_list))
    logger.level = log_level
    if log_level == logbook.NOTSET:
        logger.disable()

    return logger

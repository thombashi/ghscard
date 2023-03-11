"""
.. codeauthor:: Tsuyoshi Hombashi <tsuyoshi.hombashi@gmail.com>
"""

import contextlib
import datetime

from ._const import DATETIME_FORMAT


@contextlib.contextmanager
def stopwatch(logger, name):
    start_time = datetime.datetime.now()

    logger.debug(f"start {name:s}: {start_time.strftime(DATETIME_FORMAT):s}")

    try:
        yield
    finally:
        logger.debug(f"complete {name:s}: time={datetime.datetime.now() - start_time} [sec]")

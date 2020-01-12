"""
.. codeauthor:: Tsuyoshi Hombashi <tsuyoshi.hombashi@gmail.com>
"""

import contextlib
import datetime

from ._const import DATETIME_FORMAT


@contextlib.contextmanager
def stopwatch(logger, name):
    start_time = datetime.datetime.now()

    logger.debug("start {:s}: {:s}".format(name, start_time.strftime(DATETIME_FORMAT)))

    try:
        yield
    finally:
        logger.debug(
            "complete {:s}: time={} [sec]".format(name, datetime.datetime.now() - start_time)
        )

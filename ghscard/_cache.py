# encoding: utf-8

from __future__ import absolute_import, unicode_literals

from datetime import datetime
from functools import total_ordering

from datetimerange import DateTimeRange


@total_ordering
class CacheTime(object):
    @property
    def second(self):
        return self.__second

    @property
    def hour(self):
        return self.second / (60 ** 2)

    def __init__(self, second):
        self.__second = second

    def __eq__(self, other):
        return self.second == other.second

    def __lt__(self, other):
        return self.second < other.second


class CacheManager(object):
    def __init__(self, logger, cache_lifetime):
        self.__logger = logger
        self.__cache_lifetime = cache_lifetime

    def is_cache_available(self, cache_file_path):
        if not cache_file_path.isfile():
            self.__logger.debug("cache not found: {}".format(cache_file_path))
            return False

        try:
            dtr = DateTimeRange(datetime.fromtimestamp(cache_file_path.mtime), datetime.now())
        except OSError:
            return False

        if not dtr.is_valid_timerange():
            return False

        cache_elapsed = CacheTime(dtr.get_timedelta_second())
        cache_msg = "path={path}, lifetime={lifetime:.1f}h, elapsed={elapsed:.1f}h".format(
            path=cache_file_path, lifetime=self.__cache_lifetime.hour, elapsed=cache_elapsed.hour
        )

        if cache_elapsed < self.__cache_lifetime:
            self.__logger.debug("cache available: {}".format(cache_msg))
            return True

        self.__logger.debug("cache expired: {}".format(cache_msg))

        return False

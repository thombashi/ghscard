# encoding: utf-8

"""
.. codeauthor:: Tsuyoshi Hombashi <tsuyoshi.hombashi@gmail.com>
"""

from __future__ import absolute_import
from __future__ import unicode_literals

from .._const import CommonCardKey


def dump_organization(organization):
    if not organization:
        return {}

    if organization.name:
        organization_name = organization.name
    else:
        organization_name = organization.html_url.split("/")[-1]

    return {
        CommonCardKey.AVATAR_URL: organization.avatar_url,
        CommonCardKey.HTML_URL: organization.html_url,
        CommonCardKey.NAME: organization_name,
        "public_repos": organization.public_repos,
    }


def to_chart_data(label_count_mapping, aggregate_threshold):
    if not label_count_mapping:
        return {
            "labels": [],
            "data": [],
        }

    label_name_list = []
    label_count_list = []
    others_count = None

    for i, kv in enumerate(sorted(
            label_count_mapping.items(), key=lambda x: x[1], reverse=True)):
        key, value = kv

        if (i + 1) > aggregate_threshold:
            if not others_count:
                others_count = value
            else:
                others_count += value

            continue

        label_name_list.append(key)
        label_count_list.append(value)

    if others_count:
        label_name_list.append("others")
        label_count_list.append(others_count)

    return {
        "labels": label_name_list,
        "data": label_count_list,
    }

#!/usr/bin/env python
# encoding: utf-8

"""
.. codeauthor:: Tsuyoshi Hombashi <tsuyoshi.hombashi@gmail.com>
"""

from __future__ import unicode_literals

import sys

from readmemaker import ReadmeMaker


PROJECT_NAME = "ghscard"
OUTPUT_DIR = ".."


def write_quickstart(maker):
    maker.set_indent_level(0)
    maker.write_introduction_file("quickstart.txt")

    maker.inc_indent_level()
    maker.write_chapter("For more information")
    maker.write_lines(
        [
            "More examples are available at ",
            "https://{:s}.rtfd.io/en/latest/pages/usage/index.html".format(PROJECT_NAME),
        ]
    )


def main():
    maker = ReadmeMaker(
        PROJECT_NAME,
        OUTPUT_DIR,
        is_make_toc=True,
        project_url="https://github.com/thombashi/{}".format(PROJECT_NAME),
    )

    maker.write_chapter("Summary")
    maker.write_introduction_file("summary.txt")
    maker.write_introduction_file("badges.txt")

    maker.write_chapter("Demo")
    maker.write_introduction_file("demo.txt")

    write_quickstart(maker)

    maker.write_file(maker.doc_page_root_dir_path.joinpath("installation.rst"))
    maker.write_file(maker.doc_page_root_dir_path.joinpath("environment.rst"))

    maker.write_chapter("Documentation")
    maker.write_lines(["https://{:s}.rtfd.io/".format(PROJECT_NAME)])

    return 0


if __name__ == "__main__":
    sys.exit(main())

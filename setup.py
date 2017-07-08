# encoding: utf-8

"""
.. codeauthor:: Tsuyoshi Hombashi <tsuyoshi.hombashi@gmail.com>

winrandom
winrandom-ctypes
"""

from __future__ import unicode_literals

import io
import os.path
import sys

import setuptools


REQUIREMENT_DIR = "requirements"
ENCODING = "utf8"

with io.open("README.rst", encoding=ENCODING) as f:
    long_description = f.read()

with io.open(
        os.path.join("docs", "pages", "introduction", "summary.txt"),
        encoding=ENCODING) as f:
    summary = f.read()

with open(os.path.join(REQUIREMENT_DIR, "requirements.txt")) as f:
    install_requires = [line.strip() for line in f if line.strip()]

with open(os.path.join(REQUIREMENT_DIR, "test_requirements.txt")) as f:
    tests_require = [line.strip() for line in f if line.strip()]

needs_pytest = set(["pytest", "test", "ptr"]).intersection(sys.argv)
pytest_runner = ["pytest-runner"] if needs_pytest else []

PROJECT_NAME = "ghscard"

setuptools.setup(
    name=PROJECT_NAME,
    version="0.0.3",
    url="https://github.com/thombashi/{:s}".format(PROJECT_NAME),

    author="Tsuyoshi Hombashi",
    author_email="tsuyoshi.hombashi@gmail.com",
    description=summary,
    include_package_data=True,
    install_requires=install_requires,
    keywords=["GitHub", "JavaScript", "Widget"],
    license="MIT License",
    long_description=long_description,
    packages=setuptools.find_packages(exclude=["test*"]),
    setup_requires=[] + pytest_runner,
    tests_require=tests_require,

    classifiers=[
        "Development Status :: 3 - Alpha",
        "Intended Audience :: Information Technology",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
        "Programming Language :: JavaScript",
        "Programming Language :: Python :: 2",
        "Programming Language :: Python :: 2.7",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.3",
        "Programming Language :: Python :: 3.4",
        "Programming Language :: Python :: 3.5",
        "Programming Language :: Python :: 3.6",
        "Topic :: Software Development",
        "Topic :: Software Development :: Widget Sets",
    ],
    entry_points={
        "console_scripts": [
            "ghscard=cli.ghscard:cmd",
        ],
    }
)

.. contents:: **ghscard**
   :backlinks: top
   :depth: 2

Summary
=========
`ghscard <https://github.com/thombashi/ghscard>`__ is a JavaScript widget to generate interactive GitHub user/repository/organization cards for static web pages (like GitHub pages).

.. image:: https://badge.fury.io/py/ghscard.svg
    :target: https://badge.fury.io/py/ghscard
    :alt: PyPI package version

.. image:: https://img.shields.io/pypi/pyversions/ghscard.svg
    :target: https://pypi.org/project/ghscard
    :alt: Supported Python versions

.. image:: https://img.shields.io/npm/v/ghscard
    :target: https://www.npmjs.com/package/ghscard
    :alt: npm package version

.. image:: https://img.shields.io/travis/thombashi/ghscard/master.svg?label=Linux%20CI
    :target: https://travis-ci.org/thombashi/ghscard
    :alt: Linux CI status

.. image:: https://img.shields.io/github/stars/thombashi/ghscard.svg?style=social&label=Star
    :target: https://github.com/thombashi/ghscard
    :alt: GitHub stars

Demo
======
- `Popular Repositories on GitHub <https://thombashi.github.io/ghscard/demo/>`__
- https://thombashi.github.io/

Quick Start
================

CLI Tool Installation
----------------------------------
Install ``ghscard`` CLI tool from `PyPI <//pypi.python.org/pypi>`__ via
`pip <//pip.pypa.io/en/stable/installing/>`__ (Python package manager) command.

::

    pip install ghscard


Generate card data files
----------------------------------
Execute ``ghscard gen`` command to generate a GitHub user/organization/repository card data file.

::

    $ ghscard gen thombashi -o data
    [INFO] ghscard gen: written user data to 'data/thombashi.json'

::

    $ ghscard gen Microsoft/TypeScript -o data
    [INFO] ghscard gen: written repository data to 'data/Microsoft_TypeScript.json'


Add widget to an HTML file
----------------------------------

:Example:
    .. code-block:: html

        <!doctype html>
        <html>
        <body>
            <table border="0">
                <tr>
                    <td>
                        <div class='ghscard' src='data/thombashi.json'></div>
                    </td>
                    <td>
                        <div class="ghscard" src="data/Microsoft_TypeScript.json"></div>
                    </td>
                </tr>
            </table>

            <script src='//cdn.jsdelivr.net/gh/thombashi/ghscard@master/dist/ghscard.min.js'></script>
        </body>
        </html>

The above HTML rendered as follows:

:Output:
    .. image:: ss/quickstart.png
        :width: 600px
        :alt: Click to navigate to the HTML page
        :target: //thombashi.github.io/ghscard/quickstart/

CDN
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
- Version specific
    - ``https://cdn.jsdelivr.net/npm/ghscard@<version>/dist/ghscard.min.js``
    - e.g. https://cdn.jsdelivr.net/npm/ghscard@0.2.1/dist/ghscard.min.js
- Latest version
    - https://cdn.jsdelivr.net/gh/thombashi/ghscard@master/dist/ghscard.min.js

For more information
----------------------
More examples are available at 
https://ghscard.rtfd.io/en/latest/pages/usage/index.html

Dependencies
============

CLI Tool Dependencies
----------------------
Python 3.5+

- `appconfigpy <https://github.com/thombashi/appconfigpy>`__
- `click <https://palletsprojects.com/p/click/>`__
- `DateTimeRange <https://github.com/thombashi/DateTimeRange>`__
- `logbook <https://logbook.readthedocs.io/en/stable/>`__
- `msgfy <https://github.com/thombashi/msgfy>`__
- `pathvalidate <https://github.com/thombashi/pathvalidate>`__
- `PyGithub <https://pygithub.readthedocs.io/en/latest/>`__
- `requests <http://python-requests.org/>`__
- `retryrequests <https://github.com/thombashi/retryrequests>`__
- `typepy <https://github.com/thombashi/typepy>`__

Tested environment
=======================

.. table:: Tested Web Browsers

    =======================  ===========================
    Web browser              Version
    =======================  ===========================
    ``Google Chrome``        ``57.0`` or newer
    ``Mozilla Firefox``      ``52.0`` or newer
    =======================  ===========================

Documentation
---------------
https://ghscard.rtfd.io/


ghscard
=======

.. image:: https://img.shields.io/travis/thombashi/ghscard/master.svg?label=Linux
    :target: https://travis-ci.org/thombashi/ghscard

.. image:: https://img.shields.io/github/stars/thombashi/ghstaticcard.svg?style=social&label=Star
   :target: https://github.com/thombashi/ghscard

Summary
-------

A JavaScript widget to generate GitHub user/repository/organization cards for static web pages (like GitHub pages).

Demo
====

﻿- `Popular Repositories on GitHub <https://thombashi.github.io/ghscard/demo/>`__
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


Add widget to a HTML file
----------------------------------

.. code:: html

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

        <script src='//rawgit.com/thombashi/ghscard/master/dist/ghscard.min.js'></script>
    </body>
    </html>

This HTML will be displayed as follows:

.. image:: ss/quickstart.png
    :width: 600px
    :alt: Click to navigate to the HTML page
    :target: //thombashi.github.io/ghscard/quickstart/

For more information
--------------------

More examples are available at 
http://ghscard.rtfd.io/en/latest/pages/usage/index.html

Dependencies
============

CLI Tool Dependencies
----------------------
Python 2.7+ or 3.3+

- `appconfigpy <//github.com/thombashi/appconfigpy>`__
- `click <//github.com/pallets/click>`__
- `logbook <//logbook.readthedocs.io/en/stable/>`__
- `pathvalidate <//github.com/thombashi/pathvalidate>`__
- `PyGithub <//pygithub.github.io/PyGithub/v1/index.html>`__
- `requests <//python-requests.org/>`__
- `typepy <//github.com/thombashi/typepy>`__
- `six <//pypi.python.org/pypi/six/>`__

Tested environment
=======================

.. table:: Tested Web Browsers

    =======================  ===========================
    Web browser              Version
    =======================  ===========================
    ``Google Chrome``        ``57.0``
    ``Mozilla Firefox``      ``52.0``
    =======================  ===========================

Documentation
-------------

http://ghscard.rtfd.io/

Usage
=============

Create User/Organization Cards
------------------------------------
1. Generate a card data file
    Execute ``ghscard gen <user-name or organization-name>``.

    .. code::

        $ ghscard gen thombashi -o data
        [INFO] ghscard gen: written user data to 'data/thombashi.json'

2. Add HTML tags to a HTML file
    .. code-block:: html

        <div class='ghscard' src='data/thombashi.json'></div>

        <script src="//cdn.jsdelivr.net/gh/thombashi/ghscard@master/dist/ghscard.min.js"></script>

3. Result
    .. raw:: html

        <iframe src="//thombashi.github.io/ghscard/examples/user.html" width="440" height="510" style="border: 0px;">
        </iframe>
            

Create Repository Cards
--------------------------------------
1. Generate a card data file
    Execute ``ghscard gen <user name>/<repository name>``.

    .. code::

        $ ghscard gen Microsoft/TypeScript -o data
        [INFO] ghscard gen: written repository data to 'data/Microsoft_TypeScript.json'

2. Add HTML tags to a HTML file
    .. code-block:: html
    
        <div class="ghscard" src="data/Microsoft_TypeScript.json"></div>

        <script src="//cdn.jsdelivr.net/gh/thombashi/ghscard@master/dist/ghscard.min.js"></script>

3. Result
    .. raw:: html
    
        <iframe src="//thombashi.github.io/ghscard/examples/repository.html" width="460" height="670" style="border: 0px;">
        </iframe>


Card Configurations
--------------------------------------

``card-style`` Attribute
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Card size and display format change according to ``card-style`` attribute.
``card-style`` attribute takes one of the following values:

- ``medium`` `(default)`
- ``small``
- ``tiny``

`Examples <//thombashi.github.io/ghscard/examples/card-style.html>`__


``chart-display`` Attribute
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Charts on repository cards can be changed visible or hidden by ``chart-display`` attribute value.

.. table:: ``chart-display`` attribute

    =======================  ================================================
    Value                    Meaning
    =======================  ================================================
    ``block``                Display charts on cards.
    ``none``                 NOT display charts on cards.
    =======================  ================================================

Default value differed by ``card-style`` attribute:

.. table:: Default value of ``chart-display``

    =======================  ================================================
    ``card-style`` value     Default value
    =======================  ================================================
    ``medium``               ``block``
    ``small``                ``block``
    ``tiny``                 ``none``
    =======================  ================================================

`Examples <//thombashi.github.io/ghscard/examples/chart-display.html>`__


``topic-display`` Attribute
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Topic labels repository cards can be changed visible or hidden by ``topic-display`` attribute value.
Defaults to ``block``.

.. table:: ``topic-display`` attribute

    =======================  ================================================
    Value                    Meaning
    =======================  ================================================
    ``block``                Display topic labels on cards.
    ``none``                 NOT display topic labels on cards.
    =======================  ================================================

`Examples <//thombashi.github.io/ghscard/examples/topic-display.html>`__

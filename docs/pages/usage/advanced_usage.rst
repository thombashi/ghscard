Advanced Usage
==========================

GitHub API Token Setting
--------------------------------------
You can set GitHub API token via ``ghscard configure`` command to workaround 
`GitHub API rate limit <//developer.github.com/v3/#rate-limiting>`__.
You might exceed GitHub API rate limit when creating card data by ``ghscard gen`` command.
Git Hub API token can create at https://github.com/settings/tokens/new

::

    $ ghscard configure
    GitHub API Personal Access Token: <token>
    Output Directory Path [.]:


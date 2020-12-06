Contribute to ``sphinx-copybutton``
===================================

For general guidelines about contributing to projects in ``executablebooks``, see `the project contribution guidelines <https://executablebooks.org/en/latest/contributing.html>`_.

If you'd like to develop or make contributions for sphinx-copybutton, fork
the repository here:

https://github.com/ExecutableBookProject/sphinx-copybutton

pull to your computer and install locally with ``pip``::

    pip install -e /path/to/sphinx_copybutton

**Pull requests** and **Issues** are absolutely welcome!

The package is tested for three things (see ``.github/workflows/integration.yml``):

code style
----------

To adhere to this code style install the package with `pre-commit <https://pre-commit.com/>`__:

.. code-block:: console

   $ pip install .[code_style]

Then you can run:

.. code-block:: console

   $ pre-commit run --all

Or setup pre-commit to run on code commits:

.. code-block:: console

   $ pre-commit install

JavaScript unit testing
-----------------------

Install the test dependencies with `npm <https://www.npmjs.com/>`__:

.. code-block:: console

   $ npm install ci

Then run the tests:

.. code-block:: console

   $ npm test

.. note::

   NodeJS >= 12 is required

Documentation builds
--------------------

Install the package:

.. code-block:: console

   $ pip install .

Then run the docs build:

.. code-block:: console

   $ cd doc
   $ make html

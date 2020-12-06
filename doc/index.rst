=================
Sphinx-copybutton
=================

.. image:: https://readthedocs.org/projects/sphinx-copybutton/badge/?version=latest
   :target: https://sphinx-copybutton.readthedocs.io/en/latest/?badge=latest
   :alt: Documentation

.. image:: https://img.shields.io/pypi/v/sphinx-copybutton.svg
   :target: https://pypi.org/project/sphinx_copybutton
   :alt: PyPi page

.. image:: https://img.shields.io/conda/vn/conda-forge/sphinx-copybutton.svg
   :target: https://anaconda.org/conda-forge/sphinx-copybutton
   :alt: Conda Version

Sphinx-copybutton does one thing: add a little "copy" button to the right
of your code blocks. That's it! It is a lightweight wrapper around the
excellent (and also lightweight) Javascript library
`ClipboardJS <https://clipboardjs.com/>`_.

**Here's an example**

.. image:: _static/copybutton.gif
   :width: 500px

And here's a code block, note the copy button to the right!

.. code-block:: bash

   copy me!


If the code block overlaps to the right of the text area, you can just click
the button to get the whole thing.

.. code-block:: bash

   123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789

You can configure ``sphinx-copybutton`` to detect *input prompts* in code
cells, and then both remove these prompts before copying, as well as skip
lines that *don't* start with prompts (in case they are output lines).

For example, this site has been configured to strip Python prompts (">>> ").
Try copy-pasting the code block below.

.. code-block:: python

   >>> a = 2
   >>> print(a)
   2

   >>> b = 'wow'
   >>> print(b)
   wow

Installation
============

.. note::

   ``sphinx-copybutton`` only works on Python >= 3.4

You can install ``sphinx-copybutton`` with ``pip``:

.. code-block:: bash

   pip install sphinx-copybutton

Or with ``conda`` via ``conda-forge``:

.. code-block:: bash

   conda install -c conda-forge sphinx-copybutton

`Here's a link to the sphinx-copybutton GitHub repository <https://github.com/ExecutableBookProject/sphinx-copybutton>`_.

Usage
=====

In your ``conf.py`` configuration file, add ``sphinx_copybutton`` to your
extensions list. E.g.:

.. code-block:: python

   extensions = [
       ...
       'sphinx_copybutton'
       ...
   ]

When you build your site, your code blocks should now have little copy buttons
to their right. Clicking the button will copy the code inside!

.. toctree::
   :maxdepth: 1
   :caption: Reference pages

   customize
   notebook
   contribute
   second/second_page

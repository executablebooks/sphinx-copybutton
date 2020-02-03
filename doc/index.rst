=================
Sphinx-copybutton
=================

.. image:: https://readthedocs.org/projects/sphinx-copybutton/badge/?version=latest
   :target: https://sphinx-copybutton.readthedocs.io/en/latest/?badge=latest
   :alt: Documentation

.. image:: https://img.shields.io/pypi/v/sphinx-copybutton.svg
   :target: https://pypi.org/project/sphinx_copybutton
   :alt: PyPi page

Sphinx-copybutton does one thing: add little "copy" button to the right
of your code blocks. That's it! It is a lightweight wrapper around the
excellent (and also lightweight) Javascript library
`ClipboardJS <https://clipboardjs.com/>`_.

**Here's an example**

.. image:: _static/copybutton.gif
   :width: 500px

And here's a code block, note the copy button to the right!

.. code-block:: bash

   copy me!

By default, ``sphinx-copybutton`` will remove Python prompts from
each line that begins with them. If it finds lines that start with the
prompt text, all *other* lines will not be copied.
For example, try copying the text
below:

.. code-block:: python

   >>> a = 2
   >>> print(a)
   2

   >>> b = 'wow'
   >>> print(b)
   wow

The text that ``sphinx-copybutton`` uses can be configured as well. See
:ref:`configure_copy_text` for more information.

If the code block overlaps to the right of the text area, you can just click
the button to get the whole thing.

.. code-block:: bash

   123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789

Installation
============

You can install ``sphinx-copybutton`` with ``pip``:

.. code-block:: bash

   pip install sphinx-copybutton

`Here's a link to the sphinx-copybutton GitHub repository <https://github.com/choldgraf/sphinx-copybutton>`_.

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

Customization
=============

Sphinx-copybutton was designed to work with the default Sphinx theme,
`Alabaster <https://alabaster.readthedocs.io/en/latest/>`_. If you use a theme
that doesn't play nicely with sphinx-copybutton's CSS, you can always add
your own CSS rules!

Customize the CSS
-----------------

To customize the display of the copy button, you can add your own CSS files
that overwrite the CSS in the
`sphinx-copybutton CSS rules <https://github.com/choldgraf/sphinx-copybutton/blob/master/_static/copybutton.css>`_.
Just add these files to ``_static`` in your documentation folder, and it should
overwrite sphinx-copybutton's behavior.

.. _configure_copy_text:

Strip and configure input prompts for code cells
------------------------------------------------

By default, ``sphinx-copybutton`` will remove Python prompts (">>> ") from
the beginning of each copied line. If it detects these prompts, then *only*
the lines that contain prompts will be copied (after removing the prompt text).
If no lines with prompts are found, then the full contents of the cell will be
copied.

To change the text that is removed, add the
following configuration to your ``conf.py`` file:

.. code-block:: python

    copybutton_prompt_text = "sometexttoskip"

Note that this text will only be removed from lines that *begin* with the text.

To skip this behavior and remove *no* text, use an empty string:

.. code-block:: python

    copybutton_prompt_text = ""

Configure whether *only* lines with prompts are copied
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

By default, if sphinx-copybutton detects lines that begin with code prompts,
it will *only* copy the text in those lines (after stripping the prompts).
This assumes that the rest of the code block contains outputs that shouldn't
be copied.

To disable this behavior, use the following configuration in ``conf.py``:

.. code-block:: python

    copybutton_only_copy_prompt_lines = False

Configure whether the input prompts should be stripped
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

By default, sphinx-copybutton will remove the prompt text from lines
according to the value of ``copybutton_prompt_text`` (by default,
this value is ">>> ").

To disable this behavior and copy the full text of lines with prompts
(for example, if you'd like to copy *only* the lines with prompts, but not
strip the prompts), use the following configuration in ``conf.py``:

.. code-block:: python

    copybutton_remove_prompts = False

Use a different copy button image
---------------------------------

To use a different image for your copy buttons, do the following:

1. Place the image in the ``_static/`` folder of your site.
2. Set the ``copybutton_image_path`` variable in your ``conf.py`` to be the
   path to your image file, **relative to** ``_static/``.

Development
===========

If you'd like to develop or make contributions for sphinx-copybutton, fork
the repository here:

https://github.com/choldgraf/sphinx-copybutton

pull to your computer and install locally with ``pip``::

    pip install -e /path/to/sphinx_copybutton

**Pull requests** and **Issues** are absolutely welcome!

.. toctree::
   :maxdepth: 1

   second/second_page

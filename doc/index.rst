=================
Sphinx-copybutton
=================

Sphinx-copybutton does one thing: add little "copy" button to the right
of your code blocks. That's it!

**Here's an example**

.. image:: _static/copybutton.gif

And here's a code block, note the copy button to the right!

.. code-block:: bash

   copy me!

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

When you build your site, your code blocks should now have little copy buttons to their
right. Clicking the button will copy the code inside!

Customization
=============

Sphinx-copybutton was designed to work with the default Sphinx theme,
`Alabaster <https://alabaster.readthedocs.io/en/latest/>`_. If you use a theme
that doesn't play nicely with sphinx-copybutton's CSS, you can always add
your own CSS rules!

To customize the display of the copy button, you can add your own CSS files
that overwrite the CSS in the
`sphinx-copybutton CSS rules <https://github.com/choldgraf/sphinx-copybutton/blob/master/_static/copybutton.css>`_.
Just add these files to `_static` in your documentation folder, and it should
overwrite sphinx-copybutton's behavior.

Development
===========

If you'd like to develop or make contributions for sphinx-copybutton, fork
the repository here:

https://github.com/choldgraf/sphinx-copybutton

pull to your computer and install locally with ``pip``::

    pip install -e /path/to/sphinx_copybutton

**Pull requests** and **Issues** are absolutely welcome!

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
`ClipboardJS <https://clipboardjs.com/>`.

**Here's an example**

.. image:: _static/copybutton.gif
   :width: 500px

And here's a code block, note the copy button to the right!

.. code-block:: bash

   copy me!

By default, ``sphinx-copybutton`` will remove Python prompts from
each line that begins with them. For example, try copying the text
below:

.. code-block:: python

   >>> a = 2
   >>> print(a)

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

When you build your site, your code blocks should now have little copy buttons to their
right. Clicking the button will copy the code inside!

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

Customize the text that is removed during copying
-------------------------------------------------

By default, ``sphinx-copybutton`` will remove Python prompts (">>> ") from
the beginning of each line. To change the text that is removed (or to remove
no text at all), add the following configuration to your ``conf.py`` file:

.. code:: python

    copybutton_skip_text = "sometexttoskip"

Note that this text will only be removed from lines that *begin* with the text.

Use a different copy button image
---------------------------------

To use a different image for your copy buttons, the easiest thing to do is
to add a small bit of javascript to your Sphinx build that points the image
to something new. Follow these steps:

1. Create a new javascript file in your site's static folder (e.g., `_static/js/custom.js`).
   In it, put the following code:

   .. code-block:: javascript

      const updateCopyButtonImages = () => {
          const copybuttonimages = document.querySelectorAll('a.copybtn img')
          copybuttonimages.forEach((img, index) => {
          img.setAttribute('src', 'path-to-new-image.svg')
          })
      }

      runWhenDOMLoaded(updateCopyButtonImages)


2. Add this javascript file to your `conf.py` configuration like so:

   .. code-block:: python

      def setup(app):
         app.add_javascript('js/custom.js');

This will replace the copybutton images each time the page loads!

**If you know of a better way to do this with sphinx, please don't hesitate to
recommend something!**

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

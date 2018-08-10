=================
Sphinx-copybutton
=================

Sphinx-copybutton does one thing: add little "copy" button to the right
of your code blocks. That's it!

**Here's an example**

.. image:: ../copybutton.gif

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

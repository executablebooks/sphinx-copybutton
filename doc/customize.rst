
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
`sphinx-copybutton CSS rules <https://github.com/executablebooks/sphinx-copybutton/blob/master/sphinx_copybutton/_static/copybutton.css>`_.
Just add these files to ``_static`` in your documentation folder, and it should
overwrite sphinx-copybutton's behavior.

.. _configure_copy_text:

Strip and configure input prompts for code cells
------------------------------------------------

By default, ``sphinx-copybutton`` will copy the entire contents of a code
block when the button is clicked. For many languages, it is common to
include **input prompts** with your examples, along with the outputs from
running the code.

``sphinx-copybutton`` provides functionality to both
strip input prompts, as well as *only* select lines that begin with a prompt.
This allows users to click the button and *only* copy the input text,
excluding the prompts and outputs.

To define the prompt text that you'd like removed from copied text in your code
blocks, use the following configuration value in your ``conf.py`` file:

.. code-block:: python

    copybutton_prompt_text = "myinputprompt"

When this variable is set, ``sphinx-copybutton`` will remove the prompt from
the beginning of any lines that start with the text you specify. In
addition, *only* the lines that contain prompts will be copied if any are
discovered. If no lines with prompts are found, then the full contents of
the cell will be copied.

For example, to exclude traditional Python prompts from your copied code,
use the following configuration:

.. code-block:: python

    copybutton_prompt_text = ">>> "

Using regexp prompt identifiers
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

If your prompts are more complex than a single string, then you can use a regexp to match with.

.. note::

   Keep in mind that the
   `RegExp <https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp>`_
   you are writing is
   `evaluated in JavaScript <https://github.com/executablebooks/sphinx-copybutton/blob/a58da090dae6f4d38870929e0258a0c8ee626f8f/sphinx_copybutton/_static/copybutton_funcs.js#L7>`_
   and not in Python.
   In some edge cases this might lead to different results.

If you enclose your regexp in a raw string (``r""``),
you can easily test that your RegExp matches all the wanted prompts,
i.e. at `RegEx101`_.

For example this documentation uses the following configuration:

.. code-block:: python

   copybutton_prompt_text = r">>> |\.\.\. |\$ |In \[\d*\]: | {2,5}\.\.\.: | {5,8}: "
   copybutton_prompt_is_regexp = True

Which matches the following prompts and their continuations if they exist:

.. list-table::
   :widths: 30 37 33
   :header-rows: 1

   * - Prompt Name
     - RegEx Pattern
     - Matched String Examples
   * - Python Repl + continuation
     - ``r'>>> |\.\.\. '``
     - ``'>>> '``, ``'... '``
   * - Bash
     - ``r'\$ '``
     - ``'$ '``
   * - ``ipython`` and ``qtconsole`` + continuation
     - ``r'In \[\d*\]: | {2,5}\.\.\.: '``
     - ``'In []: '``, ``'In [999]: '``, ``'  ...: '``, ``'     ...: '``
   * - ``jupyter-console`` + continuation
     - ``r'In \[\d*\]: | {5,8}: '``
     - ``'In []: '``, ``'In [999]: '``, ``'  ...: '``, ``'     ...: '``

An example usage would be the ``ipython``-directive:

.. code-block:: restructuredtext

   ``ipython`` and ``qtconsole`` style:

   .. code-block:: ipython

      In [1]: first
         ...: continuation
      output
      In [2]: second

   ``jupyter`` style:

   .. code-block:: ipython

      In [1]: first
            : continuation
      output
      In [2]: second

``ipython`` and ``qtconsole`` style:

.. code-block:: ipython

   In [1]: first
      ...: continuation
   output
   In [2]: second

``jupyter`` style:

.. code-block:: ipython

   In [1]: first
         : continuation
   output
   In [2]: second

If you want a detailed explanation how the RegEx's work you can also use `RegEx101`_ and read the ``Explanation`` sidebar.

.. _RegEx101: https://regex101.com


Configure whether *only* lines with prompts are copied
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

By default, if sphinx-copybutton detects lines that begin with code prompts,
it will *only* copy the text in those lines (after stripping the prompts).
This assumes that the rest of the code block contains outputs that shouldn't
be copied.

To disable this behavior, use the following configuration in ``conf.py``:

.. code-block:: python

    copybutton_only_copy_prompt_lines = False

In this case, all lines of the code blocks will be copied after the prompts
are stripped.

Configure whether the input prompts should be stripped
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

By default, sphinx-copybutton will remove the prompt text from lines
according to the value of ``copybutton_prompt_text``.

To disable this behavior and copy the full text of lines with prompts
(for example, if you'd like to copy *only* the lines with prompts, but not
strip the prompts), use the following configuration in ``conf.py``:

.. code-block:: python

    copybutton_remove_prompts = False

Use a different copy button image
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To use a different image for your copy buttons, do the following:

1. Place the image in the ``_static/`` folder of your site.
2. Set the ``copybutton_image_path`` variable in your ``conf.py`` to be the
   path to your image file, **relative to** ``_static/``.


Configure the CSS selector used to add copy buttons
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

By default, ``sphinx-copybutton`` will add a copy button to all elements
that match the following selection:

.. code-block:: css

    div.highlight pre

To change this selector, use the following configuration in ``conf.py``:

.. code-block:: python

    copybutton_selector = "your.selector"

In this case, all elements that match ``your.selector`` will have a copy button
added to them.

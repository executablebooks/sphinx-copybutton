# Use and customize

This section describes major ways to use and control `sphinx-copybutton`'s behavior.

(configure-copy-text)=

## Automatic exclusion of prompts from the copies

The Sphinx code highlighter, Pygments, tags the prompts (`>>>`, `...`,
`In [1]:`, `$`) of console sessions, and sphinx by default excludes
prompts from being selectable.  Sphinx-copybutton can follows this
default with the following setting.  This setting is not the default,
because it conflicts with the backwards compatibility of the other
following manually-selectable exclude options:
```{code-block} python
copybutton_exclude = '.linenos, .gp'
```

Add `.go` to the excludes and you will not copy console output,
either.

For automatic exclusion, use the right highlight language:
`pythonconsole` instead of `python`, `console` instead of `bash`,
`ipythonconsole` instead of `ipython`, etc.

This setting can also be used to exclude arbitrary css classes from
being copied.  By default `.linenos` are excluded.  `.linenos` is the
Sphinx default for line numbers, `.gp` is the Pygments class for the
prompts, and `.go` is the class for console outputs.

This setting conflicts with most of pattern-based copy-selection
settings below, so should not be used with them.  This will hopefully
be improved in the future.


## Strip and configure input prompts for code cells

By default, `sphinx-copybutton` will copy the entire contents of a code
block when the button is clicked. For many languages, it is common to
include **input prompts** with your examples, along with the outputs from
running the code.

`sphinx-copybutton` provides functionality to both
strip input prompts, as well as *only* select lines that begin with a prompt.
This allows users to click the button and *only* copy the input text,
excluding the prompts and outputs.

To define the prompt text that you'd like removed from copied text in your code
blocks, use the following configuration value in your `conf.py` file:

```python
copybutton_prompt_text = "myinputprompt"
```

When this variable is set, `sphinx-copybutton` will remove the prompt from
the beginning of any lines that start with the text you specify. In
addition, *only* the lines that contain prompts will be copied if any are
discovered. If no lines with prompts are found, then the full contents of
the cell will be copied.

For example, to exclude traditional Python prompts from your copied code,
use the following configuration:

```python
copybutton_prompt_text = ">>> "
```

### Using regexp prompt identifiers

If your prompts are more complex than a single string, then you can use a regexp to match with.

:::{note}
Keep in mind that the
[RegExp](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
you are writing is
[evaluated in JavaScript](https://github.com/executablebooks/sphinx-copybutton/blob/a58da090dae6f4d38870929e0258a0c8ee626f8f/sphinx_copybutton/_static/copybutton_funcs.js#L7)
and not in Python.
In some edge cases this might lead to different results.
:::

If you enclose your regexp in a raw string (`r""`),
you can easily test that your RegExp matches all the wanted prompts,
i.e. at [RegEx101].

For example this documentation uses the following configuration:

```python
copybutton_prompt_text = r">>> |\.\.\. |\$ |In \[\d*\]: | {2,5}\.\.\.: | {5,8}: "
copybutton_prompt_is_regexp = True
```

Which matches the following prompts and their continuations if they exist:

```{eval-rst}
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
```

An example usage would be the `ipython`-directive:

```restructuredtext
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
```

`ipython` and `qtconsole` style:

```ipython
In [1]: first
   ...: continuation
output
In [2]: second
```

`jupyter` style:

```ipython
In [1]: first
      : continuation
output
In [2]: second
```

If you want a detailed explanation how the RegEx's work you can also use [RegEx101] and read the `Explanation` sidebar.

### Configure whether *only* lines with prompts are copied

By default, if sphinx-copybutton detects lines that begin with code prompts,
it will *only* copy the text in those lines (after stripping the prompts).
This assumes that the rest of the code block contains outputs that shouldn't
be copied.

To disable this behavior, use the following configuration in `conf.py`:

```python
copybutton_only_copy_prompt_lines = False
```

In this case, all lines of the code blocks will be copied after the prompts
are stripped.

### Configure whether the input prompts should be stripped

By default, sphinx-copybutton will remove the prompt text from lines
according to the value of `copybutton_prompt_text`.

To disable this behavior and copy the full text of lines with prompts
(for example, if you'd like to copy *only* the lines with prompts, but not
strip the prompts), use the following configuration in `conf.py`:

```python
copybutton_remove_prompts = False
```

## Keep *empty* lines

By default, sphinx-copybutton will also copy / pass through empty lines,
determined by `line.trim() === ''`.

To disable copying empty lines, use the following configuration in `conf.py`:

```python
copybutton_copy_empty_lines = False
```

## Multi-line snippets

Multi-line snippets are single commands that continue across multiple lines (usually to save horizontal space).
`sphinx-copybutton` tries to copy this text with the expectation that you'll want to past the text as a single line in some other application.
See below for how to control this.

### Honor line continuation characters when copying multline-snippets

Sometimes you may wish to copy a code block like this one:

```bash
$ datalad download-url http://www.tldp.org/LDP/Bash-Beginners-Guide/Bash-Beginners-Guide.pdf \
--dataset . \
-m "add beginners guide on bash" \
-O books/bash_guide.pdf
```

Assuming that you specified `$` as your prompt, sphinx-copybutton will only copy
the first line by default.

To copy all lines above, you can use the following configuration:

```python
copybutton_line_continuation_character = "\\"
```

Note that if we want to define `\` as the line continuation character, we have to "escape"
it with another `\`, as with any Python string that should carry a literal `\`.

Next, this configuration will make the code look for lines to copy based on the rules above,
but if one of the lines to be copied contains a line continuation character,
then the next line will be automatically copied, regardless of whether it matches the other
rules.

### Honor HERE-document syntax when copying multiline-snippets

[HERE-documents](https://en.wikipedia.org/wiki/Here_document) are a form of multiline string literals
in which line breaks and other whitespace (including indentation) is preserved.
For example:

```bash
$ cat << EOT > notes.txt
   This is an example sentence.
       Put some indentation on this line.

  EOT
```

Executing this codeblock in the terminal will create a file `notes.txt` with the exact
text from line two of the codeblock until (but not including) the final line containing `EOT`.

However, assuming that you specified `$` as your prompt, sphinx-copybutton will only copy
the first line by default.

sphinx-copybutton can be configured to copy the whole "HERE-document" by using the following
configuration:

```python
copybutton_here_doc_delimiter = "EOT"
```

This will continue to look for lines to copy based on the rules above,
but if one of the lines to be copied contains the defined delimiter (here: `EOT`),
then all following lines will be copied literally until the next delimiter is
encountered in a line.

## Change the copy button image

To use a different image for your copy buttons, do the following:

1. Find the `<svg>` code for the image that you'd like to use.
   For example, find an SVG from [Font Awesome](https://fontawesome.com/), [Tabler](https://tablericons.com/), or [Octicons](https://primer.style/octicons/).
2. Set the `copybutton_image_svg` variable in your `conf.py` to the SVG that you'd like to use.

For example, if you wanted to use a **clipboard icon** instead of the default copy button icon, do the following:

1. Copy the `Clipboard Icon SVG` from [the Tabular icons pack](https://tablericons.com/).
   Here is the SVG for reference:

   ```
   <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clipboard" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="2" />
   </svg>
   ```

2. Configure `sphinx_copybutton` to use this icon instead, via the following configuration:

   ```python
   # Note that we do not include `_static`
   # because the path should be *relative* to the static folder.
   copybutton_image_svg = """
   <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clipboard" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="2" />
   </svg>
   """
   ```

When you re-build your documentation, you should see this new icon in your copy buttons.

## Add or remove copy buttons to any element with a CSS selector

By default, `sphinx-copybutton` will add a copy button to all elements
that match the following selection:

```css
div.highlight pre
```

To change this selector, use the following configuration in `conf.py`:

```python
copybutton_selector = "div.myselector"
```

In this case, all `<div>` elements that have a `myselector` will have a copy button
added to them.

### Remove copybuttons using a CSS selector

You can prevent copybuttons from being added to code blocks by using [the `:not()` CSS selector](https://developer.mozilla.org/en-US/docs/Web/CSS/:not).

For example, you can define a copybutton_selector like so:

```python
copybutton_selector = "div:not(.no-copybutton) > div.highlight > pre"
```

Then add a `no-copybutton` to any code blocks you don't want copied:

````{example}
```{code-block}
:class: no-copybutton
print("This won't have a copy button!")
```
````

### A typical code cell HTML structure in Sphinx

Using CSS to modify the copy button requires you to know what kind of HTML structure code cells have in your documentation.
The easiest way to determine this is to look at the HTML generated by your Sphinx version.
A code block like this:

```python
print("hi!")
```

roughly results in this HTML:

```html
<div class="{EXTRA CLASSES} highlight-python notranslate">
   <div class="highlight">
      <pre id="codecell7">
         CODE CELL CONTENT HERE
      </pre>
   </div>
</div>
```

Where `{EXTRA CLASSES}` consists of any extra classes you've added with the `:class:` keyword.

## Modify the copy button's style with CSS

You can style the CSS of the copy button however you'd like by writing your own CSS with your Sphinx build.
To do so, first create a custom CSS file and add it to your Sphinx build:

1. Create a `custom.css` file in the `_static/` folder of your documentation.
2. Add the CSS file to Sphinx by ensuring that the following configuration exists in your `conf.py` file (see [the Sphinx documentation for more details](https://www.sphinx-doc.org/en/master/usage/configuration.html#confval-html_css_files)):

   ```python
   html_static_path = ["_static"]
   html_css_files = ["custom.css"]
   ```

Next you can add CSS rules that use the `.copybtn` selector to modify the behavior of the button.

:::{admonition} example: button visibility
:class: tip
To make the copy button visible by default (not just when a code cell is hovered):

```css
button.copybtn {
   opacity: 1;
}
```
:::

:::{admonition} example: style the color of the button
```css
button.copybtn {
   color: red;
}
```
:::

See the [Sphinx documentation on custom CSS for more information](https://www.sphinx-doc.org/en/master/usage/configuration.html#confval-html_static_path).

[regex101]: https://regex101.com

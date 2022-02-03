# Sphinx-copybutton

```{image} https://readthedocs.org/projects/sphinx-copybutton/badge/?version=latest
:alt: Documentation
:target: https://sphinx-copybutton.readthedocs.io/en/latest/?badge=latest
```

```{image} https://img.shields.io/pypi/v/sphinx-copybutton.svg
:alt: PyPi page
:target: https://pypi.org/project/sphinx_copybutton
```

```{image} https://img.shields.io/conda/vn/conda-forge/sphinx-copybutton.svg
:alt: Conda Version
:target: https://anaconda.org/conda-forge/sphinx-copybutton
```

Sphinx-copybutton does one thing: add a little "copy" button to the right
of your code blocks. That's it! It is a lightweight wrapper around the
excellent (and also lightweight) Javascript library
[ClipboardJS](https://clipboardjs.com/).

**Here's an example**

% This is stored in this issue: https://github.com/executablebooks/sphinx-copybutton/issues/157

```{image} https://user-images.githubusercontent.com/1839645/150200219-73663c59-08fd-4185-b157-62f3769c02ac.gif
:alt: Copy Button Demo
:width: 500px
```

And here's a code block, note the copy button to the right!

```bash
copy me!
```

If the code block overlaps to the right of the text area, you can just click
the button to get the whole thing.

```bash
123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789123456789
```

You can configure `sphinx-copybutton` to detect *input prompts* in code
cells, and then both remove these prompts before copying, as well as skip
lines that *don't* start with prompts (in case they are output lines).

For example, this site has been configured to strip Python prompts (">>> ").
Try copy-pasting the code block below.

```python
>>> a = 2
>>> print(a)
2

>>> b = 'wow'
>>> print(b)
wow
```

## Install

:::{note}
`sphinx-copybutton` only works on Python >= 3.6
:::

You can install `sphinx-copybutton` with `pip`:

```bash
pip install sphinx-copybutton
```

Or with `conda` via `conda-forge`:

```bash
conda install -c conda-forge sphinx-copybutton
```

[Here's a link to the sphinx-copybutton GitHub repository](https://github.com/ExecutableBookProject/sphinx-copybutton).

## Use

In your `conf.py` configuration file, add `sphinx_copybutton` to your
extensions list. E.g.:

```python
extensions = [
    ...
    'sphinx_copybutton'
    ...
]
```

When you build your site, your code blocks should now have little copy buttons
to their right. Clicking the button will copy the code inside!

See [](use.md) for more information about how to use `sphinx-copybutton`.

```{toctree}
:maxdepth: 2
use
contribute/index
reference/example
```

## Inspiration

The UI and design elements of `sphinx-copybutton` are heavily inspired by [GitHub's design choices](https://primer.style).
The icon we use is from [Tabler's icons set](https://tablericons.com/).

# sphinx-copybutton

[![PyPI](https://img.shields.io/pypi/v/sphinx-copybutton.svg)](https://pypi.org/project/sphinx_copybutton/) | [![Documentation](https://readthedocs.org/projects/sphinx-copybutton/badge/?version=latest)](https://sphinx-copybutton.readthedocs.io/en/latest/?badge=latest)

A small sphinx extension to add a "copy" button to code blocks.

See [the sphinx-copybutton documentation](https://sphinx-copybutton.readthedocs.io/en/latest/) for more details!

![](doc/_static/copybutton.gif)

## Installation

You can install `sphinx-copybutton` with `pip`:

```
pip install sphinx-copybutton
```

## Usage

In your `conf.py` configuration file, add `sphinx_copybutton` to your extensions list.
E.g.:

```
extensions = [
    ...
    'sphinx_copybutton'
    ...
]
```

When you build your site, your code blocks should now have little copy buttons to their
right. Clicking the button will copy the code inside!

## Customization

If you'd like to customize the look of the copy buttons, you can over-write any of the
CSS rules specified in the Sphinx-CopyButton CSS file ([link](sphinx_copybutton/_static/copybutton.css))

# sphinx-copybutton

A small sphinx extension to add a "copy" button to code blocks.

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

---
jupytext:
  cell_metadata_filter: -all
  formats: md:myst
  text_representation:
    extension: .md
    format_name: myst
    format_version: 0.12
    jupytext_version: 1.6.0
kernelspec:
  display_name: Python 3
  language: python
  name: python3
---

# Reference examples

This is a page to show off some examples of this tool in use, and as a reference to test visual changes over time.

## Code Cells



To make sure that the images / svg still works!

```python
e = mc^2
```

Copytext with line numbers!

```{code-cell} python
:linenos:

print(1)
print(2)
print(3)
print(4)
```

Copy text with literalincludes!

```{literalinclude} literal.py
:linenos:
:language: python
```

## MyST Notebook Cells

Sphinx Copybutton works with [MyST Notebooks](https://myst-nb.readthedocs.io) as well. See below for the code inputs and outputs:

### Regular cells

A regular cell:

```python
print("hi")
```

### Notebook cells

Next we'll demo notebook cells to see if these are rendered correctly.

```{code-cell}
print("hi")
```

## Rough edges

This section displays UI behavior that we know is incorrect.
Consider this a wish-list for contributions if somebody knows how to fix these issues!

### Float-right content doesn't move the copy button

If there is content floated to the right, the code block will shrink, but not the copy button.
For example. hover over the code block below, the copy button will float to the right, over the sidebar.

```{sidebar} Placeholder sidebar
This is a placeholder sidebar text to display!
It will push the code block to the left, but not the copy button
```

```python
print("hi")
```

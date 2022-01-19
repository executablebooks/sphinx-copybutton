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

% Note: I'm only including these sidebars to test that the copybutton stays within the code cell.

```{sidebar} Placeholder sidebar
This is a placeholder sidebar text to display!
```

```python
print("hi")
```

### Notebook cells

Next we'll demo notebook cells to see if these are rendered correctly.

```{sidebar} Placeholder sidebar
This is a placeholder sidebar text to display!
```

```{code-cell}
print("hi")
```

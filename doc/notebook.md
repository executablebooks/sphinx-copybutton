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

# MyST Notebooks

Sphinx Copybutton works with [MyST Notebooks](https://myst-nb.readthedocs.io) as well. See below for the code inputs and outputs:

## Regular cells

A regular cell:

% Note: I'm only including these sidebars to test that the copybutton stays within the code cell.

```{sidebar} No execution
This cell doesn't display any outputs.
```

```python
print("hi")
```

## Notebook cells

Next we'll demo notebook cells to see if these are rendered correctly.

```{sidebar} Execution
This cell will be executed and its outputs stored.
```

```{code-cell}
print("hi")
```

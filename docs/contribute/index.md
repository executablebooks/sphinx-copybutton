
# Contribute

If you'd like to develop or make contributions for sphinx-copybutton, fork
the repository here:

<https://github.com/ExecutableBookProject/sphinx-copybutton>

pull to your computer and install locally with `pip`:

```
pip install -e /path/to/sphinx_copybutton
```

**Pull requests** and **Issues** are absolutely welcome!

The package is tested for three things (see `.github/workflows/integration.yml`):

## code style

To adhere to this code style install the package with [pre-commit](https://pre-commit.com/):

```console
$ pip install .[code_style]
```

Then you can run:

```console
$ pre-commit run --all
```

Or setup pre-commit to run on code commits:

```console
$ pre-commit install
```

## JavaScript unit testing

Install the test dependencies with [npm](https://www.npmjs.com/):

```console
$ npm install ci
```

Then run the tests:

```console
$ npm test
```

:::{note}
NodeJS >= 12 is required
:::

## Documentation builds

Install the package:

```console
$ pip install .
```

Then run the docs build:

```console
$ cd doc
$ make html
```

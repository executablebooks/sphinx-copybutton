import os
from pathlib import Path

from setuptools import setup, find_packages

if os.path.isdir("clipboard.js") and not os.path.islink(
    "sphinx_copybutton/_static/clipboard.min.js"
):
    raise SystemExit("Error: Support for symbolic links is required")

if os.path.isdir("clipboard.js") and not os.path.isfile(
    "clipboard.js/dist/clipboard.min.js"
):
    raise SystemExit(
        """Error: clipboard.js submodule not available, run

        git submodule update --init
        """
    )

with open("./README.md") as ff:
    readme_text = ff.read()

# Parse version
init = Path(__file__).parent.joinpath("sphinx_copybutton", "__init__.py")
for line in init.read_text().split("\n"):
    if line.startswith("__version__ ="):
        break
version = line.split(" = ")[-1].strip('"')

setup(
    name="sphinx-copybutton",
    version=version,
    description="Add a copy button to each of your code cells.",
    long_description=readme_text,
    long_description_content_type="text/markdown",
    author="Executable Book Project",
    url="https://github.com/executablebooks/sphinx-copybutton",
    license="MIT License",
    packages=find_packages(),
    package_data={
        "sphinx_copybutton": [
            "_static/copybutton.css",
            "_static/copybutton_funcs.js",
            "_static/copybutton.js_t",
            "_static/copy-button.svg",
            "_static/check-solid.svg",
            "_static/clipboard.min.js",
        ]
    },
    classifiers=[
        "License :: OSI Approved :: MIT License",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.6",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3 :: Only",
    ],
    python_requires=">=3.6",
    install_requires=["sphinx>=1.8"],
    extras_require={
        "code_style": ["pre-commit==2.12.1"],
    },
)

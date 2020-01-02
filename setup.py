import os

from setuptools import setup, find_packages
from sphinx_copybutton import __version__

if (os.path.isdir('clipboard.js') and
        not os.path.islink('sphinx_copybutton/_static/clipboard.min.js')):
    raise SystemExit("Error: Support for symbolic links is required")

if (os.path.isdir('clipboard.js') and
        not os.path.isfile('clipboard.js/dist/clipboard.min.js')):
    raise SystemExit(
        """Error: clipboard.js submodule not available, run

        git submodule update --init
        """)

with open('./README.md', 'r') as ff:
    readme_text = ff.read()

setup(
    name='sphinx-copybutton',
    version=__version__,
    description="Add a copy button to each of your code cells.",
    long_description=readme_text,
    long_description_content_type='text/markdown',
    author='Chris Holdgraf',
    author_email='choldgraf@berkeley.edu',
    url="https://github.com/choldgraf/sphinx-copybutton",
    license='MIT License',
    packages=find_packages(),
    package_data={'sphinx_copybutton': ['_static/copybutton.css',
                                        '_static/copybutton.js',
                                        '_static/copy-button.svg',
                                        '_static/clipboard.min.js']},
    install_requires=["flit", "setuptools", "wheel", "sphinx"],
    classifiers=["License :: OSI Approved :: MIT License"]
)

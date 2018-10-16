from setuptools import setup, find_packages
from sphinx_copybutton import __version__

setup(
    name='sphinx-copybutton',
    version=__version__,
    author='Chris Holdgraf',
    author_email='choldgraf@gmail.com',
    license='BSD',
    packages=find_packages(),
    package_data={'sphinx_copybutton': ['_static/copybutton.css',
                                        '_static/copybutton.js',
                                        '_static/copy-button.svg']},
    include_package_data=True,
)

from setuptools import setup, find_packages
from sphinx_copybutton import __version__

setup(
    name='sphinx-copybutton',
    version=__version__,
    author='Chris Holdgraf',
    author_email='choldgraf@gmail.com',
    license='BSD',
    packages=find_packages(),
    package_data={'sphinx_copybutton': ['sphinx_copybutton/_static/copybutton.css', 'sphinx_copybutton/_static/copybutton.js']},
    include_package_data=True,
)

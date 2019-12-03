from setuptools import setup, find_packages
from sphinx_copybutton import __version__

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
    license='BSD',
    packages=find_packages(),
    package_data={'sphinx_copybutton': ['_static/copybutton.css',
                                        '_static/copybutton.js',
                                        '_static/copy-button.svg']},
    include_package_data=True,
    install_requires=["flit", "setuptools", "wheel", "sphinx"],
    classifiers=["License :: OSI Approved :: MIT License"]
)

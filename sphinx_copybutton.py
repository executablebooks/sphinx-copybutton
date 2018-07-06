"""A small sphinx extension to add "copy" buttons to code blocks."""
import os

__version__ = "0.1.1"
github_url = 'https://cdn.rawgit.com/choldgraf/sphinx-copybutton/master/_static/'

def setup(app):
    # Add relevant code to headers
    app.add_stylesheet(github_url + 'copybutton.css')
    app.add_javascript(github_url + "copybutton.js")
    app.add_javascript("https://cdn.jsdelivr.net/npm/clipboard@1/dist/clipboard.min.js")

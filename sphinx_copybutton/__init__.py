"""A small sphinx extension to add "copy" buttons to code blocks."""
import os

__version__ = "0.1.3"

def scb_static_path(app):
    static_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '_static'))
    app.config.html_static_path.append(static_path)

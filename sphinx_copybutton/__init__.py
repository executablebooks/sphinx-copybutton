"""A small sphinx extension to add "copy" buttons to code blocks."""
import os

__version__ = "0.2.7.dev0"

def scb_static_path(app):
    static_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '_static'))
    app.config.html_static_path.append(static_path)

def setup(app):
    print('Adding copy buttons to code blocks...')
    # Add our static path
    app.connect('builder-inited', scb_static_path)

    # Add relevant code to headers
    app.add_stylesheet('copybutton.css')
    app.add_javascript('clipboard.min.js')
    app.add_javascript("copybutton.js")
    return {"version": __version__,
            "parallel_read_safe": True,
            "parallel_write_safe": True}

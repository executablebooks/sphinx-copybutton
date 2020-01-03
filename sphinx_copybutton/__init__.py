"""A small sphinx extension to add "copy" buttons to code blocks."""
import os

__version__ = "0.2.9dev0"

def scb_static_path(app):
    static_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '_static'))
    app.config.html_static_path.append(static_path)

def add_skip_text_js(app):
    skip_text = app.config['copybutton_skip_text']
    app.add_js_file(None, body="var copybuttonSkipText = '{}';".format(skip_text))

def setup(app):
    print('Adding copy buttons to code blocks...')
    # Add our static path
    app.connect('builder-inited', scb_static_path)
    app.connect('builder-inited', add_skip_text_js)

    # configuration for this tool
    app.add_config_value("copybutton_skip_text", ">>> ", "html")

    # Add relevant code to headers
    app.add_stylesheet('copybutton.css')
    app.add_js_file('clipboard.min.js')
    app.add_js_file("copybutton.js")
    return {"version": __version__,
            "parallel_read_safe": True,
            "parallel_write_safe": True}

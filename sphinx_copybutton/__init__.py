"""A small sphinx extension to add "copy" buttons to code blocks."""
import os

__version__ = "0.1.6"

def scb_static_path(app):
    static_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '_static'))
    app.config.html_static_path.append(static_path)

github_url = 'https://cdn.rawgit.com/choldgraf/sphinx-copybutton/master/_static/'
fa_url = 'https://use.fontawesome.com/releases/v5.2.0/css/all.css'
boot_css_url = "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
boot_js_url = "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
pop_js_url = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
clipboard_js_url = "https://cdn.jsdelivr.net/npm/clipboard@1/dist/clipboard.min.js"

def setup(app):
    print('Adding copy buttons to code blocks...')
    # Add our static path
    app.connect('builder-inited', scb_static_path)

    # Add relevant code to headers
    app.add_stylesheet('copybutton.css')
    app.add_stylesheet(fa_url)
    app.add_stylesheet(boot_css_url)

    app.add_javascript("copybutton.js")
    app.add_javascript(clipboard_js_url)
    app.add_javascript(pop_js_url)
    app.add_javascript(boot_js_url)
    return {"version": __version__}

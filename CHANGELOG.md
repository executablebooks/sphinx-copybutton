# Changelog

## v0.5.2 - 2022-11-15

([full changelog](https://github.com/executablebooks/sphinx-copybutton/compare/v0.5.0...TODO))


- BUG: Don't exclude `.gp` class by default.  This made excluding prompts more automatic, but broke the existing pattern-based prompt exclusion.  [#188](https://github.com/executablebooks/sphinx-copybutton/pull/188) ([@rkdarst](https://github.com/rkdarst))
- MAINT: Add Sphinx Extension classifier (#189)  [#189](https://github.com/executablebooks/sphinx-copybutton/pull/189) ([@jdillard](https://github.com/jdillard ))
- DOCS: Improve docs related to text exclusion [#187](https://github.com/executablebooks/sphinx-copybutton/pull/187) ([@rkdarst](https://github.com/rkdarst))

## v0.5.1 - 2022-11-15

([full changelog](https://github.com/executablebooks/sphinx-copybutton/compare/v0.5.0...e529aa0c7c0bf6ad880904f7a8876f33040e5c09))

- ENH: Unselectable text is now also not highlighted when you manually highlight a code cell. Exclude unselectable text from being copied (update) [#178](https://github.com/executablebooks/sphinx-copybutton/pull/178) ([@rkdarst](https://github.com/rkdarst))
- ENH: After copying, the copybutton will disappear _before_ the icon changes back if you are no longer hovering on the code cell. FIX: Make copybutton remain for a second during success [#176](https://github.com/executablebooks/sphinx-copybutton/pull/176) ([@choldgraf](https://github.com/choldgraf))
- MAINT: Add support for Python 3.10 [#174](https://github.com/executablebooks/sphinx-copybutton/pull/174) ([@hugovk](https://github.com/hugovk))

## 0.5.0 - 2022-02-05

([full changelog](https://github.com/executablebooks/sphinx-copybutton/compare/v0.4.0...915aa4cf0b06f7b781bc4edfc204c62f2ce7cdb6))

This release updates the copy button design and behavior to match GitHub's design guide and button behavior. It also directly inserts the SVG instead of linking it via an `<img>` tag so that it can be styled more flexibly.

### Enhancements

- ENH: Directly add SVG instead of linking via IMG [#161](https://github.com/executablebooks/sphinx-copybutton/pull/161) ([@choldgraf](https://github.com/choldgraf))
- ENH: Update copybutton image to match GitHub [#155](https://github.com/executablebooks/sphinx-copybutton/pull/155) ([@choldgraf](https://github.com/choldgraf))


## 0.4.0 - 2021-07-03

### Enhancements ✨
* The Copy Button UI/UX is now inspired from the recent GitHub copy button updates. [#133](https://github.com/executablebooks/sphinx-copybutton/pull/133)

## 0.3.2 - 2021-06-11

### Enhancements ✨
* Add line continuation matching and "HERE-documents" [#126](https://github.com/executablebooks/sphinx-copybutton/pull/126) ([@sappelhoff](https://github.com/sappelhoff))
* Allow copying empty lines [#127](https://github.com/executablebooks/sphinx-copybutton/pull/127) ([@amotl](https://github.com/amotl))
* ✨ IMPROVE: add a check-mark SVG icon and improve the look of the button

### Translations 🌎
* Add Russian translations [#120](https://github.com/executablebooks/sphinx-copybutton/pull/120) ([@Nikulinnn](https://github.com/Nikulinnn))
* Add Simplified Chinese translations [#116](https://github.com/executablebooks/sphinx-copybutton/pull/116) ([@seisman](https://github.com/seisman))
* French translations added [#114](https://github.com/executablebooks/sphinx-copybutton/pull/114) ([@dbitouze](https://github.com/dbitouze))

## 0.3.1 - 2020-11-02

- 👌 Improved copy icon (thanks to (@pradyunsg)[https://github.com/pradyunsg])
- 📚 Improved examples of regex settings (thanks to [@s-weigand](https://github.com/s-weigand) and [@edmcdonagh](https://github.com/edmcdonagh))

[Full commit list](https://github.com/executablebooks/sphinx-copybutton/compare/v0.3.0...852a9468f1d9e7e12e2c6c90394e8029d571bc14)

## 0.3.0 - 2020-07-25

### Breaking

- Copy raw regex string to JS template, thanks to @s-weigand.
  This fixes the way that the `copybutton_prompt_text` value is injected into `copybutton.js_t` (as discussed in #86).
  The raw string formatting means that backslashes are now propagated correctly and removes the need for "double escaping".
  Users will need to update their `copybutton_prompt_text` string accordingly.

### Changed

- Upgraded [lodash](https://github.com/lodash/lodash) from 4.17.15 to 4.17.19

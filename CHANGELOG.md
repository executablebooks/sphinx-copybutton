# CHANGELOG

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

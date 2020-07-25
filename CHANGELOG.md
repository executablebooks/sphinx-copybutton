# CHANGELOG

## 0.3.0 - 2020-07-25

### Breaking

- Copy raw regex string to JS template, thanks to @s-weigand.
  This fixes the way that the `copybutton_prompt_text` value is injected into `copybutton.js_t` (as discussed in #86).
  The raw string formatting means that backslashes are now propagated correctly and removes the need for "double escaping".
  Users will need to update their `copybutton_prompt_text` string accordingly.

### Changed

- Upgraded [lodash](https://github.com/lodash/lodash) from 4.17.15 to 4.17.19

import test from 'ava';
import { formatCopyText } from "./copybutton_funcs";

const parameters = [
	{
		description: 'empty prompt',
		text: 'hallo',
		prompt: '',
		isRegexp: false,
		onlyCopyPromptLines: true,
		removePrompts: true,
		expected: 'hallo'
	},
	{
		description: 'no prompt in text',
		text: 'hallo',
		prompt: '>>> ',
		isRegexp: false,
		onlyCopyPromptLines: true,
		removePrompts: true,
		expected: 'hallo'
	},
	{
		description: 'with non-regexp python prompt',
		text: `
>>> first
output
>>> second`,
		prompt: '>>> ',
		isRegexp: false,
		onlyCopyPromptLines: true,
		removePrompts: true,
		expected: 'first\nsecond'
	},
	{
		description: 'with non-regexp console prompt',
		text: `
$ first
output
$ second`,
		prompt: '$ ',
		isRegexp: false,
		onlyCopyPromptLines: true,
		removePrompts: true,
		expected: 'first\nsecond'
	},
	{
		description: 'with non-regexp prompt, keep prompt',
		text: `
>>> first
output
>>> second`,
		prompt: '>>> ',
		isRegexp: false,
		onlyCopyPromptLines: true,
		removePrompts: false,
		expected: '>>> first\n>>> second'
	},
	{
		description: 'with non-regexp prompt, keep lines',
		text: `
>>> first
output
>>> second`,
		prompt: '>>> ',
		isRegexp: false,
		onlyCopyPromptLines: false,
		removePrompts: true,
		expected: '\nfirst\noutput\nsecond'
	},
	{
		description: 'with non-regexp prompt, keep all',
		text: `
>>> first
output
>>> second`,
		prompt: '>>> ',
		isRegexp: false,
		onlyCopyPromptLines: false,
		removePrompts: false,
		expected: '\n>>> first\noutput\n>>> second'
	},
	{
		description: 'with regexp python prompt',
		text: `
>>> first
output
>>> second`,
		prompt: '>>> ',
		isRegexp: true,
		onlyCopyPromptLines: true,
		removePrompts: true,
		expected: 'first\nsecond'
	},
	{
		description: 'with regexp console prompt',
		text: `
$ first
output
$ second`,
		prompt: '\\$ ',
		isRegexp: true,
		onlyCopyPromptLines: true,
		removePrompts: true,
		expected: 'first\nsecond'
	},
	{
		description: 'with ipython prompt regexp',
		text: `
[1]: first
...: continuation
output
[2]: second`,
		prompt: '[\d*]: |\.\.\.: ',
		isRegexp: true,
		onlyCopyPromptLines: true,
		removePrompts: true,
		expected: 'first\ncontinuation\nsecond'
	},
	{
		description: 'with ipython prompt regexp, keep prompts',
		text: `
[1]: first
...: continuation
output
[2]: second`,
		prompt: '[\d*]: |\.\.\.: ',
		isRegexp: true,
		onlyCopyPromptLines: true,
		removePrompts: false,
		expected: '[1]: first\n...: continuation\n[2]: second'
	}
]

parameters.forEach((p) => {
	test(p.description, t => {
		const text = formatCopyText(p.text, p.prompt, p.isRegexp, p.onlyCopyPromptLines, p.removePrompts);
		t.is(text, p.expected)
	});
})

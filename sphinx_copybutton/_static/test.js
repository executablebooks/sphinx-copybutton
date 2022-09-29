import test from 'ava';
import { formatCopyText, filterText } from "./copybutton_funcs";

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
		expected: '\nfirst\nsecond'
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
		expected: '\nfirst\nsecond'
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
		expected: '\n>>> first\n>>> second'
	},
	{
		description: 'multiline with |, keep prompt',
		text: `
>>> first |
output |
is |
fine
is it?
>>> second`,
		prompt: '>>> ',
		isRegexp: false,
		onlyCopyPromptLines: true,
		removePrompts: false,
		copyEmptyLines: false,
		lineContinuationChar: '|',
		expected: '>>> first |\noutput |\nis |\nfine\n>>> second'
	},
	{
		description: 'multiline with \\, remove prompt',
		text: `
$ datalad download-url http://www.tldp.org/LDP/Bash-Beginners-Guide/Bash-Beginners-Guide.pdf \\
--dataset . \\
-m "add beginners guide on bash" \\
-O books/bash_guide.pdf
		`,
		prompt: '$ ',
		isRegexp: false,
		onlyCopyPromptLines: true,
		removePrompts: true,
		copyEmptyLines: false,
		lineContinuationChar: '\\',
		expected: 'datalad download-url http://www.tldp.org/LDP/Bash-Beginners-Guide/Bash-Beginners-Guide.pdf \\\n--dataset . \\\n-m "add beginners guide on bash" \\\n-O books/bash_guide.pdf'
	},
	{
		description: 'multiline with "HERE-document", remove prompt',
		text: `
$ cat << EOT > notes.txt
One can hear a joke.
And laugh.

EOT
		`,
		prompt: '$ ',
		isRegexp: false,
		onlyCopyPromptLines: true,
		removePrompts: true,
		copyEmptyLines: false,
		hereDocDelim: "EOT",
		expected: 'cat << EOT > notes.txt\nOne can hear a joke.\nAnd laugh.\n\nEOT'
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
		expected: '\nfirst\nsecond'
	},
	{
		description: 'with regexp python prompt and empty lines',
		text: `
>>> first
output

>>> second`,
		prompt: '>>> ',
		isRegexp: true,
		onlyCopyPromptLines: true,
		removePrompts: true,
		copyEmptyLines: true,
		expected: '\nfirst\n\nsecond'
	},
	{
		description: 'with regexp python prompt and empty lines, ignore empty lines',
		text: `
>>> first
output

>>> second`,
		prompt: '>>> ',
		isRegexp: true,
		onlyCopyPromptLines: true,
		removePrompts: true,
		copyEmptyLines: false,
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
		expected: '\nfirst\nsecond'
	},
	{
		description: 'with ipython prompt (old and new style) regexp',
		text: `
[1]: first
...: continuation
output
[2]: second
In [3]: jupyter`,
		prompt: '\\[\\d*\\]: |In \\[\\d*\\]: |\\.\\.\\.: ',
		isRegexp: true,
		onlyCopyPromptLines: true,
		removePrompts: true,
		expected: '\nfirst\ncontinuation\nsecond\njupyter',
	},
	{
		description: 'with ipython prompt (old and new style) regexp, keep prompts',
		text: `
[1]: first
...: continuation
output
[2]: second
In [3]: jupyter`,
		prompt: '\\[\\d*\\]: |In \\[\\d*\\]: |\\.\\.\\.: ',
		isRegexp: true,
		onlyCopyPromptLines: true,
		removePrompts: false,
		expected: '\n[1]: first\n...: continuation\n[2]: second\nIn [3]: jupyter',
	},
	{
	/* The following is included to demonstrate an example of a false positive regex test.
	As noted in https://github.com/executablebooks/sphinx-copybutton/issues/86,
	JS RegEx in some cases "fixes" incorrect regexes rather than failing on them.
	*/
		description: 'with ipython prompt regexp (false positive)',
		text: `
[1]: first
...: continuation
output
[2]: second`,
		prompt: '[\d*]: |\.\.\.: ',
		isRegexp: true,
		onlyCopyPromptLines: true,
		removePrompts: true,
		expected: '\nfirst\ncontinuation\nsecond'
	}
]

parameters.forEach((p) => {
	test(p.description, t => {
		const text = formatCopyText(p.text, p.prompt, p.isRegexp, p.onlyCopyPromptLines, p.removePrompts, p.copyEmptyLines, p.lineContinuationChar, p.hereDocDelim);
		t.is(text, p.expected)
	});
})


//

/**
 * From https://stackoverflow.com/questions/494143/creating-a-new-dom-element-from-an-html-string-using-built-in-dom-methods-or-pro/35385518#35385518
 *
 * @param {String} HTML representing a single element
 * @return {Element}
 */
function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
}

const defaultTarget = htmlToElement(`
<pre id="codecell0">
	<span class="linenos"> 1</span><span class="c1"># import packages</span>
	<span class="linenos"> 2</span><span class="kn">import</span> <span class="nn">pandas</span> <span class="k">as</span> <span class="nn">pd</span>
</pre>
`);

const filterParameters = [
	{
		description: 'with default exclude text (.linenos)',
		target: defaultTarget,
		exclude: '.linenos',
		expected: `
<span class="c1"># import packages</span>
<span class="kn">import</span> <span class="nn">pandas</span> <span class="k">as</span> <span class="nn">pd</span>
`
	},
	{
		description: 'with empty exclude text',
		target: defaultTarget,
		exclude: '',
		expected: `
<span class="linenos"> 1</span><span class="c1"># import packages</span>
<span class="linenos"> 2</span><span class="kn">import</span> <span class="nn">pandas</span> <span class="k">as</span> <span class="nn">pd</span>
`
	},
	{
		description: 'with exclude comments (.c1) and line numbers (.linenos)',
		target: defaultTarget,
		exclude: '.linenos, .c1',
		expected: `
<span class="kn">import</span> <span class="nn">pandas</span> <span class="k">as</span> <span class="nn">pd</span>
`
	}
]

/**
 * Issues with tests because #filterText uses `.innerText`
 * See https://github.com/jsdom/jsdom/issues/1245.
 */
/**
filterParameters.forEach((p) => {
	test( p.description, t => {
		const text = filterText(p.target, p.exclude);
		t.is(text, p.expected.trim())
	});
})
*/

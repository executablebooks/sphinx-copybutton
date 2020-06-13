import test from 'ava';
import { formatCopyText } from "./copybutton_funcs";

const parameters = [
	{
		description: 'no prompt',
		text: 'hallo',
		prompt: '',
		expected: 'hallo'
	},
	{
		description: 'with prompt',
		text: '>>> hallo',
		prompt: '>>> ',
		expected: 'hallo'
	}
]

parameters.forEach((parameter) => {
	test(parameter.description, t => {
		const text = formatCopyText(parameter.text, parameter.prompt);
		t.is(text, parameter.expected)
	});
})

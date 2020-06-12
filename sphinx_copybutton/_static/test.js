import test from 'ava';
import { formatCopyText } from "./copybutton_funcs";


test('no prompt', t => {
	const text = formatCopyText(['hallo'], '');
	t.is(text, 'hallo')
});

test('with prompt', t => {
	const text = formatCopyText(['>>> hallo'], '>>> ');
	t.is(text, 'hallo')
});

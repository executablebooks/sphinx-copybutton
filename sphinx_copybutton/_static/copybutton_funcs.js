function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

// Callback when a copy button is clicked. Will be passed the node that was clicked
// should then grab the text and replace pieces of text that shouldn't be used in output
export function formatCopyText(textContent, copybuttonPromptText, isRegexp = false, onlyCopyPromptLines = true, removePrompts = true, copyEmptyLines = true) {

    var regexp;
    var match;

    // create regexp to capture prompt and remaining line
    if (isRegexp) {
        regexp = new RegExp('^(' + copybuttonPromptText + ')(.*)')
    } else {
        regexp = new RegExp('^(' + escapeRegExp(copybuttonPromptText) + ')(.*)')
    }

    const outputLines = [];
    var promptFound = false;
    var gotBackslash = false;
    var gotEOT = false;
    const lineGotPrompt = [];
    for (const line of textContent.split('\n')) {
        console.log(line)
        match = line.match(regexp)
        if (match || gotBackslash || gotEOT) {
            promptFound = regexp.test(line)
            lineGotPrompt.push(promptFound)
            if (removePrompts && promptFound) {
                outputLines.push(match[2])
            } else {
                outputLines.push(line)
            }
            gotBackslash = line.endsWith('\\')
            if (line.includes('EOT'))
                gotEOT = !gotEOT
        } else if (!onlyCopyPromptLines) {
            outputLines.push(line)
        } else if (copyEmptyLines && line.trim() === '') {
            outputLines.push(line)
        }
    }

    // If no lines with the prompt were found then just use original lines
    if (lineGotPrompt.some(v => v === true)) {
        textContent = outputLines.join('\n');
    }

    // Remove a trailing newline to avoid auto-running when pasting
    if (textContent.endsWith("\n")) {
        textContent = textContent.slice(0, -1)
    }
    return textContent
}

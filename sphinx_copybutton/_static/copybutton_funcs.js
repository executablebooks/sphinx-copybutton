function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

/**
 * Gets unselectable elements from a node and all its children.
 * 
 * @param {Node} target Root node to extract unselectable text nodes from.
 * @returns {Node[]} List of unselectable nodes.
 */
function getUnselectable(target) {
    let unselectable = [];

    // get all unselectable elements of children
    for (let child of target.children) {
        unselectable = unselectable.concat(getUnselectable(child));
    }

    // add self to unselectable if needed
    if (getComputedStyle(target)["userSelect"] === "none") {
        unselectable.push( target);
    }

    return unselectable;
}

/**
 * Returns all text in a Node and its children
 * excluding the text of those Node's who are in exclude.
 * 
 * @param {Node} target Root Node to get the text of.
 * @param {Node[]} exclude Array of Nodes to exclude.
 * @returns {string} Text of Node's not in `exclude`.
 */
function getFilteredText(target, exclude) {
    let text = '';
    for (let child of target.childNodes) {
        if (exclude.indexOf(child) > -1) {
            // child should be filtered out
            continue;
        }

        if (child.nodeType === Node.TEXT_NODE) {
            // child is a text node, add its contents
            text += child.textContent
        }
        else {
            // recurse on non-text nodes
            text += getFilteredText(child, exclude);
        }
    }

    return text;
}

/**
 * Removes unselectable text from a Node.
 * 
 * @param {Node} target Node to filter.
 * @returns {string} Text from `target` with unselectable text removed.
 */
export function filterUnselectableText(target) {
    // get unselectable elements
    const unselectable = getUnselectable(target);

    // get text from selectable elements
    return getFilteredText(target, unselectable);
}

// Callback when a copy button is clicked. Will be passed the node that was clicked
// should then grab the text and replace pieces of text that shouldn't be used in output
export function formatCopyText(textContent, copybuttonPromptText, isRegexp = false, onlyCopyPromptLines = true, removePrompts = true, copyEmptyLines = true, lineContinuationChar = "", hereDocDelim = "") {
    var regexp;
    var match;

    // Do we check for line continuation characters and "HERE-documents"?
    var useLineCont = !!lineContinuationChar
    var useHereDoc = !!hereDocDelim

    // create regexp to capture prompt and remaining line
    if (isRegexp) {
        regexp = new RegExp('^(' + copybuttonPromptText + ')(.*)')
    } else {
        regexp = new RegExp('^(' + escapeRegExp(copybuttonPromptText) + ')(.*)')
    }

    const outputLines = [];
    var promptFound = false;
    var gotLineCont = false;
    var gotHereDoc = false;
    const lineGotPrompt = [];
    for (const line of textContent.split('\n')) {
        match = line.match(regexp)
        if (match || gotLineCont || gotHereDoc) {
            promptFound = regexp.test(line)
            lineGotPrompt.push(promptFound)
            if (removePrompts && promptFound) {
                outputLines.push(match[2])
            } else {
                outputLines.push(line)
            }
            gotLineCont = line.endsWith(lineContinuationChar) & useLineCont
            if (line.includes(hereDocDelim) & useHereDoc)
                gotHereDoc = !gotHereDoc
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

// Callback when a copy button is clicked. Will be passed the node that was clicked
// should then grab the text and replace pieces of text that shouldn't be used in output
export function formatCopyText(textContent, copybuttonPromptText, onlyCopyPromptLines, removePrompts) {
    // Text content line filtering based on prompts (if a prompt text is given)
    if (copybuttonPromptText.length > 0) {
        // If only copying prompt lines, remove all lines that don't start w/ prompt
        if (onlyCopyPromptLines) {
            linesWithPrompt = textContent.filter((line) => {
                return line.startsWith(copybuttonPromptText) || (line.length == 0); // Keep newlines
            });
            // Check to make sure we have at least one non-empty line
            var nonEmptyLines = linesWithPrompt.filter((line) => { return line.length > 0 });
            // If we detected lines w/ prompt, then overwrite textContent w/ those lines
            if ((linesWithPrompt.length > 0) && (nonEmptyLines.length > 0)) {
                textContent = linesWithPrompt;
            }
        }
        // Remove the starting prompt from any remaining lines
        if (removePrompts) {
            textContent.forEach((line, index) => {
                if (line.startsWith(copybuttonPromptText)) {
                    textContent[index] = line.slice(copybuttonPromptText.length);
                }
            });
        }
    }
    textContent = textContent.join('\n');
    // Remove a trailing newline to avoid auto-running when pasting
    if (textContent.endsWith("\n")) {
        textContent = textContent.slice(0, -1)
    }
    return textContent
}

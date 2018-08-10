function addCopyButtonToCode(){
  // get all code elements
  var allCodeBlocksElements = $( "div.highlight pre" );

  // For each element, do the following steps
  allCodeBlocksElements.each(function(ii) {
  // define a unique id for this element and add it
  var currentId = "codeblock" + (ii + 1);
  $(this).attr('id', currentId);

  // create a button that's configured for clipboard.js
  // point it to the text that's in this code block
  // add the button just after the text in the code block w/ jquery
  var clipButton = '<button class="btn copybtn" data-clipboard-target="#' + currentId + '"><i class="far fa-copy" alt="Copy to clipboard"></i></button>';
     $(this).after(clipButton);
  });

  // Tooltip functions
  function setTooltip(btn, message) {
    $(btn).tooltip('hide')
      .attr('data-original-title', message)
      .tooltip('show');
  }

  function hideTooltip(btn) {
    setTimeout(function() {
      $(btn).tooltip('hide');
    }, 800);
  }

  $('.btn').tooltip({
    trigger: 'click',
    placement: 'bottom'
  });

  // tell clipboard.js to look for clicks that match this query
  var clipboard = new Clipboard('.btn');

  function clearSelection() {
   if (window.getSelection) {window.getSelection().removeAllRanges();}
   else if (document.selection) {document.selection.empty();}
  }

  clipboard.on('success', function(e) {
    clearSelection();
    setTooltip(e.trigger, 'Copied!');
    hideTooltip(e.trigger);
  });

  clipboard.on('error', function(e) {
    setTooltip(e.trigger, 'Failed!');
    hideTooltip(e.trigger);
  });

}
$(document).ready(function () {
// Once the DOM is loaded for the page, attach clipboard buttons
addCopyButtonToCode();
});

'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
	$('.friendhci').click(function(e){
		e.preventDefault();
		name = $(this).text();
		$(this).text(anagrammedName(name));
	});
}
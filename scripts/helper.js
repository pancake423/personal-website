//redirects the page to the specified URL.
function redirect(newURL) {
	window.location.href = newURL;
}

//create the starry background on page load.
window.onload = function init() {
	generateBackground()
	window.onresize = generateBackground;
}
// declare angular app
angular.module('app-tns',[]);


// remove the debug stuff in angular
angular.module('app-tns').config(['$compileProvider', function ($compileProvider) {
  $compileProvider.debugInfoEnabled(false);
}]);


// declare tns namespace
window.tns = window.tns || {}


// delare our copy button
var clipboard = new Clipboard('.btn-copy');


// copy success
clipboard.on('success', function(e) {
	document.getElementById('copyText').innerHTML = "Copied!"	
	window.scrollTo(0, 0);
});


// copy error
clipboard.on('error', function(e) {
	document.getElementById('copyText').innerHTML = "Error Copying.."	
	window.scrollTo(0, 0);
});
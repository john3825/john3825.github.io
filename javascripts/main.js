console.log('This would be the main JS file.');
window.onload = (function() {
	var b = document.getElementById("Copy_Year"); var a = new Date(); b.value = a.getFullYear();
});

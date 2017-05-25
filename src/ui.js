"use strict"

var excelForrm001 = (function () {

	console.log("---> inside ui.js <------");

	window.onload = function () {
		console.log("win loading");
		var form = document.getElementsByClassName("xx_form")[0];
		var heaading = document.createElement("h2");
		heaading.innerHTML = "Join Our Community";
		form.appendChild(heaading);
		creatingForm(form);

	}

	function creatingForm(parentElement){
		console.log(parentElement);
		
	}	

})();
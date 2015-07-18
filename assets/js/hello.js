"use strict";
var hello = (function () {
	var world = {
		world : function(){
			alert("Hi, from hello.js");
		}
	};
	return world;
})(); 
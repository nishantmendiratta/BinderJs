"use strict";
var Binder = (function () {
	var $ = document;
	var _binder = {
		dir : '/',
		engine : '.js',
		init : function (obj){
			this.iterate(obj, function(err){
				if (err) {
					console.log(err);
				};
			});
		},
		config : function (obj){
			this.iterate(obj, function(err){
				if (err) {
					console.log(err);
				};
			});
		},
		require : function (files){
			for (var i = 0; i < files.length; i++) {
				var file = this.dir+files[i]+this.engine;
				var s = $.createElement('script');
    			if(this.exists(file)){
					s.setAttribute('src',file);
					$.head.appendChild(s);
    			}else{
    				console.log(file + " not found!!");
    			}
			};
		},
		iterate : function (obj){
			for(var item in obj){
				if (obj.hasOwnProperty(item)) {
					switch(item){
						case 'require' : this.require(obj[item]);
						break;
						case 'engine' : this.engine = '.'+obj[item];
						break;
						case 'dir' : this.dir = obj[item];
						default : return("Awwwww..."+ item.toUpperCase() + " not found!!!");
					}
				};
			}
		},
		exists : function(url) {
			var xmlhttp;
			if (window.XMLHttpRequest){
			    xmlhttp=new XMLHttpRequest();
			}
			else{
			    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
	    	xmlhttp.open('HEAD', url, false);
	    	xmlhttp.send();
	    	return xmlhttp.status!=404;
		}
	};	
	return _binder;
})();
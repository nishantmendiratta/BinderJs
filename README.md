## BinderJS :: An Includer
##### JavaScript files can be included in HTML page using BinderJs functions.
###Documentation :
- Configure BinderJs using <b>CONFIG</b> function. It takes following options.
<ul>
<li><b>dir</b> :- Specify the directory of all required files, By default it takes '/'</li>
<li><b>engine</b> :- Specify extension of files, By default it takes '.js'</li>
</ul>
<pre>
<code>
  Binder.config({
	dir : './assets/js/'
  });
</code>
</pre> 
- Initialize BinderJs using <b>INIT</b> function. It takes following options.
<ul>
<li><b>require</b> :- Specify all required files in array format.</li>
</ul>
<pre>
<code>
Binder.init({
	require : ['hello','example','awesome','etc']
  });
</code>
</pre>
- Calling functions of included files.
<ul>
<li>
This will work only if page is fully loaded, you can use following funtion to check if window is loaded or not.
</li>
</ul>
<pre>
<code>
 window.onload = (function (oldOnLoad) {
	return function () {
	    if (oldOnLoad) { 
	       olOnLoad();
	    }
	    /*calling a function of hello.js*/
	    hello.world();
	}
 })(window.onload);
</code>
</pre>

###TODO
<ul>
<li>
Remove warning - "Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check http://xhr.spec.whatwg.org/".
</li>
</ul>

<small>© binderjs.herokuapp.com, 2015 · <a href='https://github.com/nishantmendiratta/BinderJs'>GIT Repo</a> · Author, <a href='http://github.com/nishantmendiratta'>Nishant Mendiratta</a></small>
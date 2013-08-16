/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
 ;(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);

/*
 * Lazy Mouse
 * By: Hasin Hayder
 * License: MIT License
 * Date: 16th August, 2013
 */

 ;(function($){
 	var defaults = {
 		delay: 3000,
 	}
 	var opts;
 	$.LazyMouse = function(options){
 		opts = $.extend(defaults,options);
 		$("body")
 		.mousemove($.debounce( 100, true, function(e){
 			$("body").trigger("mouse.active");
 		}))
 		.mousemove( $.debounce( opts.delay, false, function(e){
 			$("body").trigger("mouse.inactive");
 		}));
 	}
 })(jQuery);
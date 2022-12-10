/*!
 * Isotope PACKAGED v2.0.0
 * Filter & sort magical layouts
 * http://isotope.metafizzy.co
 */

 /* 
  * Namespace changed by David Blanco to IsotopeMB
  */

(function(e){function n(){}function r(e){function r(t){if(t.prototype.option){return}t.prototype.option=function(t){if(!e.isPlainObject(t)){return}this.options=e.extend(true,this.options,t)}}function s(n,r){e.fn[n]=function(s){if(typeof s==="string"){var o=t.call(arguments,1);for(var u=0,a=this.length;u<a;u++){var f=this[u];var l=e.data(f,n);if(!l){i("cannot call methods on "+n+" prior to initialization; "+"attempted to call '"+s+"'");continue}if(!e.isFunction(l[s])||s.charAt(0)==="_"){i("no such method '"+s+"' for "+n+" instance");continue}var c=l[s].apply(l,o);if(c!==undefined){return c}}return this}else{return this.each(function(){var t=e.data(this,n);if(t){t.option(s);t._init()}else{t=new r(this,s);e.data(this,n,t)}})}}}if(!e){return}var i=typeof console==="undefined"?n:function(e){console.error(e)};e.bridget=function(e,t){r(t);s(e,t)};return e.bridget}var t=Array.prototype.slice;if(typeof define==="function"&&define.amd){define("jquery-bridget/jquery.bridget",["jquery"],r)}else{r(e.jQuery)}})(window);(function(e){function r(t){var n=e.event;n.target=n.target||n.srcElement||t;return n}var t=document.documentElement;var n=function(){};if(t.addEventListener){n=function(e,t,n){e.addEventListener(t,n,false)}}else if(t.attachEvent){n=function(e,t,n){e[t+n]=n.handleEvent?function(){var t=r(e);n.handleEvent.call(n,t)}:function(){var t=r(e);n.call(e,t)};e.attachEvent("on"+t,e[t+n])}}var i=function(){};if(t.removeEventListener){i=function(e,t,n){e.removeEventListener(t,n,false)}}else if(t.detachEvent){i=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(r){e[t+n]=undefined}}}var s={bind:n,unbind:i};if(typeof define==="function"&&define.amd){define("eventie/eventie",s)}else if(typeof exports==="object"){module.exports=s}else{e.eventie=s}})(this);(function(e){function r(e){if(typeof e!=="function"){return}if(r.isReady){e()}else{n.push(e)}}function i(e){var i=e.type==="readystatechange"&&t.readyState!=="complete";if(r.isReady||i){return}r.isReady=true;for(var s=0,o=n.length;s<o;s++){var u=n[s];u()}}function s(n){n.bind(t,"DOMContentLoaded",i);n.bind(t,"readystatechange",i);n.bind(e,"load",i);return r}var t=e.document;var n=[];r.isReady=false;if(typeof define==="function"&&define.amd){r.isReady=typeof requirejs==="function";define("doc-ready/doc-ready",["eventie/eventie"],s)}else{e.docReady=s(e.eventie)}})(this);(function(){function e(){}function i(e,t){var n=e.length;while(n--){if(e[n].listener===t){return n}}return-1}function s(e){return function(){return this[e].apply(this,arguments)}}var t=e.prototype;var n=this;var r=n.EventEmitter;t.getListeners=function(t){var n=this._getEvents();var r;var i;if(t instanceof RegExp){r={};for(i in n){if(n.hasOwnProperty(i)&&t.test(i)){r[i]=n[i]}}}else{r=n[t]||(n[t]=[])}return r};t.flattenListeners=function(t){var n=[];var r;for(r=0;r<t.length;r+=1){n.push(t[r].listener)}return n};t.getListenersAsObject=function(t){var n=this.getListeners(t);var r;if(n instanceof Array){r={};r[t]=n}return r||n};t.addListener=function(t,n){var r=this.getListenersAsObject(t);var s=typeof n==="object";var o;for(o in r){if(r.hasOwnProperty(o)&&i(r[o],n)===-1){r[o].push(s?n:{listener:n,once:false})}}return this};t.on=s("addListener");t.addOnceListener=function(t,n){return this.addListener(t,{listener:n,once:true})};t.once=s("addOnceListener");t.defineEvent=function(t){this.getListeners(t);return this};t.defineEvents=function(t){for(var n=0;n<t.length;n+=1){this.defineEvent(t[n])}return this};t.removeListener=function(t,n){var r=this.getListenersAsObject(t);var s;var o;for(o in r){if(r.hasOwnProperty(o)){s=i(r[o],n);if(s!==-1){r[o].splice(s,1)}}}return this};t.off=s("removeListener");t.addListeners=function(t,n){return this.manipulateListeners(false,t,n)};t.removeListeners=function(t,n){return this.manipulateListeners(true,t,n)};t.manipulateListeners=function(t,n,r){var i;var s;var o=t?this.removeListener:this.addListener;var u=t?this.removeListeners:this.addListeners;if(typeof n==="object"&&!(n instanceof RegExp)){for(i in n){if(n.hasOwnProperty(i)&&(s=n[i])){if(typeof s==="function"){o.call(this,i,s)}else{u.call(this,i,s)}}}}else{i=r.length;while(i--){o.call(this,n,r[i])}}return this};t.removeEvent=function(t){var n=typeof t;var r=this._getEvents();var i;if(n==="string"){delete r[t]}else if(t instanceof RegExp){for(i in r){if(r.hasOwnProperty(i)&&t.test(i)){delete r[i]}}}else{delete this._events}return this};t.removeAllListeners=s("removeEvent");t.emitEvent=function(t,n){var r=this.getListenersAsObject(t);var i;var s;var o;var u;for(o in r){if(r.hasOwnProperty(o)){s=r[o].length;while(s--){i=r[o][s];if(i.once===true){this.removeListener(t,i.listener)}u=i.listener.apply(this,n||[]);if(u===this._getOnceReturnValue()){this.removeListener(t,i.listener)}}}}return this};t.trigger=s("emitEvent");t.emit=function(t){var n=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,n)};t.setOnceReturnValue=function(t){this._onceReturnValue=t;return this};t._getOnceReturnValue=function(){if(this.hasOwnProperty("_onceReturnValue")){return this._onceReturnValue}else{return true}};t._getEvents=function(){return this._events||(this._events={})};e.noConflict=function(){n.EventEmitter=r;return e};if(typeof define==="function"&&define.amd){define("eventEmitter/EventEmitter",[],function(){return e})}else if(typeof module==="object"&&module.exports){module.exports=e}else{this.EventEmitter=e}}).call(this);(function(e){function r(e){if(!e){return}if(typeof n[e]==="string"){return e}e=e.charAt(0).toUpperCase()+e.slice(1);var r;for(var i=0,s=t.length;i<s;i++){r=t[i]+e;if(typeof n[r]==="string"){return r}}}var t="Webkit Moz ms Ms O".split(" ");var n=document.documentElement.style;if(typeof define==="function"&&define.amd){define("get-style-property/get-style-property",[],function(){return r})}else if(typeof exports==="object"){module.exports=r}else{e.getStyleProperty=r}})(window);(function(e,t){function i(e){var t=parseFloat(e);var n=e.indexOf("%")===-1&&!isNaN(t);return n&&t}function o(){var e={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0};for(var t=0,n=s.length;t<n;t++){var r=s[t];e[r]=0}return e}function u(e){function a(e){if(typeof e==="string"){e=document.querySelector(e)}if(!e||typeof e!=="object"||!e.nodeType){return}var n=r(e);if(n.display==="none"){return o()}var a={};a.width=e.offsetWidth;a.height=e.offsetHeight;var l=a.isBorderBox=!!(t&&n[t]&&n[t]==="border-box");for(var c=0,h=s.length;c<h;c++){var p=s[c];var d=n[p];d=f(e,d);var v=parseFloat(d);a[p]=!isNaN(v)?v:0}var m=a.paddingLeft+a.paddingRight;var g=a.paddingTop+a.paddingBottom;var y=a.marginLeft+a.marginRight;var b=a.marginTop+a.marginBottom;var w=a.borderLeftWidth+a.borderRightWidth;var E=a.borderTopWidth+a.borderBottomWidth;var S=l&&u;var x=i(n.width);if(x!==false){a.width=x+(S?0:m+w)}var T=i(n.height);if(T!==false){a.height=T+(S?0:g+E)}a.innerWidth=a.width-(m+w);a.innerHeight=a.height-(g+E);a.outerWidth=a.width+y;a.outerHeight=a.height+b;return a}function f(e,t){if(n||t.indexOf("%")===-1){return t}var r=e.style;var i=r.left;var s=e.runtimeStyle;var o=s&&s.left;if(o){s.left=e.currentStyle.left}r.left=t;t=r.pixelLeft;r.left=i;if(o){s.left=o}return t}var t=e("boxSizing");var u;(function(){if(!t){return}var e=document.createElement("div");e.style.width="200px";e.style.padding="1px 2px 3px 4px";e.style.borderStyle="solid";e.style.borderWidth="1px 2px 3px 4px";e.style[t]="border-box";var n=document.body||document.documentElement;n.appendChild(e);var s=r(e);u=i(s.width)===200;n.removeChild(e)})();return a}var n=e.getComputedStyle;var r=n?function(e){return n(e,null)}:function(e){return e.currentStyle};var s=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];if(typeof define==="function"&&define.amd){define("get-size/get-size",["get-style-property/get-style-property"],u)}else if(typeof exports==="object"){module.exports=u(require("get-style-property"))}else{e.getSize=u(e.getStyleProperty)}})(window);(function(e,t){function r(e,t){return e[n](t)}function i(e){if(e.parentNode){return}var t=document.createDocumentFragment();t.appendChild(e)}function s(e,t){i(e);var n=e.parentNode.querySelectorAll(t);for(var r=0,s=n.length;r<s;r++){if(n[r]===e){return true}}return false}function o(e,t){i(e);return r(e,t)}var n=function(){if(t.matchesSelector){return"matchesSelector"}var e=["webkit","moz","ms","o"];for(var n=0,r=e.length;n<r;n++){var i=e[n];var s=i+"MatchesSelector";if(t[s]){return s}}}();var u;if(n){var a=document.createElement("div");var f=r(a,"div");u=f?r:o}else{u=s}if(typeof define==="function"&&define.amd){define("matches-selector/matches-selector",[],function(){return u})}else{window.matchesSelector=u}})(this,Element.prototype);(function(e){function r(e,t){for(var n in t){e[n]=t[n]}return e}function i(e){for(var t in e){return false}t=null;return true}function s(e){return e.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})}function o(e,t,o){function d(e,t){if(!e){return}this.element=e;this.layout=t;this.position={x:0,y:0};this._create()}var u=o("transition");var a=o("transform");var f=u&&a;var l=!!o("perspective");var c={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[u];var h=["transform","transition","transitionDuration","transitionProperty"];var p=function(){var e={};for(var t=0,n=h.length;t<n;t++){var r=h[t];var i=o(r);if(i&&i!==r){e[r]=i}}return e}();r(d.prototype,e.prototype);d.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}};this.css({position:"absolute"})};d.prototype.handleEvent=function(e){var t="on"+e.type;if(this[t]){this[t](e)}};d.prototype.getSize=function(){this.size=t(this.element)};d.prototype.css=function(e){var t=this.element.style;for(var n in e){var r=p[n]||n;t[r]=e[n]}};d.prototype.getPosition=function(){var e=n(this.element);var t=this.layout.options;var r=t.isOriginLeft;var i=t.isOriginTop;var s=parseInt(e[r?"left":"right"],10);var o=parseInt(e[i?"top":"bottom"],10);s=isNaN(s)?0:s;o=isNaN(o)?0:o;var u=this.layout.size;s-=r?u.paddingLeft:u.paddingRight;o-=i?u.paddingTop:u.paddingBottom;this.position.x=s;this.position.y=o};d.prototype.layoutPosition=function(){var e=this.layout.size;var t=this.layout.options;var n={};if(t.isOriginLeft){n.left=this.position.x+e.paddingLeft+"px";n.right=""}else{n.right=this.position.x+e.paddingRight+"px";n.left=""}if(t.isOriginTop){n.top=this.position.y+e.paddingTop+"px";n.bottom=""}else{n.bottom=this.position.y+e.paddingBottom+"px";n.top=""}this.css(n);this.emitEvent("layout",[this])};var v=l?function(e,t){return"translate3d("+e+"px, "+t+"px, 0)"}:function(e,t){return"translate("+e+"px, "+t+"px)"};d.prototype._transitionTo=function(e,t){this.getPosition();var n=this.position.x;var r=this.position.y;var i=parseInt(e,10);var s=parseInt(t,10);var o=i===this.position.x&&s===this.position.y;this.setPosition(e,t);if(o&&!this.isTransitioning){this.layoutPosition();return}var u=e-n;var a=t-r;var f={};var l=this.layout.options;u=l.isOriginLeft?u:-u;a=l.isOriginTop?a:-a;f.transform=v(u,a);this.transition({to:f,onTransitionEnd:{transform:this.layoutPosition},isCleaning:true})};d.prototype.goTo=function(e,t){this.setPosition(e,t);this.layoutPosition()};d.prototype.moveTo=f?d.prototype._transitionTo:d.prototype.goTo;d.prototype.setPosition=function(e,t){this.position.x=parseInt(e,10);this.position.y=parseInt(t,10)};d.prototype._nonTransition=function(e){this.css(e.to);if(e.isCleaning){this._removeStyles(e.to)}for(var t in e.onTransitionEnd){e.onTransitionEnd[t].call(this)}};d.prototype._transition=function(e){if(!parseFloat(this.layout.options.transitionDuration)){this._nonTransition(e);return}var t=this._transn;for(var n in e.onTransitionEnd){t.onEnd[n]=e.onTransitionEnd[n]}for(n in e.to){t.ingProperties[n]=true;if(e.isCleaning){t.clean[n]=true}}if(e.from){this.css(e.from);var r=this.element.offsetHeight;r=null}this.enableTransition(e.to);this.css(e.to);this.isTransitioning=true};var m=a&&s(a)+",opacity";d.prototype.enableTransition=function(){if(this.isTransitioning){return}this.css({transitionProperty:m,transitionDuration:this.layout.options.transitionDuration});this.element.addEventListener(c,this,false)};d.prototype.transition=d.prototype[u?"_transition":"_nonTransition"];d.prototype.onwebkitTransitionEnd=function(e){this.ontransitionend(e)};d.prototype.onotransitionend=function(e){this.ontransitionend(e)};var g={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};d.prototype.ontransitionend=function(e){if(e.target!==this.element){return}var t=this._transn;var n=g[e.propertyName]||e.propertyName;delete t.ingProperties[n];if(i(t.ingProperties)){this.disableTransition()}if(n in t.clean){this.element.style[e.propertyName]="";delete t.clean[n]}if(n in t.onEnd){var r=t.onEnd[n];r.call(this);delete t.onEnd[n]}this.emitEvent("transitionEnd",[this])};d.prototype.disableTransition=function(){this.removeTransitionStyles();this.element.removeEventListener(c,this,false);this.isTransitioning=false};d.prototype._removeStyles=function(e){var t={};for(var n in e){t[n]=""}this.css(t)};var y={transitionProperty:"",transitionDuration:""};d.prototype.removeTransitionStyles=function(){this.css(y)};d.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element);this.emitEvent("remove",[this])};d.prototype.remove=function(){if(!u||!parseFloat(this.layout.options.transitionDuration)){this.removeElem();return}var e=this;this.on("transitionEnd",function(){e.removeElem();return true});this.hide()};d.prototype.reveal=function(){delete this.isHidden;this.css({display:""});var e=this.layout.options;this.transition({from:e.hiddenStyle,to:e.visibleStyle,isCleaning:true})};d.prototype.hide=function(){this.isHidden=true;this.css({display:""});var e=this.layout.options;this.transition({from:e.visibleStyle,to:e.hiddenStyle,isCleaning:true,onTransitionEnd:{opacity:function(){if(this.isHidden){this.css({display:"none"})}}}})};d.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})};return d}var t=e.getComputedStyle;var n=t?function(e){return t(e,null)}:function(e){return e.currentStyle};if(typeof define==="function"&&define.amd){define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property"],o)}else{e.Outlayer={};e.Outlayer.Item=o(e.EventEmitter,e.getSize,e.getStyleProperty)}})(window);(function(e){function s(e,t){for(var n in t){e[n]=t[n]}return e}function u(e){return o.call(e)==="[object Array]"}function a(e){var t=[];if(u(e)){t=e}else if(e&&typeof e.length==="number"){for(var n=0,r=e.length;n<r;n++){t.push(e[n])}}else{t.push(e)}return t}function c(e,t){var n=l(t,e);if(n!==-1){t.splice(n,1)}}function h(e){return e.replace(/(.)([A-Z])/g,function(e,t,n){return t+"-"+n}).toLowerCase()}function p(o,u,l,p,d,v){function y(e,r){if(typeof e==="string"){e=t.querySelector(e)}if(!e||!f(e)){if(n){n.error("Bad "+this.constructor.namespace+" element: "+e)}return}this.element=e;this.options=s({},this.constructor.defaults);this.option(r);var i=++m;this.element.outlayerGUID=i;g[i]=this;this._create();if(this.options.isInitLayout){this.layout()}}var m=0;var g={};y.namespace="outlayer";y.Item=v;y.defaults={containerStyle:{position:"relative"},isInitLayout:true,isOriginLeft:true,isOriginTop:true,isResizeBound:true,isResizingContainer:true,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};s(y.prototype,l.prototype);y.prototype.option=function(e){s(this.options,e)};y.prototype._create=function(){this.reloadItems();this.stamps=[];this.stamp(this.options.stamp);s(this.element.style,this.options.containerStyle);if(this.options.isResizeBound){this.bindResize()}};y.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)};y.prototype._itemize=function(e){var t=this._filterFindItemElements(e);var n=this.constructor.Item;var r=[];for(var i=0,s=t.length;i<s;i++){var o=t[i];var u=new n(o,this);r.push(u)}return r};y.prototype._filterFindItemElements=function(e){e=a(e);var t=this.options.itemSelector;var n=[];for(var r=0,i=e.length;r<i;r++){var s=e[r];if(!f(s)){continue}if(t){if(d(s,t)){n.push(s)}var o=s.querySelectorAll(t);for(var u=0,l=o.length;u<l;u++){n.push(o[u])}}else{n.push(s)}}return n};y.prototype.getItemElements=function(){var e=[];for(var t=0,n=this.items.length;t<n;t++){e.push(this.items[t].element)}return e};y.prototype.layout=function(){this._resetLayout();this._manageStamps();var e=this.options.isLayoutInstant!==undefined?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,e);this._isLayoutInited=true};y.prototype._init=y.prototype.layout;y.prototype._resetLayout=function(){this.getSize()};y.prototype.getSize=function(){this.size=p(this.element)};y.prototype._getMeasurement=function(e,t){var n=this.options[e];var r;if(!n){this[e]=0}else{if(typeof n==="string"){r=this.element.querySelector(n)}else if(f(n)){r=n}this[e]=r?p(r)[t]:n}};y.prototype.layoutItems=function(e,t){e=this._getItemsForLayout(e);this._layoutItems(e,t);this._postLayout()};y.prototype._getItemsForLayout=function(e){var t=[];for(var n=0,r=e.length;n<r;n++){var i=e[n];if(!i.isIgnored){t.push(i)}}return t};y.prototype._layoutItems=function(e,t){function r(){n.emitEvent("layoutComplete",[n,e])}var n=this;if(!e||!e.length){r();return}this._itemsOn(e,"layout",r);var i=[];for(var s=0,o=e.length;s<o;s++){var u=e[s];var a=this._getItemLayoutPosition(u);a.item=u;a.isInstant=t||u.isLayoutInstant;i.push(a)}this._processLayoutQueue(i)};y.prototype._getItemLayoutPosition=function(){return{x:0,y:0}};y.prototype._processLayoutQueue=function(e){for(var t=0,n=e.length;t<n;t++){var r=e[t];this._positionItem(r.item,r.x,r.y,r.isInstant)}};y.prototype._positionItem=function(e,t,n,r){if(r){e.goTo(t,n)}else{e.moveTo(t,n)}};y.prototype._postLayout=function(){this.resizeContainer()};y.prototype.resizeContainer=function(){if(!this.options.isResizingContainer){return}var e=this._getContainerSize();if(e){this._setContainerMeasure(e.width,true);this._setContainerMeasure(e.height,false)}};y.prototype._getContainerSize=i;y.prototype._setContainerMeasure=function(e,t){if(e===undefined){return}var n=this.size;if(n.isBorderBox){e+=t?n.paddingLeft+n.paddingRight+n.borderLeftWidth+n.borderRightWidth:n.paddingBottom+n.paddingTop+n.borderTopWidth+n.borderBottomWidth}e=Math.max(e,0);this.element.style[t?"width":"height"]=e+"px"};y.prototype._itemsOn=function(e,t,n){function o(){r++;if(r===i){n.call(s)}return true}var r=0;var i=e.length;var s=this;for(var u=0,a=e.length;u<a;u++){var f=e[u];f.on(t,o)}};y.prototype.ignore=function(e){var t=this.getItem(e);if(t){t.isIgnored=true}};y.prototype.unignore=function(e){var t=this.getItem(e);if(t){delete t.isIgnored}};y.prototype.stamp=function(e){e=this._find(e);if(!e){return}this.stamps=this.stamps.concat(e);for(var t=0,n=e.length;t<n;t++){var r=e[t];this.ignore(r)}};y.prototype.unstamp=function(e){e=this._find(e);if(!e){return}for(var t=0,n=e.length;t<n;t++){var r=e[t];c(r,this.stamps);this.unignore(r)}};y.prototype._find=function(e){if(!e){return}if(typeof e==="string"){e=this.element.querySelectorAll(e)}e=a(e);return e};y.prototype._manageStamps=function(){if(!this.stamps||!this.stamps.length){return}this._getBoundingRect();for(var e=0,t=this.stamps.length;e<t;e++){var n=this.stamps[e];this._manageStamp(n)}};y.prototype._getBoundingRect=function(){var e=this.element.getBoundingClientRect();var t=this.size;this._boundingRect={left:e.left+t.paddingLeft+t.borderLeftWidth,top:e.top+t.paddingTop+t.borderTopWidth,right:e.right-(t.paddingRight+t.borderRightWidth),bottom:e.bottom-(t.paddingBottom+t.borderBottomWidth)}};y.prototype._manageStamp=i;y.prototype._getElementOffset=function(e){var t=e.getBoundingClientRect();var n=this._boundingRect;var r=p(e);var i={left:t.left-n.left-r.marginLeft,top:t.top-n.top-r.marginTop,right:n.right-t.right-r.marginRight,bottom:n.bottom-t.bottom-r.marginBottom};return i};y.prototype.handleEvent=function(e){var t="on"+e.type;if(this[t]){this[t](e)}};y.prototype.bindResize=function(){if(this.isResizeBound){return}o.bind(e,"resize",this);this.isResizeBound=true};y.prototype.unbindResize=function(){if(this.isResizeBound){o.unbind(e,"resize",this)}this.isResizeBound=false};y.prototype.onresize=function(){function t(){e.resize();delete e.resizeTimeout}if(this.resizeTimeout){clearTimeout(this.resizeTimeout)}var e=this;this.resizeTimeout=setTimeout(t,100)};y.prototype.resize=function(){if(!this.isResizeBound||!this.needsResizeLayout()){return}this.layout()};y.prototype.needsResizeLayout=function(){var e=p(this.element);var t=this.size&&e;return t&&e.innerWidth!==this.size.innerWidth};y.prototype.addItems=function(e){var t=this._itemize(e);if(t.length){this.items=this.items.concat(t)}return t};y.prototype.appended=function(e){var t=this.addItems(e);if(!t.length){return}this.layoutItems(t,true);this.reveal(t)};y.prototype.prepended=function(e){var t=this._itemize(e);if(!t.length){return}var n=this.items.slice(0);this.items=t.concat(n);this._resetLayout();this._manageStamps();this.layoutItems(t,true);this.reveal(t);this.layoutItems(n)};y.prototype.reveal=function(e){var t=e&&e.length;if(!t){return}for(var n=0;n<t;n++){var r=e[n];r.reveal()}};y.prototype.hide=function(e){var t=e&&e.length;if(!t){return}for(var n=0;n<t;n++){var r=e[n];r.hide()}};y.prototype.getItem=function(e){for(var t=0,n=this.items.length;t<n;t++){var r=this.items[t];if(r.element===e){return r}}};y.prototype.getItems=function(e){if(!e||!e.length){return}var t=[];for(var n=0,r=e.length;n<r;n++){var i=e[n];var s=this.getItem(i);if(s){t.push(s)}}return t};y.prototype.remove=function(e){e=a(e);var t=this.getItems(e);if(!t||!t.length){return}this._itemsOn(t,"remove",function(){this.emitEvent("removeComplete",[this,t])});for(var n=0,r=t.length;n<r;n++){var i=t[n];i.remove();c(i,this.items)}};y.prototype.destroy=function(){var e=this.element.style;e.height="";e.position="";e.width="";for(var t=0,n=this.items.length;t<n;t++){var i=this.items[t];i.destroy()}this.unbindResize();delete this.element.outlayerGUID;if(r){r.removeData(this.element,this.constructor.namespace)}};y.data=function(e){var t=e&&e.outlayerGUID;return t&&g[t]};y.create=function(e,i){function o(){y.apply(this,arguments)}if(Object.create){o.prototype=Object.create(y.prototype)}else{s(o.prototype,y.prototype)}o.prototype.constructor=o;o.defaults=s({},y.defaults);s(o.defaults,i);o.prototype.settings={};o.namespace=e;o.data=y.data;o.Item=function(){v.apply(this,arguments)};o.Item.prototype=new v;u(function(){var i=h(e);var s=t.querySelectorAll(".js-"+i);var u="data-"+i+"-options";for(var a=0,f=s.length;a<f;a++){var l=s[a];var c=l.getAttribute(u);var p;try{p=c&&JSON.parse(c)}catch(d){if(n){n.error("Error parsing "+u+" on "+l.nodeName.toLowerCase()+(l.id?"#"+l.id:"")+": "+d)}continue}var v=new o(l,p);if(r){r.data(l,e,v)}}});if(r&&r.bridget){r.bridget(e,o)}return o};y.Item=v;return y}var t=e.document;var n=e.console;var r=e.jQuery;var i=function(){};var o=Object.prototype.toString;var f=typeof HTMLElement==="object"?function(t){return t instanceof HTMLElement}:function(t){return t&&typeof t==="object"&&t.nodeType===1&&typeof t.nodeName==="string"};var l=Array.prototype.indexOf?function(e,t){return e.indexOf(t)}:function(e,t){for(var n=0,r=e.length;n<r;n++){if(e[n]===t){return n}}return-1};if(typeof define==="function"&&define.amd){define("outlayer/outlayer",["eventie/eventie","doc-ready/doc-ready","eventEmitter/EventEmitter","get-size/get-size","matches-selector/matches-selector","./item"],p)}else{e.Outlayer=p(e.eventie,e.docReady,e.EventEmitter,e.getSize,e.matchesSelector,e.Outlayer.Item)}})(window);(function(e){function t(e){function t(){e.Item.apply(this,arguments)}t.prototype=new e.Item;t.prototype._create=function(){this.id=this.layout.itemGUID++;e.Item.prototype._create.call(this);this.sortData={}};t.prototype.updateSortData=function(){if(this.isIgnored){return}this.sortData.id=this.id;this.sortData["original-order"]=this.id;this.sortData.random=Math.random();var e=this.layout.options.getSortData;var t=this.layout._sorters;for(var n in e){var r=t[n];this.sortData[n]=r(this.element,this)}};return t}if(typeof define==="function"&&define.amd){define("isotopeMB/js/item",["outlayer/outlayer"],t)}else{e.IsotopeMB=e.IsotopeMB||{};e.IsotopeMB.Item=t(e.Outlayer)}})(window);(function(e){function t(e,t){function n(e){this.isotopeMB=e;if(e){this.options=e.options[this.namespace];this.element=e.element;this.items=e.filteredItems;this.size=e.size}}(function(){function o(e){return function(){return t.prototype[e].apply(this.isotopeMB,arguments)}}var e=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout"];for(var r=0,i=e.length;r<i;r++){var s=e[r];n.prototype[s]=o(s)}})();n.prototype.needsVerticalResizeLayout=function(){var t=e(this.isotopeMB.element);var n=this.isotopeMB.size&&t;return n&&t.innerHeight!==this.isotopeMB.size.innerHeight};n.prototype._getMeasurement=function(){this.isotopeMB._getMeasurement.apply(this,arguments)};n.prototype.getColumnWidth=function(){this.getSegmentSize("column","Width")};n.prototype.getRowHeight=function(){this.getSegmentSize("row","Height")};n.prototype.getSegmentSize=function(e,t){var n=e+t;var r="outer"+t;this._getMeasurement(n,r);if(this[n]){return}var i=this.getFirstItemSize();this[n]=i&&i[r]||this.isotopeMB.size["inner"+t]};n.prototype.getFirstItemSize=function(){var t=this.isotopeMB.filteredItems[0];return t&&t.element&&e(t.element)};n.prototype.layout=function(){this.isotopeMB.layout.apply(this.isotopeMB,arguments)};n.prototype.getSize=function(){this.isotopeMB.getSize();this.size=this.isotopeMB.size};n.modes={};n.create=function(e,t){function r(){n.apply(this,arguments)}r.prototype=new n;if(t){r.options=t}r.prototype.namespace=e;n.modes[e]=r;return r};return n}if(typeof define==="function"&&define.amd){define("isotopeMB/js/layout-mode",["get-size/get-size","outlayer/outlayer"],t)}else{e.IsotopeMB=e.IsotopeMB||{};e.IsotopeMB.LayoutMode=t(e.getSize,e.Outlayer)}})(window);(function(e){function n(e,n){var r=e.create("masonry");r.prototype._resetLayout=function(){this.getSize();this._getMeasurement("columnWidth","outerWidth");this._getMeasurement("gutter","outerWidth");this.measureColumns();var e=this.cols;this.colYs=[];while(e--){this.colYs.push(0)}this.maxY=0};r.prototype.measureColumns=function(){this.getContainerWidth();if(!this.columnWidth){var e=this.items[0];var t=e&&e.element;this.columnWidth=t&&n(t).outerWidth||this.containerWidth}this.columnWidth+=this.gutter;this.cols=Math.floor((this.containerWidth+this.gutter)/this.columnWidth);this.cols=Math.max(this.cols,1)};r.prototype.getContainerWidth=function(){var e=this.options.isFitWidth?this.element.parentNode:this.element;var t=n(e);this.containerWidth=t&&t.innerWidth};r.prototype._getItemLayoutPosition=function(e){e.getSize();var n=e.size.outerWidth%this.columnWidth;var r=n&&n<1?"round":"ceil";var i=Math[r](e.size.outerWidth/this.columnWidth);i=Math.min(i,this.cols);var s=this._getColGroup(i);var o=Math.min.apply(Math,s);var u=t(s,o);var a={x:this.columnWidth*u,y:o};var f=o+e.size.outerHeight;var l=this.cols+1-s.length;for(var c=0;c<l;c++){this.colYs[u+c]=f}return a};r.prototype._getColGroup=function(e){if(e<2){return this.colYs}var t=[];var n=this.cols+1-e;for(var r=0;r<n;r++){var i=this.colYs.slice(r,r+e);t[r]=Math.max.apply(Math,i)}return t};r.prototype._manageStamp=function(e){var t=n(e);var r=this._getElementOffset(e);var i=this.options.isOriginLeft?r.left:r.right;var s=i+t.outerWidth;var o=Math.floor(i/this.columnWidth);o=Math.max(0,o);var u=Math.floor(s/this.columnWidth);u-=s%this.columnWidth?0:1;u=Math.min(this.cols-1,u);var a=(this.options.isOriginTop?r.top:r.bottom)+t.outerHeight;for(var f=o;f<=u;f++){this.colYs[f]=Math.max(a,this.colYs[f])}};r.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var e={height:this.maxY};if(this.options.isFitWidth){e.width=this._getContainerFitWidth()}return e};r.prototype._getContainerFitWidth=function(){var e=0;var t=this.cols;while(--t){if(this.colYs[t]!==0){break}e++}return(this.cols-e)*this.columnWidth-this.gutter};r.prototype.needsResizeLayout=function(){var e=this.containerWidth;this.getContainerWidth();return e!==this.containerWidth};return r}var t=Array.prototype.indexOf?function(e,t){return e.indexOf(t)}:function(e,t){for(var n=0,r=e.length;n<r;n++){var i=e[n];if(i===t){return n}}return-1};if(typeof define==="function"&&define.amd){define("masonry/masonry",["outlayer/outlayer","get-size/get-size"],n)}else{e.Masonry=n(e.Outlayer,e.getSize)}})(window);(function(e){function t(e,t){for(var n in t){e[n]=t[n]}return e}function n(e,n){var r=e.create("masonry");var i=r.prototype._getElementOffset;var s=r.prototype.layout;var o=r.prototype._getMeasurement;t(r.prototype,n.prototype);r.prototype._getElementOffset=i;r.prototype.layout=s;r.prototype._getMeasurement=o;var u=r.prototype.measureColumns;r.prototype.measureColumns=function(){this.items=this.isotopeMB.filteredItems;u.call(this)};var a=r.prototype._manageStamp;r.prototype._manageStamp=function(){this.options.isOriginLeft=this.isotopeMB.options.isOriginLeft;this.options.isOriginTop=this.isotopeMB.options.isOriginTop;a.apply(this,arguments)};return r}if(typeof define==="function"&&define.amd){define("isotopeMB/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],n)}else{n(e.IsotopeMB.LayoutMode,e.Masonry)}})(window);(function(e){function t(e){var t=e.create("fitRows");t.prototype._resetLayout=function(){this.x=0;this.y=0;this.maxY=0};t.prototype._getItemLayoutPosition=function(e){e.getSize();if(this.x!==0&&e.size.outerWidth+this.x>this.isotopeMB.size.innerWidth){this.x=0;this.y=this.maxY}var t={x:this.x,y:this.y};this.maxY=Math.max(this.maxY,this.y+e.size.outerHeight);this.x+=e.size.outerWidth;return t};t.prototype._getContainerSize=function(){return{height:this.maxY}};return t}if(typeof define==="function"&&define.amd){define("isotopeMB/js/layout-modes/fit-rows",["../layout-mode"],t)}else{t(e.IsotopeMB.LayoutMode)}})(window);(function(e){function t(e){var t=e.create("vertical",{horizontalAlignment:0});t.prototype._resetLayout=function(){this.y=0};t.prototype._getItemLayoutPosition=function(e){e.getSize();var t=(this.isotopeMB.size.innerWidth-e.size.outerWidth)*this.options.horizontalAlignment;var n=this.y;this.y+=e.size.outerHeight;return{x:t,y:n}};t.prototype._getContainerSize=function(){return{height:this.y}};return t}if(typeof define==="function"&&define.amd){define("isotopeMB/js/layout-modes/vertical",["../layout-mode"],t)}else{t(e.IsotopeMB.LayoutMode)}})(window);(function(e){function n(e,t){for(var n in t){e[n]=t[n]}return e}function u(e){return o.call(e)==="[object Array]"}function f(e){var t=[];if(u(e)){t=e}else if(e&&typeof e.length==="number"){for(var n=0,r=e.length;n<r;n++){t.push(e[n])}}else{t.push(e)}return t}function l(e,t){var n=a(t,e);if(n!==-1){t.splice(n,1)}}function c(e,i,o,u,a){function p(e,t){return function(r,i){for(var s=0,o=e.length;s<o;s++){var u=e[s];var a=r.sortData[u];var f=i.sortData[u];if(a>f||a<f){var l=t[u]!==undefined?t[u]:t;var c=l?1:-1;return(a>f?1:-1)*c}}return 0}}var c=e.create("isotopeMB",{layoutMode:"masonry",isJQueryFiltering:true,sortAscending:true});c.Item=u;c.LayoutMode=a;c.prototype._create=function(){this.itemGUID=0;this._sorters={};this._getSorters();e.prototype._create.call(this);this.modes={};this.filteredItems=this.items;this.sortHistory=["original-order"];for(var t in a.modes){this._initLayoutMode(t)}};c.prototype.reloadItems=function(){this.itemGUID=0;e.prototype.reloadItems.call(this)};c.prototype._itemize=function(){var t=e.prototype._itemize.apply(this,arguments);for(var n=0,r=t.length;n<r;n++){var i=t[n];i.id=this.itemGUID++}this._updateItemsSortData(t);return t};c.prototype._initLayoutMode=function(e){var t=a.modes[e];var r=this.options[e]||{};this.options[e]=t.options?n(t.options,r):r;this.modes[e]=new t(this)};c.prototype.layout=function(){if(!this._isLayoutInited&&this.options.isInitLayout){this.arrange();return}this._layout()};c.prototype._layout=function(){var e=this._getIsInstant();this._resetLayout();this._manageStamps();this.layoutItems(this.filteredItems,e);this._isLayoutInited=true};c.prototype.arrange=function(e){this.option(e);this._getIsInstant();this.filteredItems=this._filter(this.items);this._sort();this._layout()};c.prototype._init=c.prototype.arrange;c.prototype._getIsInstant=function(){var e=this.options.isLayoutInstant!==undefined?this.options.isLayoutInstant:!this._isLayoutInited;this._isInstant=e;return e};c.prototype._filter=function(e){function c(){l.reveal(r);l.hide(i)}var t=this.options.filter;t=t||"*";var n=[];var r=[];var i=[];var s=this._getFilterTest(t);for(var o=0,u=e.length;o<u;o++){var a=e[o];if(a.isIgnored){continue}var f=s(a);if(f){n.push(a)}if(f&&a.isHidden){r.push(a)}else if(!f&&!a.isHidden){i.push(a)}}var l=this;if(this._isInstant){this._noTransition(c)}else{c()}return n};c.prototype._getFilterTest=function(e){if(t&&this.options.isJQueryFiltering){return function(n){return t(n.element).is(e)}}if(typeof e==="function"){return function(t){return e(t.element)}}return function(t){return o(t.element,e)}};c.prototype.updateSortData=function(e){this._getSorters();e=f(e);var t=this.getItems(e);t=t.length?t:this.items;this._updateItemsSortData(t)};c.prototype._getSorters=function(){var e=this.options.getSortData;for(var t in e){var n=e[t];this._sorters[t]=h(n)}};c.prototype._updateItemsSortData=function(e){for(var t=0,n=e.length;t<n;t++){var r=e[t];r.updateSortData()}};var h=function(){function e(e){if(typeof e!=="string"){return e}var n=r(e).split(" ");var i=n[0];var s=i.match(/^\[(.+)\]$/);var o=s&&s[1];var u=t(o,i);var a=c.sortDataParsers[n[1]];e=a?function(e){return e&&a(u(e))}:function(e){return e&&u(e)};return e}function t(e,t){var n;if(e){n=function(t){return t.getAttribute(e)}}else{n=function(e){var n=e.querySelector(t);return n&&s(n)}}return n}return e}();c.sortDataParsers={parseInt:function(e){return parseInt(e,10)},parseFloat:function(e){return parseFloat(e)}};c.prototype._sort=function(){var e=this.options.sortBy;if(!e){return}var t=[].concat.apply(e,this.sortHistory);var n=p(t,this.options.sortAscending);this.filteredItems.sort(n);if(e!==this.sortHistory[0]){this.sortHistory.unshift(e)}};c.prototype._mode=function(){var e=this.options.layoutMode;var t=this.modes[e];if(!t){throw new Error("No layout mode: "+e)}t.options=this.options[e];return t};c.prototype._resetLayout=function(){e.prototype._resetLayout.call(this);this._mode()._resetLayout()};c.prototype._getItemLayoutPosition=function(e){return this._mode()._getItemLayoutPosition(e)};c.prototype._manageStamp=function(e){this._mode()._manageStamp(e)};c.prototype._getContainerSize=function(){return this._mode()._getContainerSize()};c.prototype.needsResizeLayout=function(){return this._mode().needsResizeLayout()};c.prototype.appended=function(e){var t=this.addItems(e);if(!t.length){return}var n=this._filterRevealAdded(t);this.filteredItems=this.filteredItems.concat(n)};c.prototype.prepended=function(e){var t=this._itemize(e);if(!t.length){return}var n=this.items.slice(0);this.items=t.concat(n);this._resetLayout();this._manageStamps();var r=this._filterRevealAdded(t);this.layoutItems(n);this.filteredItems=r.concat(this.filteredItems)};c.prototype._filterRevealAdded=function(e){var t=this._noTransition(function(){return this._filter(e)});this.layoutItems(t,true);this.reveal(t);return e};c.prototype.insert=function(e){var t=this.addItems(e);if(!t.length){return}var n,r;var i=t.length;for(n=0;n<i;n++){r=t[n];this.element.appendChild(r.element)}var s=this._filter(t);this._noTransition(function(){this.hide(s)});for(n=0;n<i;n++){t[n].isLayoutInstant=true}this.arrange();for(n=0;n<i;n++){delete t[n].isLayoutInstant}this.reveal(s)};var d=c.prototype.remove;c.prototype.remove=function(e){e=f(e);var t=this.getItems(e);d.call(this,e);if(!t||!t.length){return}for(var n=0,r=t.length;n<r;n++){var i=t[n];l(i,this.filteredItems)}};c.prototype._noTransition=function(e){var t=this.options.transitionDuration;this.options.transitionDuration=0;var n=e.call(this);this.options.transitionDuration=t;return n};return c}var t=e.jQuery;var r=String.prototype.trim?function(e){return e.trim()}:function(e){return e.replace(/^\s+|\s+$/g,"")};var i=document.documentElement;var s=i.textContent?function(e){return e.textContent}:function(e){return e.innerText};var o=Object.prototype.toString;var a=Array.prototype.indexOf?function(e,t){return e.indexOf(t)}:function(e,t){for(var n=0,r=e.length;n<r;n++){if(e[n]===t){return n}}return-1};if(typeof define==="function"&&define.amd){define(["outlayer/outlayer","get-size/get-size","matches-selector/matches-selector","isotopeMB/js/item","isotopeMB/js/layout-mode","isotopeMB/js/layout-modes/masonry","isotopeMB/js/layout-modes/fit-rows","isotopeMB/js/layout-modes/vertical"],c)}else{e.IsotopeMB=c(e.Outlayer,e.getSize,e.matchesSelector,e.IsotopeMB.Item,e.IsotopeMB.LayoutMode)}})(window)
parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"9KIJ":[function(require,module,exports) {

},{}],"3Tk7":[function(require,module,exports) {

},{"./../fonts/springville-regular3-webfont.woff2":[["springville-regular3-webfont.b9490077.woff2","Ovay"],"Ovay"],"./../fonts/springville-regular3-webfont.woff":[["springville-regular3-webfont.14a1d044.woff","m5vZ"],"m5vZ"]}],"63XF":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},n=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=Object.create(null);function i(t,n){return e[t]=e[t]||[],e[t].push(n),this}function r(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return n?e[t].splice(e[t].indexOf(n),1):delete e[t],this}return t({},n,{on:i,once:function(t,n){return n._once=!0,i(t,n),this},off:r,emit:function(t){for(var n=this,i=arguments.length,o=Array(i>1?i-1:0),u=1;u<i;u++)o[u-1]=arguments[u];var c=e[t]&&e[t].slice();return c&&c.forEach(function(e){e._once&&r(t,e),e.apply(n,o)}),this}})},e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=void 0,i=void 0,r=void 0,o=void 0,u=void 0,c=void 0,a=void 0,l=void 0,f=void 0,d=void 0,s=void 0,p=void 0,v=void 0,h=0===t.packed.indexOf("data-")?t.packed:"data-"+t.packed,m=t.sizes.slice().reverse(),y=!1!==t.position,g=t.container.nodeType?t.container:document.querySelector(t.container),x={all:function(){return M(g.children)},new:function(){return M(g.children).filter(function(t){return!t.hasAttribute(""+h)})}},w=[function(){r=k()},function(){o=-1===r?m[m.length-1]:m[r]},function(){t=o.columns,c=Array.apply(null,Array(t)).map(function(){return 0});var t}],O=[function(){s=x[e?"new":"all"]()},function(){if(0===s.length)return;p=s.map(function(t){return t.clientWidth}),v=s.map(function(t){return t.clientHeight})},function(){s.forEach(function(t,n){u=c.indexOf(Math.min.apply(Math,c)),t.style.position="absolute",a=c[u]+"px",l=u*p[n]+u*o.gutter+"px",y?(t.style.top=a,t.style.left=l):t.style.transform="translate3d("+l+", "+a+", 0)",t.setAttribute(h,""),f=p[n],d=v[n],f&&d&&(c[u]+=d+o.gutter)})},function(){g.style.position="relative",g.style.width=o.columns*f+(o.columns-1)*o.gutter+"px",g.style.height=Math.max.apply(Math,c)-o.gutter+"px"}],b=n({pack:q,update:function(){return e=!0,A(O),b.emit("update")},resize:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return window[t?"addEventListener":"removeEventListener"]("resize",E),b}});return b;function A(t){t.forEach(function(t){return t()})}function M(t){arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return Array.prototype.slice.call(t)}function k(){return m.map(function(t){return t.mq&&window.matchMedia("(min-width: "+t.mq+")").matches}).indexOf(!0)}function E(){i||(window.requestAnimationFrame(j),i=!0)}function j(){r!==k()&&(q(),b.emit("resize",o)),i=!1}function q(){return e=!1,A(w.concat(O)),b.emit("pack")}},i=e;exports.default=i;
},{}],"JVpL":[function(require,module,exports) {
"use strict";require("normalize.css"),require("/sass/style.scss");var e=t(require("bricks.js"));function t(e){return e&&e.__esModule?e:{default:e}}var s=(0,e.default)({container:".item_layout",packed:"data-packed",sizes:[{columns:2,gutter:25},{mq:"800px",columns:3,gutter:25}]});document.querySelector(".item_layout").style.margin="0 auto",document.querySelector(".item_layout").style.position="absolute",s.pack();
},{"normalize.css":"9KIJ","/sass/style.scss":"3Tk7","bricks.js":"63XF"}]},{},["JVpL"], null)
//# sourceMappingURL=/idea/script.f87d2a96.js.map
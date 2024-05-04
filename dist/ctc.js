/*! For license information please see ctc.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("CTC",[],e):"object"==typeof exports?exports.CTC=e():t.CTC=e()}(self,(()=>(()=>{"use strict";var t={964:(t,e,n)=>{n.r(e),n.d(e,{default:()=>E});var r=n(72),o=n.n(r),i=n(825),c=n.n(i),a=n(659),s=n.n(a),u=n(56),l=n.n(u),f=n(540),p=n.n(f),d=n(113),h=n.n(d),v=n(208),y={};function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function g(){g=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},c=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var i=e&&e.prototype instanceof b?e:b,c=Object.create(i.prototype),a=new P(r||[]);return o(c,"_invoke",{value:O(t,n,a)}),c}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var p="suspendedStart",d="suspendedYield",h="executing",v="completed",y={};function b(){}function x(){}function w(){}var j={};u(j,c,(function(){return this}));var E=Object.getPrototypeOf,L=E&&E(E(A([])));L&&L!==n&&r.call(L,c)&&(j=L);var T=w.prototype=b.prototype=Object.create(j);function C(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(o,i,c,a){var s=f(t[o],t,i);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==m(l)&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,c,a)}),(function(t){n("throw",t,c,a)})):e.resolve(l).then((function(t){u.value=t,c(u)}),(function(t){return n("throw",t,c,a)}))}a(s.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function O(e,n,r){var o=p;return function(i,c){if(o===h)throw Error("Generator is already running");if(o===v){if("throw"===i)throw c;return{value:t,done:!0}}for(r.method=i,r.arg=c;;){var a=r.delegate;if(a){var s=_(a,r);if(s){if(s===y)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===p)throw o=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=h;var u=f(e,n,r);if("normal"===u.type){if(o=r.done?v:d,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=v,r.method="throw",r.arg=u.arg)}}}function _(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,_(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var i=f(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,y;var c=i.arg;return c?c.done?(n[e.resultName]=c.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,y):c:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function M(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function A(e){if(e||""===e){var n=e[c];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(m(e)+" is not iterable")}return x.prototype=w,o(T,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:x,configurable:!0}),x.displayName=u(w,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,u(t,s,"GeneratorFunction")),t.prototype=Object.create(T),t},e.awrap=function(t){return{__await:t}},C(S.prototype),u(S.prototype,a,(function(){return this})),e.AsyncIterator=S,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var c=new S(l(t,n,r,o),i);return e.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},C(T),u(T,s,"Generator"),u(T,c,(function(){return this})),u(T,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=A,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(M),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return a.type="throw",a.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],a=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var s=r.call(c,"catchLoc"),u=r.call(c,"finallyLoc");if(s&&u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),M(n),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;M(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:A(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),y}},e}function b(t,e,n,r,o,i,c){try{var a=t[i](c),s=a.value}catch(t){return void n(t)}a.done?e(s):Promise.resolve(s).then(r,o)}function x(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,w(r.key),r)}}function w(t){var e=function(t,e){if("object"!=m(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==m(e)?e:e+""}y.styleTagTransform=h(),y.setAttributes=l(),y.insert=s().bind(null,"head"),y.domAPI=c(),y.insertStyleElement=p(),o()(v.A,y),v.A&&v.A.locals&&v.A.locals,t=n.hmd(t);var j=function(){return t=function t(){var e,n,r=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),e=this,null,(n=w(n="selectors"))in e?Object.defineProperty(e,n,{value:null,enumerable:!0,configurable:!0,writable:!0}):e[n]=null,this.selectors=o?document.querySelectorAll(o):[],navigator.clipboard&&this.selectors.length){var c={default:{icon:'<svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg>',class:"ctc-js-btn",text:"Copy to Clipboard",textClass:"ctc-js-btn__text"},copied:{icon:'<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" fill="currentColor"><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path></svg>',class:"ctc-js-btn--copied",text:"Copied"},timeOut:1e3,success:function(t){},error:function(t){}};this.options=Object.assign({},c,i),["icon","class","text","textClass"].forEach((function(t){r.options.default[t]=r.options.default[t]||c.default[t]})),["icon","class","text"].forEach((function(t){r.options.copied[t]=r.options.copied[t]||c.copied[t]})),this.options.timeOut=this.options.timeOut||c.timeOut,this.options.success=this.options.success||c.success,this.options.error=this.options.error||c.error,this.init()}},e=[{key:"getCopyTextElement",value:function(t){return'<span class="'.concat(this.options.default.textClass,'">').concat(t||this.options.default.text,"</span>")}},{key:"getInnerHtml",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=document.createElement("span");e.classList.add("ctc-js-icon--default"),e.innerHTML=this.options.default.icon;var n=document.createElement("span");return n.classList.add("ctc-js-icon--copied"),n.innerHTML=this.options.copied.icon,this.icons="".concat(e.outerHTML).concat(n.outerHTML),!1===t?"".concat(this.icons):"".concat(this.icons).concat(this.getCopyTextElement(t))}},{key:"getElements",value:function(t){return document.querySelectorAll(t)}},{key:"getHtmlId",value:function(){var t=["ctc-js"];return t.push((Math.random()+1).toString(36).substring(2,11)),t.join("-")}},{key:"init",value:function(){var t=this;this.selectors.forEach((function(e){var n=e.textContent.trim(),r=t.setBtn({content:n});r&&e.parentNode.insertBefore(r,e.nextSibling)}))}},{key:"setBtn",value:function(t){var e=this,n=t.content,r=document.createElement("button");return r.classList.add("ctc-js-btn",this.options.default.class),r.innerHTML=this.getInnerHtml(this.options.default.text),r.id=this.getHtmlId(),!!(n=n.trim())&&(r.addEventListener("click",function(){var t,o=(t=g().mark((function t(o){return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:o.preventDefault(),navigator.clipboard.writeText(n).then((function(){e.options.success&&e.options.success(o),r.classList.add(e.options.copied.class),e.options.copied.text&&(r.querySelector(".".concat(e.options.default.textClass)).innerText=e.options.copied.text),setTimeout((function(){r.classList.remove(e.options.copied.class),e.options.copied.text&&(r.querySelector(".".concat(e.options.default.textClass)).innerText=e.options.default.text)}),e.options.timeOut)}),(function(t){e.options.error&&e.options.error(t)}));case 2:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(t){b(i,r,o,c,a,"next",t)}function a(t){b(i,r,o,c,a,"throw",t)}c(void 0)}))});return function(t){return o.apply(this,arguments)}}()),r)}}],e&&x(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();void 0!==t.exports&&(t.exports=j),"undefined"!=typeof window&&(window.CTC=j);const E=j},208:(t,e,n)=>{n.d(e,{A:()=>a});var r=n(601),o=n.n(r),i=n(314),c=n.n(i)()(o());c.push([t.id,'/**\n* Button\n*/\n[id^="ctc-js-"] {\n    --ctc-js-btn-bg: linear-gradient(45deg, #c34f84, #903bd9, #eb5e35);\n    --ctc-js-btn-bg-hover: linear-gradient(45deg, #eb5e35, #903bd9, #c34f84);\n    --ctc-js-btn-color: white;\n    --ctc-js-text-color: white;\n}\n\n[id^="ctc-js-"].ctc-js-btn,\n[id^="ctc-js-"].ctc-js-btn:hover,\n[id^="ctc-js-"].ctc-js-btn:focus {\n    height: auto;\n    min-width: auto;\n    background: var(--ctc-js-btn-bg);\n    display: inline-flex;\n    align-items: center;\n    max-width: max-content;\n    gap: 5px;\n    margin: 2px 0;\n    border-radius: 2px;\n    border: none;\n    color: var(--ctc-js-btn-color);\n    padding: 4px 6px;\n    font-size: 10px;\n    cursor: pointer;\n    line-height: 1;\n    font-weight: 500;\n}\n\n[id^="ctc-js-"] svg {\n    height: 1em;\n    width: 1em;\n    line-height: 1em;\n    font-size: 10px;\n}\n\n[id^="ctc-js-"] .ctc-js-icon--copied {\n    display: none;\n}\n\n[id^="ctc-js-"].ctc-js-btn--copied .ctc-js-icon--copied {\n    display: block;\n}\n\n[id^="ctc-js-"].ctc-js-btn--copied .ctc-js-icon--default {\n    display: none;\n}\n\n[id^="ctc-js-"] .ctc-js-btn__text {\n    color: var(--ctc-js-text-color);\n}\n\n[id^="ctc-js-"]:hover,\n[id^="ctc-js-"]:focus {\n    outline: none;\n    box-shadow: none;\n    text-shadow: none;\n    background: var(--ctc-js-btn-bg-hover);\n}\n\n[id^="ctc-js-"].ctc-js-btn--default:hover,\n[id^="ctc-js-"].ctc-js-btn--default:focus {\n    border-color: transparent;\n    color: white;\n    height: auto;\n}\n',""]);const a=c},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var c={};if(r)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(c[s]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);r&&c[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},c=[],a=0;a<t.length;a++){var s=t[a],u=r.base?s[0]+r.base:s[0],l=i[u]||0,f="".concat(u," ").concat(l);i[u]=l+1;var p=n(f),d={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(d);else{var h=o(d,r);r.byIndex=a,e.splice(a,0,{identifier:f,updater:h,references:1})}c.push(f)}return c}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var c=0;c<i.length;c++){var a=n(i[c]);e[a].references--}for(var s=r(t,o),u=0;u<i.length;u++){var l=n(i[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},659:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,loaded:!1,exports:{}};return t[r](i,i.exports,n),i.loaded=!0,i.exports}return n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.hmd=t=>((t=Object.create(t)).children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.nc=void 0,n(964)})()));
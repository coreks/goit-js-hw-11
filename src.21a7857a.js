parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"qwQt":[function(require,module,exports) {
const t={bodyEl:document.querySelector("body"),btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")};function e(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}function n(){color=setInterval(()=>t.bodyEl.style.backgroundColor=e(),1e3),t.btnStart&&(t.btnStart.removeEventListener("click",n),t.btnStart.style.opacity="0.5")}t.btnStart.addEventListener("click",n),t.btnStop.addEventListener("click",()=>{clearInterval(color),t.btnStop&&(t.btnStart.addEventListener("click",n),t.btnStart.style.opacity="1")});
},{}],"yCUT":[function(require,module,exports) {
function o(o){return{days:Math.floor(o/864e5),hours:Math.floor(o%864e5/36e5),minutes:Math.floor(o%864e5%36e5/6e4),seconds:Math.floor(o%864e5%36e5%6e4/1e3)}}console.log(o(2e3)),console.log(o(14e4)),console.log(o(2414e4));
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/theme.js"),require("./js/timer.js");
},{"./sass/main.scss":"clu1","./js/theme.js":"qwQt","./js/timer.js":"yCUT"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11/src.21a7857a.js.map
define("pages/loadscript.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/pages/loadscript.js*/,[],function(){
"use strict";
function e(t){
e.counter||(e.counter=1);
var n="number"!=typeof t.retry?1:t.retry,o=document.createElement("script"),r=document.head||document.getElementsByTagName("head")[0]||document.documentElement,d=t.url+"&t="+Math.random(),a=t.callbackName,i="uninitialized",u="undefined"==typeof t.successCode?200:t.successCode,c="undefined"==typeof t.timeoutCode?500:t.timeoutCode,l="undefined"==typeof t.scriptErrorCode?400:t.scriptErrorCode,s=!1,f=null,m=function(e){
o&&!s&&(s=!0,f&&(clearTimeout(f),f=null),o.onload=o.onreadystatechange=o.onerror=null,
r&&o.parentNode&&r.removeChild(o),o=null,a&&-1==a.indexOf(".")&&(window[a]=null),
e!=u&&"loaded"!=i&&"function"==typeof t.onerror&&t.onerror(e));
};
if(a&&"function"==typeof t.callback){
var p=a;
-1==a.indexOf(".")&&(a=window[a]?a+e.counter++:a,window[a]=function(){
i="loaded",t.callback.apply(null,arguments);
}),d=d.replace("="+p,"="+a);
}
o.onload=o.onreadystatechange=function(){
var e=navigator.userAgent.toLowerCase();
(-1!=e.indexOf("opera")||-1==e.indexOf("msie")||/loaded|complete/i.test(this.readyState))&&m("loaded"==i?u:l);
},o.onerror=function(){
return n>0?(t.retry=n-1,void e(t)):void m(l);
},t.timeout&&(f=setTimeout(function(){
m(c);
},parseInt(t.timeout,10))),i="loading",o.charset="utf-8",setTimeout(function(){
o.src=d;
try{
r.insertBefore(o,r.lastChild);
}catch(e){}
},0);
}
return e;
});
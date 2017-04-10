define("biz_common/tmpl.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/biz_common/tmpl.js*/,[],function(){
"use strict";
var n=function(n,t){
var r=new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+n.replace(/[\r\t\n]/g," ").split("<#").join("	").replace(/((^|#>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)#>/g,"',$1,'").split("	").join("');").split("#>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');");
return r(t);
},t=function(t,r){
var e=document.getElementById(t);
return e?n(e.innerHTML,r):"";
};
return{
render:t,
tmpl:n
};
});
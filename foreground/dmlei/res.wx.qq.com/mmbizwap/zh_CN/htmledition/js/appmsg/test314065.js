define("appmsg/test.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/appmsg/test.js*/,[],function(){
"use strict";
var t=[],e=function(){
"undefined"==typeof getComputedStyle&&document.body.currentStyle&&(window.getComputedStyle=function(t){
return t.currentStyle;
});
},n=function(){
for(var e="/mp/jsmonitor?idkey=",n=[],r=0,o=t.length;o>r;++r){
var i=t[r],d=i.idkey.toString()+"_"+i.order.toString()+"_"+i.num.toString();
n.push(d);
}
e+=n.join(";"),t.length>0&&((new Image).src=e);
},r=function(){
try{
e(),o(),n();
}catch(t){
console.log(t);
}
},o=function(){
var e=10,n=top.window.user_uin||0,r=0!==n&&Math.floor(n/100)%1e3<e;
if(r){
var o=document.getElementsByTagName("img"),i=o.length,d=document.getElementById("img-content"),u=d.offsetWidth,a=0,g=0,c=getComputedStyle(d);
a=parseInt(c.paddingLeft)+parseInt(c.paddingRight),u-=a,u||(u=window.innerWidth-30);
for(var f=0;i>f;++f){
var m=o[f].getAttribute("data-src");
if(m){
var s=1*o[f].getAttribute("data-w")||u,p=1*o[f].getAttribute("data-ratio");
p&&p>0&&s>u&&g++;
}
}
g>0&&t.push({
idkey:28307,
order:22,
num:g
});
}
};
return r;
});
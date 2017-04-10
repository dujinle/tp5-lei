define("biz_wap/jsapi/core.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/jsapi/biz_wap/jsapi/core.js*/,[],function(n,o,i,e){
"use strict";
document.domain="http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/jsapi/qq.com";
var t=window.__moon_report||function(){},d=8,r={
ready:function(n){
var o=function(){
try{
n&&n();
}catch(o){
throw t([{
offset:d,
log:"ready",
e:o
}]),o;
}
};
"undefined"!=typeof top.window.WeixinJSBridge&&top.window.WeixinJSBridge.invoke?o():top.window.document.addEventListener?top.window.document.addEventListener("WeixinJSBridgeReady",o,!1):top.window.document.attachEvent&&(top.window.document.attachEvent("WeixinJSBridgeReady",o),
top.window.document.attachEvent("onWeixinJSBridgeReady",o));
},
invoke:function(n,o,i){
this.ready(function(){
return"object"!=typeof top.window.WeixinJSBridge?(e("请在微信中打开此链接！"),!1):void top.window.WeixinJSBridge.invoke(n,o,function(o){
try{
if(i){
i.apply(window,arguments);
var e=o&&o.err_msg?", err_msg-> "+o.err_msg:"";
console.info("[jsapi] invoke->"+n+e);
}
}catch(r){
throw t([{
offset:d,
log:"invoke",
e:r
}]),r;
}
});
});
},
call:function(n){
this.ready(function(){
if("object"!=typeof top.window.WeixinJSBridge)return!1;
try{
top.window.WeixinJSBridge.call(n);
}catch(o){
throw t([{
offset:d,
log:"call",
e:o
}]),o;
}
});
},
on:function(n,o){
this.ready(function(){
return"object"http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/jsapi/==typeof top.window.WeixinJSBridge&&top.window.WeixinJSBridge.on?void top.window.WeixinJSBridge.on(n,function(){try{o&&o.apply(window,arguments);}catch(n){throw t([{offset:d,log:"on",
e:n
}]),n;
}
}):!1;
});
}
};
return r;
});
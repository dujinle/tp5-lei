define("a/sponsor.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/a/sponsor.js*/,["biz_common/dom/event.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_common/dom/event.js*/,"biz_common/utils/report.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_common/utils/report.js*/,"biz_wap/jsapi/core.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_wap/jsapi/core.js*/,"biz_wap/utils/mmversion.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_wap/utils/mmversion.js*/,"a/a_report.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/a/a_report.js*/,"biz_common/utils/url/parse.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_common/utils/url/parse.js*/],function(o){
"use strict";
function e(o,e){
t("http://mp.weixin.qq.com/mp/ad_report?action=follow&type="+o+e.report_param);
}
function i(o){
var i=o.adData,t=o.pos_type,p=i.traceid,c=o.a_info.type,l=i.adid,_=i.url,m=o.a_info.rl;
110==i.pt&&(_=_.replace("#","&AdType=80#"));
var d={};
o.report_param=o.report_param||"";
var u=o.adDetailBtn,f=o.adMoreBtn,h=(o.adMessage,o.adAbout),b=o.adImg,y={
type:c,
report_type:2,
url:encodeURIComponent(_),
tid:p,
rl:encodeURIComponent(m),
__biz:biz,
pos_type:t,
pt:i.pt,
click_pos:""
};
n.on(window,"touchend",function(o){
o.target!=h&&o.target!=u&&(h.style.display="none");
}),n.on(document.getElementById("js_ad_inner"),"click",function(i){
return"js_main_img"http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/==i.target.id?d[p+"_1"]||(d[p+"_1"]=!0,y.click_pos=1,s(y,function(){
e(87,o),d[p+"_1"]=!1,a.isWp||a.isIOS?r.invoke("openUrlWithExtraWebview",{
url:_,
openType:1
},function(o){
-1==o.err_msg.indexOf("ok")&&(location.href=_);
}):location.href=_;
})):d[p+"_2"]||(d[p+"_2"]=!0,y.click_pos=2,s(y,function(){
e(88,o),d[p+"_2"]=!1,a.isWp||a.isIOS?r.invoke("openUrlWithExtraWebview",{
url:_,
openType:1
},function(o){
-1==o.err_msg.indexOf("ok")&&(location.href=_);
}):location.href=_;
})),!1;
}),n.on(f,"click",function(){
return d[p+"_3"]||(d[p+"_3"]=!0,y.click_pos=3,s(y,function(){
e(89,o),d[p+"_3"]=!1,a.isWp||a.isIOS?r.invoke("openUrlWithExtraWebview",{
url:_,
openType:1
},function(o){
-1==o.err_msg.indexOf("ok")&&(location.href=_);
}):location.href=_;
})),!1;
}),n.on(u,"click",function(){
return e(90,o),h.style.display="none"==window.getComputedStyle(h).display?"initial":"none",
!1;
}),n.on(h,"click",function(){
e(91,o);
var i="https://mp.weixin.qq.com/promotion/res/htmledition/mobile/html/trade_about.html?aid="+l+"&tid="+p+"#wechat_redirect";
return a.isWp||a.isIOS||a.isAndroid?r.invoke("openUrlWithExtraWebview",{
url:i,
openType:1
},function(o){
-1==o.err_msg.indexOf("ok")&&(location.href=i);
}):location.href=i,!1;
}),n.on(window,"resize",function(){
setTimeout(function(){
var o=js_sponsor_ad_area.clientWidth;
b.style.height=o/1.77+"px";
},0);
});
}
var n=o("biz_common/dom/event.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_common/dom/event.js*/),t=o("biz_common/utils/report.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_common/utils/report.js*/),r=o("biz_wap/jsapi/core.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_wap/jsapi/core.js*/),a=o("biz_wap/utils/mmversion.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_wap/utils/mmversion.js*/),p=o("a/a_report.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/a/a_report.js*/),s=(o("biz_common/utils/url/parse.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_common/utils/url/parse.js*/),
p.AdClickReport);
return i;
});
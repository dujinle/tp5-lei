define("a/profile.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/a/profile.js*/,["biz_common/dom/event.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_common/dom/event.js*/,"biz_common/utils/report.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_common/utils/report.js*/,"a/a_report.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/a/a_report.js*/,"biz_wap/utils/ajax.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_wap/utils/ajax.js*/,"biz_common/utils/url/parse.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_common/utils/url/parse.js*/,"biz_wap/utils/position.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_wap/utils/position.js*/,"biz_wap/jsapi/core.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_wap/jsapi/core.js*/],function(t){
"use strict";
function e(t,e){
a("http://mp.weixin.qq.com/mp/ad_report?action=follow&type="+t+e.report_param);
}
function n(t){
console.log(t),location.href=t;
}
function i(t){
var i=t.adData,s=t.pos_type||0,l={};
t.report_param=t.report_param||"",function(){
function r(t){
{
var e=_.dataset;
"https:"==top.location.protocol?1500:1200;
}
if(e.rl&&e.url&&e.type&&e.tid){
var n=e.tid,o=e.type,a=e.url,r=e.rl;
if(!l[n]){
l[n]=!0;
var d,m,u,j,b=!!t&&t.target;
b&&(d=c.getX(b,"js_ad_link")+t.offsetX,m=c.getY(b,"js_ad_link")+t.offsetY,u=document.getElementsByClassName("js_ad_link")[0]&&document.getElementsByClassName("js_ad_link")[0].clientWidth,
j=document.getElementsByClassName("js_ad_link")[0]&&document.getElementsByClassName("js_ad_link")[0].clientHeight),
p({
type:o,
report_type:2,
click_pos:0,
url:encodeURIComponent(a),
tid:n,
rl:encodeURIComponent(r),
__biz:biz,
pos_type:s,
pt:i.pt,
pos_x:d,
pos_y:m,
ad_w:u||0,
ad_h:j||0
},function(){
l[n]=!1,f();
});
}
}else f();
}
var _=t.btnAddContact,m=t.btnViewProfile;
if(_&&_.dataset){
var u=function(o,s){
var p=o.err_msg,r=i.is_appmsg?6:1;
-1!=p.indexOf("ok")?(m.style.display="inline-block",_.style.display="none",r=i.is_appmsg?9:4):"add_contact:added"==p?r=i.is_appmsg?7:2:"add_contact:cancel"==p?r=i.is_appmsg?8:3:(--s,
s>=0?d.invoke("addContact",{
scene:scene,
webtype:"1",
username:i.usename
},function(t){
u(t,s);
}):(p="addContact:fail|msg:"+p+"|uin:"+uin+"|biz:"+biz,a("http://mp.weixin.qq.com/mp/jsreport?key=13&content="+p+"&r="+Math.random()),
n(i.url))),e(r,t);
},f=function(){
e(i.is_appmsg?10:5,t),d.invoke("addContact",{
scene:scene,
webtype:"1",
username:i.usename
},function(t){
u(t,1);
});
};
o.on(_,"click",r);
}
}(),function(){
var e=t.btnViewProfile;
e&&o.on(e,"click",function(){
var e=t.btnAddContact.dataset,o={
source:4,
tid:e.tid,
idx:idx,
mid:mid,
appuin:biz,
pt:i.pt,
aid:t.aid,
ad_engine:t.ad_engine,
pos_type:s
},a=r.join(i.url,o);
return n(a),!1;
});
}();
}
{
var o=t("biz_common/dom/event.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_common/dom/event.js*/),a=t("biz_common/utils/report.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_common/utils/report.js*/),s=t("a/a_report.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/a/a_report.js*/),p=s.AdClickReport,r=(t("biz_wap/utils/ajax.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_wap/utils/ajax.js*/),
t("biz_common/utils/url/parse.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_common/utils/url/parse.js*/)),c=t("biz_wap/utils/position.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_wap/utils/position.js*/),d=t("biz_wap/jsapi/core.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_wap/jsapi/core.js*/);
"https:"==top.location.protocol?5:0,window.__report;
}
return i;
});
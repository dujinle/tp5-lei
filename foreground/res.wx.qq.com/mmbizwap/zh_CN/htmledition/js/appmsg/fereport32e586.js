define("appmsg/fereport.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/appmsg/fereport.js*/,["biz_wap/utils/wapsdk.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_wap/utils/wapsdk.js*/,"biz_common/utils/http.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/utils/http.js*/,"appmsg/log.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/appmsg/log.js*/],function(e){
"use strict";
function o(){
var e=window.performance||window.msPerformance||window.webkitPerformance;
if(e&&e.timing){
var o=e.timing,m=0,s=0,a=window.location.protocol,d=Math.random(),p=1>10*d,r=1>25*d,l=1>100*d,c=1>250*d,_=1>500*d,u=!0;
"https:"==a?(m=18,s=27,u=!1):"http:"==a&&(m=9,s=19);
var w=window.__wxgspeeds||{};
if(w&&w.moonloadtime&&w.moonloadedtime){
var g,S=w.moonloadedtime-w.moonloadtime;
g=localStorage&&JSON.parse(localStorage.getItem("__WXLS__moonarg"))&&"fromls"==JSON.parse(localStorage.getItem("__WXLS__moonarg")).method?21:22,
i.saveSpeeds({
sample:21==g||22==g&&l?1:0,
uin:uin,
pid:m,
speeds:{
sid:g,
time:S
}
});
}
w&&w.mod_downloadtime&&i.saveSpeeds({
uin:uin,
pid:m,
speeds:{
sid:24,
time:w.mod_downloadtime
}
});
var v=o.domContentLoadedEventStart-o.navigationStart;
if(v>3e3&&(i.setBasicTime({
sample:p&&u||r&&!u?1:0,
uin:uin,
pid:s
}),(new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=28307_28_1&lc=1&log0="+encodeURIComponent(location.href)),
i.setBasicTime({
sample:c&&u||l&&!u?1:0,
uin:uin,
pid:m
}),n.htmlSize){
var f=n.htmlSize/(o.responseEnd-o.connectStart);
i.saveSpeeds({
sample:_,
uin:uin,
pid:m,
speeds:{
sid:25,
time:Math.round(f)
}
});
}
if(w&&w.combo_times)for(var h=1;h<w.combo_times.length;h++)i.saveSpeeds({
sample:c,
uin:uin,
pid:m,
speeds:{
sid:26,
time:w.combo_times[h]-w.combo_times[h-1]
}
});
if(w&&w.mod_num){
var b=w.hit_num/w.mod_num;
i.saveSpeeds({
sample:c,
uin:uin,
pid:m,
speeds:[{
sid:27,
time:Math.round(100*b)
},{
sid:28,
time:Math.round(1e3*b)
}]
});
}
i.send(),window.__moonclientlog&&t("[moon] "+window.__moonclientlog.join(" ^^^ "));
}
}
var i=e("biz_wap/utils/wapsdk.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_wap/utils/wapsdk.js*/),n=e("biz_common/utils/http.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/utils/http.js*/),t=e("appmsg/log.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/appmsg/log.js*/);
o();
});
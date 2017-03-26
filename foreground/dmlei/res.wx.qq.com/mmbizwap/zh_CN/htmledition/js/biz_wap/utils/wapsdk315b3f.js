define("biz_wap/utils/wapsdk.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/biz_wap/utils/wapsdk.js*/,["biz_common/utils/wxgspeedsdk.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/biz_common/utils/wxgspeedsdk.js*/],function(e){
"use strict";
function s(e){
var s=.001;
"number"==typeof e.sample&&(s=e.sample);
var n=Math.random();
s>n&&o.saveSpeeds(e);
}
function n(e){
var s=e.sample||.001,n=Math.random();
s>n&&o.setBasicTime(e);
}
function i(){
o.send();
}
function a(e){
var e=e||[];
if(!e.length){
var s=e;
e=[],e.push(s);
}
for(var n=[],i=0;i<e.length;i++){
var s=e[i],a=s.id,o=s.key,t=s.value||1;
a&&o&&n.push(a+"_"+o+"_"+t);
}
0!=n.length&&((new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey="+n.join(";"));
}
var o=e("biz_common/utils/wxgspeedsdk.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/utils/biz_common/utils/wxgspeedsdk.js*/);
return{
saveSpeeds:s,
setBasicTime:n,
send:i,
jsmonitor:a
};
});
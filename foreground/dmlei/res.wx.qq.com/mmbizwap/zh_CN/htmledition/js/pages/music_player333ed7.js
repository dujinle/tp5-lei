define("pages/music_player.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/pages/music_player.js*/,["biz_wap/utils/mmversion.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/biz_wap/utils/mmversion.js*/,"biz_common/dom/event.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/biz_common/dom/event.js*/,"biz_wap/jsapi/core.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/biz_wap/jsapi/core.js*/,"pages/version4video.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/pages/version4video.js*/,"biz_common/utils/monitor.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/biz_common/utils/monitor.js*/],function(t){
"use strict";
function o(t){
this._o={
type:0,
src:"",
mid:"",
songId:"",
autoPlay:!1,
duration:0,
debug:!1,
needVioceMutex:!0,
appPlay:!0,
title:"",
singer:"",
epname:"",
coverImgUrl:"",
webUrl:"",
fileSize:0,
onStatusChange:function(){},
onTimeupdate:function(){},
onError:function(){}
},this._extend(t),this._status=-1,this._g={
_playtype:f._playtype
},this._fixAndroidSizeLimit(),0!==f.surportType&&(this._o.needVioceMutex&&f.mutexPlayers.push(this),
this._o.autoPlay&&this.play());
}
function e(t){
y.invoke("musicPlay",{
app_id:"a",
title:"微信公众平台",
singer:"微信公众平台",
epname:"微信公众平台",
coverImgUrl:"http://res.wx.qq.com/mpres/htmledition/images/favicon.ico",
dataUrl:f.ev,
lowbandUrl:f.ev,
webUrl:"http://mp.weixin.qq.com/s?"
},function(o){
!!f.emptyVoiceTimeoutId&&clearTimeout(f.emptyVoiceTimeoutId),"function"==typeof t&&t(o);
}),"function"==typeof t&&(f.emptyVoiceTimeoutId=setTimeout(function(){
t({});
},1e3));
}
function i(t){
for(var o=0,e=f.mutexPlayers.length;e>o;o++){
var i=f.mutexPlayers[o];
i&&"function"==typeof i._onPause&&i!=t&&(i._h5Audio&&"function"==typeof i._h5Audio.pause?i._h5Audio.pause():1==i.getSurportType()&&i._pauseJsapiPlay(1==t.getSurportType()?!1:!0));
}
}
function n(){
return f.surportType;
}
function s(t){
return new o(t);
}
function u(){
f.surportType>0&&f.isAndroidLow&&window.addEventListener("canplay",function(t){
t.target&&"function"==typeof t.target.play&&t.target.play();
},!0);
}
function a(){
for(var t=0,o=0,e=f.keyConf.length;e>o;o++){
var i=f.keyConf[o]||"";
i?/^offset_/.test(i)?t+=1*i.replace(/^offset_/,""):(f.reportData[i]={
key:t,
count:0
},t++):t++;
}
c.on(window,"unload",r);
}
function r(){
for(var t=0,o=f.mutexPlayers.length;o>t;t++){
var e=f.mutexPlayers[t];
if(e&&1==e._status&&1==e._surportType){
_(e._o.type,"unload_wx_pv",1);
break;
}
}
p();
}
function p(){
var t=f.reportId;
for(var o in f.reportData){
var e=f.reportData[o];
e.count>0&&m.setSum(t,e.key,e.count);
}
m.send();
}
function _(t,o,e){
0==t||1==t?o="m_"+o:(2==t||3==t)&&(o="v_"+o),f.reportData[o]&&(e=e||1,f.reportData[o].count+=e,
f.debug&&console.log("addpv:"+o+" count:"+f.reportData[o].count));
}
function d(t){
var o=arguments[1]||window.location.search,e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)"),i=o.substr(o.indexOf("?")+1).match(e);
return null!=i?i[2]:"";
}
var h=t("biz_wap/utils/mmversion.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/biz_wap/utils/mmversion.js*/),c=t("biz_common/dom/event.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/biz_common/dom/event.js*/),y=t("biz_wap/jsapi/core.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/biz_wap/jsapi/core.js*/),l=t("pages/version4video.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/pages/version4video.js*/),m=t("biz_common/utils/monitor.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/biz_common/utils/monitor.js*/),f={
mutexCount:0,
ev:0!=window._empty_v.indexOf(window.location.protocol)?"http:"+window._empty_v:window._empty_v,
debug:location.href.indexOf("vconsole=1")>0?!0:!1,
_playtype:1*d("_playtype")||0,
isAndroidLow:/android\s2\.3/i.test(navigator.userAgent),
isAndroid:h.isAndroid,
surportType:"addEventListener"in window?2:0,
mutexPlayers:[],
reportId:"28306",
keyConf:["m_pv","m_wx_pv","m_h5_pv","m_unload_wx_pv","v_pv","v_wx_pv","v_h5_pv","v_unload_wx_pv","offset_22","force_h5","m_play_err_total","m_h5_err_1","m_h5_err_2","m_h5_err_3","m_h5_err_4","m_h5_err_5","v_play_err_total","v_h5_err_1","v_h5_err_2","v_h5_err_3","v_h5_err_4","v_h5_err_5"],
reportData:{}
};
return a(),u(),o.prototype._fixAndroidSizeLimit=function(){
if(!(1*f._playtype>0)&&f.isAndroid){
var t=this._o;
!t.fileSize||t.fileSize>300||h.gtVersion("http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/6.3.28",!0)||(_(-1,"force_h5",1),this._g._playtype=2);
}
},o.prototype._createAutoAndPlay=function(){
function t(){
if(this._h5Audio=document.createElement("audio"),this._H5bindEvent(),this._h5Audio.setAttribute("style","height:0;width:0;display:none"),
this._h5Audio.setAttribute("autoplay",""),this._status=0,f.isAndroidLow)this._h5Audio.src=this._o.src,
document.body.appendChild(this._h5Audio),this._h5Audio.load();else{
document.body.appendChild(this._h5Audio);
var t=this;
setTimeout(function(){
t._h5Audio.src=t._o.src,t._h5Audio.play();
},0);
}
this._surportType=2;
}
l.device.inWechat?this._stopJsapiPlay(!0,t):t.call(this);
},o.prototype._destoryH5Audio=function(){
this._h5Audio&&(-1!=this._status&&"function"==typeof this._h5Audio.pause&&this._h5Audio.pause(),
document.body.removeChild(this._h5Audio),this._h5Audio=null,this._status=-1);
},o.prototype._createApp=function(t){
this.debug("createApp"),this._h5Audio&&this._destoryH5Audio();
var o=this,e=this._o;
y.invoke("musicPlay",{
app_id:"a",
title:e.title,
singer:e.singer,
epname:e.epname,
coverImgUrl:e.coverImgUrl,
dataUrl:e.src,
lowbandUrl:e.src,
webUrl:e.webUrl
},function(i){
o.debug("musicPlay res:"+JSON.stringify(i)),o._g.checkJsapiTimeoutId&&clearTimeout(o._g.checkJsapiTimeoutId),
i.err_msg.indexOf("ok")>=0?(_(o._o.type,"wx_pv",1),o._surportType=1,f.surportType=1,
o.jsApiData&&o.jsApiData.updateTimeoutId&&clearTimeout(o.jsApiData.updateTimeoutId),
o.jsApiData={
starTime:+new Date,
curTime:0,
updateTimeoutId:null,
duration:e.duration||void 0
},o._onPlay(),"undefined"!=typeof e.duration&&1*e.duration>0&&o._analogUpdateTime()):2===f.surportType?o._h5Play(t):o._onError({},15);
});
},o.prototype._analogUpdateTime=function(){
function t(){
return e.curTime=1*((+new Date-e.starTime)/1e3).toFixed(2),e.curTime>=e.duration?void o._stopJsapiPlay(!1):(o._onTimeupdate(null,e.curTime),
void(e.updateTimeoutId=setTimeout(function(){
t();
},1e3)));
}
var o=this,e=o.jsApiData;
t();
},o.prototype._onPlay=function(t){
this._status=1;
try{
i(this);
}catch(t){}
"function"==typeof this._o.onStatusChange&&this._o.onStatusChange.call(this,t||{},this._status);
},o.prototype._onPause=function(t){
this._status=2,"function"==typeof this._o.onStatusChange&&this._o.onStatusChange.call(this,t||{},this._status);
},o.prototype._onEnd=function(t){
this._status=3,"function"==typeof this._o.onStatusChange&&this._o.onStatusChange.call(this,t||{},this._status);
},o.prototype._onLoadedmetadata=function(t){
"function"==typeof this._o.onLoadedmetadata&&this._o.onLoadedmetadata.call(this,t||{});
},o.prototype._onTimeupdate=function(t,o){
"function"==typeof this._o.onTimeupdate&&this._o.onTimeupdate.call(this,t||{},o);
},o.prototype._onError=function(t,o){
_(this._o.type,"play_err_total",1),this._status=-1,"function"==typeof this._o.onError&&this._o.onError.call(this,t||{},o);
},o.prototype._H5bindEvent=function(){
var t=this;
this._h5Audio.addEventListener("play",function(o){
t._h5Audio&&t._onPlay(o);
},!1),this._h5Audio.addEventListener("ended",function(o){
t._h5Audio&&t._onEnd(o);
},!1),this._h5Audio.addEventListener("pause",function(o){
t._h5Audio&&t._onPause(o);
},!1),this._h5Audio.addEventListener("error",function(o){
var e=1*o.target.error.code||5;
(1>e||e>5)&&(e=5),_(t._o.type,"h5_err_"+e,1),t._onError(o,e),t._destoryH5Audio();
},!1),"function"==typeof this._o.onTimeupdate&&this._h5Audio.addEventListener("timeupdate",function(o){
t._h5Audio&&t._onTimeupdate(o,t._h5Audio.currentTime);
},!1),"function"==typeof this._o.onLoadedmetadata&&this._h5Audio.addEventListener("loadedmetadata",function(o){
t._h5Audio&&t._onLoadedmetadata(o);
},!1);
},o.prototype._extend=function(t){
for(var o in t)this._o[o]=t[o];
},o.prototype._pauseJsapiPlay=function(t,o){
this._stopJsapiPlay(t,o);
},o.prototype._stopJsapiPlay=function(t,o){
function i(){
s&&(s.updateTimeoutId&&clearTimeout(s.updateTimeoutId),s.updateTimeoutId=null,s.curTime=0),
n._onTimeupdate(null,0),n._onEnd(),"function"==typeof o&&o.call(n);
}
var n=this,s=n.jsApiData;
t?e(function(){
i(o);
}):i(o);
},o.prototype._h5Play=function(t){
1*f.surportType>0&&(_(this._o.type,"h5_pv",1),this._h5Audio?(this._h5Audio.ended||this._h5Audio.paused)&&(this._h5Audio.ended&&(this._h5Audio.currentTime=0),
"undefined"!=typeof t?(this._h5Audio.currentTime=t,this._h5Audio.play()):this._h5Audio.play()):this._createAutoAndPlay());
},o.prototype.getSurportType=function(){
return this._surportType||0;
},o.prototype.getPlayStatus=function(){
return this._status;
},o.prototype.getCurTime=function(){
return 1==this._surportType&&this.jsApiData?this.jsApiData.curTime||0:this._h5Audio?this._h5Audio.currentTime:0;
},o.prototype.getDuration=function(){
return 1==this._surportType&&this.jsApiData?this.jsApiData.duration||void 0:this._h5Audio?this._h5Audio.duration||this._o.duration:void 0;
},o.prototype.pause=function(){
1==this._surportType?this._pauseJsapiPlay(!0):2==this._surportType&&this._h5Audio&&"function"==typeof this._h5Audio.pause&&this._h5Audio.pause();
},o.prototype.stop=function(){
2==this._surportType&&this._h5Audio?(this._h5Audio.pause(),this._h5Audio.currentTime=0,
this._onEnd()):1==this._surportType&&this._stopJsapiPlay(!0);
},o.prototype.play=function(t){
var o=this,e=this._g;
_(this._o.type,"pv",1),e.checkJsapiTimeoutId&&clearTimeout(e.checkJsapiTimeoutId),
l.device.inWechat&&this._o.appPlay&&2!=e._playtype?1!=this._status&&(this._createApp(t),
e.checkJsapiTimeoutId=setTimeout(function(){
o.debug("jsapi timeout,change to h5 play"),o._h5Play(t);
},1e3)):this._h5Play(t);
},o.prototype.debug=function(t){
f.debug&&console.log(t);
},o.prototype.monitor=function(t,o){
_(-1,t,o);
},{
init:s,
getSurportType:n
};
});
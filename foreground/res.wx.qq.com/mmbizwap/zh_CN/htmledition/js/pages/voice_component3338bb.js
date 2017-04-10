define("pages/voice_component.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/pages/voice_component.js*/,["biz_common/dom/event.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/biz_common/dom/event.js*/,"biz_common/tmpl.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/biz_common/tmpl.js*/,"pages/loadscript.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/pages/loadscript.js*/,"pages/music_player.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/pages/music_player.js*/,"biz_common/dom/class.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/biz_common/dom/class.js*/,"pages/report.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/pages/report.js*/,"biz_common/utils/monitor.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/biz_common/utils/monitor.js*/],function(t,e,o,r){
"use strict";
function i(t){
this._o={
type:0,
comment_id:"",
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
webUrl:[location.protocol,"//mp.weixin.qq.com/s?referFrom=#referFrom#&songid=#songId#&__biz=",window.biz,"&mid=",window.mid,"&idx=",window.idx,"&sn=",window.sn,"#wechat_redirect"].join(""),
playingCss:"",
playCssDom:"",
playArea:"",
progress:"",
detailUrl:"",
detailArea:"",
fileSize:0
},this._init(t);
}
function n(t,e,o,r){
I.num++,e.musicSupport=I.musicSupport,e.show_not_support=!1,I.musicSupport||1!=I.num||(e.show_not_support=!0);
var i=document.createElement("div"),n="";
n=r?y.render(t,e):y.tmpl(t,e),i.innerHTML=n;
var s=o.parentNode;
s&&(s.lastChild===o?s.appendChild(i.children[0]):s.insertBefore(i.children[0],o.nextSibling));
}
function s(){
"undefined"==typeof window.reportVoiceid&&(window.reportVoiceid=[]),"undefined"==typeof window.reportMid&&(window.reportMid=[]);
}
function p(){
m.on(window,"unload",a);
}
function a(){
for(var t in I.reportData)g.musicreport({
data:I.reportData[t]
});
}
function c(t){
f.setSum(I.reportId,18,1),f.send();
var e=+new Date,o="http://open.music.qq.com/fcgi-bin/fcg_music_get_song_info_weixin.fcg?song_id=#songid#&mid=#mid#&format=json&app_id=1034002693&app_key=cjjDaueOyPYRJFeTqG&device_id=weixin&file_type=mp3&qqmusic_fromtag=50&callback=get_song_info_back";
o=o.replace("#mid#",t.mid).replace("#songid#",t.id),_({
url:o,
timeout:3e4,
callbackName:"get_song_info_back",
callback:function(o){
var r=+new Date-e;
if(!o||"undefined"==typeof o.ret){
var i=1;
return d({
type:"error",
time:r,
code:i
}),void("function"==typeof t.onError&&t.onError({
errcode:i
}));
}
var n;
n=0==o.ret?1:1001==o.ret?0:1002==o.ret?2:1003==o.ret?3:1004==o.ret?4:5,d({
type:"success",
time:r,
code:n
}),t.onSuc({
status:n
});
},
onerror:function(o){
var r=+new Date-e,i=4;
switch(1*o){
case 400:
i=2;
break;

case 500:
i=3;
break;

default:
i=4;
}
d({
type:"error",
time:r,
code:i
}),"function"==typeof t.onError&&t.onError({
errcode:i
});
}
});
}
function d(t){
var e=Math.max(t.time,0);
if(e=Math.min(e,6e4),t.time>=0&&t.time<200?f.setSum(I.reportId,24,1):t.time>=200&&t.time<500?f.setSum(I.reportId,25,1):t.time>=500&&t.time<1e3?f.setSum(I.reportId,26,1):t.time>=1e3&&t.time<2e3?f.setSum(I.reportId,27,1):t.time>=2e3&&t.time<1e4?f.setSum(I.reportId,28,1):t.time>=1e4&&f.setSum(I.reportId,29,1),
f.setAvg(I.reportId,23,e),"error"==t.type){
switch(1*t.code){
case 1:
f.setSum(I.reportId,9,1);
break;

case 2:
f.setSum(I.reportId,10,1);
break;

case 3:
f.setSum(I.reportId,11,1);
break;

case 4:
f.setSum(I.reportId,12,1);
}
f.setSum(I.reportId,19,1);
}else if("success"==t.type){
switch(1*t.code){
case 0:
f.setSum(I.reportId,8,1);
break;

case 1:
f.setSum(I.reportId,17,1);
break;

case 2:
f.setSum(I.reportId,13,1);
break;

case 3:
f.setSum(I.reportId,14,1);
break;

case 4:
f.setSum(I.reportId,15,1);
break;

case 5:
f.setSum(I.reportId,16,1),f.setSum(I.reportId,17,1);
}
f.setSum(I.reportId,20,1);
}
f.send();
}
function u(t){
return new i(t);
}
var m=t("biz_common/dom/event.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/biz_common/dom/event.js*/),y=t("biz_common/tmpl.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/biz_common/tmpl.js*/),_=t("pages/loadscript.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/pages/loadscript.js*/),l=t("pages/music_player.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/pages/music_player.js*/),h=t("biz_common/dom/class.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/biz_common/dom/class.js*/),g=t("pages/report.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/pages/report.js*/),f=t("biz_common/utils/monitor.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/biz_common/utils/monitor.js*/),I={
reportId:"28306",
musicSupport:l.getSurportType(),
reportData:{},
posIndex:{},
qqMusiceSongId:"http://thirdparty.gtimg.com/#songId#.m4a?fromtag=38&songid=#songId#",
qqMusiceMid:"http://thirdparty.gtimg.com/C100#mid#.m4a?fromtag=38&songid=#songId#",
num:0
};
return s(),p(),i.prototype._init=function(t){
this._extend(t),this._g={
copyright:-1,
check_copyright:!1
},this._initSrc(),this._initQQmusicLyric(),this._initReportData(),this._initPlayer(),
this._playEvent();
},i.prototype._initSrc=function(){
var t=this._o;
t.src||(0==t.type||1==t.type)&&(t.mid?t.src=I.qqMusiceMid.replace("#mid#",t.mid).replace(/#songId#/g,t.songId||""):t.songId&&(t.src=I.qqMusiceSongId.replace(/#songId#/g,t.songId||"")));
},i.prototype._initQQmusicLyric=function(){
var t=this._o;
t.webUrl=0==t.type||1==t.type?t.webUrl.replace("#songId#",t.songId||"").replace("#referFrom#","http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/pages/music.qq.com"):t.webUrl.replace("#songId#","").replace("#referFrom#","");
},i.prototype._initReportData=function(){
var t=this._o;
2==t.type||3==t.type?window.reportVoiceid.push(t.songId):(0==t.type||1==t.type)&&window.reportMid.push(t.songId),
"undefined"==typeof I.reportData[t.type]&&(I.reportData[t.type]=g.getMusicReportData(t),
I.posIndex[t.type]=0),this._g.posIndex=I.posIndex[t.type]++;
var e=I.reportData[t.type];
e.musicid.push(t.songId),e.commentid.push(t.comment_id),e.hasended.push(0),e.mtitle.push(t.title),
e.detail_click.push(0),e.duration.push(parseInt(1e3*t.duration)),e.errorcode.push(0),
e.play_duration.push(0);
},i.prototype._initPlayer=function(){
I.musicSupport&&(this._o.onStatusChange=this._statusChangeCallBack(),this._o.onTimeupdate=this._timeupdateCallBack(),
this._o.onError=this._errorCallBack(),this.player=new l.init(this._o));
},i.prototype._playEvent=function(){
var t=this,e=this._o,o=this._g;
if(I.musicSupport){
var r=0;
2==e.type||3==e.type?r=3:(0==e.type||1==e.type)&&(r=1),m.tap(e.playArea,function(){
return h.hasClass(e.playCssDom,e.playingCss)?(t.player.stop(),g.report({
type:r,
comment_id:e.comment_id,
voiceid:e.songId,
action:5
})):3==r?t._playMusic(3):1==r&&t._checkCopyright(function(){
t._playMusic(1);
}),!1;
});
}
e.detailUrl&&e.detailArea&&m.tap(e.detailArea,function(){
t._checkCopyright(function(){
I.reportData[e.type].detail_click[o.posIndex]=1,window.location.href=e.detailUrl;
});
});
},i.prototype._checkCopyright=function(t){
var e=this,o=this._o,r=this._g;
return this._musicCopyrightWarnning()===!1?void("function"==typeof t&&t()):void(r.check_copyright||(r.check_copyright=!0,
c({
id:o.songId,
mid:o.mid,
onSuc:function(o){
r.check_copyright=!1,r.copyright=1*o.status,e._musicCopyrightWarnning()===!1&&"function"==typeof t&&t();
},
onError:function(){
r.check_copyright=!1;
}
})));
},i.prototype._musicCopyrightWarnning=function(){
var t=this._g;
return 1*t.copyright===-1?!0:1*t.copyright===0?(r("该歌曲版权已过期，无法播放"),!0):1*t.copyright===2?(r("抱歉，应版权方要求，当前国家或地区暂不提供此歌曲服务"),
!0):1*t.copyright===3?(r("该歌曲版权已过期，无法播放"),!0):1*t.copyright===4?(r("抱歉，歌曲信息不正确"),
!0):!1;
},i.prototype._playMusic=function(t){
var e=this._o,o=this._g;
this.player.play(0),I.reportData[e.type].hasended[o.posIndex]=1,g.report({
type:t,
comment_id:e.comment_id,
voiceid:e.songId,
action:4
});
},i.prototype._extend=function(t){
for(var e in t)this._o[e]=t[e];
},i.prototype._statusChangeCallBack=function(){
var t=this;
return function(e,o){
t._updatePlayerCss(this,o);
};
},i.prototype._timeupdateCallBack=function(){
var t=this,e=this._o,o=this._g;
return function(r,i){
t._updateProgress(this,i),0!=i&&(I.reportData[e.type].play_duration[o.posIndex]=parseInt(1e3*i));
};
},i.prototype._errorCallBack=function(){
var t=this,e=this._o,o=this._g;
return function(r,i){
I.reportData[e.type].errorcode[o.posIndex]=i,t._updatePlayerCss(this,3);
};
},i.prototype._updatePlayerCss=function(t,e){
var o=this._o,r=o.playCssDom,i=o.progress;
2==e||3==e?(h.removeClass(r,o.playingCss),!!i&&(i.style.width=0)):1==e&&h.addClass(r,o.playingCss);
},i.prototype._updateProgress=function(t,e){
var o=this._o,r=o.progress,i=t.getDuration();
i&&r&&(r.style.width=this._countProgress(i,e));
},i.prototype._countProgress=function(t,e){
return e/t*100+"%";
},{
init:u,
renderPlayer:n
};
});
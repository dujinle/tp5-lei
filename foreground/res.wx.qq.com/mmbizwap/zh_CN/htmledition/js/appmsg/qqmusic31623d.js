define("appmsg/qqmusic.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/appmsg/qqmusic.js*/,["biz_common/utils/string/html.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/utils/string/html.js*/,"pages/qqmusic_tpl.html.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/pages/qqmusic_tpl.html.js*/,"pages/voice_component.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/pages/voice_component.js*/],function(e){
"use strict";
function i(){
var e=u("js_content");
return e?(p._oElements=e.getElementsByTagName("qqmusic")||[],p._oElements.length<=0?!1:!0):!1;
}
function t(){
p.musicLen=p._oElements.length;
}
function m(){
for(var e=0,i=0;i<p.musicLen;i++){
var t=p._oElements[i],m={};
m.musicid=r(t.getAttribute("musicid")||"").replace(/^\s/,"").replace(/\s$/,""),m.comment_id=r(t.getAttribute("commentid")||"").replace(/^\s/,"").replace(/\s$/,""),
m.musicid&&"undefined"!=m.musicid&&m.comment_id&&"undefined"!=m.comment_id&&(c(t,m,e),
e++);
}
}
function c(e,i,t){
i.media_id=r(e.getAttribute("mid")||"").replace(/^\s/,"").replace(/\s$/,""),i.duration=e.getAttribute("play_length")||0,
i.posIndex=t,i.musicImgPart=r(e.getAttribute("albumurl")||"").replace(/^\s/,"").replace(/\s$/,"");
var m="";
m=i.musicImgPart.split("/");
try{
m=m[m.length-1],m=m.split(".")[0];
}catch(c){
m="";
}
i.music_img=m?p.imgroot2.replace("#mid#",m):p.imgroot+i.musicImgPart,i.audiourl=r(e.getAttribute("audiourl")||"").replace(/^\s/,"").replace(/\s$/,""),
i.singer=r(e.getAttribute("singer")||"").replace(/^\s/,"").replace(/\s$/,""),i.music_name=r(e.getAttribute("music_name")||"").replace(/^\s/,"").replace(/\s$/,""),
o.renderPlayer(l,i,e),n(i),p.musicList[i.musicid+"_"+i.posIndex]=i;
}
function n(e){
var i=e.musicid+"_"+e.posIndex,t=e.comment_id+"_"+e.posIndex,m=["http://i.y.qq.com/v8/playsong.html?songmid=",e.media_id,,"&ADTAG=weixin_gzh#wechat_redirect"].join(""),c=s(e.music_name);
e.player=o.init({
type:0,
comment_id:e.comment_id,
mid:e.media_id,
songId:e.musicid,
duration:1*(e.duration/1e3).toFixed(2),
title:c,
singer:window.nickname?window.nickname+"推荐的歌":"公众号推荐的歌",
epname:"QQ音乐",
coverImgUrl:e.music_img,
playingCss:"qqmusic_playing",
playCssDom:u("qqmusic_main_"+t),
playArea:u("qqmusic_play_"+i),
detailUrl:m,
detailArea:u("qqmusic_home_"+i)
});
}
function s(e){
return e=(e||"").replace(/&#96;/g,"`").replace(/&#61;/g,"=").replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");
}
function r(e){
return e=(e||"").replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/=/g,"&#61;").replace(/`/g,"&#96;");
}
function a(){}
function u(e){
return document.getElementById(e);
}
e("biz_common/utils/string/html.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/utils/string/html.js*/);
var l=e("pages/qqmusic_tpl.html.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/pages/qqmusic_tpl.html.js*/),o=e("pages/voice_component.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/pages/voice_component.js*/),p={
imgroot:"https://imgcache.qq.com/music/photo/mid_album_68",
imgroot2:"https://y.gtimg.cn/music/photo_new/T002R68x68M000#mid#.jpg",
musicList:{},
musicLen:0
};
return i()?(t(),m(),a(),p.musicList):void 0;
});
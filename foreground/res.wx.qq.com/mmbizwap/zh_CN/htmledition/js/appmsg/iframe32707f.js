define("appmsg/iframe.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/appmsg/iframe.js*/,["biz_common/utils/string/html.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/utils/string/html.js*/,"new_video/ctl.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/new_video/ctl.js*/,"pages/version4video.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/pages/version4video.js*/,"biz_common/dom/attr.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/dom/attr.js*/,"biz_common/dom/event.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/dom/event.js*/],function(e){
"use strict";
function t(e){
var t=0;
try{
e.contentDocument&&e.contentDocument.body.offsetHeight?t=e.contentDocument.body.offsetHeight:e.Document&&e.Document.body&&e.Document.body.scrollHeight?t=e.Document.body.scrollHeight:e.document&&e.document.body&&e.document.body.scrollHeight&&(t=e.document.body.scrollHeight);
var i=e.parentElement;
if(i&&(e.style.height=t+"px"),/MSIE\s(7|8)/.test(navigator.userAgent)&&e.contentWindow&&e.contentWindow.document){
var o=e.contentWindow.document.getElementsByTagName("html");
o&&o.length&&(o[0].style.overflow="hidden");
}
}catch(n){}
}
function i(){
for(var e=window.pageYOffset||document.documentElement.scrollTop,t=r.video_top.length,o=e+r.innerHeight,d=0,s=0;t>s;s++){
var m=r.video_top[s];
m.reported?d++:o>=m.start&&o<=m.end&&(m.reported=!0,n.report({
step:1,
vid:m.vid
}));
}
d==t&&(c.off(window,"scroll",i),r.video_top=r.video_iframe=i=null);
}
e("biz_common/utils/string/html.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/utils/string/html.js*/);
{
var o,n=e("new_video/ctl.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/new_video/ctl.js*/),r={
innerHeight:window.innerHeight||document.documentElement.clientHeight,
video_iframe:[],
video_top:[]
},d=e("pages/version4video.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/pages/version4video.js*/),s=e("biz_common/dom/attr.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/dom/attr.js*/),c=(s.setProperty,e("biz_common/dom/event.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/dom/event.js*/)),m=document.getElementsByTagName("iframe");
/MicroMessenger/.test(navigator.userAgent);
}
window.reportVid=[];
for(var a=Math.ceil(1e4*Math.random()),p=0,l=m.length;l>p;++p){
o=m[p];
var v=o.getAttribute("data-src")||"",u=o.className||"",f=o.getAttribute("src")||v;
if(!v||"#"==v){
var _=o.getAttribute("data-display-src");
if(_&&(0==_.indexOf("/cgi-bin/readtemplate?t=vote/vote-new_tmpl")||0==_.indexOf("https://mp.weixin.qq.com/cgi-bin/readtemplate?t=vote/vote-new_tmpl"))){
_=_.replace(/&amp;/g,"&");
for(var w=_.split("&"),h=["/mp/newappmsgvote?action=show"],p=0;p<w.length;p++)(0==w[p].indexOf("__biz=")||0==w[p].indexOf("supervoteid="))&&h.push(w[p]);
h.length>1&&(v=h.join("&")+"#wechat_redirect");
}
}
if(d.isShowMpVideo()&&f&&(0==f.indexOf("http://v.qq.com/iframe/player.html")||0==f.indexOf("http://v.qq.com/iframe/preview.html")||0==f.indexOf("https://v.qq.com/iframe/player.html")||0==f.indexOf("https://v.qq.com/iframe/preview.html"))){
v=v.replace(/^https:/,location.protocol),v=v.replace(/^http:/,location.protocol),
v=v.replace(/preview.html/,"http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/player.html");
var g=f.match(/[\?&]vid\=([^&]*)/);
if(!g||!g[1])continue;
var x=g[1],y=document.getElementById("js_content").offsetWidth,b=Math.ceil(3*y/4);
x=x.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),window.reportVid.push(x),r.video_iframe.push({
dom:o,
vid:x
}),f=["/mp/videoplayer?video_h=",b,"&scene=",window.source,"&random_num=",a,"&article_title=",encodeURIComponent(window.msg_title.htmlDecode()),"&source=4&vid=",x,"&mid=",appmsgid,"&idx=",itemidx||idx,"&__biz=",biz,"&nodetailbar=",window.is_temp_url?1:0,"&uin=",uin,"&key=",key,"&pass_ticket=",pass_ticket,"&version=",version,"&devicetype=",window.devicetype||"","&wxtoken=",window.wxtoken||""].join(""),
uin||window.__addIdKeyReport&&window.__addIdKeyReport("28307",21),window.__addIdKeyReport&&window.__addIdKeyReport("28307",11),
setTimeout(function(e,t,i,o){
return function(){
o.removeAttribute("style"),o.setAttribute("width",e),o.setAttribute("height",t),
o.setAttribute("marginWidth",0),o.setAttribute("marginHeight",0),o.style.top="0",
o.setAttribute("src",i);
};
}(y,b,f,o),0);
}else if(v&&(v.indexOf("newappmsgvote")>-1&&u.indexOf("js_editor_vote_card")>=0||0==v.indexOf("http://mp.weixin.qq.com/bizmall/appmsgcard")&&u.indexOf("card_iframe")>=0||v.indexOf("appmsgvote")>-1||v.indexOf("mp.weixin.qq.com/mp/getcdnvideourl")>-1)){
if(v=v.replace(/^http:/,location.protocol),u.indexOf("card_iframe")>=0){
var k=v.replace("#wechat_redirect",["&pass_ticket=",pass_ticket,"&scene=",source,"&msgid=",appmsgid,"&msgidx=",itemidx||idx,"&version=",version,"&devicetype=",window.devicetype||"","&child_biz=",biz,"&wxtoken=",window.wxtoken||""].join(""));
reprint_ticket&&(k+=["&mid=",mid,"&idx=",idx,"&reprint_ticket=",reprint_ticket,"&source_mid=",source_mid,"&source_idx=",source_idx].join("")),
o.setAttribute("src",k);
}else{
var O=v.indexOf("#wechat_redirect")>-1,j=["&uin=",uin,"&key=",key,"&pass_ticket=",pass_ticket,"&wxtoken=",window.wxtoken||""].join("");
reprint_ticket?j+=["&mid=",mid,"&idx=",idx,"&reprint_ticket=",reprint_ticket,"&source_mid=",source_mid,"&source_idx=",source_idx].join(""):u.indexOf("vote_iframe")>=0&&(j+=["&mid=",mid,"&idx=",idx].join(""));
var k=O?v.replace("#wechat_redirect",j):v+j;
o.setAttribute("src",k);
}
-1==v.indexOf("mp.weixin.qq.com/mp/getcdnvideourl")&&!function(e){
e.onload=function(){
t(e);
};
}(o),o.appmsg_idx=p;
}
if(v&&v.indexOf("mp.weixin.qq.com/mp/getcdnvideourl")>-1&&y>0){
var q=y,A=3*q/4;
o.width=q,o.height=A,o.style.setProperty&&(o.style.setProperty("width",q+"px","important"),
o.style.setProperty("height",A+"px","important"));
}
}
if(window.iframe_reload=function(){
for(var e=0,i=m.length;i>e;++e){
o=m[e];
var n=o.getAttribute("src");
n&&(n.indexOf("newappmsgvote")>-1||n.indexOf("appmsgvote")>-1)&&t(o);
}
},"getElementsByClassName"in document)for(var H,z=document.getElementsByClassName("video_iframe"),p=0;H=z.item(p++);)H.setAttribute("scrolling","no"),
H.style.overflow="hidden";
r.video_iframe.length>0&&setTimeout(function(){
for(var e=r.video_iframe,t=document.getElementById("js_article"),o=0,n=e.length;n>o;o++){
var d=e[o];
if(!d||!d.dom)return;
for(var s=d.dom,m=s.offsetHeight,a=0;s&&t!==s;)a+=s.offsetTop,s=s.offsetParent;
r.video_top.push({
start:a+m/2,
end:a+m/2+r.innerHeight,
reported:!1,
vid:d.vid
});
}
i(),c.on(window,"scroll",i);
},0);
});
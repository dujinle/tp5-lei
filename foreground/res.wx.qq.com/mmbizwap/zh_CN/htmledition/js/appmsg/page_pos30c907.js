define("appmsg/page_pos.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/appmsg/page_pos.js*/,["biz_common/utils/string/html.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/utils/string/html.js*/,"biz_common/dom/event.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/dom/event.js*/,"biz_wap/utils/ajax.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_wap/utils/ajax.js*/,"biz_common/utils/cookie.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/utils/cookie.js*/,"biz_common/utils/http.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/utils/http.js*/,"appmsg/cdn_img_lib.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/appmsg/cdn_img_lib.js*/,"biz_wap/utils/storage.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_wap/utils/storage.js*/],function(e){
"use strict";
function t(e){
for(var t=5381,o=0;o<e.length;o++)t=(t<<5)+t+e.charCodeAt(o),t&=2147483647;
return t;
}
function o(e,t){
if(e&&!(e.length<=0))for(var o,n,i,a=/http(s)?\:\/\/([^\/\?]*)(\?|\/)?/,d=0,m=e.length;m>d;++d)o=e[d],
o&&(n=o.getAttribute(t),n&&(i=n.match(a),i&&i[2]&&(g[i[2]]=!0)));
}
function n(e){
for(var t=0,o=p.length;o>t;++t)if(p[t]==e)return!0;
return!1;
}
function i(){
g={},o(document.getElementsByTagName("a"),"href"),o(document.getElementsByTagName("link"),"href"),
o(document.getElementsByTagName("iframe"),"src"),o(document.getElementsByTagName("script"),"src"),
o(document.getElementsByTagName("img"),"src");
var e=[];
for(var t in g)g.hasOwnProperty(t)&&(window.networkType&&"wifi"==window.networkType&&!u&&n(t)&&(u=!0),
e.push(t));
return g={},e.join(",");
}
function a(){
var e,t=window.pageYOffset||document.documentElement.scrollTop,o=document.getElementById("js_content"),n=document.documentElement.clientHeight||window.innerHeight,a=document.documentElement.clientWidth||window.innerWidth,d=document.body.scrollHeight||document.body.offsetHeight,r=Math.ceil(d/n),l=Math.ceil((o.scrollHeight||o.offsetHeight)/n),w=(window.logs.read_height||t)+n,_=document.getElementById("js_toobar3").offsetTop,g=o.getElementsByTagName("img")||[],p=Math.ceil(w/n)||1,f=document.getElementById("media"),h=50,y=0,b=0,v=0,T=0,j=w+h>_?1:0;
p>r&&(p=r);
var z=function(t){
if(t)for(var o=0,n=t.length;n>o;++o){
var i=t[o];
if(i){
y++;
var a=i.getAttribute("src"),d=i.getAttribute("data-type");
a&&0==a.indexOf("http")&&(b++,a.isCDN()&&(v++,-1!=a.indexOf("tp=webp")&&T++),d&&(e["img_"+d+"_cnt"]=e["img_"+d+"_cnt"]||0,
e["img_"+d+"_cnt"]++));
}
}
e.download_cdn_webp_img_cnt=T||0,e.download_img_cnt=b||0,e.download_cdn_img_cnt=v||0,
e.img_cnt=y||0;
},O=window.appmsgstat||{},E=window.logs.img||{},k=window.logs.pagetime||{},x=E.load||{},S=E.read||{},B=[],D=[],N=0,I=0,H=0;
for(var M in S)M&&0==M.indexOf("http")&&S.hasOwnProperty(M)&&D.push(M);
for(var M in x)M&&0==M.indexOf("http")&&x.hasOwnProperty(M)&&B.push(M);
for(var A=0,P=B.length;P>A;++A){
var R=B[A];
R&&R.isCDN()&&(-1!=R.indexOf("/0")&&N++,-1!=R.indexOf("/640")&&I++,-1!=R.indexOf("/300")&&H++);
}
var e={
__biz:biz,
title:msg_title.htmlDecode(),
mid:mid,
idx:idx,
read_cnt:O.read_num||0,
like_cnt:O.like_num||0,
screen_width:a,
screen_height:n,
screen_num:l,
idkey:"",
copyright_stat:"",
ori_article_type:"",
video_cnt:window.logs.video_cnt||0,
read_screen_num:p||0,
is_finished_read:j,
scene:source,
content_len:c.content_length||0,
start_time:page_begintime,
end_time:(new Date).getTime(),
img_640_cnt:I,
img_0_cnt:N,
img_300_cnt:H,
wtime:k.onload_time||0,
ftime:k.ftime||0,
ptime:k.ptime||0,
onload_time:k.onload_time||0,
reward_heads_total:window.logs.reward_heads_total||0,
reward_heads_fail:window.logs.reward_heads_fail||0,
outer_pic:window.logs.outer_pic||0,
publish_time:ct
};
if(window.networkType&&"wifi"==window.networkType&&(e.wifi_all_imgs_cnt=B.length,
e.wifi_read_imgs_cnt=D.length),window.logs.webplog&&4==window.logs.webplog.total){
var Y=window.logs.webplog;
e.webp_total=1,e.webp_lossy=Y.lossy,e.webp_lossless=Y.lossless,e.webp_alpha=Y.alpha,
e.webp_animation=Y.animation;
}
if(e.copyright_stat=window._copyright_stat||"",e.ori_article_type=window._ori_article_type||"",
window.__addIdKeyReport&&window.moon&&(moon.hit_num>0&&moon.hit_num<1e3&&window.__addIdKeyReport(27613,30,moon.hit_num),
moon.mod_num>0&&moon.mod_num<1e3&&window.__addIdKeyReport(27613,31,moon.mod_num)),
window.logs.idkeys){
var q=window.logs.idkeys,C=[];
for(var J in q)if(q.hasOwnProperty(J)){
var K=q[J];
K.val>0&&C.push(J+"_"+K.val);
}
e.idkey=C.join(";");
}
z(!!f&&f.getElementsByTagName("img")),z(g);
var W=(new Date).getDay(),L=i();
(u||0!==user_uin&&Math.floor(user_uin/100)%7==W)&&(e.domain_list=L),u&&(e.html_content=s),
window.isSg&&(e.from="sougou"),e.source=window.friend_read_source||"",e.req_id=window.req_id||"",
e.recommend_version=window.friend_read_version||"",e.class_id=window.friend_read_class_id||"",
m({
url:"/mp/appmsgreport?action=page_time",
type:"POST",
mayAbort:!0,
data:e,
async:!1,
timeout:2e3
});
}
e("biz_common/utils/string/html.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/utils/string/html.js*/);
var d=e("biz_common/dom/event.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/dom/event.js*/),m=e("biz_wap/utils/ajax.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_wap/utils/ajax.js*/),r=(e("biz_common/utils/cookie.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/utils/cookie.js*/),
e("biz_common/utils/http.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/utils/http.js*/));
e("appmsg/cdn_img_lib.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/appmsg/cdn_img_lib.js*/);
var s,l=e("biz_wap/utils/storage.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_wap/utils/storage.js*/),w=new l("ad"),_=new l("page_pos"),c={};
!function(){
s=document.getElementsByTagName("html"),s&&1==!!s.length&&r&&(s=s[0].innerHTML,c.content_length=r.htmlSize),
window.logs.pageinfo=c;
}();
var g={},u=!1,p=["http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/wap.zjtoolbar.10086.cn","http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/125.88.113.247","http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/115.239.136.61","http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/134.224.117.240","http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/hm.baidu.com","http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/c.cnzz.com","http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/w.cnzz.com","http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/124.232.136.164","http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/img.100msh.net","http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/10.233.12.76","http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/wifi.witown.com","http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/211.137.132.89","http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/qiao.baidu.com","http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/baike.baidu.com"],f=null,h=0,y=msg_link.split("?").pop(),b=t(y);
!function(){
if(window.localStorage&&!localStorage.getItem("clear_page_pos")){
for(var e=localStorage.length-1;e>=0;){
var t=localStorage.key(e);
t.match(/^\d+$/)?localStorage.removeItem(t):t.match(/^adinfo_/)&&localStorage.removeItem(t),
e--;
}
localStorage.setItem("clear_page_pos","true");
}
}(),window.localStorage&&(d.on(window,"load",function(){
h=1*_.get(b);
var e=location.href.indexOf("scrolltodown")>-1?!0:!1,t=(document.getElementById("img-content"),
document.getElementById("js_cmt_area"));
if(e&&t&&t.offsetTop){
var o=t.offsetTop;
window.scrollTo(0,o-25);
}else window.scrollTo(0,h);
}),d.on(window,"unload",function(){
if(_.set(o,h,+new Date+72e5),window.__ajaxtest="2",window._adRenderData&&"undefined"!=typeof JSON&&JSON.stringify){
var e=JSON.stringify(window._adRenderData),t=+new Date,o=[biz,sn,mid,idx].join("_");
w.set(o,{
info:e,
time:t
},+new Date+24e4);
}
a();
}),window.logs.read_height=0,d.on(window,"scroll",function(){
var e=window.pageYOffset||document.documentElement.scrollTop;
window.logs.read_height=Math.max(window.logs.read_height,e),clearTimeout(f),f=setTimeout(function(){
h=window.pageYOffset,_.set(b,h,+new Date+72e5);
},500);
}),d.on(document,"touchmove",function(){
var e=window.pageYOffset||document.documentElement.scrollTop;
window.logs.read_height=Math.max(window.logs.read_height,e),clearTimeout(f),f=setTimeout(function(){
h=window.pageYOffset,_.set(b,h,+new Date+72e5);
},500);
}));
});
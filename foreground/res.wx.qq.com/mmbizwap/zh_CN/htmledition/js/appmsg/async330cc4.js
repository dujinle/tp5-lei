define("appmsg/async.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/appmsg/async.js*/,["biz_common/utils/string/html.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/utils/string/html.js*/,"appmsg/img_copyright_tpl.html.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/appmsg/img_copyright_tpl.html.js*/,"biz_common/dom/event.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/dom/event.js*/,"biz_wap/utils/ajax.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_wap/utils/ajax.js*/,"biz_common/dom/class.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/dom/class.js*/,"biz_wap/jsapi/core.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_wap/jsapi/core.js*/,"biz_common/tmpl.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/tmpl.js*/,"biz_wap/utils/storage.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_wap/utils/storage.js*/,"appmsg/log.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/appmsg/log.js*/,"rt/appmsg/getappmsgext.rt.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/rt/appmsg/getappmsgext.rt.js*/,"a/a.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/a/a.js*/,"pages/version4video.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/pages/version4video.js*/,"appmsg/like.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/appmsg/like.js*/,"appmsg/comment.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/appmsg/comment.js*/,"appmsg/reward_entry.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/appmsg/reward_entry.js*/,"a/testdata.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/a/testdata.js*/,"appmsg/iframe.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/appmsg/iframe.js*/],function(e){
"use strict";
function t(e){
if(e&&e.img_copy_info&&e.img_copy_info.list){
for(var t={},i=e.img_copy_info.list,n=window.__appmsgCgiData.copyright_stat,r=window.__appmsgCgiData.source_biz,a=0,o=i.length;o>a;a++){
var s=i[a];
if(2==s.type){
if(2==n&&r==s.source_uin)continue;
t[s.img_url]={
source_nickname:s.source_nickname,
source_uin:s.source_uin,
source_encode_biz:s.source_encode_biz||""
};
}
}
for(var m=document.getElementsByTagName("img"),a=0,o=m.length;o>a;a++){
var s=m[a],c=s.getAttribute("data-src")||s.getAttribute("data-backsrc")||"";
if(t[c]){
var p=document.createElement("div");
p.innerHTML=f.tmpl(d,t[c]);
{
var l=p.children[0],g=s.parentNode,w=g.insertBefore(l,s),u=w.children[0];
(function(e,t){
_.on(t,"click",function(){
var t="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz="+e.source_encode_biz+"&scene=112#wechat_redirect";
return-1!=navigator.userAgent.indexOf("WindowsWechat")||-1!=navigator.userAgent.indexOf("Mac OS")?(location.href=t,
!1):(h.invoke("openUrlWithExtraWebview",{
url:t,
openType:1
},function(e){
-1==e.err_msg.indexOf("ok")&&(location.href=t);
}),!1);
});
})(t[c],u);
}
w.insertBefore(s,u);
}
}
}
}
function i(e){
if(k&&k.length>0)for(var t,i,n,r=0,a=k.length;a>r;++r)t=k[r],i=t.iframe,n=t.src,
e&&(n=n.replace(/\&encryptVer=[^\&]*/gi,""),n=n.replace(/\&platform=[^\&]*/gi,""),
n=n.replace(/\&cKey=[^\&]*/gi,""),n=n+"&encryptVer=6.0&platform=61001&cKey="+e),
i.setAttribute("src",n);
}
function n(t){
var i=t.appmsgstat||{};
window.appmsgstat||(window.appmsgstat=i),i.show&&(!function(){
var e=document.getElementById("js_read_area3"),t=document.getElementById("like3");
e.style.display="block",t.style.display="inline",i.liked=window.is_temp_url?window.liked:i.liked,
i.liked&&u.addClass(t,"praised"),t.setAttribute("like",i.liked?"1":"0");
var n=document.getElementById("likeNum3"),r=document.getElementById("readNum3"),a=window.is_temp_url?window.read_num:i.read_num,o=window.is_temp_url?window.like_num:i.like_num;
a||(a=1),o||(o="赞"),parseInt(a)>1e5?a="100000+":"",parseInt(o)>1e5?o="100000+":"",
r&&(r.innerHTML=a),n&&(n.innerHTML=o);
}(),e("appmsg/like.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/appmsg/like.js*/)),1==t.comment_enabled&&(window.can_fans_comment_only=t.only_fans_can_comment,
e("appmsg/comment.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/appmsg/comment.js*/)),-1==p.indexOf("WindowsWechat")&&-1!=p.indexOf("MicroMessenger")&&t.reward&&(s=e("appmsg/reward_entry.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/appmsg/reward_entry.js*/),
s.handle(t.reward,a()));
}
function r(){
var r="";
k&&k.length>0&&(r="&is_need_ticket=1");
var o=b.checkNeedAds(),s=o.is_need_ad,m=(o._adInfo,o.both_ad),d=-1!=location.href.indexOf("&mock_ad=1");
d&&(o.is_need_ad=s=1),y("[Appmsg] start get asycn data, is_need_ad:"+s),w({
url:"/mp/getappmsgext?__biz="+biz+"&appmsg_type="+appmsg_type+"&mid="+mid+"&sn="+sn+"&idx="+idx+"&scene="+source+"&title="+encodeURIComponent(msg_title.htmlDecode())+"&ct="+ct+"&abtest_cookie="+abtest_cookie+"&devicetype="+devicetype.htmlDecode()+"&version="+version.htmlDecode()+"&f=json&r="+Math.random()+r+"&is_need_ad="+s+"&comment_id="+comment_id+"&is_need_reward="+is_need_reward+"&both_ad="+m+"&reward_uin_count="+(is_need_reward?3*a():0)+(window.send_time?"&send_time="+send_time:"")+"&msg_daily_idx="+msg_daily_idx,
data:{
is_only_read:is_only_read,
req_id:window.req_id||"",
is_temp_url:window.is_temp_url||0
},
type:"POST",
dataType:"json",
rtId:"27613",
rtKey:"50",
rtDesc:v,
async:!0,
success:function(r){
if(y("[Appmsg] success get async data"),r)try{
if(d){
r.advertisement_num=1;
var a=e("a/testdata.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/a/testdata.js*/);
r.advertisement_info=a.data;
}
if(r&&r.base_resp&&r.base_resp.wxtoken&&(window.wxtoken=r.base_resp.wxtoken),window.fromWeixinCached&&e("appmsg/iframe.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/appmsg/iframe.js*/),
i(r.appmsgticket?r.appmsgticket.ticket:""),t(r),r.ret)return;
b.afterGetAdData(o,r),window.wx_user_can_reward=r.user_can_reward,n({
appmsgstat:r.appmsgstat,
comment_enabled:r.comment_enabled,
only_fans_can_comment:r.only_fans_can_comment,
reward:{
reward_total:r.reward_total_count,
reward_head_imgs:r.reward_head_imgs||[],
can_reward:r.can_reward,
timestamp:r.timestamp
}
});
}catch(s){
y("[Appmsg] error parse async data, biz="+biz+", mid="+mid);
var m=new Image;
return m.src=("http://mp.weixin.qq.com/mp/jsreport?1=1&key=1&content=biz:"+biz+",mid:"+mid+",uin:"+uin+"[key1]"+encodeURIComponent(s.toString())+"&r="+Math.random()).substr(0,1024),
void(console&&console.error(s));
}
},
error:function(){
y("[Appmsg] error get async data, biz="+biz+", mid="+mid);
var e=new Image;
e.src="http://mp.weixin.qq.com/mp/jsreport?1=1&key=2&content=biz:"+biz+",mid:"+mid+",uin:"+uin+"[key2]ajax_err&r="+Math.random();
}
});
}
function a(){
return _.on(window,"resize",function(){
o(),s&&s.render(a());
}),o();
}
function o(){
var e=window.innerWidth||document.documentElement.clientWidth;
try{
var t=document.getElementById("page-content").getBoundingClientRect();
t.width&&(e=t.width);
}catch(i){}
var n=30,r=34,o=Math.floor(.9*(e-n)/r);
return document.getElementById("js_reward_inner")&&(document.getElementById("js_reward_inner").style.width=o*r+"px"),
a=function(){
return o;
},o;
}
e("biz_common/utils/string/html.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/utils/string/html.js*/);
var s,m,d=e("appmsg/img_copyright_tpl.html.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/appmsg/img_copyright_tpl.html.js*/),c=!1,p=navigator.userAgent,l=-1!=p.indexOf("MicroMessenger"),_=(-1!=navigator.userAgent.indexOf("WindowsWechat"),
e("biz_common/dom/event.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/dom/event.js*/)),g=200,w=e("biz_wap/utils/ajax.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_wap/utils/ajax.js*/),u=e("biz_common/dom/class.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/dom/class.js*/),h=e("biz_wap/jsapi/core.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_wap/jsapi/core.js*/),f=e("biz_common/tmpl.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/tmpl.js*/),y=(e("biz_wap/utils/storage.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_wap/utils/storage.js*/),
e("appmsg/log.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/appmsg/log.js*/)),v=e("rt/appmsg/getappmsgext.rt.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/rt/appmsg/getappmsgext.rt.js*/),b=e("a/a.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/a/a.js*/),j=document.getElementsByTagName("iframe"),x=document.getElementById("js_content"),k=[],z=x.offsetWidth,q=3*z/4;
window.logs.video_cnt=0;
for(var O=0,I=j.length;I>O;++O){
m=j[O];
var A=m.getAttribute("data-src")||"",E=m.getAttribute("src")||A;
if(E){
var B=e("pages/version4video.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/pages/version4video.js*/);
if(!B.isShowMpVideo()&&(0==E.indexOf("http://v.qq.com/iframe/player.html")||0==E.indexOf("https://v.qq.com/iframe/player.html")||0==E.indexOf("http://v.qq.com/iframe/preview.html")||0==E.indexOf("https://v.qq.com/iframe/preview.html"))||0==E.indexOf("http://z.weishi.com/weixin/player.html")){
-1==E.indexOf("http://z.weishi.com/weixin/player.html")&&-1==A.indexOf("http://z.weixin.com/weixin/player.html")&&(A=A.replace(/^https:/,location.protocol),
A=A.replace(/^http:/,location.protocol),A=A.replace(/preview.html/,"http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/player.html"),
E=E.replace(/^https:/,location.protocol),E=E.replace(/^http:/,location.protocol),
E=E.replace(/preview.html/,"http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/player.html")),E=E.replace(/width=\d+/g,"width="+z),
E=E.replace(/height=\d+/g,"height="+q),l&&(0==E.indexOf("http://v.qq.com/iframe/player.html")||0==E.indexOf("https://v.qq.com/iframe/player.html"))||l&&(0==E.indexOf("http://v.qq.com/iframe/preview.html")||0==E.indexOf("https://v.qq.com/iframe/preview.html"))?k.push({
iframe:m,
src:E
}):m.setAttribute("src",E),m.width=z,m.height=q,m.style.setProperty&&(m.style.setProperty("width",z+"px","important"),
m.style.setProperty("height",q+"px","important")),window.__addIdKeyReport&&window.__addIdKeyReport("28307",10),
window.logs.video_cnt++;
continue;
}
}
}
var M=document.getElementById("js_toobar3"),W=window.innerHeight||document.documentElement.clientHeight,T=function(){
var e=window.pageYOffset||document.documentElement.scrollTop,t=M.offsetTop;
e+W+g>=t&&(r(),_.off(window,"scroll",T));
};
c?(_.on(window,"scroll",T),T()):r();
});
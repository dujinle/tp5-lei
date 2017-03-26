define("appmsg/share.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/appmsg/share.js*/,["biz_common/utils/string/html.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/utils/string/html.js*/,"appmsg/cdn_img_lib.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/appmsg/cdn_img_lib.js*/,"biz_common/dom/event.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/dom/event.js*/,"biz_common/utils/url/parse.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/utils/url/parse.js*/,"biz_wap/utils/mmversion.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_wap/utils/mmversion.js*/,"biz_wap/utils/ajax.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_wap/utils/ajax.js*/,"biz_wap/jsapi/core.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_wap/jsapi/core.js*/],function(e){
"use strict";
function i(e,i){
var n="",o="";
try{
""!=tid&&(o="tid="+tid+"&aid=54");
var t=e.split("?")[1]||"";
if(t=t.split("#")[0],""==t);else{
var m=[t,"mpshare=1","scene="+i,"srcid="+srcid];
""!=o&&m.push(o),t=m.join("&"),n=e.split("?")[0]+"?"+t+"#"+(e.split("#")[1]||"");
}
}catch(s){
n="";
}
return n||(n=location.href+"#wechat_redirect",(new Image).src=location.protocol+"//mp.weixin.qq.com/mp/jsmonitor?idkey=28307_47_1&lc=1&log0=[share_link]["+encodeURIComponent(location.href)+"]["+encodeURIComponent(e)+"]["+encodeURIComponent(msg_link)+"]"),
n;
}
function n(e,i,n){
var o=e.split("?").pop();
if(o=o.split("#").shift(),""!=o){
var t=[o,"action=share","action_type="+n,"scene="+window.source,"req_id="+(window.req_id||""),"vid="+("undefined"!=typeof window.reportVid?window.reportVid.join(";"):""),"musicid="+("undefined"!=typeof window.reportMid?window.reportMid.join(";"):""),"voiceid="+("undefined"!=typeof window.reportVoiceid?window.reportVoiceid.join(";"):"")].join("&");
s({
url:"/mp/appmsgreport",
type:"POST",
data:t
});
}
}
function o(e,i){
return e.isCDN()&&(e=t.addParam(e,"wxfrom",i,!0)),e;
}
e("biz_common/utils/string/html.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/utils/string/html.js*/),e("appmsg/cdn_img_lib.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/appmsg/cdn_img_lib.js*/);
var t=(e("biz_common/dom/event.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/dom/event.js*/),e("biz_common/utils/url/parse.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/utils/url/parse.js*/)),m=e("biz_wap/utils/mmversion.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_wap/utils/mmversion.js*/),s=e("biz_wap/utils/ajax.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_wap/utils/ajax.js*/),r=e("biz_wap/jsapi/core.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_wap/jsapi/core.js*/);
r.call("hideToolbar"),r.call("showOptionMenu");
var a=msg_title.htmlDecode(),c=(msg_source_url.htmlDecode(),""),l=msg_cdn_url||ori_head_img_url||round_head_img,d=msg_link.htmlDecode(),a=msg_title.htmlDecode(),u=msg_desc.htmlDecode();
u=u||d,u=u.replace(/<br\/>/g,"\n"),idx>1&&document.getElementById("js_content")&&1446652800>ct&&(u=document.getElementById("js_content").innerHTML.replace(/<\/?[^>]*\/?>/g,"").htmlDecode().replace(/^(\s*)|(\s*)$/g,"").substr(0,54)),
l.isCDN()&&(l=l.replace(/\/0$/,"/300"),l=l.replace(/\/0\?/,"/300?")),"1"==is_limit_user&&r.call("hideOptionMenu"),
window.is_temp_url&&r.invoke("hideMenuItems",{
menuList:["menuItem:share:timeline","menuItem:share:qq","menuItem:share:weiboApp","menuItem:share:facebook","menuItem:share:qzone","menuitem:share:weibo","menuItem:share:WeiboApp","menuItem:share:QZone","menuitem:facebook","menuItem:copyUrl","menuItem:share:email","menuitem:copy_url"]
},function(){}),r.on("menu:share:appmessage",function(e){
var t=1,m=o(l,"1");
e&&"favorite"==e.scene&&(t=24,m=o(l,"4")),r.invoke("sendAppMessage",{
appid:c,
img_url:m,
img_width:"640",
img_height:"640",
link:i(d,t),
desc:u,
title:a
},function(){
n(d,fakeid,t);
});
}),r.on("menu:share:timeline",function(){
var e=l;
m.isIOS||(e=o(l,"2")),n(d,fakeid,2),r.invoke("shareTimeline",{
img_url:e,
img_width:"640",
img_height:"640",
link:i(d,2),
desc:u,
title:a
},function(){});
});
r.on("menu:share:weiboApp",function(){
r.invoke("shareWeiboApp",{
img_url:l,
link:i(d,3),
title:a
},function(){
n(d,fakeid,3);
});
}),r.on("menu:share:facebook",function(){
n(d,fakeid,4),r.invoke("shareFB",{
img_url:l,
img_width:"640",
img_height:"640",
link:i(d,4),
desc:u,
title:a
},function(){});
}),r.on("menu:share:QZone",function(){
var e=o(l,"6");
n(d,fakeid,5),r.invoke("shareQZone",{
img_url:e,
img_width:"640",
img_height:"640",
link:i(d,22),
desc:u,
title:a
},function(){});
}),r.on("menu:share:qq",function(){
var e=o(l,"7");
n(d,fakeid,5),r.invoke("shareQQ",{
img_url:e,
img_width:"640",
img_height:"640",
link:i(d,23),
desc:u,
title:a
},function(){});
}),r.on("menu:share:email",function(){
n(d,fakeid,5),r.invoke("sendEmail",{
content:i(d,5),
title:a
},function(){});
});
});
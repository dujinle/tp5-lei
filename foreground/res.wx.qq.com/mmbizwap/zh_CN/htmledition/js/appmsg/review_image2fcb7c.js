define("appmsg/review_image.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/appmsg/review_image.js*/,["biz_common/dom/event.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/dom/event.js*/,"biz_wap/jsapi/core.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_wap/jsapi/core.js*/,"biz_common/utils/url/parse.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/utils/url/parse.js*/,"appmsg/log.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/appmsg/log.js*/,"appmsg/cdn_img_lib.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/appmsg/cdn_img_lib.js*/],function(e){
"use strict";
function t(e,t){
a.invoke("imagePreview",{
current:e,
urls:t
},function(){
window.__addIdKeyReport&&window.__addIdKeyReport("28307","2");
}),n("[Appmsg] click image, src: "+e);
}
function i(e){
var i=[],a=e.container,n=e.imgs||[];
if(a)for(var p=a.getElementsByTagName("img")||[],o=0,m=p.length;m>o;o++)n.push(p.item(o));
for(var o=0,m=n.length;m>o;o++){
var c=n[o],d=c.getAttribute("data-src")||c.getAttribute("src"),g=c.getAttribute("data-type");
if(d&&-1==d.indexOf("wx_fmt=gif")){
for(;-1!=d.indexOf("?tp=webp");)d=d.replace("?tp=webp","");
c.dataset&&c.dataset.s&&d.isCDN()&&(d=d.replace(/\/640$/,"/0"),d=d.replace(/\/640\?/,"/0?")),
d.isCDN()&&(d=r.addParam(d,"wxfrom","3",!0)),e.is_https_res&&(d=d.http2https()),
g&&(d=r.addParam(d,"wxtype",g,!0)),i.push(d),function(e){
s.on(c,"click",function(){
return t(e,i),!1;
});
}(d);
}
}
}
var s=e("biz_common/dom/event.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/dom/event.js*/),a=e("biz_wap/jsapi/core.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_wap/jsapi/core.js*/),r=e("biz_common/utils/url/parse.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/utils/url/parse.js*/),n=e("appmsg/log.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/appmsg/log.js*/);
return e("appmsg/cdn_img_lib.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/appmsg/cdn_img_lib.js*/),i;
});
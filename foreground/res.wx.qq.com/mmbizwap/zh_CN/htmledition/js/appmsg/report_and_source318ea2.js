define("appmsg/report_and_source.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/appmsg/report_and_source.js*/,["biz_common/utils/string/html.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/utils/string/html.js*/,"biz_common/dom/event.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/dom/event.js*/,"biz_common/utils/url/parse.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/utils/url/parse.js*/,"biz_wap/utils/ajax.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_wap/utils/ajax.js*/,"appmsg/open_url_with_webview.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/appmsg/open_url_with_webview.js*/,"biz_wap/jsapi/core.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_wap/jsapi/core.js*/],function(e,t,i,n){
"use strict";
function o(){
var e=p.indexOf("://")<0?"http://"+p:p;
if(-1!=e.indexOf("mp.weixin.qq.com/s")||-1!=e.indexOf("mp.weixin.qq.com/mp/appmsg/show")){
var t=e.split("#");
e=m.addParam(t[0],"scene",25,!0)+(t[1]?"#"+t[1]:""),e=e.replace(/#rd$/g,"#wechat_redirect");
}else e="http://mp.weixinbridge.com/mp/wapredirect?url="+encodeURIComponent(p);
var i={
url:"/mp/advertisement_report"+location.search+"&report_type=3&action_type=0&url="+encodeURIComponent(p)+"&__biz="+biz+"&r="+Math.random(),
type:"GET",
mayAbort:!0,
async:!1
};
return i.timeout=2e3,i.complete=function(){
_(e,{
sample:0,
reject:function(){
location.href=e;
}
});
},s(i),!1;
}
e("biz_common/utils/string/html.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/utils/string/html.js*/);
var r=e("biz_common/dom/event.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/dom/event.js*/),m=e("biz_common/utils/url/parse.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_common/utils/url/parse.js*/),s=e("biz_wap/utils/ajax.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_wap/utils/ajax.js*/),c=msg_title.htmlDecode(),p=msg_source_url.htmlDecode(),a=document.getElementById("js_report_article3"),_=e("appmsg/open_url_with_webview.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/appmsg/open_url_with_webview.js*/),l=e("biz_wap/jsapi/core.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_wap/jsapi/core.js*/);
r.tap(a,function(){
var e=["/mp/infringement?url=",encodeURIComponent(window.msg_link),"&title=",encodeURIComponent(c),"&__biz=",biz].join("");
return location.href=e+"#wechat_redirect",!1;
});
var u=document.getElementById("js_view_source");
r.on(u,"click",function(){
return o(),!1;
});
});
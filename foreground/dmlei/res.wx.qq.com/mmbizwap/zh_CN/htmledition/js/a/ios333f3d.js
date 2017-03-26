define("a/ios.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/a/ios.js*/,["biz_common/dom/event.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_common/dom/event.js*/,"biz_common/utils/report.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_common/utils/report.js*/,"biz_wap/utils/ajax.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_wap/utils/ajax.js*/,"biz_wap/jsapi/core.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_wap/jsapi/core.js*/],function(t){
"use strict";
function e(t){
"undefined"!=typeof WeixinJSBridge&&WeixinJSBridge.log&&WeixinJSBridge.log(t);
}
function o(t,e){
n("http://mp.weixin.qq.com/mp/ad_report?action=follow&type="+t+e.report_param);
}
function i(t){
var i=t.btn;
if(!i)return!1;
var n=t.adData,p=!1,c={};
t.report_param=t.report_param||"";
var d="http://"+location.host+"/mp/ad_redirect?url="+encodeURIComponent(n.appinfo_url)+"&ticket="+(t.ticket||window.ticket)+"#wechat_redirect";
r.on(i,"click",function(){
if(e("click @js_app_action"),p)return e("is_app_installed"),o(n.is_appmsg?17:13,t),
void(location.href=n.app_id+"://");
var i=function(){
e("download"),o(n.is_appmsg?15:11,t),e("go : "+d),location.href=d;
};
return e("download"),n.rl&&n.traceid?c[n.traceid]||(c[n.traceid]=!0,a({
url:"/mp/advertisement_report?report_type=2&type="+n.type+"&url="+encodeURIComponent(n.appinfo_url)+"&tid="+n.traceid+"&rl="+encodeURIComponent(n.rl)+"&pt="+n.pt+t.report_param,
type:"GET",
timeout:1e3,
complete:function(){
e("ready to download"),c[n.traceid]=!1,i();
},
async:!0
})):i(),!1;
});
}
{
var r=t("biz_common/dom/event.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_common/dom/event.js*/),n=t("biz_common/utils/report.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_common/utils/report.js*/),a=t("biz_wap/utils/ajax.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_wap/utils/ajax.js*/);
t("biz_wap/jsapi/core.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_wap/jsapi/core.js*/);
}
return i;
});
define("a/a_report.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/a/a_report.js*/,["biz_wap/utils/ajax.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_wap/utils/ajax.js*/,"biz_wap/jsapi/core.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_wap/jsapi/core.js*/,"biz_wap/utils/mmversion.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_wap/utils/mmversion.js*/,"appmsg/log.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/appmsg/log.js*/],function(o){
"use strict";
function t(o,t){
var i="https:"==top.location.protocol?1500:1200,c="/mp/advertisement_report?r="+Math.random()+"&",u=[],l=!1;
for(var _ in o)o.hasOwnProperty(_)&&u.push(_+"="+o[_]);
c+=u.join("&");
var d="trace_id="+o.tid+"&product_type="+o.pt+"&jump_url="+o.url+"&logtype=3&url="+encodeURIComponent(location.href)+"&rl="+o.rl;
o.tid&&n.gtVersion("http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/6.3.22",!0)&&p.invoke("adDataReport",{
ad_info:d,
need_record_page_operation:1
},function(){}),s("[Ad report] report_arg="+d),r({
url:c,
mayAbort:!0,
type:"GET",
success:function(){
e&&e(56+a);
},
error:function(){
e&&e(57+a);
},
complete:function(){
l||(l=!0,!!t&&t());
},
async:!0
}),setTimeout(function(){
l||(l=!0,window.__ajaxtest="1",!!t&&t());
},i);
}
var r=o("biz_wap/utils/ajax.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_wap/utils/ajax.js*/),e=window.__report,i=top.location.protocol,a="https:"==i?5:0,p=o("biz_wap/jsapi/core.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_wap/jsapi/core.js*/),n=o("biz_wap/utils/mmversion.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_wap/utils/mmversion.js*/),s=o("appmsg/log.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/appmsg/log.js*/);
return{
AdClickReport:t
};
});
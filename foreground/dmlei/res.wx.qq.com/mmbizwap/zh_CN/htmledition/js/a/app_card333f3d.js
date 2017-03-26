define("a/app_card.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/a/app_card.js*/,["biz_common/dom/event.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_common/dom/event.js*/,"biz_common/dom/class.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_common/dom/class.js*/,"a/a_report.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/a/a_report.js*/,"biz_wap/utils/position.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_wap/utils/position.js*/,"biz_common/utils/report.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_common/utils/report.js*/,"biz_wap/jsapi/core.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_wap/jsapi/core.js*/,"biz_common/utils/url/parse.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_common/utils/url/parse.js*/],function(a,t,n,e){
"use strict";
function d(a){
h("http://mp.weixin.qq.com/mp/ad_report?action=follow&type="+a+z.report_param);
}
function o(a,t){
z.app_status=a,"downloading"==a?(t=t||0,z.btn.innerHTML='<i class="btn_processor" style="width:'+t+'%;"></i><span class="btn_processor_value">'+t+"%</span>",
f.addClass(z.btn,"with_processor")):(f.removeClass(z.btn,"with_processor"),z.btn.innerHTML=j[a]);
}
function i(a){
var t=a.js_app_rating,n=1*z.data.app_rating;
n>5&&(n=5),0>n&&(n=0);
var e=["","one","two","three","four","five"],d="",o=Math.floor(n);
if(d="star_"+e[o],n>o&&(n=o+.5,d+="_half"),t&&n>0){
var i=t.getElementsByClassName("js_stars"),l=t.getElementsByClassName("js_scores");
i&&l&&i[0]&&l[0]&&(i=i[0],l=l[0],i.style.display="inline-block",f.addClass(i,d));
}
}
function l(a){
"undefined"!=typeof b&&b.log&&b.log(a);
}
function s(){
b.on("wxdownload:progress_change",function(a){
a.download_id==z.download_id&&o("downloading",a.progress);
});
}
function r(){
z.download_id&&b.invoke("queryDownloadTask",{
download_id:z.download_id
},function(a){
if(l("queryDownloadTask : "+a.state+"; dowloadid = "+z.download_id),a&&a.state){
if("download_succ"==a.state&&(o("downloaded"),window.clearInterval(z.clock)),"downloading"==a.state)return;
("download_fail"==a.state||"default"==a.state)&&(window.clearInterval(z.clock),window.clearInterval(z.install_clock),
e("下载失败"),o("download"));
}
});
}
function p(){
b.invoke("getInstallState",{
packageName:z.data.pkgname,
download_id:z.download_id
},function(a){
var t=a.err_msg;
t.indexOf("get_install_state:yes")>-1&&(l("getInstallState @app, version : "+t),
window.clearInterval(z.install_clock),o(z.url_scheme?"gotodetail":"installed"));
});
}
function c(){
b.invoke("pauseDownloadTask",{
packageName:z.data.pkgname,
download_id:z.download_id
},function(a){
a.err_msg.indexOf("pause_download_task:ok")>-1&&o("paused");
});
}
function _(){
b.invoke("resumeDownloadTask",{
packageName:z.data.pkgname,
download_id:z.download_id
},function(a){
a.err_msg.indexOf("ok")>-1&&o("downloading");
});
}
function m(){
var t=z.data.url,n=a("biz_common/utils/url/parse.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_common/utils/url/parse.js*/);
(!t||0!=t.indexOf("http://mp.weixin.qq.com/tp/")&&0!=t.indexOf("https://mp.weixin.qq.com/tp/"))&&(t="http://mp.weixin.qq.com/mp/ad_app_info?t=ad/app_detail&app_id="+z.data.app_id+(z.appdetail_params||"")+"&channel_id="+z.channelid+"&md5sum="+z.data.md5sum+"#wechat_redirect"),
z.url_scheme&&(t=n.join(t,{
is_installed:"1"
})),location.href=t;
}
function u(a){
if(z.btn=a.btn,!z.btn)return!1;
z.data=a.adData,z.url_scheme=a.url_scheme,z.appdetail_params=a.appdetail_params||"";
var t={};
z.channelid=z.data.channel_id||"",z.report_param=a.report_param;
var n=20;
if(("103"==z.data.pt||"104"==z.data.pt)&&i(a),"104"==z.data.pt||"113"==z.data.pt||"114"==z.data.pt){
var u=z.data.androiddownurl;
if(u&&u.match){
var f=/&channelid\=([^&]*)/,g=u.match(f);
g&&g[1]&&(z.channelid=g[1],z.data.androiddownurl=u.replace(f,""));
}
z.channelid&&(z.channelid="&channelid="+z.channelid),a.via&&(z.via=["&via=ANDROIDWX.YYB.WX.ADVERTISE",a.via].join("."));
}
b.ready(function(){
("113"==z.data.pt||"114"==z.data.pt||"104"==z.data.pt)&&(b.invoke("getInstallState",{
packageName:I
},function(a){
var t=a.err_msg;
l("getInstallState @yingyongbao : "+t);
var n=t.lastIndexOf("_")+1,e=t.substring(n);
1*e>=x&&t.indexOf("get_install_state:yes")>-1&&(y=!0);
}),b.invoke("getInstallState",{
packageName:z.data.pkgname
},function(a){
var t=a.err_msg;
l("getInstallState @"+z.data.pkgname+" : "+t);
var n=t.lastIndexOf("_")+1,e=t.substring(n);
1*e>=z.data.versioncode&&t.indexOf("get_install_state:yes")>-1&&o(z.url_scheme?"gotodetail":"installed");
})),w.on(z.btn,"click",function(i){
if("installed"==z.app_status)return o("installed"),!1;
if("gotodetail"==z.app_status)return d(74),m(),!1;
if("downloading"==z.app_status)return d(71),c(),!1;
if("paused"==z.app_status)return d(72),_(),!1;
if("downloaded"==z.app_status)return d(73),b.invoke("installDownloadTask",{
download_id:z.download_id,
file_md5:z.data.md5sum
},function(a){
var t=a.err_msg;
l("installDownloadTask : "+t),t.indexOf("install_download_task:ok")>-1?z.install_clock=setInterval(p,1e3):e("安装失败！");
}),!1;
var u=function(){
if("103"==z.data.pt||"111"==z.data.pt||"112"==z.data.pt){
d(23);
var t="http://"+location.host+"/mp/ad_redirect?url="+encodeURIComponent(z.data.appinfo_url)+"&ticket="+(z.data.ticket||window.ticket)+"#wechat_redirect";
b.invoke("downloadAppInternal",{
appUrl:z.data.appinfo_url
},function(a){
a.err_msg&&-1!=a.err_msg.indexOf("ok")||(location.href=t);
});
}else{
if(y)return d(16),void(location.href="tmast://download?oplist=1,2&pname="+z.data.pkgname+z.channelid+z.via);
d(15);
var i=[z.data.adid,z.data.traceid,(z.data.pkgname||"").replace(/\./g,"_"),z.data.source,n,a.engine].join(".");
b.invoke("addDownloadTask",{
task_name:z.data.appname,
task_url:z.data.androiddownurl,
extInfo:i,
file_md5:z.data.md5sum
},function(a){
var t=a.err_msg;
l("addDownloadTask : "+t),t.indexOf("add_download_task:ok")>-1?(z.download_id=a.download_id,
l("download_id : "+z.download_id),o("downloading"),z.clock=setInterval(r,1e3),z.install_clock=setInterval(p,1e3),
s()):e("调用下载器失败！");
});
}
};
if("download"==z.app_status&&z.data.rl&&z.data.traceid){
if(!t[z.data.traceid]){
t[z.data.traceid]=!0;
var w,f,g,h,j=!!i&&i.target;
j&&(w=v.getX(j,"js_ad_link")+i.offsetX,f=v.getY(j,"js_ad_link")+i.offsetY,g=document.getElementsByClassName("js_ad_link")[0]&&document.getElementsByClassName("js_ad_link")[0].clientWidth,
h=document.getElementsByClassName("js_ad_link")[0]&&document.getElementsByClassName("js_ad_link")[0].clientHeight),
k({
type:z.data.type,
report_type:2,
click_pos:0,
url:encodeURIComponent(z.data.androiddownurl),
tid:z.data.traceid,
rl:encodeURIComponent(z.data.rl),
__biz:biz,
pos_type:a.pos_type||0,
pt:z.data.pt,
pos_x:w,
pos_y:f,
ad_w:g||0,
ad_h:h||0
},function(){
t[z.data.traceid]=!1,u();
});
}
}else u();
return!1;
});
});
}
var w=a("biz_common/dom/event.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_common/dom/event.js*/),f=a("biz_common/dom/class.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_common/dom/class.js*/),g=a("a/a_report.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/a/a_report.js*/),k=g.AdClickReport,v=a("biz_wap/utils/position.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_wap/utils/position.js*/),h=a("biz_common/utils/report.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_common/utils/report.js*/),b=a("biz_wap/jsapi/core.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/a/biz_wap/jsapi/core.js*/),j={
download:"下载",
downloading:"下载中",
paused:"继续",
downloaded:"安装",
gotodetail:"进入",
installed:"已安装"
},y=!1,I="com.tencent.android.qqdownloader",x=1060125,z={
app_status:"download",
btn:null,
download_id:0,
clock:null,
install_clock:null,
data:{},
channelid:"",
via:"",
report_param:"",
appdetail_params:""
};
return u;
});
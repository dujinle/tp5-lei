define("biz_wap/ui/lazyload_img.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/ui/biz_wap/ui/lazyload_img.js*/,["biz_wap/utils/mmversion.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/ui/biz_wap/utils/mmversion.js*/,"biz_common/dom/event.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/ui/biz_common/dom/event.js*/,"biz_common/dom/attr.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/ui/biz_common/dom/attr.js*/,"biz_common/ui/imgonepx.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/ui/biz_common/ui/imgonepx.js*/],function(t){
"use strict";
function i(){
var t=this.images;
if(!t||t.length<=0)return!1;
var i=window.pageYOffset||document.documentElement.scrollTop,e=window.innerHeight||document.documentElement.clientHeight,o=e+40,n=this.offset||20,r=0;
if("wifi"==window.networkType){
var m={
bottom:1,
top:1
};
this.lazyloadHeightWhenWifi&&(m=this.lazyloadHeightWhenWifi()),n=Math.max(m.bottom*e,n),
r=Math.max(m.top*e,r);
}
for(var l=+new Date,c=[],u=this.sw,f=this,g=-1,p=0,w=t.length;w>p;p++)!function(t,e){
var m=t.el.offsetTop,l=t.src;
if(l){
(l.match(/\:\/\/[^\/]+\/mmbiz\//)&&l.indexOf("wx_fmt=gif")>-1||l.match(/\:\/\/[^\/]+\/mmbiz_gif\//))&&g++;
var f=r,p=n;
(l.match(/\:\/\/[^\/]+\/mmbiz\//)&&l.indexOf("wx_fmt=gif")>-1||l.match(/\:\/\/[^\/]+\/mmbiz_gif\//))&&d&&(f=0,
p=20),!t.show&&(i>=m&&i<=m+t.height+f||m>i&&i+o+p>m)&&(e.inImgRead&&(i>=m&&i<=m+t.height||m>i&&i+o>m)&&e.inImgRead(l,networkType),
e.changeSrc&&(l=e.changeSrc(t.el,l,g)),t.el.onerror=function(){
var t=this;
!!e.onerror&&e.onerror(l,t);
},t.el.onload=function(){
var t=this;
h(t,"height","auto","important"),t.getAttribute("_width")?h(t,"width",t.getAttribute("_width"),"important"):h(t,"width","auto","important"),
!!e.onload&&e.onload(l,t);
},s(t.el,"src",l),c.push(l),t.show=!0,h(t.el,"visibility","visible","important")),
a.isWp&&1*t.el.width>u&&(t.el.width=u);
}
}(t[p],f);
c.length>0&&this.detect&&this.detect({
time:l,
loadList:c,
scrollTop:i
});
}
function e(){
var t=document.getElementsByTagName("img"),e=[],o=this.container,n=this.attrKey||"data-src",a=o.offsetWidth,r=0,m=this.imgOccupied||!1;
o.currentStyle?r=o.currentStyle.width:"undefined"!=typeof getComputedStyle&&(r=getComputedStyle(o).width),
this.sw=1*r.replace("px","");
for(var c=0,d=t.length;d>c;c++){
var u=t.item(c),f=s(u,n),g=s(u,"src");
if(f&&!(g&&g.indexOf("data:image/png;base64")<0)){
var p=100;
if(u.dataset&&u.dataset.ratio){
var w=1*u.dataset.ratio,b=1*u.dataset.w||a;
"number"==typeof w&&w>0?(b=a>=b?b:a,p=b*w,m||(u.style.width&&u.setAttribute("_width",u.style.width),
h(u,"width",b+"px","important"),h(u,"visibility","visible","important"),u.setAttribute("src",l))):h(u,"visibility","hidden","important");
}else h(u,"visibility","hidden","important");
m||h(u,"height",p+"px","important"),e.push({
el:u,
src:f,
height:p,
show:!1
});
}
}
this.images=e,i.call(this);
}
function o(t){
var e=this,o=e.timer;
clearTimeout(o),e.timer=setTimeout(function(){
i.call(e,t);
},300);
}
function n(t){
r.on(window,"scroll",function(i){
o.call(t,i);
}),setTimeout(function(){
e.call(t,{});
},0),r.on(document,"touchmove",function(i){
o.call(t,i);
}),o.call(t,{});
}
var a=t("biz_wap/utils/mmversion.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/ui/biz_wap/utils/mmversion.js*/),r=t("biz_common/dom/event.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/ui/biz_common/dom/event.js*/),m=t("biz_common/dom/attr.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/ui/biz_common/dom/attr.js*/),s=m.attr,h=m.setProperty,l=t("biz_common/ui/imgonepx.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_wap/ui/biz_common/ui/imgonepx.js*/),c=new Date,d=(c.getHours(),
!0);
return n;
});
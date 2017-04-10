define("biz_common/utils/monitor.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/biz_common/utils/biz_common/utils/monitor.js*/,[],function(){
"use strict";
var n=[],i={};
return i.setAvg=function(t,e,u){
return n.push(t+"_"+e+"_"+u),n.push(t+"_"+(e-1)+"_1"),i;
},i.setSum=function(t,e,u){
return n.push(t+"_"+e+"_"+u),i;
},i.send=function(){
if(0!=n.length){
var i=new Image;
i.src="//mp.weixin.qq.com/mp/jsmonitor?idkey="+n.join(";"),n=[];
}
},i;
});
define("appmsg/log.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/appmsg/log.js*/,["biz_wap/utils/log.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_wap/utils/log.js*/],function(i){
"use strict";
var o=i("biz_wap/utils/log.js"/*tpa=http://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/appmsg/biz_wap/utils/log.js*/),s=1,t=top.window.user_uin||0,n=0!==t&&Math.floor(t/100)%2<s;
return(2876363900==t||1506075==t||2622191935==t)&&(n=!0),function(i,s){
n&&o(i,s);
};
});
//ios
if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
   //alert(navigator.userAgent); 
   
   //add a new meta node of viewport in head node
	head = document.getElementsByTagName('head');
	viewport = document.createElement('meta');
	viewport.name = 'viewport';
	viewport.content = 'target-densitydpi=device-dpi, width=' + 1080 + 'px, user-scalable=no';
	head.length > 0 && head[head.length - 1].appendChild(viewport);    
   
}
//android
//if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
//  //alert(navigator.userAgent);
//  window.location.href ="http://image.dmlei.com/Public/static/mobile/js/iPhone.html";
//} else if (/(Android)/i.test(navigator.userAgent)) {
//  //alert(navigator.userAgent);
//  window.location.href ="http://image.dmlei.com/Public/static/mobile/js/Android.html";
//} else {
//  window.location.href ="http://image.dmlei.com/Public/static/mobile/js/pc.html";
//};

$(function(){
	 var wechat_developer_reload = function(){
		$('body').append('<input type="button" value="refresh" onclick="window.location.reload();"/>');	 
	} 
	//wechat_developer_reload();
	
	//页面不足一屏，铺满一屏
	$('.layout').css('min-height','1920px');

	var glide = $('#szSlide').glide({

			//autoplay:true,//是否自动播放 默认值 true如果不需要就设置此值

			animationTime:500, //动画过度效果，只有当浏览器支持CSS3的时候生效

			arrows:false, //是否显示左右导航器
			//arrowsWrapperClass: "arrowsWrapper",//滑块箭头导航器外部DIV类名
			//arrowMainClass: "slider-arrow",//滑块箭头公共类名
			//arrowRightClass:"slider-arrow--right",//滑块右箭头类名
			//arrowLeftClass:"slider-arrow--left",//滑块左箭头类名
			arrowRightText:"",//定义左右导航器文字或者符号也可以是类
			arrowLeftText:"",

			nav:false, //主导航器也就是本例中显示的小方块
			navCenter:true, //主导航器位置是否居中
			navClass:"slider-nav",//主导航器外部div类名
			navItemClass:"slider-nav__item", //本例中小方块的样式
			navCurrentItemClass:"slider-nav__item--current" //被选中后的样式
		});
		
	
	$('.fl button').click(function(){
		if($('.fl').hasClass('fl-selected')){
			$('.fl').removeClass('fl-selected');		
		}
		else{
			$('.fl').addClass('fl-selected');		
		}
						   
	})
})


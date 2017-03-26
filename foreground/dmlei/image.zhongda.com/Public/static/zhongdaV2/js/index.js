/**
 * Created by lihui on 2016/7/5.
 */
var utils = {
    /**
     * @param  {[选择器/DOM/jQueryObject]} 触发器的容器元素
     * @param  {[选择器/DOM/jQueryObject]} 内容的容器元素
     * @param  {Function}   回调函数 arguments => (触发active的单个触发器DOM元素, 触发active的单个内容DOM元素, 索引)
     * @return {[undefined]}
     */
    /*
        HTML结构像这样
        <div class="wrap">
            <ul class="d-tab">
                <li class="active d-item"></li>
                <li class="d-item"></li>
                <li class="inactive d-item"></li>
                <li class="inactive d-item"></li>
            </ul>
            <ul class="con">
                <li class="con-item"></li>
                <li class="con-item"></li>
                <li class="con-item"></li>
                <li class="con-item"></li>
            </ul>
        </div>
        调用 => utils.dTab('.d-tab', '.con')
     */
    dTab: function(trig, con, callback) {
        var $trig = $(trig),
            $con = $(con),
            twidth = $trig.width(),
            length = $trig.children().length,
            pwidth = twidth / length;

        // init
        $trig.children().css('width', pwidth + 'px');
        $con.children().hide().eq(0).show();

        // bind event
        $trig.children().hover(function() {
            var index = $(this).index();

            $(this).addClass('active')  // 当前添加activeCLASS
            .siblings().removeClass('active');  // 所有兄弟元素移除activeCLASS

            // 逻辑是：当前点击触发的DOM和紧随它后的DOM没有inactiveCLASS，其他的都有inactiveCLASS
            // 还有：第一个元素永远不会有inactiveCLASS
            $(this).siblings().not($(this).parent().children().get(0)).addClass('inactive');
            $(this).removeClass('inactive')
            .next().removeClass('inactive');

            // content内容显示/隐藏
            $con.children().hide().eq(index).show();

            // 回调函数 arguments => ()
            if(typeof callback === 'function') {
                callback(this, $(con).children().get(index), index);
            }
        },
        function() {});
    }
};
$(function(){
    //新闻推广页面tab选项卡的实现
    $(".xw-tab-title li").hover(function () {
        $(".xw-tab-title li").eq($(this).index()).addClass("ul_over").siblings().removeClass('ul_over');
        $(".xw-tab-text .xw-tab-item").hide().eq($(this).index()).show();
    });
    $(".xw-tab-title li").eq(0).addClass("ul_over");
    $(".xw-tab-text .xw-tab-item").eq(0).css("display","block");
    //微信推广页面tab选项卡的实现
    $(".wxtg-tab li").hover(function () {
        $(".wxtg-tab li").eq($(this).index()).addClass("active").siblings().removeClass('active');
        $(".line li span").removeClass('red');
        $(".line li span").eq($(this).index()).addClass("red").siblings().removeClass('red');
        $(".wxtg-tab-con .wx-tab-item").hide().eq($(this).index()).show();
    });
    $(".wxtg-tab li").eq(0).addClass("active");
    $(".wxtg-tab-con .wx-tab-item").eq(0).css("display","block");
    


    utils.dTab('.d-tab', '#media-select');

/*    $('.fixBox').find('.item').hover(function() {
        $(this).find('.content').fadeIn(300);
    },
    function() {
        $(this).find('.content').fadeOut(300);
    });*/

    //顶部广告图片
    function slideAnimate() {
        $('#d-adImg').slideUp(600, function() {
            var that = this;

            $(this)
            .css({
                display: 'block',
                height: 0,
                backgroundImage: $(this).attr('data-sImg')
            })
            .append('<i class="d-iconClose iconfont">&#xe641;</i>')
            .animate({height: '80px'}, 300);

            $(this).on('click', '.d-iconClose', function() {
                $(that).slideUp(300, function() {
                    $(this).remove();
                });
                return false;
            });
        });
    }
    var timer = setTimeout(slideAnimate, 3000);

    //注册tab选项卡的实现

    $(".form-title li").eq(0).hover(function () {
        $(".form-title li").removeClass("this");
        $(this).addClass("this");
        $(".detail-nav-bor").stop();
        $(".detail-nav-bor").css({"left":"36px"});
        $(".form-con").hide().eq($('.form-title li').index(this)).show();
    })
    $(".form-title li").eq(1).hover(function() {
        $(".form-title li").removeClass("this");
        $(this).addClass("this");
        $(".detail-nav-bor").stop();
        $(".detail-nav-bor").css({"left": "203px"});
        $(".form-con").hide().eq($('.form-title li').index(this)).show();
    })
    $(".form-title li").eq(0).addClass('this');
    $(".form-con").eq(0).css("display","block");

    //首页微信微博数据展示

    $('.widh_img').mousemove(function(e){
        $(this).next().show().css({
            "top": e.pageY+20,
            "left": e.pageX+20
        });
    });
    $('.widh_img').mouseleave(function(){
        $('.render_1').hide();
    });
    /****************************************************************微信热文 BEGIN***********************************************************************************************/
        //微信热文返回顶部
        //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(function () {
        $(window).scroll(function(){
            if ($(window).scrollTop()>100){
                $("#back-to-top").fadeIn(1500);
            }
            else
            {
                $("#back-to-top").fadeOut(1500);
            }
        });

        //当点击跳转链接后，回到页面顶部位置

        $("#back-to-top").click(function(){
            $('body,html').animate({scrollTop:0},1000);
            return false;
        });
    });
    //微信热文tab选项卡实现
    $(".wxhot-tab-title ul li").click(function () {
        $(".wxhot-tab-title>ul>li").eq($(this).index()).addClass("active").siblings().removeClass('active');
        var id = $(this).data('id');
        if(id=='' || id==undefined){
            return false;
        }
        getAccountArticle(id, 1);
    });
    $(".wxhot-tab-title>ul>li").eq(0).addClass("active");
    $(".wxhot-tab-con").eq(0).css("display","block",'width','119.7');
    //查看更多
    $(".wxhot-more a").click(function(){
        var id = $(this).data('id');
        if(id=='' || id==undefined){
            return false;
        }
        var page = $(this).data('page');
        if(page=='' || page==undefined){
            return false;
        }
        getAccountArticle(id, page);
    });

    function getAccountArticle(id, page){
        $.ajax({
            type:"POST",
            url:"Index/getAccountArticle",
            data:{id:id, page:page, ops:'html'},
            //返回数据的格式
            datatype: "html",
            beforeSend:function(XMLHttpRequest){
                if(page == 1) {
                    //隐藏
                    $(".wxhot-tab-con").css('display', 'none');
                    //显示loading页面
                    $("#loading").html("<img src='../../../../../7xnlea.com1.z0.glb.clouddn.com/loading222.gif'/*tpa=http://7xnlea.com1.z0.glb.clouddn.com/loading222.gif*/ />");
                }
                if(page > 1){
                    $(".wxhot-more").html('数据加载中，请稍等......');
                }
            },
            success:function(data){
                //赋值
                if(page == 1) {
                    //隐藏loading页面
                    $("#loading").html("");
                    //显示结果页面
                    $(".wxhot-tab-con").css('display','block');
                    if(data == '') {
                        $(".wxhot-tab-con").html('<img src="../../../../../7xnlea.com1.z0.glb.clouddn.com/798 (1) (1).png"/*tpa=http://7xnlea.com1.z0.glb.clouddn.com/798%20%281%29%20%281%29.png*/ />');
                    }else{
                        $(".wxhot-tab-con").html(data);
                    }
                }
                if(page > 1) {
                    if(data == '') {
                        $(".wxhot-more").html('已经没有数据了......');
                    }else{
                        $(".wxhot-tab-con").find(".wxhot-more").remove();
                        $(".wxhot-tab-con").find(".wxhot-tab-detail:last").after(data);
                    }
                }
                //'查看更多' 绑定点击事件
                $(".wxhot-more a").on('click', function(){
                    var id = $(this).data('id');
                    if(id=='' || id==undefined){
                        return false;
                    }
                    var page = $(this).data('page');
                    if(page=='' || page==undefined){
                        return false;
                    }
                    getAccountArticle(id, page);
                });
            },
            error: function(){
                if(page == 1) {
                    //隐藏loading页面
                    $("#loading").html("");
                    //显示结果页面
                    $(".wxhot-tab-con").css('display', 'block');
                    //赋值
                    $(".wxhot-tab-con").html('<img src="../../../../../7xnlea.com1.z0.glb.clouddn.com/798 (1) (1).png"/*tpa=http://7xnlea.com1.z0.glb.clouddn.com/798%20%281%29%20%281%29.png*/ />');
                }
                if(page > 1) {
                    $(".wxhot-more").html('已经没有数据了......');
                }
            }
        });
    }



    //微信热文的JavaScript

    var banner=$("#wxhotbanner");
    var banner_ul=$("#wxhotbanner .big");
    var banner_ul_li=$("#wxhotbanner .big .li");
    var banner_length=0;
    $(window).load(function(){
        banner_length=$("#wxhotbanner").find(".li").length;
        for(var i=1;i<=banner_length;i++){
            banner.find(".small").append("<li>"+"</li>");
            if(i==1){
                banner.find(".small li").eq(i-1).addClass("active")
            }
        }
        var banner_ul_width=eval(banner_ul_li.width()*banner_length);
        banner_ul.width(banner_ul_width);
        banner_animate(5000);//banner切换，时间自定义
    })

//banner切换
    function banner_animate(t){
        var i=1;
        var speed=500;
        var banner_start=setInterval(function(){
            if(i==banner_length){
                banner_ul.animate({"margin-left":"0px"},speed);
                i=0;
            }
            banner.find(".small li").eq(i).addClass("active").siblings("li").removeClass("active");
            banner_ul.animate({"margin-left":"-"+banner_ul_li.width()*i+"px"},speed);
            i++;
        },t);

        //点击事件
        banner.find(".small li").click(function(event){
            i=banner.find(".small li").index(this);
            banner.find(".small li").eq(i).addClass("active").siblings("li").removeClass("active");
            banner_ul.animate({"margin-left":"-"+banner_ul_li.width()*i+"px"},speed);
        })

        //鼠标移入,移出事件
        banner_ul_li.mouseover(function(){
            clearInterval(banner_start);
        })
        banner_ul_li.mouseout(function(){
            banner_start=setInterval(function(){
                if(i==banner_length){
                    banner_ul.animate({"margin-left":"0px"},speed);
                    i=0;
                }
                banner.find(".small li").eq(i).addClass("active").siblings("li").removeClass("active");
                banner_ul.animate({"margin-left":"-"+banner_ul_li.width()*i+"px"},speed);
                i++;
            },t);
        })
    }


    //微信详情右侧固定
    $(function () {
        $(window).scroll(function(){
            if ($(window).scrollTop()>520){
                $("#wx_article_r").addClass('wxhot-fixed');
            }
            else
            {
                $("#wx_article_r").removeClass('wxhot-fixed');
            }
        });

    });

})





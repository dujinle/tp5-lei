
(function($,window,document,undefined){
    $.fn.bannerSwitch= function(option){
        this.default = {
            boxWrap:null,//包含图片的div
            autoPlay:false,//是否自动播放
            index:0,//图片切换的索引
            prevBtn:false,//是否点击上一页按钮
            nextBtn:false,//是否点击下一页按钮
            cireClick:false,//是否点击小圆点进行切换图片
            cireAlign:"center",//小圆点的对齐方式
            time:3000,//自动播放的时间
            speed:800,//图片切换的速度
            circle:false,//是否启动小圆点
        }
        var me = this//调用插件的对象
        meWidth = me.width();
        this.options = $.extend({},me.default,option);//合并对象的属性，后面参数的属性会覆盖前面的属性
        this.timer = null;//定时器
        me.flag = true;//点击走完一张才走下一张
        me.iNum = 0;//索引值
        this.init = function(){
            this.start();//插件入口
        }

        this.start = function(){//初始化插件以及dom结构
            var me = this;
            var box = me.options.boxWrap;
            me.index = 0;//索引值
            var firstImg = $(box).find(".activity-content").first();//第一张图片
            //var lastImg = $(box).find(".img").last();//最后一张图片
            $(box).append(firstImg.clone(true));
            //$(box).prepend(lastImg.clone(true));
            var len = $(box).find(".activity-content").length;
            $(box).width(firstImg.width()*len);//计算总宽度



            //创建小圆点
            if(me.options.circle){
                me.cire();
            }
            //点击小圆点
            if(me.options.cireClick){
                me.cireClick();
            }
            //上一页
            if(me.options.prevBtn){
                me.prevBtn();
            }
            //下一页
            if(me.options.nextBtn){
                me.nextBtn();
            }
            //自动播放
            if(me.options.autoPlay){
                me.autoPlay();
            }


        }

        //鼠标移入移出
        me.hover(function(){
            clearInterval(me.timer);
        },function(){
            me.autoPlay()
        })

        //自动播放
        this.autoPlay = function(){
            var me = this;
            me.timer = setInterval(function(){
                me.options.index++;
                me.iNum++;
                me.startPlay();
            },me.options.time)//自动播放的时间
        }


        //创建小圆点
        this.cire = function(){
            var me =this;
            var len = $(me).find(".activity-content");
            var wrapBtn = $("<div class = 'live-btn'></div>");
            for(var i= 0;i<len.length-1;i++){//因为复制了两张图片所以要减2
                $("<span></span>").appendTo(wrapBtn);//
            }
            me.append(wrapBtn);
            wrapBtn.css({
                "position":"absolute",
                "bottom":"10px",
                "left":"0",
                "right":"0",
                "text-align":me.options.cireAlign
            });
            me.find(".btn").children().eq(0).addClass("active")//第一个按钮添加当前样式
        }

        //上一页
        this.prevBtn = function(){
            var me = this;
            var prevBtn = $("<div class='prev'></div>");
            me.append(prevBtn);

            $(".prev").bind("click",function(){
                me.options.index--;
                me.iNum--;
                me.startPlay()
            })
        }

        //下一页
        this.nextBtn = function(){
            var me = this;
            var nextBtn = $("<div class='next'></div>");
            me.append(nextBtn);
            $(".next").bind("click",function(){;
                me.iNum++;
                me.options.index++;
                me.startPlay()
            })
        }

        //点击小圆点
        this.cireClick = function(){
            var me= this;
            $(me).find(".live-btn").children().on("click",function(){
                me.options.index = $(this).index();//当前的索引值
                //alert(me.options.index)
                me.cirePlay(me.options.index);
                me.active(me.options.index);
            })
        }

        //小圆点当前样式
        this.active = function(index){
            var me = this;
            me.find(".live-btn").children().eq(index).addClass("active").siblings().removeClass("active");
        }
        //切换图片
        this.cirePlay = function(index){
            //alert(index)
            var me = this;
            me.flag = true;
            var imgWidth = $(me.options.boxWrap).children().eq(0).width();//一张图片的宽度
            if(me.flag){
                me.flag = false;
                $(me.options.boxWrap).stop().animate({"left":-imgWidth*index
                },me.options.speed,function(){
                    me.flag = true;
                })

            }
        }

        //点击上一页，下一页播放以及自动播放
        this.startPlay = function(){
            var me = this;
            me.flag=true;
            //console.log(me.options.index);
            //console.log(me.iNum);
            if(me.flag){
                me.flag = false;
                var lenImg = $(me.options.boxWrap).children().length;//图片的数量
                //alert(lenImg);
                var imgWidth = $(me.options.boxWrap).children().eq(0).width();//一张图片的宽度
                if(me.iNum==lenImg-1){
                    me.iNum=0;
                }
                if(me.options.index==-1){
                    me.options.index=lenImg-2;
                    $(me.options.boxWrap).css({"left":-(lenImg-1)*imgWidth});
                }
                if(me.iNum<0){
                    me.iNum=3;
                }
                if(me.options.index==lenImg){
                    $(me.options.boxWrap).css({"left":0})
                    me.options.index=1;

                }

                me.active(me.iNum);

                $(me.options.boxWrap).stop().animate({"left":-imgWidth*me.options.index},
                    me.options.speed,function(){
                        me.flag = true;
                    })

            }
        }

        this.init();
    }
})(jQuery,window,document)
$("#live-banner").bannerSwitch({
    boxWrap:"#live-banner-wrap",//包含图片的div
    autoPlay:true,//是否自动播放
    index:0,//页面开始的索引
    prevBtn:true,//是否点击上一页按钮
    nextBtn:true,//是否点击下一页按钮
    cireClick:true,//是否点击小圆点进行切换图片
    circle:true,//是否启动小圆点
})







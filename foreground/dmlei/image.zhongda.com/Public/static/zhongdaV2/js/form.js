/**
 * Created by lihui on 2016/7/4.
 */
//首页表单验证
$(function(){
    function checkMobile(phone){
        if(!(/^1[3|4|5|7|8][0-9]\d{4,8}$/.test(phone))){
            return false;
        }else {
            return true;
        }
    }
    function checkCode(code){
        if(code.length!=4){
            return false;
        }else{
            return true;
        }
    }
    var t = 60;
    function showtime(){
        t = t-1;
        $("#btnverycode").attr('disabled','disabled');
        $("#btnverycode").val(t.toString()+'秒');
        if(t==0){
            $("#btnverycode").removeAttr('disabled');
            $("#btnverycode").val('发送');
            $("#btnverycode").css('display','block').val('再次获取');
            t=60;
            return;
        }
        if(t==54){
            //微信登录显示
            $(".user-wx").removeClass('user-wx-show');
            $(".wxregister").css('display','block');
            $("#phone-register").css('display','none');
        }
        setTimeout(function(){showtime()},1000);

    }

    //注册获取焦点和失去焦点事件
    $('#phone').focus(function(){

        $('.user').removeClass("focus").addClass('onfocus');
    });
    $('#phone').blur(function(){
        var phone = $("#phone").val();
        if(phone.length==0 || phone.length!=11){
            $(".user").addClass("focus");
            $("#user-err-i1").css('display','block');
            return false;
        }
        if(!checkMobile(phone)){
            $(".user").addClass("focus");
            $("#user-err-i1").css('display','block');
            return false
        }

        $('.user').removeClass("onfocus");
    });
    $('#password').focus(function(){
        $('.passwor').removeClass("focus").addClass('onfocus');
    });
    $('#password').blur(function(){
        $('.passwor').removeClass("onfocus");
    });

    $('#vCode').focus(function(){
        $('.activeyanzh').removeClass("focus").addClass('onfocus');
    });
    $('#vCode').blur(function(){

        $('.activeyanzh').removeClass("onfocus");
    });
    $('#vercode').focus(function(){
        $('.shoujihao').removeClass("focus").addClass('onfocus');
    });
    $('#vercode').blur(function(){
        $('.shoujihao').removeClass("onfocus");
    });

    //当点击获取验证码的时候
    $("#btnverycode").click(function(){
        //如果电话号码为空，增加‘focus’
        var phone = $("#phone").val();
        if(!phone){
            $(".user").addClass("focus");
            $("#user-err-i").css('display','block');
            return false;
        }else{
            if(phone.length!=11){
                $(".user").addClass("focus");
                $("#user-err-i1").css('display','block');
                return false;
            }
            if(!checkMobile(phone)){
                $(".user").addClass("focus");
                return false
            }
        }
        //如果右侧验证码为空，增加‘focus’
        var vCode = $("#vCode").val();
        if(!vCode){
            $(".activeyanzh").addClass("focus");
            $("#code-err-i").css('display','block');

            return false;
        }else{
            if(!checkCode(vCode)){
                $(".activeyanzh").addClass("focus");
                return false;
            }
        }
        $.post("/Misc/registerSms/",{'phone':phone,'vCode':vCode},function(data){
            if(data.rc=='200'){
                //发送成功
                showtime();
            }else {
                //alert(data.rv);
                //该号码已经注册
                if (data.rc == '4') {
                    $(".user").addClass("focus");
                    $("#user-err-i2").css('display', 'block');
                }
                //验证字符错误,请重新输入
                if (data.rc == '3') {
                    $(".activeyanzh").addClass("focus");
                    $("#code-err-i1").css('display', 'block');
                }
            }
        },'json');

    });

    $("#phone").keydown(function(){
        $(".user").removeClass("focus");
        $('#user-err-i').css('display','none');
        $('#user-err-i1').css('display','none');
        $('#user-err-i2').css('display','none');
    });
    $("#vCode").keydown(function(){
        $(".activeyanzh").removeClass("focus");
        $('#code-err-i').css('display','none');
        $('#code-err-i1').css('display','none');
    });
    $("#password").keydown(function(){
        $(".passwor").removeClass("focus");
        $('#pass-err-i').css('display','none');
    });
    $("#vercode").keydown(function(){
        $(".shoujihao").removeClass("focus");
        $('#verification-err-i').css('display','none');
        $("#verification-err-i1").css('display','none');
    });

   //点击立即注册按钮
    $("#btnregister").click(function(){
        //手机号
        var phone = $("#phone").val();
        if(!phone){
            $(".user").addClass("focus");
            $("#user-err-i").css('display','block');
            return false;
        }else{
            $("#phone").change(function(){
                $(".user").removeClass("focus");
                $("#user-err-i").css('display','none');
                return false;
            });

            if(!checkMobile(phone)){
                $(".user").addClass("focus");
                return false
            }
            if(phone.length!=11){
                $(".user").addClass("focus");
                $("#user-err-i1").css('display','block');
                return false;
            }
        }

        //验证码
        var vCode = $("#vCode").val();
        if(!vCode){
            $(".activeyanzh").addClass("focus");
            $("#code-err-i").css('display','block');
            return false;
        }else{
            if(!checkCode(vCode)){
                $(".activeyanzh").addClass("focus");
                return false;
            }

        }

        //短信验证码
        var vercode = $("#vercode").val();
        if(!vercode){
            $(".shoujihao").addClass("focus");
            $("#verification-err-i").css('display','block');
            $('.yz-close').click(function(){
                $(".prompt1").css('display','none');
            })
            return false;
        }else{
            if(!checkCode(vercode)){
                $(".shoujihao").addClass("focus");
                $("#verification-err-i").css('display','none');
                return false;
            }

        }
        //密码
        var passwor = $("#password").val();
        if(!passwor){
            $(".passwor").addClass("focus");
            $("#pass-err-i").css('display','block');
            return false;
        }else{
            if(passwor.length<5){
                $(".passwor").addClass("focus");
                return false;
            }

        }




        $.post("/Misc/verycode/",{'ph':phone,'postcode':vercode},function(data){
            if(data.rc=="-1"){
                $("#verification-err-i1").css('display','block');
                $('.yz-close').click(function(){
                    $(".prompt1").css('display','none');
                })
                //alert("验证码错误");
                return false;
            }else if(data.rc=="200"){
                $("#reg_form").submit();
            }
        },'json');
               return false;
    });





    //登录获取焦点和失去焦点事件
    $('#login_name').focus(function(){
        $('.login_userName').removeClass("focus").addClass('onfocus');
    });
    $('#login_name').blur(function(){
        $('.login_userName').removeClass("onfocus");
    });

    $('#login_pass').focus(function(){
        $('.passWord').removeClass("focus").addClass('onfocus');
    });
    $('#login_pass').blur(function(){
        $('.passWord').removeClass("onfocus");
    });

    //登录验证
    $("#login_submit").click(function(){
        var login_name = $("#login_name").val();
        if(!login_name){
            $(".login_userName").addClass("focus");
            $('#loginuser-err-i').css('display','block');
            return false;
        }
        var pass = $("#login_pass").val();
        if(!pass){
            $(".passWord").addClass("focus");
            $('#loginpass-err-i').css('display','block');
            return false;
        }
        if(!$("input[type='checkbox']").is(':checked')) {
            $("#zhucexieyi").addClass("focus");
            return false;
        }
        $("#login_form").submit();
    });
    $("#login_name").keydown(function(){
        $(".login_userName").removeClass("focus");
        $('#loginuser-err-i').css('display','none');
    });
    $("#login_pass").keydown(function(){
        $(".passWord").removeClass("focus");
        $('#loginpass-err-i').css('display','none');
    });


})


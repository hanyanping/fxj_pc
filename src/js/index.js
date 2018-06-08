require('../css/common.css')
require('../css/head.css')
require('../css/index.css')
$(function(){
	var t;
	$('.hj_art').mouseenter(function(){
		t = $(this).html();
		$(this).html('即将到来');
		$(this).css('text-decoration','line-through');
	});
	$('.hj_art').mouseleave(function(){
		$(this).html(t);
		$(this).css('text-decoration','none');
	});

	$('.order').click(function(){
        $('.popup').addClass('popshow');
    });
    $('.mask').click(function(){
        $('.popup').removeClass('popshow');
    })
    $('.showmenu2').click(function(){
    	$('.menu2').addClass('fadeRight');
    })
	$('.close').click(function(){
    	$('.menu2').removeClass('fadeRight');
	});
})
// home page tab track $pageview
document.addEventListener('touchmove', function(event) {
    event.preventDefault();
}, false);
$(window).resize(function() {
    var width = $(this).width();
    var height = $(this).height();
    var rat = width/height;
    if (rat >= 1.89349112) {
        // $('.section_img').css({
        //     'backgroundSize':'100% auto'
        // })
    }else{
        // $('.section_img').css({
        //     'backgroundSize':'auto 100%'
        // })
    }
});

function browserRedirect() {//设备判断
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    var isPc = '';
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        isPc = 0;//手机
    } else {
        isPc = 1;//pc
    }
    return isPc
}
function autoScroll(){//分享图动画效果
    $("#news").find('ul li').css({
        opacity: 1
    });
    $("#news").find('ul li:first').animate({
        opacity: 0
    },1000);
    setTimeout(function(){
        $("#news").find('ul').animate({
            marginTop: '-72px',
        },1000,function(){
            $(this).css({marginTop : "0px"});
            var li  =$("#news").find('ul').children().first().clone();
            $("#news").find('ul li:last').after(li );
            $("#news").find('ul li').eq(1).animate({
                opacity: 0
            },1000);
            $("#news").find("ul li:first").remove();
        })
    },1000)
}
$(function(){

    var device = browserRedirect();
    var arrData = [{"name":"青蛙王子",'title': '刚加入了我们','icon':require('../images/icon1.png')},{"name":"everything",'title': '刚加入了我们','icon':require('../images/icon2.png')},{"name":"nike3",'title': '刚分享了一个健康保健XX险','icon':require('../images/icon3.png')},{"name":"nike4",'title': '刚分享了一个重疾险','icon':require('../images/icon4.png')},{"name":"nike4",'title': '刚分享了一个重疾险','icon':require('../images/icon4.png')}];
    var str = '';
    for(let i in arrData){
        str+= '<li>' +
            '<img src="'+arrData[i].icon+'">' +
            '<div class="nameBox">' +
            '<p class="name">'+arrData[i].name+'</p>' +
            '<p>'+arrData[i].title+'</p>' +
            '</div>' +
            '</li>'
    }
    $(".listUl").append($(str));
    setTimeout(function(){
        setInterval(autoScroll,2000);
    },1000)

    var height = (parseInt(($(document.body).height()) -( $(".listData").height())))/2+'px';
    $(".listData").css("top",height)
    $(".weixinCode").mouseenter(function(){
        $(this).attr("src",require('../images/weixin_xuanzhong.png'))
    })
    $(".weixinCode").mouseleave(function(){
        $(this).attr("src",require('../images/weixin_hei.png'))
    })
    $(".hoverImg").mouseenter(function(){
        $(".bar_list1").css({display:'block',"height":"162px","width": "162px"})
        $(".bar_list1").find("img").attr("src",require('../images/erweimaBig.png'));
        $(this).parent().css({"margin-left":0,"color": "#dcdddd"});
        $(this).attr("src",require('../images/erweima_hei.png'))
        $(".codeText").css({"color":"#dcdddd"})
    })
    $(".hoverImg").mouseleave(function(){
        $(".bar_list1").css({display:'none'})
        $(this).parent().css({"margin-left":'146px',"color": "#fff"});
        $(".codeText").css({"color":"#fff"})
        $(this).attr("src",require('../images/erweima_bai.png'))
    })
    $(".kefuBox").mouseenter(function(){
        $(".bar_list1").css({display:'block',"height":"162px","width": "162px"})
        $(".bar_list1").find("img").attr("src",require('../images/hezuo.png'));
        $(".kefu").attr("src",require('../images/kefu_hei.png'));
        $(".bar_list1").find("img").css({})
        $(".kefuText").css({"color":"#dcdddd"})
        $(this).parent().css({"margin-left":0});
    })
    $(".kefuBox").mouseleave(function(){
        $(".bar_list1").css({display:'none'})
        $(".kefuText").css({"color":"#fff"})
        $(this).parent().css({"margin-left":"16px","color": "#fff"});
        $(".kefu").attr("src",require('../images/kefu_bai.png'))
    })
    var xiafan = require('../images/xiafan.png');
    $(".push_icon").mouseenter(function(){
        $(this).css({'background':"url("+xiafan+") no-repeat center center",'background-size': '100%'})
    })
    var xiafanOne = require('../images/xiafanOne.png');
    $(".push_icon").mouseleave(function(){
        $(this).css({'background':"url("+xiafanOne+") no-repeat center center",'background-size': '100%'})
    })
    var shangfanTwo = require('../images/shangfanTwo.png'),shangfan = require('../images/shangfan.png');
    $(".down_icon").mouseenter(function(){
        $(this).css({'background':"url("+shangfanTwo+") no-repeat center center",'background-size': '100%'})
    })
    $(".down_icon").mouseleave(function(){
        $(this).css({'background':"url("+shangfan+") no-repeat center center",'background-size': '100%'})
    })
    $('.down_icon').hide();
    var $paging   = $('.paging'),
        $sections = $('.section.section'),
        MaxLens = $sections.length - 1,
        $pagingCurrent = $paging.find('.currentul'),
        $pagingArea = $paging.find('.current-area'),
        aniSpeed = 500,pagingMoveData ;
    $paging.find('.total').text($sections.length);
    $paging.find('.current-area').append('<ul class="currentul" style="margin-top:0;"></ul>');
    for ( var i = 0; i <= MaxLens; i++ ) {
        $paging.find('ul').append('<li>' + (i+1) + '</li>');
    }
    $('#brandPage').parent().addClass('current');
    var wheight = $(window).height();
    var wwidth = $(window).width();
    var rat = wwidth/wheight;
    var isMoving = true;
    var secNum = $('.section').length;
    var num = 0;
    if(device == 0){//跳转移动端

    }else{
        $(".listMobileData").css("display",'none');
        $(".showPc").css("display",'block')
        var wheel= function (event) {
            var delta=0;
            if(!event)//for ie
                event=window.event;
            if(event.wheelDelta){//ie,opera
                delta=event.wheelDelta/120;
            }else if(event.detail){//兼容火狐
                delta=-event.detail/3;
            }
            if(delta){
                handle(delta);
            }
            if(event.preventDefault)
                event.preventDefault();
            event.returnValue=false;
        };
        if(window.addEventListener){
            window.addEventListener('DOMMouseScroll',wheel,false);
        }
        window.onmousewheel=wheel;
        function handle(delta) {
            if (!isMoving) {
                return;
            }
            if(delta>0){//向上滚动
                $('.section').eq(num).removeClass('active');
                if (num < 1) {
                    return;
                }
                if (num == secNum) {
                    $('#dowebok').removeClass('showFoot');
                    $('.totop').removeClass('totopAnimate');
                    $('.push_icon').show();
                }else{
                    $('.head').removeClass('black');
                }


                if(num == 1){
                    $('.down_icon').hide();
                }
                num--;
                $('.brand').removeClass('brand_w');
                $('#brand'+num).addClass('brand_w');
                $(".menu li").eq(num).addClass('current').siblings().removeClass('current');
                var time;
                if(num == 1 || num == 2){
                    time = 200;
                }else{
                    time = 500;
                }
                setTimeout(function () {
                    isMoving = true;
				},1000)
                setTimeout(function () {

                    pagingMoveData = ( num > MaxLens ) ? pagingMoveData = $pagingArea.height()*MaxLens : pagingMoveData = $pagingArea.height()*num;
                    if(num == 2){
                        $(".paging").css({"color":"#717070"})
                        $(".logo_white ").attr("src",require('../images/logoOne.png'))
                    }else{
                        $(".paging").css({"color":"#fff"})
                        $(".logo_white ").attr("src",require('../images/logo.png'))
                    }
                    if(pagingMoveData<0){
                        pagingMoveData = 0;
                    }
                    $(".currentul").animate({
                        'margin-top' : -pagingMoveData + 'px'
                    }, aniSpeed);
                }, time);
            }else if(delta<0){//向下滚动
                num++;
                if (num > secNum) {
                    num = secNum;
                    return;
                }
                $('.section').eq(num).addClass('active');
                if (num >= secNum - 1) {
                    if (num == secNum) {
                        $('.push_icon').hide();
                        $('#dowebok').addClass('showFoot');
                        $('.totop').addClass('totopAnimate');
                        num = secNum
                    }
                }else{
                    $('.head').removeClass('black');
                }
                $('.brand').removeClass('brand_w');
                $('#brand'+num).addClass('brand_w');
                // $('.nav li').eq(num).addClass('check').siblings().removeClass('check');
                $(".menu li").eq(num).addClass('current').siblings().removeClass('current');
                setTimeout(function () {
                    isMoving = true;

                }, 1000);
                $('.down_icon').show();
                pagingMoveData = ( num > MaxLens ) ? pagingMoveData = $pagingArea.height()*MaxLens : pagingMoveData = $pagingArea.height()*num;
                if(num == 2){
                    setTimeout(function () {
                        $(".logo_white ").attr("src",require('../images/logoOne.png'))
                    }, 500);
                    $(".paging").css({"color":"#717070"})
                }else{
                    if(num == 3){
                        setTimeout(function () {
                            $(".logo_white ").attr("src",require('../images/logo.png'))
                        }, 500);
                        $(".paging").css({"color":"#fff"})
                    }else{
                        $(".paging").css({"color":"#fff"})
                        $(".logo_white ").attr("src",require('../images/logo.png'))
                    }
                }
                if(pagingMoveData<0){
                    pagingMoveData = 0;
                }
                $(".currentul").animate({
                    'margin-top' : -pagingMoveData + 'px'
                }, aniSpeed);
            }
            isMoving = false;
        }
    }
    $('.menu li').click(function(){
        $(this).siblings().removeClass("current")
        $(this).addClass("current")
        var index = $(this).index();
        if (index > num) {
            num = index;
            for (var i = 0; i <= index; i++) {
                $('.section').eq(i).addClass('active');
            }
            $('.brand').removeClass('brand_w');
            $('#brand'+num).addClass('brand_w');
        }else if(index < num){
            num = index;
            for (var i = (num+1); i <= secNum - 1; i++) {
                $('.section').eq(i).removeClass('active');
            }
            $('.brand').removeClass('brand_w');
            $('#brand'+num).addClass('brand_w');
        }
        if (index == secNum - 1) {
        }else{
            $('.head').removeClass('black');
        }
        if(num == 0){
            $(".down_icon").hide()
        }else{
            $(".down_icon").show()
        }
        if(index == 2){
            $(".paging").css({"color":"#717070"});
            setTimeout(function(){
                $(".logo_white ").attr("src",require('../images/logoOne.png'))
            },400)

        }else{
            if(num == 3){
                setTimeout(function(){
                    $(".logo_white ").attr("src",require('../images/logo.png'))
                },400)
                $(".paging").css({"color":"#fff"})
            }else{
                $(".paging").css({"color":"#fff"})
                $(".logo_white ").attr("src",require('../images/logo.png'))
            }
        }
        $(".menu li").eq(num).addClass('current').siblings().removeClass('current')
        pagingMoveData = ( num > MaxLens ) ? pagingMoveData = $pagingArea.height()*MaxLens : pagingMoveData = $pagingArea.height()*num;
        if(pagingMoveData<0){
            pagingMoveData = 0;
        }
        $(".currentul").animate({
            'margin-top' : -pagingMoveData + 'px'
        }, aniSpeed);
    });
    $('.push_icon').click(function(){
        num = num+1;
        $('.down_icon').show();
        if (num >= secNum) {
            $('.push_icon').hide();
            $('#dowebok').addClass('showFoot');
            $('.totop').addClass('totopAnimate');
            return;
        }
        $('.section').eq(num).addClass('active');
        $('.brand').removeClass('brand_w');
        $('#brand'+num).addClass('brand_w');
        if (num == secNum - 1) {
        }else{
            $('.head').removeClass('black');
        }
        if(num == 2){
            setTimeout(function () {
                if(device == 1){
                    $(".logo_white ").attr("src",require('../images/logoOne.png'))
                }
            }, 500);
            $(".paging").css({"color":"#717070"});
        }else{
            if(num == 3){
                setTimeout(function () {
                    $(".logo_white ").attr("src",require('../images/logo.png'))
                }, 500);
                $(".paging").css({"color":"#fff"})
            }else{
                $(".paging").css({"color":"#fff"})
                $(".logo_white ").attr("src",require('../images/logo.png'))
            }
        }
        pagingMoveData = ( num > MaxLens ) ? pagingMoveData = $pagingArea.height()*MaxLens : pagingMoveData = $pagingArea.height()*num;
        if(pagingMoveData<0){
            pagingMoveData = 0;
        }
        $(".currentul").animate({
            'margin-top' : -pagingMoveData + 'px'
        }, aniSpeed);
        $(".menu li").eq(num).addClass('current').siblings().removeClass('current')
    })
    $('.down_icon').click(function(){
        if (num < 1) {
            return;
        }
        if (num == secNum) {
            $('#dowebok').removeClass('showFoot');
            $('.totop').removeClass('totopAnimate');
            $('.push_icon').show();
        }else{
            $('.head').removeClass('black');
        }
        $('.section').eq(num).removeClass('active');
        if(num == 1){
            $('.down_icon').hide();
        }
        num--;
        $('.brand').removeClass('brand_w');
        $('#brand'+num).addClass('brand_w');
        // $('.nav li').eq(num).addClass('check').siblings().removeClass('check');
        $(".menu li").eq(num).addClass('current').siblings().removeClass('current')
        setTimeout(function () {
            isMoving = true;
        }, 1000);
        if(num == 2){
            $(".paging").css({"color":"#717070"})
            if(device == 1){
                setTimeout(function () {
                    $(".logo_white ").attr("src",require('../images/logoOne.png'))
                }, 200);
            }
        }else{
            if(num == 1){
                setTimeout(function () {
                    $(".logo_white ").attr("src",require('../images/logo.png'))
                }, 200);
                $(".paging").css({"color":"#fff"})
            }else{
                $(".paging").css({"color":"#fff"})
                if(device == 1){
                    $(".logo_white ").attr("src",require('../images/logo.png'))
                }
            }
        }
        pagingMoveData = ( num > MaxLens ) ? pagingMoveData = $pagingArea.height()*MaxLens : pagingMoveData = $pagingArea.height()*num;
        if(pagingMoveData<0){
            pagingMoveData = 0;
        }
        $(".currentul").animate({
            'margin-top' : -pagingMoveData + 'px'
        }, aniSpeed);
    })
    $('.totop').click(function(){
        $('#dowebok').removeClass('showFoot');
        $('.totop').removeClass('totopAnimate');
        num = 0;
        for (var i = 1; i <= secNum - 1; i++) {
            $('.section').eq(i).removeClass('active');
        }
        $('.brand').removeClass('brand_w');
        $('#brand'+num).addClass('brand_w');
        $('.head').removeClass('black');
        pagingMoveData = ( num > MaxLens ) ? pagingMoveData = $pagingArea.height()*MaxLens : pagingMoveData = $pagingArea.height()*num;
        if(pagingMoveData<0){
            pagingMoveData = 0;
        }
        $('.down_icon').hide();
        $('.push_icon').show();
        $(".currentul").animate({
            'margin-top' : -pagingMoveData + 'px'
        }, aniSpeed);
        $(".menu li").eq(num).addClass('current').siblings().removeClass('current')
    });
});

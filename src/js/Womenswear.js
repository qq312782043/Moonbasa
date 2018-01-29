require.config({
	paths:{
		'jquery':'../libs/jquery',
		'swiper':'../libs/swiper.jquery'
	}
});
require(['jquery','swiper'],function($,swiper){
	$(function(){
		// 顶部图片切换
		$('#Option_bnt li').mouseenter(function(){
			$('#Option_bnt li img').eq($(this).index()).prop('src','images/0'+($(this).index()+1)+'.jpg')
		});
		$('#Option_bnt li').mouseleave(function(){
			$('#Option_bnt li img').eq($(this).index()).prop('src','images/'+($(this).index()+1)+'.jpg')
		});

		// 头部大轮播图
		var $li = $(".b_list ul li");
		var len = $li.length-1;
		var _index = 0;
		var $img = $(".b_main .b_m_pic li");
		var timer = null;
	    $li.hover(function(){
	        $(this).addClass("l_hover");
	    },function(){
	        $(this).removeClass("l_hover");
	    });
	    $li.mouseenter(function(){
	        _index = $(this).index();
	        play();
	    });
	    // 动画效果
	    function play(){
	        $li.stop().eq(_index).addClass("l_click").siblings().removeClass("l_click");
	        $img.stop().eq(_index).fadeIn().siblings().fadeOut();
	    }
	    // 定时器
	    function auto(){
	        timer = setInterval(function(){
	            _index++;
	            if(_index > len){
	                _index = 0;
	            }
	            play();
	        },2000);
	    }
	    auto();
	    $(".b_main").hover(function(){
	        clearInterval(timer);
	    },function(){
	        auto();
	    });
	    $(".b_list ul li").hover(function(){
	        clearInterval(timer);
	    },function(){

	    });
	});
	$(function(){
		$('#navigation_box p').click(function(){
			$(this).parent().css('display','none').siblings().css('display','block');
		});
		$('#navigation_box_1 p').click(function(){
			$(this).parent().css('display','none').siblings().css('display','block');
		});
	});
	$(function(){
		$.getJSON('comment/11.json',function(json,textStatus){
			$.each(json.data,function(index,val){
				$('<li><img src="'+json.data[index].img_url+'"/><p>HOT</p><p>'+json.data[index].title+'</p><p>'+json.data[index].pic+'</p></li>').appendTo('#navigation_1_box');
				$('#navigation_1_box li').click(function(){
					// console.log($(this).index());
					localStorage.Img_url = JSON.stringify(json.data[$(this).index()].img_url);
					window.location.href = 'detail.html?code=' + json.data[index];
				});
			});
		});
		$('#navigation_box li').click(function(){
			var i = ($(this).index());
			$('#navigation_1_box').html('');
			$.getJSON('comment/1'+i+'.json',function(json,textStatus){
				$.each(json.data,function(index,val){
					$('<li><img src="'+json.data[index].img_url+'"/><p>HOT</p><p>'+json.data[index].title+'</p><p>'+json.data[index].pic+'</p></li>').appendTo('#navigation_1_box');
					$('#navigation_1_box li').click(function(){
						// console.log($(this).index());
						localStorage.Img_url = JSON.stringify(json.data[$(this).index()].img_url);
						window.location.href = 'detail.html?code=' + json.data[index];
					});
				});
			});
		});
		$('#navigation_box_1 li').click(function(){
			var i = ($(this).index());
			$('#navigation_1_box').html('');
			$.getJSON('comment/11'+i+'.json',function(json,textStatus){
				$.each(json.data,function(index,val){
					$('<li><img src="'+json.data[index].img_url+'"/><p>HOT</p><p>'+json.data[index].title+'</p><p>'+json.data[index].pic+'</p></li>').appendTo('#navigation_1_box');
					$('#navigation_1_box li').click(function(){
						// console.log($(this).index());
						localStorage.Img_url = JSON.stringify(json.data[$(this).index()].img_url);
						window.location.href = 'detail.html?code=' + json.data[index];
					});
				});
			});
		});
		$(window).scroll(function(){
			if($(this).scrollTop()>750){
				$('#navigation').css('position','fixed').css('top','0px').css('left','215px');
			}else if($(this).scrollTop()<749){
				$('#navigation').css('position','relative').css('top','10px');
			}
		});
	});
	$(function(){
		$(document).ready(function(){
	        var mySwiper = new Swiper('.swiper-container',{
	            direction:'vertical',
	            loop:true,
	            nextButton:'.swiper-button-next',
	            prevButton:'.swiper-button-prev',
	        });
	    });
	});
});
require.config({
	paths:{
		'jquery':'../libs/jquery'
	}
});
require(['jquery'],function($){
	$(function(){
		// 顶部图片切换
		$('#Option_bnt li').mouseenter(function(){
			$('#Option_bnt li img').eq($(this).index()).prop('src','images/0'+($(this).index()+1)+'.jpg')
		});
		$('#Option_bnt li').mouseleave(function(){
			$('#Option_bnt li img').eq($(this).index()).prop('src','images/'+($(this).index()+1)+'.jpg')
		})
		// 头部大轮播图
		var $li = $(".b_list ul li");
		var len = $li.length-1;
		var _index = 0;
		var $img = $(".b_main .b_m_pic li");
		var $btn = $(".b_btn div");
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
	    // 左右按钮点击事件
	    $btn.click(function(){
	        var index = $(this).index();
	        if(index) {
	            _index++;
	            if (_index > len) {
	                _index = 0;
	            }
	            play();
	        }else {
	            _index--;
	            if(_index < 0){
	                _index = len;
	            }
	            play();
	        }
	    });
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
	    $(".b_btn div").hover(function(){
	        clearInterval(timer);
	    },function(){
	        auto();
	    });
	    $(".b_list ul li").hover(function(){
	        clearInterval(timer);
	    },function(){});
		$('#Recommend button').mouseenter(function(){
			$("#Brand li").eq($(this).index()).css('display','block').siblings().css('display','none');
		});

		// 左侧导航栏目
		$(window).scroll(function(){
			if($(this).scrollTop()>502){
				$('#aside_left').css('display','block');
				$('#aside_left ul li').eq(0).css('background','#E50163').siblings().css('background','#FFFFFF');
			}if($(this).scrollTop()>730){
				$('#aside_left').css('display','block');
				$('#aside_left ul li').eq(1).css('background','orange').siblings().css('background','#FFFFFF');
			}if($(this).scrollTop()>1250){
				$('#aside_left').css('display','block');
				$('#aside_left ul li').eq(2).css('background','skyblue').siblings().css('background','#FFFFFF');
			}if($(this).scrollTop()>1900){
				$('#aside_left').css('display','block');
				$('#aside_left ul li').eq(3).css('background','tomato').siblings().css('background','#FFFFFF');
			}if($(this).scrollTop()>2800){
				$('#aside_left').css('display','block');
				$('#aside_left ul li').eq(4).css('background','pink').siblings().css('background','#FFFFFF');
			}if($(this).scrollTop()>3600){
				$('#aside_left').css('display','block');
				$('#aside_left ul li').eq(5).css('background','#7FFFD4').siblings().css('background','#FFFFFF');
			}if($(this).scrollTop()>4400){
				$('#aside_left').css('display','block');
				$('#aside_left ul li').eq(6).css('background','#9999FF').siblings().css('background','#FFFFFF');
			}if($(this).scrollTop()>5050){
				$('#aside_left').css('display','block');
				$('#aside_left ul li').eq(7).css('background','#FA8072').siblings().css('background','#FFFFFF');
			}if($(this).scrollTop()>6650){
				$('#aside_left').css('display','block');
				$('#aside_left ul li').eq(8).css('background','#CC9999').siblings().css('background','#FFFFFF');
			}if($(this).scrollTop()>9550){
				$('#aside_left').css('display','block');
				$('#aside_left ul li').eq(9).css('background','#99CCCC').siblings().css('background','#FFFFFF');
			}if($(this).scrollTop()>12300){
				$('#aside_left').css('display','block');
				$('#aside_left ul li').eq(10).css('background','#99CCCC').siblings().css('background','#FFFFFF');
			}else if($(this).scrollTop()<502){
				$('#aside_left').css('display','none');
			}
		});
		$('#aside_left ul li').eq(0).click(function(){
			$('body,html').animate({scrollTop:0},500);
		});
		$('#aside_left ul li').eq(1).click(function(){
			$('body,html').animate({scrollTop:731},500);
		});
		$('#aside_left ul li').eq(2).click(function(){
			$('body,html').animate({scrollTop:1511},500);
		});
		$('#aside_left ul li').eq(3).click(function(){
			$('body,html').animate({scrollTop:2261},500);
		});
		$('#aside_left ul li').eq(4).click(function(){
			$('body,html').animate({scrollTop:3271},500);
		});
		$('#aside_left ul li').eq(5).click(function(){
			$('body,html').animate({scrollTop:4091},500);
		});
		$('#aside_left ul li').eq(6).click(function(){
			$('body,html').animate({scrollTop:4901},500);
		});
		$('#aside_left ul li').eq(7).click(function(){
			$('body,html').animate({scrollTop:5571},500);
		});
		$('#aside_left ul li').eq(8).click(function(){
			$('body,html').animate({scrollTop:7151},500);
		});
		$('#aside_left ul li').eq(9).click(function(){
			$('body,html').animate({scrollTop:10101},500);
		});
		$('#aside_left ul li').eq(10).click(function(){
			$('body,html').animate({scrollTop:0},500);
		});

		// 中间小轮播图
	    var $lis = $(".blist ul li");
		var lens = $lis.length-1;
		var index = 0;
		var $imgs = $(".bmain .bmpic li");
		var timers = null;
		$lis.hover(function(){
		    $(this).addClass("lhover");
		},function(){
		    $(this).removeClass("lhover");
		});
		$lis.mouseenter(function(){
		    index = $(this).index();
		    playFn();
		});
		function playFn(){
		    $lis.stop().eq(index).addClass("lclick").siblings().removeClass("lclick");
		    $imgs.stop().eq(index).fadeIn().siblings().fadeOut();
		}
		function autoFn(){
		    timers = setInterval(function(){
		        index++;
		        if(index > lens){
		            index = 0;
		        }
		        playFn();
		    },2000);
		}
		autoFn();
		$(".bmain").hover(function(){
		    clearInterval(timers);
		},function(){
		    autoFn();
		});
		$(".blist ul li").hover(function(){
		    clearInterval(timers);
		},function(){
		    autoFn();
		});

		// 手风琴TAB切换
		$("#PopularCategory #uls_1 li").hover(function(){
            $(this).stop().fadeOut();
            $(this).stop().animate({"width":594},500).siblings().stop().animate({"width":300},500);
        },function(){
            $(this).stop().fadeIn();
            $(this).stop().animate({"width":594},500).siblings().stop().animate({"width":300},500);
        });

        // 二连TAB切换
        $('#uls_1 li').mouseenter(function(){
			$("#uls_2 #Box_1").eq($(this).index()).css('display','block').siblings().css('display','none');
		});
		$('#clothing_2 p').mouseenter(function(){
			$("#clothing_1 img").eq($(this).index()).css('display','block').siblings().css('display','none');
		});
		$('#clothing_4 p').mouseenter(function(){
			$("#clothing_3 img").eq($(this).index()).css('display','block').siblings().css('display','none');
		});
		$('#clothing_6 p').mouseenter(function(){
			$("#clothing_5 img").eq($(this).index()).css('display','block').siblings().css('display','none');
		});
	});
	$(function(){
		// 中间圆点加TAB切换轮播
		var indexs = 0;
		var Timers = null;
		$("#ula_1 li").hover(function(){
		    $(this).addClass("lhover");
		},function(){
		    $(this).removeClass("lhover");
		});
		$("#ula_3 li").hover(function(){
		    $(this).addClass("lhover");
		},function(){
		    $(this).removeClass("lhover");
		});
		$("#ula_1 li").mouseenter(function(){
		    indexs = $(this).index();
		    playFn();
		});
		$("#ula_3 li").mouseenter(function(){
		    indexs = $(this).index();
		    playFn();
		});
		function playFn(){
		    $("#ula_1 li").stop().eq(indexs).addClass("lclick").siblings().removeClass("lclick");
		    $("#ula_3 li").stop().eq(indexs).addClass("lclick").siblings().removeClass("lclick");
		    $("#ula_2 ul").stop().eq(indexs).fadeIn(300).siblings().fadeOut(300);
		}
		function autoFn(){
		    Timers = setInterval(function(){
		        indexs++;
		        if(indexs > $("#ula_1 li").length-1){
		            indexs = 0;
		        }
		        playFn();
		    },2000);
		}
		autoFn();
		$("#ula_1").hover(function(){
		    clearInterval(Timers);
		},function(){
		    autoFn();
		});
		$("#ula_2").hover(function(){
		    clearInterval(Timers);
		},function(){
		    autoFn();
		});
		$("#ula_3").hover(function(){
		    clearInterval(Timers);
		},function(){
		    autoFn();
		});		
	});
	$(function(){
		var Index = 0;
		var time = null;
	    $("#Arrivals_1 li").hover(function(){
	        $(this).addClass("l_hover");
	    },function(){
	        $(this).removeClass("l_hover");
	    });
	    $("#Arrivals_1 li").mouseenter(function(){
	        Index = $(this).index();
	        PlayFn();
	    });
	    // 动画效果
	    function PlayFn(){
	        $("#Arrivals_1 li").stop().eq(Index).addClass("l_click").siblings().removeClass("l_click");
	        $("#Arrivals li img").stop().eq(Index).fadeIn().siblings().fadeOut();
	    }
	    // 左右按钮点击事件
	    $("#btn div").click(function(){
	        var index = $(this).index();
	        if(index){
	            Index++;
	            if (Index > $("#Arrivals_1 li").length-1) {
	                Index = 0;
	            }
	            PlayFn();
	        }else{
	            Index--;
	            if(Index < 0){
	                Index = $("#Arrivals_1 li").length-1;
	            }
	            PlayFn();
	        }
	    });
	    // 定时器
	    function autosFn(){
	        time = setInterval(function(){
	            Index++;
	            if(Index > $("#Arrivals_1 li").length-1){
	                Index = 0;
	            }
	            PlayFn();
	        },2000);
	    };
	    autosFn();
	    $("#Arrivals").hover(function(){
	        clearInterval(time);
	    },function(){
	        autosFn();
	    });
	    $("#btn div").hover(function(){
	        clearInterval(time);
	    },function(){
	        autosFn();
	    });
	    $("#Arrivals_1").hover(function(){
	        clearInterval(time);
	    },function(){
	    	autosFn();
	    });

	    $('#Dandyism li').mouseenter(function(){
			$("#Dandyism_ li").eq($(this).index()).css('display','block').siblings().css('display','none');
			$(this).css('background','#E50163').css('color','#fff').siblings().css('background','').css('color','#000');
			$("#Dandyism li i").css('display','none');
			$("#Dandyism li i").eq($(this).index()).css('display','block');
			$("#Dandyism_1 li").eq($(this).index()).css('background','#E50163').siblings().css('background','#ccc');
		});
		$('#Dandyism_1 li').mouseenter(function(){
			$("#Dandyism_ li").eq($(this).index()).css('display','block').siblings().css('display','none');
			$(this).css('background','#E50163').css('color','#fff').siblings().css('background','').css('color','#000');
			$("#Dandyism li i").css('display','none');
			$("#Dandyism li i").eq($(this).index()).css('display','block');
			$("#Dandyism li").eq($(this).index()).css('background','#E50163').css('color','#fff').siblings().css('background','').css('color','#000');
		});
		$('#brands_1 li').mouseenter(function(){
			$("#brands_2 li").stop().eq($(this).index()).fadeIn().siblings().fadeOut();
			$("#brands_2 li").eq($(this).index()).css('display','block').siblings().css('display','none');
			$(this).css('color','#E50163').siblings().css('color','');
		});
	});
	$(function(){
		$.getJSON('comment/1.json',function(json,textStatus){
			$.each(json.data,function(index,val){
				$('<li><img src="'+json.data[index].img_url+'"/><p>'+json.data[index].title+'</p><p>'+json.data[index].pic+'</p><p>'+json.data[index].pic_1+'</p></li>').appendTo('#Underwear_1');
				$('#Underwear_1 li').click(function(){
					console.log($(this).index());
					localStorage.Img_url = JSON.stringify(json.data[$(this).index()].img_url);
					window.location.href = 'detail.html?code=' + json.data[index];
				});
			});
		});
		$.getJSON('comment/2.json',function(json,textStatus){
			$.each(json.data,function(index,val){
				$('<li><img src="'+json.data[index].img_url+'"/><p>'+json.data[index].title+'</p><p>'+json.data[index].pic+'</p><p>'+json.data[index].pic_1+'</p></li>').appendTo('#Korirl_1');
				$('#Korirl_1 li').click(function(){
					console.log($(this).index());
					localStorage.Img_url = JSON.stringify(json.data[$(this).index()].img_url);
					window.location.href = 'detail.html?code=' + json.data[index];
				});
			});
		});
		$.getJSON('comment/3.json',function(json,textStatus){
			$.each(json.data,function(index,val){
				$('<li><img src="'+json.data[index].img_url+'"/><p>'+json.data[index].title+'</p><p>'+json.data[index].pic+'</p><p>'+json.data[index].pic_1+'</p></li>').appendTo('#US_fashion_1');
				$('#US_fashion_1 li').click(function(){
					// console.log($(this).index());
					localStorage.Img_url = JSON.stringify(json.data[$(this).index()].img_url);
					window.location.href = 'detail.html?code=' + json.data[index];
				});
			});
		});
		$.getJSON('comment/4.json',function(json,textStatus){
			$.each(json.data,function(index,val){
				$('<li><img src="'+json.data[index].img_url+'"/><p>'+json.data[index].title+'</p><p>'+json.data[index].pic+'</p><p>'+json.data[index].pic_1+'</p></li>').appendTo('#recomend_1');
				$('#recomend_1 li').click(function(){
					// console.log($(this).index());
					localStorage.Img_url = JSON.stringify(json.data[$(this).index()].img_url);
					window.location.href = 'detail.html?code=' + json.data[index];
				});
			});
		});

	});
});
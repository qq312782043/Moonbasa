require.config({
	paths:{
		'jquery':'../libs/jquery'
	}
});
require(['jquery'],function($){
	var minDiv = document.querySelector("#minDiv");
	var maxDiv = document.querySelector("#maxDiv");
	var slider = document.querySelector("#slider");
	var minImg = document.querySelector("#minImg");
	var maxImg = document.querySelector("#maxImg");
	minDiv.onmouseleave = function(){
		slider.style.display = 'none';
		maxDiv.style.display = 'none';
	}
	minDiv.onmousemove = function(e){
		var ev = window.event || e;
		slider.style.display = 'block';
		maxDiv.style.display = 'block';
		var x = ev.clientX - 200 - slider.offsetWidth / 2;
		var y = ev.clientY - 200 - slider.offsetHeight / 2;
		var scaleX = maxImg.offsetWidth / minImg.offsetWidth;
		var scaleY = maxImg.offsetHeight / minImg.offsetHeight;
		maxImg.style.left = -x * scaleX + 'px';
		maxImg.style.top = -y * scaleY + 'px';
		slider.style.left = x + 'px';
		slider.style.top = y + 'px';
		if(slider.offsetLeft <= 0){
			slider.style.left = '0px';
		}
		if(slider.offsetTop <= 0){
			slider.style.top = '0px';
		}
		if(slider.offsetLeft >= 200){
			slider.style.left = '200px';
		}
		if(slider.offsetTop >= 340){
			slider.style.top = '340px';
		}
	};
	
	$(function(){
		$('#Gif_QR_code').click(function(){
			$('#QR_code').css('height','130px');
		});
		$('#X').click(function(){
			$('#QR_code').css('height','0px');
		});
		$('#Color_Box1').click(function(){
			$(this).css('borderColor','#E50163').siblings().css('borderColor','#ccc');
			$('#sanjiao1').css('display','block');
			$('#sanjiao2').css('display','none');
		});
		$('#Color_Box2').click(function(){
			$(this).css('borderColor','#E50163').siblings().css('borderColor','#ccc');
			$('#sanjiao2').css('display','block');
			$('#sanjiao1').css('display','none');
		});
		$('#Size ul li').eq(1).click(function(){
			$(this).css('borderColor','#E50163').siblings().css('borderColor','#ccc');
		});
		$('#Size ul li').eq(2).click(function(){
			$(this).css('borderColor','#E50163').siblings().css('borderColor','#ccc');
		});
		$('#Size ul li').eq(3).click(function(){
			$(this).css('borderColor','#E50163').siblings().css('borderColor','#ccc');
		});
		$('#lbd').click(function(){
			$("#detail_box_right ul li").eq(0).css('marginTop','-510px');
		});
		$('#lbu').click(function(){
			$("#detail_box_right ul li").eq(0).css('marginTop','5px');
		});
		$('#minImg').prop('src',$.parseJSON(localStorage.Img_url));
		$('#maxImg').prop('src',$.parseJSON(localStorage.Img_url));
		$('.btn2').click(function(){
			$("#JoinTheSuccess").css('display','block');
		});
		$('#guanbi').click(function(){
			$("#JoinTheSuccess").css('display','none');
		});
		$('#btna').click(function(){
			$("#JoinTheSuccess").css('display','none');
		})
	});
	console.log(localStorage.Img_url);
});

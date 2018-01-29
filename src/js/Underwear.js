require.config({
	paths:{
		'jquery':'../libs/jquery'
	}
});
require(['jquery'],function($){
	$(function(){
		$.getJSON('comment/01.json',function(json,textStatus){
			$.each(json.data,function(index,val){
				$('<li><img src="'+json.data[index].img_url+'"/><p>'+json.data[index].title+'</p><p>'+json.data[index].pic+'</p><p>'+json.data[index].pic_1+'</p><button>加入购物车</button></li>').appendTo('#Tab_box_2_');
				$('#Tab_box_2_ li').click(function(){
					// console.log($(this).index());
					localStorage.Img_url = JSON.stringify(json.data[$(this).index()].img_url);
					window.location.href = 'detail.html?code=' + json.data[index];
				});
			});
		});
		$('#Tab_box_1 li').mouseenter(function(){
			$(this).css('background','#C99C5B').css('color','red').siblings().css('background','red').css('color','#fff');
			var i = ($(this).index())+1;
			$('#Tab_box_2_').html('');
			$.getJSON('comment/0'+i+'.json',function(json,textStatus){
				$.each(json.data,function(index,val){
					$('<li><img src="'+json.data[index].img_url+'"/><p>'+json.data[index].title+'</p><p>'+json.data[index].pic+'</p><p>'+json.data[index].pic_1+'</p><button>加入购物车</button></li>').appendTo('#Tab_box_2_');
					$('#Tab_box_2_ li').click(function(){
						// console.log($(this).index());
						localStorage.Img_url = JSON.stringify(json.data[$(this).index()].img_url);
						window.location.href = 'detail.html?code=' + json.data[index];
					});
				});
			});
		});
		$.getJSON('comment/01.json',function(json,textStatus){
			$.each(json.data,function(index,val){
				$('<li><img src="'+json.data[index].img_url+'"/><p>'+json.data[index].title+'</p><p>'+json.data[index].pic+'</p><p>'+json.data[index].pic_1+'</p></li>').appendTo('#Get_box_2_');
				$('#Get_box_2_ li').click(function(){
					// console.log($(this).index());
					localStorage.Img_url = JSON.stringify(json.data[$(this).index()].img_url);
					window.location.href = 'detail.html?code=' + json.data[index];
				});
			});
		});
		$.getJSON('comment/02.json',function(json,textStatus){
			$.each(json.data,function(index,val){
				$('<li><img src="'+json.data[index].img_url+'"/><p>'+json.data[index].title+'</p><p>'+json.data[index].pic+'</p><p>'+json.data[index].pic_1+'</p></li>').appendTo('#Get_box_3_');
				$('#Get_box_3_ li').click(function(){
					// console.log($(this).index());
					localStorage.Img_url = JSON.stringify(json.data[$(this).index()].img_url);
					window.location.href = 'detail.html?code=' + json.data[index];
				});
			});
		});
		$.getJSON('comment/03.json',function(json,textStatus){
			$.each(json.data,function(index,val){
				$('<li><img src="'+json.data[index].img_url+'"/><p>'+json.data[index].title+'</p><p>'+json.data[index].pic+'</p><p>'+json.data[index].pic_1+'</p></li>').appendTo('#Get_box_4_');
				$('#Get_box_4_ li').click(function(){
					// console.log($(this).index());
					localStorage.Img_url = JSON.stringify(json.data[$(this).index()].img_url);
					window.location.href = 'detail.html?code=' + json.data[index];
				});
			});
		});
		$.getJSON('comment/05.json',function(json,textStatus){
			$.each(json.data,function(index,val){
				$('<li><img src="'+json.data[index].img_url+'"/><p>'+json.data[index].title+'</p><p>'+json.data[index].pic+'</p><p>'+json.data[index].pic_1+'</p></li>').appendTo('#Get_box_5_');
				$('#Get_box_5_ li').click(function(){
					// console.log($(this).index());
					localStorage.Img_url = JSON.stringify(json.data[$(this).index()].img_url);
					window.location.href = 'detail.html?code=' + json.data[index];
				});
			});
		});
	});
});
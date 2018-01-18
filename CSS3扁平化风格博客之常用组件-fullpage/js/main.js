$(function(){
	'use strict';

	var sidebar=$("#sidebar"),mask=$("#mask"),menu=$("#menu");
	var sidebar_width=sidebar.width();
	var back_to_top=$("#back-to-top");

	
	sidebar.click(function(){
	});

	mask.click(function(){
		sidebar.animate({right:'-'+sidebar_width+'px'},function(){mask.toggle();})
		
	});

	menu.click(function(){
		sidebar.animate({right:0},function(){mask.toggle()})	
	});

	back_to_top.click(function(){
		$('body,html').animate({scrollTop:0});
	});

	$(window).on('scroll',function(){

		if($(window).scrollTop() > $(window).height()){
			back_to_top.css('display','block')
		}else{
			back_to_top.css('display','none');
		}
	})
})
$(document).ready(function(){
	// var lightedStars=3;
	// var $rating=$('.rating');
	// var $items=$rating.find('li');
	// $items.on('click',function(){
	// 	lightOn();
	// })
	// console.log($items.length);
	// function lightOn(){

	// }

	var num=2,
		$rating=$('.rating'),
		$item=$('.rating').find('.rating-item');
	var lightOn=function (num) {
		// body...
		$item.each(function(index){
			if(index<num){
				$(this).css('background-position','0 -40px');
			}else{
				$(this).css('background-position','0 0');
			}
		})
	}


	//初始化
	lightOn(num);

	//事件绑定
	$item.on('mouseover',function(){
		lightOn($(this).index()+1);
	}).on('click',function(){
		num=$(this).index()+1;
	})
	$rating.on('mouseout',function(){
		lightOn(num);
	})
});
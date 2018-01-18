$(document).ready(function(){

//闭包，匿名函数立即执行，解决暴露太多全局变量问题

var rating=(function(){
			
					var lightOn=function ($item,num) {
					// body...
						$item.each(function(index){
							if(index<num){
								$(this).css('background-position','0 -40px');
							}else{
								$(this).css('background-position','0 0');
							}
						})
					}

				var init=function(el,num){
					var $rating=$(el),
					$item=$rating.find('.rating-item');

					//点亮
					

					//初始化
					lightOn($item,num);

					//将子元素li的事件委托给父元素ul
					$rating.on('mouseover','.rating-item',function(){
						lightOn($item,$(this).index()+1);
					}).on('click','.rating-item',function(){
						num=$(this).index()+1;
					}).on('mouseout',function(){
						lightOn($item,num);
					});

				};
			
				//jQuery插件
				$.fn.extend({
					rating:function(num){
						return this.each(function(){
							init(this,num);
						})
					}
				});	
				
				return {
					init:init
				};
			})()

rating.init('#rating',2);
$('#rating2').rating(4);
});


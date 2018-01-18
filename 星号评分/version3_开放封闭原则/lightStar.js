$(document).ready(function(){

var rating=(function(){
	//点亮整颗
	var lightEntire=function(el,options){
		this.$el=$(el);
		this.$item=this.$el.find('.rating-item');
		this.opts=options;
	};
	lightEntire.prototype.init=function(){
		this.lightOn(this.opts.num);
		this.bindEvent();
	};
	lightEntire.prototype.lightOn=function(num){
		num=parseInt(num);
		this.$item.each(function(index){
							if(index<num){
								$(this).css('background-position','0 -40px');
							}else{
								$(this).css('background-position','0 0');
							}
						})
	};
	lightEntire.prototype.bindEvent=function(){
		var self=this;
			this.$el.on('mouseover','.rating-item',function(){
						self.lightOn($(this).index()+1);
					}).on('click','.rating-item',function(){
						self.opts.num=$(this).index()+1;
					}).on('mouseout',function(){
						self.lightOn(self.opts.num);
					});
	};
	//默认参数
   
	var init=function(el,options){
		options=$.extend({},defaults,options);
		//new lightEntire(el,options).init();
		new mode[options.mode](el,options).init()
	};
//点亮半颗
	var lightHalf=function(el,options){
		this.$el=$(el);
		this.$item=this.$el.find('.rating-item');
		this.opts=options;
		this.added=1;
	};
	lightHalf.prototype.init=function(){
		this.lightOn(this.opts.num);
		this.bindEvent();
	};
	lightHalf.prototype.lightOn=function(num){
		var isHalf=(num!==parseInt(num));
		this.$item.each(function(index){
							if(index<parseInt(num)){
								$(this).css('background-position','0 -40px');
							}else{
								$(this).css('background-position','0 0');
							}
						})
		if(isHalf){
			this.$item.eq(parseInt(num)).css('background-position','0 -80px');
		}
	};
	lightHalf.prototype.bindEvent=function(){
		var self=this,num=0;
			this.$el.on('mousemove','.rating-item',function(e){
						if (e.pageX<($(this).width()/2)+$(this).offset().left) {
							self.added=0.5;
							
						}else{
							 self.added=1;
						}
						self.lightOn($(this).index()+self.added);
					}).on('click','.rating-item',function(){
						self.opts.num=$(this).index()+self.added;
					}).on('mouseout',function(){
						self.lightOn(self.opts.num);
					});
	};
	//默认参数
 
	 var defaults={
    	mode:'lightEntire',
    	num:0,
    	readOnly:false,
    	select:function(){},
    	chosen:function(){}
    };

    var mode={
    	lightEntire:lightEntire,
    	lightHalf:lightHalf
    };
	return {
		init:init
	};
})()



rating.init('#rating',{
	num:2,
	mode:'lightEntire'
});


rating.init('#rating2',{
	num:3.5,
	mode:'lightHalf'
});

});


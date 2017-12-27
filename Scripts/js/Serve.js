$(function(){

	//事件注册
	(function(){
		
		$("body").on("click",".back-top",function(event){
			$('body,html').animate({scrollTop:0},300);
		})
		
	}());
})





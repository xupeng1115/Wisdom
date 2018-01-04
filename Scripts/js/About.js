$(function(){
	
	//轮播滚动
	(function(){
		var mySwiper1 = new Swiper ('.swiper-container1', {
			autoplay:3000,
			speed:1600,
		    loop: true,
		    
		    // 如果需要前进后退按钮
		    nextButton: '.swiper-button-next',
		    prevButton: '.swiper-button-prev',
		    
		})
		
		var mySwiper2 = new Swiper ('.swiper-container2', {
			autoplay:3000,
			speed:1600,
		    loop: true,
		    
		    // 如果需要分页器
		    pagination: '.swiper-pagination2',
			paginationClickable :true,
		    
		})
	}());
	
	//初始化操作
	(function(){
		$(".back-top").hide();
	}());
	

})
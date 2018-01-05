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
	}());
	
	//初始化操作
	(function(){
		$(".back-top").hide();
	}());
	
	
	//事件注册
	(function(){
		
		$("body").on("click",".nav-item",function(){
			
		})
		
		//侧边导航
		$(window).scroll(function() {
			//获取文档滚动高度
		    var top = $(document).scrollTop();

		    if(top>=345){
		    	$(".nav-wrapper").addClass("nav-scroll");
		    }else{
		    	$(".nav-wrapper").removeClass("nav-scroll");
		    }
		})
		
		//模块导航滚动
		$("body").on("click",".nav-href",function(event){
			var oActive=$(this).parent(".nav-item").hasClass("active-nav-item");
			var oNum=$(this).attr("num");
			console.log(oNum);
			var oList=$(".nav-item");
			if(!oActive){
				$.each(oList,function(index,item){
					if($(item).hasClass("active-nav-item")){
						$(item).removeClass("active-nav-item");
						return;
					}
				})
				$(this).parent(".nav-item").addClass("active-nav-item");
			}
			
			if(oNum==="2"){
				console.log(234243);
				$("html, body").animate({
			      	scrollTop: ($($(this).attr("href")).offset().top +180)+ "px"
			    }, {
			      	duration: 500,
			      	easing: "swing"
			    });
			}else{
				$("html, body").animate({
			      	scrollTop: ($($(this).attr("href")).offset().top -45)+ "px"
			    }, {
			      	duration: 500,
			      	easing: "swing"
			    });
			}
			
		    return false;
		})
		
		
	}());

})
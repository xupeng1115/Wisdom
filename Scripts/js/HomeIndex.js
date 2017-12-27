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
	
	//事件注册
	(function(){
		$("body").on("click",".flow-btn",function(event){
			$(this).css("background","#fff");
			$(".flow-content").show();
			$(".standard-btn").css("background","#f1f5f9");
			$(".standard-content").hide();
		})
		
		$("body").on("click",".standard-btn",function(event){
			$(this).css("background","#fff");
			$(".flow-content").hide();
			$(".flow-btn").css("background","#f1f5f9");
			$(".standard-content").show();
		})
		
		$("body").on("click",".search-btn",function(){
			window.location.href="../Job/List.html";
		})
		
		$("body").on("click",".position-top-name",function(){
			window.location.href="../Job/Index.html";
		})
		
		$("body").on("click",".back-top",function(){
			$('body,html').animate({scrollTop:0},500);
		})
		
		$("body").on("click",".like-box",function(){
			var oIcon=$(this).find(".like-icon").find("i");
			var oKey=oIcon.hasClass("red");
			if(oKey){
				oIcon.removeClass("red");
				$(this).attr("status","gray");
			}else{
				oIcon.addClass("red");
				$(this).attr("status","red");
			}
		})
		
		$("body").on("click",".standard-btn",function(){
			$(".standard-item").eq(0).find(".item-content").show();
			$(".standard-item").eq(0).find(".item-bg").css("background-image","url(../../Content/img/standard_01_bg.png)");			
		})
		
		$("body").on("mouseover",".standard-item",function(){
			var oIndex=parseInt($(this).attr("index"));
			if(oIndex!==1){
				$(".first-bg").css("background-image","url(../../Content/img/standard_01.png)");
				$(".first-content").hide();
			}else{
				$(".first-bg").css("background-image","url(../../Content/img/standard_01_bg.png)");
				$(".first-content").show();
			}
		})
		
		$("body").on("mouseout",".item-first",function(){
			$(".first-bg").css("background-image","url(../../Content/img/standard_01.png)");
			$(".first-content").hide();
		})
		
		$("body").on("click",".top-evaluation-btn",function(){
			window.location.href="../Assessment/Index.html";
		})
		
		$("body").on("click",".top-evaluation-btn",function(){
			window.location.href="../Assessment/Index.html";
		})
		
		$(window).scroll(function() {
			//获取文档滚动高度
		    var top = $(document).scrollTop();
		    if(top>=1000){
		    	$("aside").show();
		    }else{
		    	$("aside").hide();
		    }
		})
		
	}());
	
})
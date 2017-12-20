$(function(){
	
	//分页
	(function(){
		$(".tcdPageCode1").createPage({
	        pageCount:100,
	        current:1,
	        backFn:function(p){
	            console.log(p);
	        }
	    });
	    
	    $(".tcdPageCode2").createPage({
	        pageCount:100,
	        current:1,
	        backFn:function(p){
	            console.log(p);
	        }
	    });
	}());
	
	//事件注册
	(function(){

		$("body").on("click",".back-top",function(event){
			$('body,html').animate({scrollTop:0},300);
		})
		
		$("body").on("click",".tag-cancel-btn",function(event){
			removeSelect();
			$(".flo-box").hide();
		})
		
		$("body").on("click",".add-tag-btn",function(event){
			$(".flo-box").show();
		})
		
		$("body").on("click",".select-confirm-btn",function(event){
			if($(".tag-item").length<=5){
				$(".resume-tag").append('<li class="tag-item">数据分析</li>');
			}
			$(".flo-box").hide();
		})
		
		$("body").on("click",".select-item",function(event){
			var oKey=$(this).hasClass("selected");
			if(oKey){
				$(this).removeClass("selected");
			}else{
				$(this).addClass("selected");
			}
		})
		
		$("body").on("click",".select-reset-btn",function(event){
			removeSelect();
		})
		
		$("body").on("click",".resume-nav-item",function(event){
			var oKey=$(this).hasClass("resume-nav-active");
			var oList=$(".resume-nav-item");
			if(!oKey){
				for(var i=0;i<oList.length;i++){
					if(oList.eq(i).hasClass("resume-nav-active")){
						oList.eq(i).removeClass("resume-nav-active");
						break;
					}
				}
				$(this).addClass("resume-nav-active");
			}
		})
		
		$("body").on("click",".add-education-btn",function(event){
			$(".education-edit-container").show();
		})
		
		$("body").on("click",".education-save-btn",function(event){
			$(".education-edit-container").hide();
		})
		
		$("body").on("click",".education-cancel-btn",function(event){
			$(".education-edit-container").hide();
		})
		
		var oBack=false;
		$("body").on("click",".background-select",function(event){
			if(!oBack){
				$(this).css("borderColor","#ffbf00");
				$(".background-select-list").show();
				oBack=true;
			}else{
				$(this).css("borderColor","#e3e3e3");
				$(".background-select-list").hide();
				oBack=false;
			}
		})
		
		$("body").on("click",".background-item",function(event){
			var oContent=$(this).text();
			$(".background-select").css("border","1px solid #e3e3e3");
			$(".background-content").text(oContent);
			$(".background-select-list").hide();
			oBack=false;
		})
		
		var oGraduate=false;
		$("body").on("click",".graduate-select",function(event){
			if(!oGraduate){
				$(this).css("borderColor","#ffbf00");
				$(".graduate-select-list").show();
				oGraduate=true;
			}else{
				$(this).css("borderColor","#e3e3e3");
				$(".graduate-select-list").hide();
				oGraduate=false;
			}
		})
		
		$("body").on("click",".graduate-item",function(event){
			var oContent=$(this).text();
			$(".graduate-select").css("border","1px solid #e3e3e3");
			$(".graduate-content").text(oContent);
			$(".graduate-select-list").hide();
			oGraduate=false;
		})
		
		$("body").on("click",".add-award-btn",function(event){
			$(".award-edit-container").show();
		})
		
		$("body").on("click",".award-save-btn",function(event){
			$(".award-edit-container").hide();
		})
		
		$("body").on("click",".award-cancel-btn",function(event){
			$(".award-edit-container").hide();
		})
		
		var oAward=false;
		$("body").on("click",".award-select",function(event){
			if(!oAward){
				$(this).css("borderColor","#ffbf00");
				$(".award-select-list").show();
				oAward=true;
			}else{
				$(this).css("borderColor","#e3e3e3");
				$(".award-select-list").hide();
				oAward=false;
			}
		})
		
		$("body").on("click",".award-item",function(event){
			var oContent=$(this).text();
			$(".award-select").css("border","1px solid #e3e3e3");
			$(".award-content").text(oContent);
			$(".award-select-list").hide();
			oAward=false;
		})
		
		$("body").on("click",".add-practice-btn",function(event){
			$(".practice-edit-container").show();
		})
		
		$("body").on("click",".practice-save-btn",function(event){
			$(".practice-edit-container").hide();
		})
		
		$("body").on("click",".practice-cancel-btn",function(event){
			$(".practice-edit-container").hide();
		})
		
		$("body").on("click",".add-skill-btn",function(event){
			$(".skill-edit-container").show();
		})
		
		$("body").on("click",".skill-save-btn",function(event){
			$(".skill-edit-container").hide();
		})
		
		$("body").on("click",".skill-cancel-btn",function(event){
			$(".skill-edit-container").hide();
		})
		
		$("body").on("click",".add-activity-btn",function(event){
			$(".activity-edit-container").show();
		})
		
		$("body").on("click",".activity-save-btn",function(event){
			$(".activity-edit-container").hide();
		})
		
		$("body").on("click",".activity-cancel-btn",function(event){
			$(".activity-edit-container").hide();
		})
		
		var oActivity=false;
		$("body").on("click",".activity-select",function(event){
			if(!oActivity){
				$(this).css("borderColor","#ffbf00");
				$(".activity-select-list").show();
				oActivity=true;
			}else{
				$(this).css("borderColor","#e3e3e3");
				$(".activity-select-list").hide();
				oActivity=false;
			}
		})
		
		$("body").on("click",".activity-item",function(event){
			var oContent=$(this).text();
			$(".activity-select").css("border","1px solid #e3e3e3");
			$(".activity-content").text(oContent);
			$(".activity-select-list").hide();
			oActivity=false;
		})
		
		$(document).on("click",function(e){
			var b1=$(e.target).hasClass("background-select");
			var b2=$(e.target).hasClass("background-content");
			var g1=$(e.target).hasClass("graduate-select");
			var g2=$(e.target).hasClass("graduate-content");
			var a1=$(e.target).hasClass("award-select");
			var a2=$(e.target).hasClass("award-content");
			var c1=$(e.target).hasClass("activity-select");
			var c2=$(e.target).hasClass("activity-content");
			
			if(!(b1||b2)){
				$(".background-select").css("border","1px solid #e3e3e3");
				$(".background-select-list").hide();
				oBack=false;
			}
			
			if(!(g1||g2)){
				$(".graduate-select").css("border","1px solid #e3e3e3");
				$(".graduate-select-list").hide();
				oGraduate=false;
			}
			
			if(!(a1||a2)){
				$(".award-select").css("border","1px solid #e3e3e3");
				$(".award-select-list").hide();
				oAward=false;
			}
			
			if(!(c1||c2)){
				$(".activity-select").css("border","1px solid #e3e3e3");
				$(".activity-select-list").hide();
				oActivity=false;
			}
		})
		
		$("body").on("click",".position-name",function(){
			window.location.href="PositionDetail.html";
		})
		
		$("body").on("click",".sort-item",function(){
			var _self=this;
			if(!$(_self).hasClass(".sort-item-change")){
				$(".sort-item").each(function(i,obj){
					$(obj).removeClass("sort-item-change");
				})
				$(_self).addClass("sort-item-change");
			}else{
				
			}
		})
		
		$("body").on("click",".position-like",function(){
			$(this).find(".like-icon").find(".fa-heart-o").hide();
			$(this).find(".like-icon").find(".fa-heart").show();
		})
		
		//模块切换
		$("body").on("click",".nav-item",function(){
			var oType=$(this).attr("num");
			var oActive=$(".nav-item-active").attr("num");

			if(oType!==oActive){
				$(".nav-item[num='"+oActive+"']").removeClass("nav-item-active");
				$(".backstage-module[num='"+oActive+"']").hide();
				$(this).addClass("nav-item-active");
				$(".backstage-module[num='"+oType+"']").show();
			}else{
			
			}
		})

		function removeSelect(){
			var oList=$(".select-item");
			for(var i=0;i<oList.length;i++){
				if($(oList.eq(i).hasClass("selected"))){
					$(oList.eq(i).removeClass("selected"));
				}else{
					
				}
			}
		}
		
	}());
			
})
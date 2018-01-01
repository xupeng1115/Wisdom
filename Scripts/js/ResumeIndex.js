"use strict";

var oUserInfo={
//	userUrl:"",
//	userName:"",
//	userGender:"",							
//	userAddress:"",
//	userPhone:"",
//	userEmail:""
	userUrl:'../../Content/img/head.png',
	userName:'Jessie Lai',
	userGender:'mars',							
	userAddress:'上海市长宁区玛瑙路1438号国际古北财富中心二期',
	userPhone:'15136677782',
	userEmail:'987239822@qq.com'
}

//Vue数据模型（交互逻辑和事件绑定）
var app=new Vue({
	el:'#app',
	data:{							
		tagBoxShow:false,									
		totalTags:[									
			{ID:1,TitleName:"研发类"},
			{ID:2,TitleName:"吃苦耐劳"},
			{ID:3,TitleName:"奉献精神呵呵呵"},
			{ID:4,TitleName:"研发类"},
			{ID:5,TitleName:"吃苦耐劳"},
			{ID:6,TitleName:"奉献精神呵呵呵"},
			{ID:7,TitleName:"研发类"},
			{ID:8,TitleName:"吃苦耐劳"},
			{ID:9,TitleName:"奉献精神呵呵呵"}
		],
		userTags:[],
		userInfoShow:oUserInfo.userName!==""&&oUserInfo.userPhone!==""&&oUserInfo.userAddress!==""&&oUserInfo.userEmail!=="",
		selectedTags:[],						
		userInfo:{
			userUrl:oUserInfo.userUrl,
			userName:oUserInfo.userName,
			userGender:oUserInfo.userGender,							
			userAddress:oUserInfo.userAddress,
			userPhone:oUserInfo.userPhone,
			userEmail:oUserInfo.userEmail
		},
		userEditInfo:{
			userUrl:oUserInfo.userUrl,
			userName:oUserInfo.userName,
			userGender:oUserInfo.userGender,							
			userAddress:oUserInfo.userAddress,
			userPhone:oUserInfo.userPhone,
			userEmail:oUserInfo.userEmail
		},
		userPhoneShow:false,
		userEmailShow:false,
		clickEnable:true
	},
	computed:{
		phoneFilter:function(){
			var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
			if(this.userEditInfo.userPhone===""){
				this.userPhoneShow=true;
				return "必填";
			}else if(!myreg.test(this.userEditInfo.userPhone)){
				this.userPhoneShow=true;
				return "请输入有效的手机号";
			}else{
				this.userPhoneShow=false;
			}
		},
		emailFilter:function(){
			var myreg=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
			if(this.userEditInfo.userEmail===""){
				this.userEmailShow=true;
				return "必填";
			}else if(!myreg.test(this.userEditInfo.userEmail)){
				this.userEmailShow=true;
				return "请输入有效的邮箱地址";
			}else{
				this.userEmailShow=false;
			}
		}
	},
	methods:{
		userInfoShow:function(){
			return this.userInfo!=null;
		},
		addTags:function(){
			this.tagBoxShow=true;
		},
		tagConfirm:function(){
			this.tagBoxShow=false;
		},
		tagClick:function(tag,event){
			var oSelected=$(event.target).hasClass("selected");
			var oIndex;
			if(oSelected){
				$(event.target).removeClass("selected");
				$.each(this.selectedTags, function (index, item){
					if(item.ID===tag.ID){
						oIndex=index;
						return;
					}
				})
				this.selectedTags.splice(oIndex,0);
			}else{
				$(event.target).addClass("selected");
				this.selectedTags.push(tag);
			}
		},
		tagCancel:function(){
			this.tagBoxShow=false;
		},
		tagReset:function(){
			this.tagBoxShow=false;
		},
		infoEdit:function(){
			this.clickEnable=false;
			this.userInfoShow=false;
		},
		infoSave:function(){
			if(this.userEditInfo.userName===""){
				$(".info-name").focus();
				return;
			}
			
			if(this.userEditInfo.userGender===""){
				return;
			}
			
			if(this.userPhoneShow){
				$(".info-phone").focus();
				return;
			}
			
			if(this.userEmailShow){
				$(".info-email").focus();
				return;
			}
			
			if(this.userEditInfo.userAddress===""){
				$(".info-address").focus();
				return;
			}
			
			
			this.userInfo={
				userUrl:this.userEditInfo.userUrl,
				userName:this.userEditInfo.userName,
				userGender:this.userEditInfo.userGender,							
				userAddress:this.userEditInfo.userAddress,
				userPhone:this.userEditInfo.userPhone,
				userEmail:this.userEditInfo.userEmail
			}
			this.clickEnable=true;
			this.userInfoShow=true;
		},
		infoCancel:function(){
			this.userEditInfo={
				userUrl:this.userInfo.userUrl,
				userName:this.userInfo.userName,
				userGender:this.userInfo.userGender,							
				userAddress:this.userInfo.userAddress,
				userPhone:this.userInfo.userPhone,
				userEmail:this.userInfo.userEmail
			}
			this.clickEnable=true;
			this.userInfoShow=true;
		},
		addModule:function(){
			if(clickEnable){
				
			}
		}
	}
})


//图片没有成功加载出来时处理
function nofind(){
    var oImg=event.srcElement;
    oImg.src="../../Content/img/head.png";
    oImg.onerror=null;
}

$(function(){

	//分页
	(function($){
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
	}(jQuery));
	
	//拖动进度条
	(function($){
		var tag = false,ox = 0,left = 100,bgleft = 0,num=0;
        $('.skill-edit-progress_btn').mousedown(function(e) {
            ox = e.pageX-left;
            tag = true;
        });
        $(document).mouseup(function() {
            tag = false;
        });
        $("html,body").mouseup(function() {
            tag = false;
        });
        $('.skill-edit-progress').mousemove(function(e) {//鼠标移动
            if (tag) {
                left = e.pageX - ox;
                if (left <= 12) {
                    left = 10;
                }else if (left > 404) {
                    left = 404;
                }

                if(left>=0&&left<200){
                	$(".skill-edit-degree").html("一般");
                }
                if(left>=200&&left<300){
                	$(".skill-edit-degree").html("熟练");
                }
                if(left>=300&&left<350){
                	$(".skill-edit-degree").html("良好");
                }
                if(left>=350){
                	$(".skill-edit-degree").html("优秀");
                }
                
                $('.skill-edit-progress_btn').css('left', left);
                $('.skill-edit-progress_bar').width(left);
                
            }
        });
	}(jQuery));
	
	
	//页面初始化
	(function(){
		
	}(jQuery));
	
	
	//事件注册
	(function(){

		$("body").on("click",".back-top",function(event){
			$('body,html').animate({scrollTop:0},600);
		})
		
//		$("body").on("click",".tag-cancel-btn",function(event){
//			removeSelect();
//			$(".flo-box").hide();
//		})
		
//		$("body").on("click",".add-tag-btn",function(event){
//			$(".flo-box").show();
//		})
		
//		$("body").on("click",".select-confirm-btn",function(event){
//			if($(".tag-item").length<=5){
//				$(".resume-tag").append('<li class="tag-item">数据分析</li>');
//			}
//			$(".flo-box").hide();
//		})
		
//		$("body").on("click",".select-item",function(event){
//			var oKey=$(this).hasClass("selected");
//			if(oKey){
//				$(this).removeClass("selected");
//			}else{
//				$(this).addClass("selected");
//			}
//		})
		
//		$("body").on("click",".select-reset-btn",function(event){
//			removeSelect();
//		})
		
//		$("body").on("click",".resume-nav-item",function(event){
//			var oKey=$(this).hasClass("resume-nav-active");
//			var oList=$(".resume-nav-item");
//			if(!oKey){
//				for(var i=0;i<oList.length;i++){
//					if(oList.eq(i).hasClass("resume-nav-active")){
//						oList.eq(i).removeClass("resume-nav-active");
//						break;
//					}
//				}
//				$(this).addClass("resume-nav-active");
//			}
//		})
		
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
		
		$("body").on("click",".award-year-item",function(event){
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
		
		$("body").on("click",".activity-year-item",function(event){
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

		$("body").on("click",".empty-btn",function(){
			window.location.href="../Job/List.html";
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
		
		//侧边导航
		$(window).scroll(function() {
			//获取文档滚动高度
		    var top = $(document).scrollTop();
		    var scrollHeight = $(document).height();
　　			var windowHeight = $(this).height();

		    if(top>=530&&scrollHeight-top-700>=0){
		    	$(".resume-nav-box").addClass("resume-nav-scroll");
		    }else{
		    	$(".resume-nav-box").removeClass("resume-nav-scroll");
		    }
		})
		
		//侧边导航滚动
		$("body").on("click",".nav-href",function(event){
			var oActive=$(this).parent(".resume-nav-item").hasClass("resume-nav-active");
			var oList=$(".resume-nav-item");
			if(!oActive){
				$.each(oList,function(index,item){
					if($(item).hasClass("resume-nav-active")){
						$(item).removeClass("resume-nav-active");
						return;
					}
				})
				$(this).parent(".resume-nav-item").addClass("resume-nav-active");
			}
			
			$("html, body").animate({
		      	scrollTop: ($($(this).attr("href")).offset().top -30)+ "px"
		    }, {
		      	duration: 500,
		      	easing: "swing"
		    });
		    return false;
		})
		
	}());
	
})





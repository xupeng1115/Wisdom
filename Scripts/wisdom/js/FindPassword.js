$(function(){
	
	//事件注册
	(function(){
		$("body").on("click",".position-name",function(){
			window.location.href="PositionDetail.html";
		})
		
		$("body").on("click",".login-back-btn",function(){
			window.location.href="Index.html";
		})
		
		$("body").on("click",".back-index-btn",function(){
			window.location.href="Index.html";
		})
		
		$("body").on("click",".confirm-btn",function(){
			$(".line-three").css("background","#ffbf00");
			$(".step-two").css("color","#6d6d6d");
			$(".step-two").find(".step-number").css({
				"color":"#ffbf00",
				"borderColor":"#ffbf00"
			})
			$(".form-box").hide();
			$(".find-success-box").show();
		})
		
		$(".phone-number").focus(function(){
			$(".phone-tips").text("手机号码不能为空");
			$(".phone-tips").show();
		})
		
		$("body").on("click",".test-code",function(){
			$(".code-tips").text("验证码不能为空");
			$(".code-tips").show();
		})
		
		$("body").on("click",".new-password",function(){
			$(".password-tips").text("密码不能为空");
			$(".password-tips").show();
		})
		
		$("body").on("click",".repeat-password",function(){
			$(".repeat-tips").text("重复密码不能为空");
			$(".repeat-tips").show();
		})
		
	}());
			
})
//判断浏览器版本是否低于IE9
(function(){
    var DEFAULT_VERSION = 8;
    var ua = navigator.userAgent.toLowerCase();
    var isIE = ua.indexOf("msie")>-1;
    var safariVersion,numVerson;
    if(isIE){
        safariVersion =  ua.match(/msie ([\d.]+)/)[1];
        numVerson=parseInt(safariVersion[0]);
        if((numVerson>5)&&(numVerson<= DEFAULT_VERSION)){
            document.documentElement.style.display="none";
            document.body.style.display="none";
//          window.location.href="/ogcs/Core/Prompt"
			return;
        }else{
            
        }
    }else{

    }
}());

$(function(){
	
	//事件注册
	(function(){
		
		$("body").on("click",".login-phone",function(){
			$(".login-phone-tips").text("重复密码不能为空");
			$(".login-phone-tips").show();
		})
		
		$("body").on("click",".login-password",function(){
			$(".login-password-tips").text("密码不能为空");
			$(".login-password-tips").show();
		})
		
		$("body").on("click",".rp-no",function(){
			$(this).hide();
			$(".rp-yes").show();
		})
		
		$("body").on("click",".rp-yes",function(){
			$(this).hide();
			$(".rp-no").show();
		})
		
		$("body").on("click",".lr-cancel",function(){
			$(".lr-container").hide();
		})
		
		$("body").on("click",".login-register",function(){
			console.log(1212);
			$(".lr-container").show();
		})
		
		$("body").on("click",".forget-password-box",function(){
			window.location.href="FindPassword.html";
		})
		
		$("body").on("click",".register-username",function(){
			$(".register-username-tips").text("用户名不能为空");
			$(".register-username-tips").show();
		})
		
		$("body").on("click",".test-code",function(){
			$(".code-tips").text("验证码不能为空");
			$(".code-tips").show();
		})
		
		$("body").on("click",".register-phone",function(){
			$(".register-phone-tips").text("手机号码不能为空");
			$(".register-phone-tips").show();
		})
		
		$("body").on("click",".register-password",function(){
			$(".register-password-tips").text("密码不能为空");
			$(".register-password-tips").show();
		})
		
		$("body").on("click",".protocol-no",function(){
			$(this).hide();
			$(".protocol-yes").show();
		})
		
		$("body").on("click",".protocol-yes",function(){
			$(this).hide();
			$(".protocol-no").show();
		})
		
		$("body").on("click",".lr-cancel",function(){
			$(".lr-container").hide();
		})
		
		$("body").on("click",".lr-login-btn",function(){
			$(".protocol-yes").show();
			$(".protocol-no").hide();
			$(".rp-yes").hide();
			$(".rp-no").show();
			$(".lr-tips").text("").hide();
			$(".lr-container").hide();
		})
		
		$("body").on("click",".lr-register-btn",function(){
			$(".lr-tips").text("").hide();
			$(".lr-container").hide();
		})
		
		$("body").on("click",".login-btn",function(){
			$(this).css("color","#ffbf00");
			$(this).find(".btn-line").show();
			$(".register-btn").css("color","#6d6d6d");
			$(".register-btn").find(".btn-line").hide();
			$(".register-box").hide();
			$(".login-box").show();
		})
		
		$("body").on("click",".register-btn",function(){
			$(this).css("color","#ffbf00");
			$(this).find(".btn-line").show();
			$(".login-btn").css("color","#6d6d6d");
			$(".login-btn").find(".btn-line").hide();
			$(".login-box").hide();
			$(".register-box").show();
		})
		
	}());
	
})

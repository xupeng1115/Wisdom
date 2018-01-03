"use strict";

var oUserInfo={
	userUrl:"",
	userName:"",
	userGender:"",							
	userAddress:"",
	userPhone:"",
	userEmail:""
//	userUrl:'../../Content/img/head.png',
//	userName:'Jessie Lai',
//	userGender:'mars',							
//	userAddress:'上海市长宁区玛瑙路1438号国际古北财富中心二期',
//	userPhone:'15136677782',
//	userEmail:'987239822@qq.com'
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
		selectedTags:[],
		
		userInfoShow:oUserInfo.userName!==""&&oUserInfo.userGender!==""&&oUserInfo.userPhone!==""&&oUserInfo.userAddress!==""&&oUserInfo.userEmail!=="",
		editOnce:!(oUserInfo.userName!==""&&oUserInfo.userGender!==""&&oUserInfo.userPhone!==""&&oUserInfo.userAddress!==""&&oUserInfo.userEmail!==""),
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
		headEditEnable:false,
		clickEnable:true,
		
		ModuleShow_1:false,
		ModuleShow_2:false,
		ModuleShow_3:false,
		ModuleShow_4:false,
		ModuleShow_5:false,
		currentModule:0,
		
		monthLists:[
			{
				text:"1月",
				month:"01"
			},
			{
				text:"2月",
				month:"02"
			},
			{
				text:"3月",
				month:"03"
			},
			{
				text:"4月",
				month:"04"
			},
			{
				text:"5月",
				month:"05"
			},
			{
				text:"6月",
				month:"06"
			},
			{
				text:"7月",
				month:"07"
			},
			{
				text:"8月",
				month:"08"
			},
			{
				text:"9月",
				month:"09"
			},
			{
				text:"10月",
				month:"10"
			},
			{
				text:"11月",
				month:"11"
			},
			{
				text:"12月",
				month:"12"
			}
		],
		currrentDate:new Date().getFullYear(),
		educationDate:[
			{
				year:2012
			},
			{
				year:2015
			},
			{
				year:2019
			}
		],
		educationLists:[
			{
				school:"哈佛大学",
				background:"本科",
				major:"机械及自动化专业",
				begin:"2012年6月1日",
				end:"2015年6月19日"
			},
			{
				school:"耶鲁大学",
				background:"硕士",
				major:"金融学专业",
				begin:"2012年6月1日",
				end:"2015年6月19日"
			},
			{
				school:"斯坦福大学",
				background:"博士",
				major:"国际经济与贸易",
				begin:"2015年6月19日",
				end:"至今"
			}
		],
		educationEditBackgrounds:[
			{
				background:"大专",
			},
			{
				background:"本科",
			},
			{
				background:"硕士",
			},
			{
				background:"博士",
			},
			{
				background:"其他",
			}
		],
		educationEditgraduates:[
			{
				graduate:"2019",
			},
			{
				graduate:"2018",
			},
			{
				graduate:"2017",
			},
			{
				graduate:"2016",
			},
			{
				graduate:"2015",
			},
			{
				graduate:"2014",
			},
			{
				graduate:"2013",
			},
			{
				graduate:"2012",
			},
			{
				graduate:"2011",
			}
		],
		educationmajor:"",
		educationschool:"",
		educationbackground:"",
		educationgraduate:"",
		educationmonth:"",
		
		awardgraduates:[
			{
				year:"2019",
			},
			{
				year:"2018",
			},
			{
				year:"2017",
			},
			{
				year:"2016",
			},
			{
				year:"2015",
			},
			{
				year:"2014",
			},
			{
				year:"2013",
			},
			{
				year:"2012",
			},
			{
				year:"2011",
			}
		],
		awardLists:[
			{
				name:"外语系第十三届英语戏剧比赛一等奖",
				graduate:"2015年6月19日"
			},
			{
				name:"外语系第十三届英语戏剧比赛一等奖一等奖",
				graduate:"2015年6月19日"
			},
			{
				name:"红点设计大奖",
				graduate:"2015年6月19日"
			}
		],
		awardname:"",
		awardgraduate:"",
		
		practiceLists:[
			{
				url:"../../Content/img/position_head.png",
				companyname:"洋葱数学",
				positionname:"HR助理",
				site:"长沙-岳麓区",
				date:"2016/08/11 - 2016/09/20",
				content:"1、协助上级建立健全公司招聘、培训、保险、绩效考核等人力资源制度建设;"
						+"<br>"+
						"2、建立、维护人事档案，办理和更新劳动合同；"
						+"<br>"+
						"3、收集相关的劳动用工等人事政策及法规；"
						+"<br>"+
						"4、执行招聘工作流程，协调、办理员工招聘、入职、离职、调任、升职等手续；"
						+"<br>"+
						"5、协同开展新员工入职培训，执行培训计划，以及培训效果的跟踪、反馈；"
						+"<br>"+
						"6、办理相应的社会保险、医保等外联工作；"
						+"<br>"+
						"7、在技术服务部的主要职责：1、文件整理；2、绩效考核数据统计；3、服务计划与出差记录；"
						+"<br>"+
						"8、其他临时任务。"
			},
			{
				url:"../../Content/img/position_head.png",
				companyname:"洋葱数学",
				positionname:"HR助理",
				site:"长沙-岳麓区",
				date:"2016/08/11 - 2016/09/20",
				content:"1、协助上级建立健全公司招聘、培训、保险、绩效考核等人力资源制度建设;"
						+"<br>"+
						"2、建立、维护人事档案，办理和更新劳动合同；"
						+"<br>"+
						"3、收集相关的劳动用工等人事政策及法规；"
						+"<br>"+
						"4、执行招聘工作流程，协调、办理员工招聘、入职、离职、调任、升职等手续；"
						+"<br>"+
						"5、协同开展新员工入职培训，执行培训计划，以及培训效果的跟踪、反馈；"
						+"<br>"+
						"6、办理相应的社会保险、医保等外联工作；"
						+"<br>"+
						"7、在技术服务部的主要职责：1、文件整理；2、绩效考核数据统计；3、服务计划与出差记录；"
						+"<br>"+
						"8、其他临时任务。"
			},
			{
				url:"../../Content/img/position_head.png",
				companyname:"洋葱数学",
				positionname:"HR助理",
				site:"长沙-岳麓区",
				date:"2016/08/11 - 2016/09/20",
				content:"1、协助上级建立健全公司招聘、培训、保险、绩效考核等人力资源制度建设;"
						+"<br>"+
						"2、建立、维护人事档案，办理和更新劳动合同；"
						+"<br>"+
						"3、收集相关的劳动用工等人事政策及法规；"
						+"<br>"+
						"4、执行招聘工作流程，协调、办理员工招聘、入职、离职、调任、升职等手续；"
						+"<br>"+
						"5、协同开展新员工入职培训，执行培训计划，以及培训效果的跟踪、反馈；"
						+"<br>"+
						"6、办理相应的社会保险、医保等外联工作；"
						+"<br>"+
						"7、在技术服务部的主要职责：1、文件整理；2、绩效考核数据统计；3、服务计划与出差记录；"
						+"<br>"+
						"8、其他临时任务。"
			}
		],
		practicecompanyname:"",
		practicepositionname:"",
		practicesite:"",
		practicedate:"",
		practicecontent:"",
		
		skillLists:[
			{
				name:'英语CET-6',
				bar:"200",
				dec:"熟练使用英语交流",
			},
			{
				name:'英语CET-6',
				bar:"100",
				dec:"熟练使用英语交流",
				
			},
			{
				name:'英语CET-6',
				bar:"300",
				dec:"熟练使用英语交流",
				
			}
		],
		skillname:"",
		skillbar:"",
		skilldec:"",
		
		activityLists:[
			{
				name:"学术学术辩论",
				date:"2017年1月20日",
				site:"苏州",
				dec:"课程由英锐联合哈佛大学辩论委员会课程由英锐联合哈佛大学辩论委员会课程由英锐联合哈佛大学辩论委员会课程由英锐联合哈佛大学辩论委员会",
			},
			{
				name:"学术学术辩论",
				date:"2017年1月20日",
				site:"苏州",
				dec:"课程由英锐联合哈佛大学辩论委员会课程由英锐联合哈佛大学辩论委员会课程由英锐联合哈佛大学辩论委员会课程由英锐联合哈佛大学辩论委员会",
			},
			{
				name:"学术学术辩论",
				date:"2017年1月20日",
				site:"苏州",
				dec:"课程由英锐联合哈佛大学辩论委员会课程由英锐联合哈佛大学辩论委员会课程由英锐联合哈佛大学辩论委员会课程由英锐联合哈佛大学辩论委员会",
			}
		],
		activityYears:[
			{
				year:2019
			},
			{
				year:2018
			},
			{
				year:2017
			},
			{
				year:2016
			},
			{
				year:2015
			},
			{
				year:2014
			},
			{
				year:2013
			},
			{
				year:2012
			},
			{
				year:2011	
			},
			{
				year:2010
			}
		],
		
		activitysite:"",
		activitydec:"",
		activitydate:"",
		activityname:""
		
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
			if(!this.headEditEnable){
				this.clickEnable=false;
				this.userInfoShow=false;
			}
		},
		infoSave:function(){
			
			if(this.currentModule!==0){
				return;
			}
			
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
			this.editOnce=false;
			this.clickEnable=true;
			this.userInfoShow=true;
		},
		infoCancel:function(){
			if(this.currentModule===0){
				return;
			}
			
			if(this.editOnce){
				return;
			}else{
				this.userEditInfo={
					userUrl:this.userInfo.userUrl,
					userName:this.userInfo.userName,
					userGender:this.userInfo.userGender,							
					userAddress:this.userInfo.userAddress,
					userPhone:this.userInfo.userPhone,
					userEmail:this.userInfo.use,rEmail
				}
				this.clickEnable=true;
				this.userInfoShow=true;
			}
		},
		addModule:function(type){
			if(this.clickEnable){
				if(this.currentModule===0){
					this.moduleActiveShow(type);
					this.currentModule=type;
					this.clickEnable=false;
					this.headEditEnable=true;
				}
			}else{
				if(type===this.currentModule){
					this.moduleActiveHide(type);
					this.currentModule=0;
					this.clickEnable=true;
					this.headEditEnable=false;
				}
			}
		},
		moduleActiveShow:function(type){
			switch(type){
				case 1:
					this.ModuleShow_1=true;
					this.educationUnshift();
				break;
				case 2:
					this.ModuleShow_2=true;
				break;
				case 3:
					this.ModuleShow_3=true;
				break;
				case 4:
					this.ModuleShow_4=true;
				break;
				case 5:
					this.ModuleShow_5=true;
				break;
			}
		},
		moduleActiveHide:function(type){
			switch(type){
				case 1:
					this.ModuleShow_1=false;
					this.educationShift();
				break;
				case 2:
					this.ModuleShow_2=false;
				break;
				case 3:
					this.ModuleShow_3=false;
				break;
				case 4:
					this.ModuleShow_4=false;
				break;
				case 5:
					this.ModuleShow_5=false;
				break;
			}
		},
		selectgraduate:function(graduate){
			this.educationgraduate=graduate;
		},
		selectbackground:function(background){
			this.educationbackground=background;
		},
		educationUnshift:function(){
			this.educationDate.unshift({year:2008});
		},
		educationShift:function(){
			this.educationDate.shift();
		},
		educationCancel:function(type){
			this.educationmajor="";
			this.educationschool="";
			this.educationgraduate="";
			this.educationgraduate="";
			this.educationShift();
			this.moduleActiveHide(type);
			this.currentModule=0;
			this.clickEnable=true;
			this.headEditEnable=false;
		},
		educationSave:function(type){
			if($.trim(this.educationmajor)===""){
				return;
			}
			if($.trim(this.educationschool)===""){
				return;
			}
			if($.trim(this.educationbackground)===""){
				return;
			}
			if($.trim(this.educationgraduate)===""){
				return;
			}

			var Obj={
				major:"金融学专业",
				background:this.educationmajor,
				school:this.educationschool,
				begin:Number(this.educationgraduate)-4,
				end:Number(this.educationgraduate)
			}
			
			this.educationLists.unshift(Obj);
			this.educationUnshift();
			
			this.moduleActiveHide(type);
			this.currentModule=0;
			this.clickEnable=true;
			this.headEditEnable=false;
			
			this.educationmajor="";
			this.educationschool="";
			this.educationbackground="";
			this.educationgraduate="";
		},
		educationDelete:function(index){
			this.educationLists.splice(index,1);
			this.educationShift();
		},
		awardselect:function(year){
			this.awardgraduate=year;
		},
		awardSave:function(type){
			if($.trim(this.awardname)===""){
				return;
			}
			if($.trim(this.awardgraduate)===""){
				return;
			}
			
			var Obj={
				name:this.awardname,
				graduate:this.awardgraduate
			}
			
			this.awardLists.unshift(Obj);
			this.moduleActiveHide(type);
			this.currentModule=0;
			this.clickEnable=true;
			this.headEditEnable=false;
			
			this.awardname="";
			this.awardgraduate="";
		},
		awardCancel:function(type){
			this.awardname="";
			this.awardgraduate="";
			this.moduleActiveHide(type);
			this.currentModule=0;
			this.clickEnable=true;
			this.headEditEnable=false;
		},
		awardDelete:function(index){
			this.awardLists.splice(index,1);
		},
		practiceSave:function(type){
			if($.trim(this.practicecompanyname)===""){
				return;
			}
			if($.trim(this.practicepositionname)!==""){
				return;
			}
			if($.trim(this.practicesite)===""){
				return;
			}
			if($.trim(this.practicedate)!==""){
				return;
			}
			if($.trim(this.practicecontent)===""){
				return;
			}
			console.log(132);
			var Obj={
				url:"../../Content/img/position_head.png",
				companyname:this.practicecompanyname,
				positionname:"HR助理",
				site:"长沙-岳麓区",
				date:"2016/08/11 - 2016/09/20",
				content:this.practicecontent
			}

			this.practiceLists.unshift(Obj);
			this.moduleActiveHide(type);
			this.currentModule=0;
			this.clickEnable=true;
			this.headEditEnable=false;

			this.practicecompanyname="";
			this.practicepositionname="";
			this.practicesite="";
			this.practicedate="";
			this.practicecontent="";
		},
		practiceCancel:function(type){
			this.practicecompanyname="";
			this.practicepositionname="";
			this.practicesite="";
			this.practicedate="";
			this.practicecontent="";
			this.moduleActiveHide(type);
			this.currentModule=0;
			this.clickEnable=true;
			this.headEditEnable=false;
		},
		practiceDelete:function(index){
			this.practiceLists.splice(index,1);
		},
		skillSave:function(type){
			if($.trim(this.skillname)===""){
				return;
			}
			if($.trim(this.skilldec)===""){
				return;
			}
			
			var Obj={
				name:this.skillname,
				dec:this.skilldec,
				bar:this.skillbar
			}
			
			
			this.skillLists.unshift(Obj);
			this.moduleActiveHide(type);
			this.currentModule=0;
			this.clickEnable=true;
			this.headEditEnable=false;
			
			this.skillname="";
			this.skilldec="";
			this.skillbar="100";
		},
		skillCancel:function(type){
			this.skillname="";
			this.skilldec="";
			this.skillbar="100";
			this.moduleActiveHide(type);
			this.currentModule=0;
			this.clickEnable=true;
			this.headEditEnable=false;
		},
		skillDelete:function(index){
			this.skillLists.splice(index,1);
		},
		activityselect:function(year){
			this.activitydate=year;
		},
		activitySave:function(type){
			if($.trim(this.activityname)===""){
				return;
			}
			if($.trim(this.activitydec)===""){
				return;
			}
			if($.trim(this.activitysite)===""){
				return;
			}
			if($.trim(this.activitydate)===""){
				return;
			}
			
			var Obj={
				name:this.activityname,
				dec:this.activitydec,
				date:this.activitydate,
				site:this.activitysite
			}
			
			this.activityLists.unshift(Obj);
			this.moduleActiveHide(type);
			this.currentModule=0;
			this.clickEnable=true;
			this.headEditEnable=false;
			
			this.activityname="";
			this.activitydec="";
			this.activitydate="";
			this.activitysite="";
		},
		activityCancel:function(type){
			this.activityname="";
			this.activitydec="";
			this.activitydate="";
			this.activitysite="";
			this.moduleActiveHide(type);
			this.currentModule=0;
			this.clickEnable=true;
			this.headEditEnable=false;
		},
		activityDelete:function(index){
			this.activityLists.splice(index,1);
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
                
                app.skillbar=left;
                
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
			$(".background-select").css("border","1px solid #e3e3e3");
			$(".background-select-list").hide();
			oBack=false;
		})
		
		var oGraduate=false;
		$("body").on("click",".graduate-select",function(event){
			if(!oGraduate){
				$(this).css("borderColor","#ffbf00");
				$(".module-date-wrapper").show();
				oGraduate=true;
			}else{
				$(this).css("borderColor","#e3e3e3");
				$(".module-date-wrapper").hide();
				oGraduate=false;
			}
		})
		
		$("body").on("click",".graduate-item",function(event){
			$(".graduate-select").css("border","1px solid #e3e3e3");
			$(".graduate-select-list").hide();
			oGraduate=false;
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
			$(".award-select").css("border","1px solid #e3e3e3");
			$(".award-select-list").hide();
			oAward=false;
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
			$(".activity-select").css("border","1px solid #e3e3e3");
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



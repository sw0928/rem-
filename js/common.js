
/* 排行榜打开关闭方法 */
function rankingToogle(t){
	if(t==1){
		$(".rankingList").css("right",0);
	}else{
		$(".rankingList").css("right","-85%");
	}
}

/* tab */
function rankingTab(e){
	var _this = $(e);
	_this.removeClass("col_main").addClass("back_main col_fff").siblings().addClass("col_main").removeClass("back_main col_fff");
}

/* 开关按钮 */
function switchToogle(e){
	var _this = $(e);
	if(_this.hasClass("switch_colse_icon")){
		_this.removeClass("switch_colse_icon").addClass("switch_open_icon");
	}else{
		_this.removeClass("switch_open_icon").addClass("switch_colse_icon");
	}
}
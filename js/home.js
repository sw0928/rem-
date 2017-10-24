
/* home tab */
function homeTab(e,t){
	var _this = $(e);
	_this.removeClass("col_main").addClass("back_main col_fff").siblings().addClass("col_main").removeClass("back_main col_fff");
	if(t==1){
		$("#synopsisBox").show();
		$("#courseBox").hide();
	}else{
		$("#courseBox").show();
		$("#synopsisBox").hide();
	}
}

/* 购买弹窗 */
function payCouse(t){
	if(t==1){
		$("#payCouseModel").show();
	}else{
		$("#payCouseModel").hide();
	}
}
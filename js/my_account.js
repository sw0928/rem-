
/*列表栏打开关闭事件*/
function upOrDownClick(e){
	var _this = $(e);
	if(_this.find(".upOrDownIcon").hasClass("bottom_icon")){ // 打开
		_this.parent().siblings(".upOrDownListBox").show();
		_this.find(".upOrDownIcon").removeClass("bottom_icon").addClass("top_icon")
	}else{ // 关闭
		_this.parent().siblings(".upOrDownListBox").hide();
		_this.find(".upOrDownIcon").removeClass("top_icon").addClass("bottom_icon")
	}
	
}

/* tab */
function accountTab(e,t){
	var _this = $(e);
	if(t==1){
		$(".rechargeBtn").show();
	}else{
		$(".rechargeBtn").hide();
	}
	_this.removeClass("col_main").addClass("back_main col_fff").siblings().addClass("col_main").removeClass("back_main col_fff");
}

/*提现or充值弹窗*/
function accountModelClick(t){
	if(t==1){
		$(".accountModelBox").show();
	}else{
		$(".accountModelBox").hide();
	}
}
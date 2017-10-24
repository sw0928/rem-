
/* 送礼打开关闭弹框 */
function rewardModelToogle(t){ // t=1(打开)，t=2(关闭)
	if(t==1){
		$("#rewardModelBox").show();
	}else{
		$("#rewardModelBox").hide();
	}
}

/* 弹幕打开关闭方法 */
function barrageToogle(){
	if($("#barrageBox").hasClass("barrage_open_icon")){ // 关闭
		$("#barrageBox").removeClass("barrage_open_icon").addClass("barrage_close_icon");
		$(".barrageMsgBox").hide();
	}else{ // 打开
		$("#barrageBox").removeClass("barrage_close_icon").addClass("barrage_open_icon");
		$(".barrageMsgBox").show();
	}
}

/* 讨论打开关闭 */
function discussToogle(t) { // t=1(打开)，t=2(关闭)
	if(t==1){
		$("#discussModelBox").show();
	}else{
		$("#discussModelBox").hide();
	}
}

/* 发送消息打开关闭方法 */
function msgModelToogle(t){ // t=1(打开)，t=2(关闭)
	if(t==1){
		$("#msgModelBox").show();
	}else{
		$("#msgModelBox").hide();
	}
}
/*添加弹幕消息*/
var chatInfoBox = document.getElementById("chatInfoBox");
var chatBottom = document.getElementById("bottomBox");
function addMsgClick(){
	$("#barrageMsgBox").append('<div class="box_center br3 back_999 col_fff h30 mt10"><div class="w_b8 wbyc">这里是弹幕信息</div><div class="w20 h20"><img src="../../images/test_tx_img@2x.png" alt=""></div></div>')
	chatInfoBox.scrollTop = chatBottom.offsetTop; //消息显示在最底部
}
/*选中礼物方法*/
function rewardAct(e){
	var _this = $(e);
	if(_this.find("img").hasClass("borCol_main")){
		_this.find("img").removeClass("borCol_main");
	}else{
		_this.find("img").addClass("borCol_main");
		_this.siblings().find("img").removeClass("borCol_main")
	}
}

/*赞赏*/
function rewardClick(){
	rewardModelToogle(2);
	$("#barrageMsgBox").append('<div class="box_center br3 back_999 col_fff h30 mt10"><div class="w_b8 wbyc">赞赏<span class="col_main">¥6.66</span></div><div class="w20 h20"><img src="../../images/test_tx_img@2x.png" alt=""></div></div>')
}


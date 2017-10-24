
/* 打开与关闭录音model */
function voiceToogle(){
	$("#sendTxtIcon").removeClass("txt_act_icon").addClass("txt_icon").parents(".grid_cell").removeClass("col_main");
	$("#sendTxtModelBox").hide();
	if($("#voiceIcon").hasClass("voice_icon")){ // 打开
		$("#voiceIcon").removeClass("voice_icon").addClass("voice_act_icon").parents(".grid_cell").addClass("col_main");
		$("#voiceModelBox").show();

	}else{ // 关闭
		$("#voiceIcon").removeClass("voice_act_icon").addClass("voice_icon").parents(".grid_cell").removeClass("col_main");
		$("#voiceModelBox").hide();
	}
	clearInterval(setTime);
	clearInterval(audition_setTime);
	time=60;
	$("#timeBox").text(time);
	$("#startRecord").show();
	$("#isRecord").hide();
	$("#endRecord").hide();
	$("#isAudition").show();
	$("#endAudition").hide();
	$("#resetRecord").hide();
}

/* 打开与关闭发送文字model */
function sendTxtToogle(){
	$("#voiceIcon").removeClass("voice_act_icon").addClass("voice_icon").parents(".grid_cell").removeClass("col_main");
	$("#voiceModelBox").hide();
	if($("#sendTxtIcon").hasClass("txt_icon")){ // 打开
		$("#sendTxtIcon").removeClass("txt_icon").addClass("txt_act_icon").parents(".grid_cell").addClass("col_main");
		$("#sendTxtModelBox").show();
	}else{ // 关闭
		$("#sendTxtIcon").removeClass("txt_act_icon").addClass("txt_icon").parents(".grid_cell").removeClass("col_main");
		$("#sendTxtModelBox").hide();
	}
}

/* 推送model */
function pushToogle(t){ // t=1(打开)，t=2(关闭)
	$("#voiceIcon").removeClass("voice_act_icon").addClass("voice_icon").parents(".grid_cell").removeClass("col_main");
	$("#voiceModelBox").hide();
	$("#sendTxtIcon").removeClass("txt_act_icon").addClass("txt_icon").parents(".grid_cell").removeClass("col_main");
	$("#sendTxtModelBox").hide();
	if(t==1){
		$("#pushModelBox").show();
	}else{
		$("#pushModelBox").hide();
	}
}

/* 操作model */
function operationToogle(t){ // t=1(打开)，t=2(关闭)
	$("#voiceIcon").removeClass("voice_act_icon").addClass("voice_icon").parents(".grid_cell").removeClass("col_main");
	$("#voiceModelBox").hide();
	$("#sendTxtIcon").removeClass("txt_act_icon").addClass("txt_icon").parents(".grid_cell").removeClass("col_main");
	$("#sendTxtModelBox").hide();
	if(t==1){
		$("#operationModelBox").show();
	}else{
		$("#operationModelBox").hide();
	}
}

/* 60s倒计时 */
var time=60; // 初始化时间
var setTime;
function setTimeFun(){
	setTime=setInterval(function(){
    if(time<=0){
    	clearInterval(setTime);
      isRecord();
      return;
    }
    time--;
    console.log(time);
    $("#timeBox").text(time);
	},1000);
}

/* 试听倒计时 */
var Atime;
var audition_setTime;
function AsetTimeFun(){
	audition_setTime=setInterval(function(){
    if(Atime<=0){
    	audition(2);
      return;
    }
    Atime--;
    console.log(Atime);
    $("#end_Atime").text(Atime);
	},1000);
}


/* 开始录音 */
function startRecord(){
	setTimeFun();// 启用倒计时
	$("#startRecord").hide();
	$("#isRecord").show();
}

/* 正在录音 */
function isRecord(){
	$("#isRecord").hide();
	$("#endRecord").show();
	clearInterval(setTime);
	Atime = 60-time;
	$("#end_time").text(Atime);
	$("#end_Atime").text(Atime);
	alert("倒计时结束");
}

/* 试听 */
function audition(t){ // t=1(开始试听)，t=2(结束试听)
	console.log(t);
	if(t==1){
		AsetTimeFun();
		$("#isAudition").hide();
		$("#endAudition").show();
	}else{
		$("#isAudition").show();
		$("#endAudition").hide();
		Atime = 60-time;
		clearInterval(audition_setTime);
		alert("试听结束")
	}
}

/* 重录提示 */
function resetRecord(t){ // t=1(打开)，t=2(关闭)
	if(t==1){
		$("#resetRecord").show();
	}else{
		$("#resetRecord").hide();
	}
}

/* 确定重录 */
function isResetRecord(){
	resetRecord(2);
	time=60;
	$("#timeBox").text(time);
	$("#startRecord").show();
	$("#endRecord").hide();
}

/* 回顶部 */
function goTopBottomClick(t){ // t=1(回顶部)，t=2(回底部)
	if(t==1){
		operationToogle(2);
		$('body,html').animate({ scrollTop: 0 }, 500);
	}else{
		operationToogle(2);
		$('html,body').animate({scrollTop: $('#footer').offset().top},500);
	}
}

/*播放录音倒计时*/
/* 试听倒计时 */
var playTime = 60;
var play_setTime;
function playTimeFun(){
	play_setTime=setInterval(function(){
    if(playTime<=0){
    	clearInterval(play_setTime);
    	playTime = 60;
    	playType = true;
    	$("#playTime").text(playTime);

    	alert("播放完毕");
    	$("#playRecordIcon").removeClass("playRecord_act_icon").addClass("playRecord_icon");
      return;
    }
    playTime--;
    // console.log(playTime);
    $("#playTime").text(playTime);
	},1000);
}

/*播放录音*/
var playType = true;
function playRecordClick(type){
	if(type){ // 开始播放
		playType = false;
		playTimeFun();
		$("#playRecordIcon").removeClass("playRecord_icon").addClass("playRecord_act_icon")
	}else{ // 停止播放
		playType = true;
		clearInterval(play_setTime);
		alert("停止播放");
		$("#playRecordIcon").removeClass("playRecord_act_icon").addClass("playRecord_icon")
	}
}
/* 推送消息模版 */
var pushMsgHtml =	'<div class="media pt20 pb20">'+
				'<div class="w45 h45 ml10">'+
				'</div>'+
				'<div class="ml10 f18 w_b7 back_fff br3 box_start p10 p_r">'+
					'<div class="w70 h70">'+
						'<img src="../../images/model_pic_course@2x.png" alt="">'+
					'</div>'+
					'<div class="w_b6 ml10">'+
						'<div class="f12 wbyc2 col_666">如何打造一个完美的电商直播间系列第一课系列第一课系列第一课系列第一课系列第一课</div>'+
						'<div class="box_start mt5">'+
							'<div class="f12 col_main">¥90</div>'+
						'</div>'+
						'<div class="box_start f10 col_b2">'+
							'<div>2017-01-01</div>'+
							'<div class="ml10"><em>999999</em>人</div>'+
						'</div>'+
					'</div>'+
					'<div class="p_a t w20 h20 delPushMsg_icon" onClick="delPushMsgClick()"></div>'+
				'</div>'+
			'</div>';

/*删除推送消息*/
function delPushMsgClick(){
	pushMsgBox.empty();
	$(".msgBox").removeClass("pt120");
}
/*加入直播课*/
var pushMsgBox = $("#pushMsgBox");
function joinLiveRoomClick(){
	delPushMsgClick();
	pushToogle();
	pushMsgBox.prepend(pushMsgHtml);
	$(".msgBox").addClass("pt120");
}








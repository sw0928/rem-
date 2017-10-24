// 设置嘉宾状态
function Settings(e) {
  $('#guests').show(200)
  var _this = $(e);
  var id = $(_this).attr('data-id')
  $('#guests ul li').attr('data-id', id)
}
function abolish() {
  $('#guests').hide(200)
}
function cancel(e) {
  var _this = $(e);
  var id = $(_this).attr('data-id')
  console.log(id);
  var lists = $('#list span')
  for (var i = 0; i < lists.length; i++) {
    var item = lists[i];
    if ($(item).attr('data-id') == id) {
      
      
      $(item).parent().parent().parent().remove()
      $('#guests').hide(200)
    }

  }
}
$('#guests ul li').on('click', function () {
  var id = $(this).attr('data-id');
  var text = $(this).text().substring(3)
  var lists = $('#list span')
  for (var i = 0; i < lists.length; i++) {
    var item = lists[i];
    if ($(item).attr('data-id') == id) {
      $(item).text(text)
      $('#guests').hide(200)
    }

  }
})


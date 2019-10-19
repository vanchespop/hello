

document.getElementById('btn').onclick = _chatIdSuccess;

function _chatIdSuccess(){

  alert("Теперь ты сможешь получать уведомления в Telegram");
  var chat_id = document.getElementById('chat').value;
  alert(chat_id);
  chrome.runtime.sendMessage({id:chat_id});

}

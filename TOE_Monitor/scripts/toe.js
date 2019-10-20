function _chatIdSuccess(){
  const chat_id = document.getElementById('chat').value;
  alert("Теперь ты сможешь получать уведомления в Telegram");
  alert(chat_id);
  chrome.runtime.sendMessage({id:chat_id});
}

document.getElementById('btn').onclick = _chatIdSuccess;

console.log("background script");
const baseApiUrl = 'https://api.telegram.org';
const token = '872215482:AAEzxIM77DE-yMJlAV74aU_P0tSqh_Joj_w';
var url = "https://vk.com/board37950548";
var xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.send();
xhr.onreadystatechange = function () {
if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {

var data = xhr.responseText;

f = new DOMParser().parseFromString(data, "text/html");
//alert(f);
var total = f.getElementById('blst_cont').childNodes.length;



function _buildURL(token, name, text) {
return `${baseApiUrl}/bot${token}/sendMessage?chat_id=${name}&text=${text}`;
}

function sendMessage(token, name, text) {
	fetch(_buildURL(token, name, text))
		.then(console.log)
		.catch(console.log);
}

const ivan = 257271396;
const denis = 233333258;


setInterval(function rq (){
  var new_url = "https://vk.com/board37950548";
  var new_xhr = new XMLHttpRequest();
  new_xhr.open('GET', url, true);
  new_xhr.send();
  new_xhr.onreadystatechange = function () {
  if(new_xhr.readyState === XMLHttpRequest.DONE && new_xhr.status === 200) {

  var new_data = new_xhr.responseText;

  htm = new DOMParser().parseFromString(new_data, "text/html");

  var new_total = htm.getElementById('blst_cont').childNodes.length;
  if(new_total > total){
    total++;
    sendMessage(token, ivan, "Здарова");
    var title = htm.querySelector('.blst_title').innerText;
    var link = "https://vk.com" + htm.querySelector('.blst_title').getAttribute('href');
    var answer = confirm("Доступно новое задание: \n" + title + "\nПерейти к обсуждению?")
    if(answer){
      window.open(link);
    }
  }

  }
}
},5000);
}
}

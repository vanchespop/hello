'use strict';

console.log("background script");

chrome.runtime.onMessage.addListener(function (message) {
    function _buildURL(token, name, text) {
        return `${baseApiUrl}/bot${token}/sendMessage?chat_id=${name}&text=${text}`;
    }

    function sendMessage(token, name, text) {
        fetch(_buildURL(token, name, text))
            .then(console.log)
            .catch(console.error);
    }

    const
        baseApiUrl = 'https://api.telegram.org',
        token = '872215482:AAEzxIM77DE-yMJlAV74aU_P0tSqh_Joj_w',
        chat_id = message.id,
        url = "https://vk.com/board176748083",
        xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
    xhr.send(null);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            let data = xhr.responseText,
                parser = new DOMParser().parseFromString(data, "text/html"),
                total = parser.getElementById('blst_cont').childElementCount;

            setInterval(function () {
                let new_xhr = new XMLHttpRequest();
                new_xhr.open('GET', url, true);
                new_xhr.send();
                new_xhr.onreadystatechange = function () {
                    if (new_xhr.readyState === XMLHttpRequest.DONE && new_xhr.status === 200) {
                        const
                            new_data = new_xhr.responseText,
                            htm = new DOMParser().parseFromString(new_data, "text/html"),
                            new_total = htm.getElementById('blst_cont').childNodes.length;

                        if (new_total > total) {
                            const
                                title = htm.querySelector('.blst_title').innerText,
                                link = "https://vk.com" + htm.querySelector('.blst_title').getAttribute('href'),
                                answer = confirm(`Доступно новое задание: \n${title} \nПерейти к обсуждению?`);

                            if (answer) {
                                window.open(link);
                            }
                            sendMessage(token, chat_id, `Доступно новое задание: \n${title}\n\nА вот и ссылОчка:\n${link}`);
                            total++;
                        }
                    }
                }
            }, 5000);
        }
    }
});

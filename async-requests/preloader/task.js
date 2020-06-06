'use strict';

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        document.getElementById('loader').classList.remove('loader_active');

        const dataValute = xhr.response.response['Valute'];
    //  Вариант получения данных без указания типа ответа "xhr.responseType = 'json'".
    //  const dataValute = JSON.parse(xhr.responseText).response['Valute'];

        let valuteList = '';
        for (const valute in dataValute)
            valuteList += `
                <div class="item">
                    <div class="item__code">${dataValute[valute].CharCode}</div>
                    <div class="item__value">${dataValute[valute].Value}</div>
                    <div class="item__currency">руб.</div>
                </div>`;

        document.getElementById('items').innerHTML = valuteList;
    }
});

// Задаем тип ответа в формате json. В таком случае:
//  1. нам не надо дополнительно парсить текстовый ответ в json.
//  2. данные нужно брать из свойства xhr.response
//  3. свойство xhr.responseText при этом остается пустым, что, вероятно, уменьшает размер ответа от сервера.
xhr.responseType = 'json';
xhr.send();

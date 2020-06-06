'use strict';

const formEl = document.getElementById('form');
const progressEl = document.getElementById('progress');
const downloadProgressEl = document.getElementById('downloadProgress');

formEl.addEventListener('submit', event => {
   event.preventDefault();
   const xhr = new XMLHttpRequest();
   xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');

   xhr.upload.addEventListener('progress', event => progressEl.value = `${event.loaded / event.total}`);

// После отправки файла, сервер присылает ответ размером 99088893 байт.
// Добавил дополнительный индикатор прогресса для отслеживания загрузки ответа.
   xhr.addEventListener('progress', event => downloadProgressEl.value = `${event.loaded / 99088893}`);

   const formData = new FormData(formEl);
   xhr.send(formData);
});

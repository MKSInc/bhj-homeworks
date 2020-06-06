'use strict';

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');

xhr.addEventListener('readystatechange', () => {
   if (xhr.readyState === xhr.DONE && xhr.status === 200) {
      const {response} = xhr;
      document.getElementById('poll__title').textContent = response.data.title;

      let answersList = '';
      response.data.answers.forEach(answer => answersList += `<button class="poll__answer">${answer}</button>`);

      const pollAnswers = document.getElementById('poll__answers');
      pollAnswers.innerHTML = answersList;

      pollAnswers.addEventListener('click', event => {
         const {target} = event;

         if (target.classList.contains('poll__answer')) {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

            xhr.addEventListener('readystatechange', () => {
               if (xhr.readyState === xhr.DONE && xhr.status === 200) {
                  alert('Спасибо, ваш голос засчитан!');
                  const {response} = xhr;
                  let statList = '';
                  let sumOfVotes = 0;
                  response.stat.forEach(stat => sumOfVotes += stat.votes);
                  response.stat.forEach(stat => statList += `
                     <div class="poll__answer">
                        ${stat.answer}: <strong>${(stat.votes * 100 / sumOfVotes).toFixed(2)}%</strong>
                     </div>`);
                  pollAnswers.innerHTML = statList;
               }
            });

            xhr.responseType = 'json';
            xhr.send(`vote=${response.id}&answer=${response.data.answers.findIndex(answer => answer === target.textContent)}`);
         }
      })
   }
});

xhr.responseType = 'json';
xhr.send();

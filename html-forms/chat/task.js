'use strict';

const chatWidgetEl = document.getElementsByClassName('chat-widget')[0];
const chatWidgetSideEl = chatWidgetEl.getElementsByClassName('chat-widget__side')[0];

let answerTimer;

chatWidgetSideEl.addEventListener('click', () => {
   chatWidgetEl.classList.add('chat-widget_active');
   answerTimer = setInterval(getAnswer, 30000);
});

const chatWidgetInputEl = document.getElementById('chat-widget__input');
const chatWidgetMessagesEl = document.getElementById('chat-widget__messages');

function addMessage(messageText, messageType = '') {
    const currentTime = new Date().toLocaleTimeString().slice(0, 5);
    chatWidgetMessagesEl.innerHTML += `
         <div class="message ${messageType}">
            <div class="message__time">${currentTime}</div>
            <div class="message__text">
               ${messageText}
            </div>
         </div>
        `;
//  Прокрутка на последнее сообщение
    const chatMessages = chatWidgetMessagesEl.getElementsByClassName('message');
    chatMessages[chatMessages.length-1].scrollIntoView();
}

function getAnswer() {
    const answersList = [
        "Вперед!",
        "Не сейчас",
        "Не делай этого",
        "Ты шутишь?",
        "Да, но позднее",
        "Думаю, не стоит",
        "Не надейся на это",
        "Ни в коем случае",
        "Это неплохо",
        "Кто знает?",
        "Туманный ответ, попробуй еще",
        "Я не уверен",
        "Я думаю, хорошо",
        "Забудь об этом",
        "Это возможно",
        "Определенно - да",
        "Быть может",
        "Слишком рано",
        "Да",
        "Конечно, да",
        "Даже не думай",
        "Лучше Вам пока этого не знать"
    ];
    addMessage(answersList[Math.floor(Math.random() * answersList.length)]);
}

chatWidgetInputEl.addEventListener('change', () => {
    const chatInputText = chatWidgetInputEl.value.trim();

    chatWidgetInputEl.value = '';
    if (chatInputText !== '') {
        console.log(chatInputText);
        addMessage(chatInputText, 'message_client');
        getAnswer();
        clearInterval(answerTimer);
        answerTimer = setInterval(getAnswer, 30000);
    }
});


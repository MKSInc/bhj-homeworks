'use strict';

const timer = document.getElementById('timer');
let timerTime = new Date().setHours(
    Number(timer.textContent.slice(0, 2)),
    Number(timer.textContent.slice(3, 5)),
    Number(timer.textContent.slice(6, 8)));

function changeTimer() {
    timerTime -= 1000;
    const currentTimerTime = new Date(timerTime).toLocaleTimeString();
    timer.textContent = currentTimerTime;

    if (currentTimerTime === '00:00:00') {
        alert('Вы победили в конкурсе!');
        clearInterval(timerID);
    }
}

const timerID = setInterval(changeTimer, 1000);

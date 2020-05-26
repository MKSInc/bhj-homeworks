'use strict';

const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');
const clickerSpeed = document.getElementById('clicker__speed');

let avgCPS = 0; // Среднее количество кликов в секунду
let previousClickTime = 0;

function cookieClick() {
    clickerCounter.textContent++;
    cookie.width = (cookie.width === 200) ? 210 : 200;

    const currentClickTime = new Date();

//  Подсчет среднего количества кликов в секунду начнется после первого клика
    if (previousClickTime !== 0) {
        if (avgCPS === 0) {
            avgCPS = 1000 / (currentClickTime - previousClickTime);
        } else {
            avgCPS = (avgCPS + 1000 / (currentClickTime - previousClickTime)) / 2;
        }

        clickerSpeed.textContent = avgCPS.toFixed(2);
    }
    previousClickTime = currentClickTime;
}

cookie.onclick = cookieClick;

//  Имитировать клик по печеньке каждую секунду
//setInterval(cookieClick, 1000);


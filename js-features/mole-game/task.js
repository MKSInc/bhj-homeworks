'use strict';

const moleLost = document.getElementById('lost');
const moleDead = document.getElementById('dead');

function gameEnd(message) {
    alert(message);
    moleLost.textContent = '0';
    moleDead.textContent = '0';
}

for (let i = 1; i < 10; i++) {
    let hole = document.getElementById(`hole${i}`);

    hole.onclick = function holeClick() {
        if (hole.classList.contains('hole_has-mole')) {
            moleDead.textContent++;
            if (Number(moleDead.textContent) === 10) gameEnd('Победа!');

        } else {
            moleLost.textContent++;
            if (Number(moleLost.textContent) === 5) gameEnd('Вы проиграли!');
        }
    }
}

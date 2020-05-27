'use strict';

const modalMain = document.getElementById('modal_main');
const modalSuccess =document.getElementById('modal_success');
const modalClose = document.getElementsByClassName('modal__close');
const showSuccess = document.getElementsByClassName('show-success')[0];

modalMain.classList.add('modal_active');

for (let item of modalClose) {
    item.onclick = function modalCloseClick () {
        console.log('modalCloseClick');
        item.closest('.modal').classList.remove('modal_active');
    }
}

showSuccess.onclick = function showSuccessClick () {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.add('modal_active');
};

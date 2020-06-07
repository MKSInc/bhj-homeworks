'use strict';

const editorEl = document.getElementById('editor');

document.addEventListener('DOMContentLoaded', () => {
   if (localStorage.editorText) editorEl.value = localStorage.editorText;
});

editorEl.addEventListener('input', () => localStorage.editorText = editorEl.value);

document.getElementsByClassName('clear-button')[0].addEventListener('click', () => {
   editorEl.value = '';
   localStorage.removeItem('editorText');
});

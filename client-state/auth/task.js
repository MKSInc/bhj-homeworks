'use strict';

function showWelcome(userID) {
   const welcomeEl = document.getElementById('welcome');
   welcomeEl.classList.add('welcome_active');
   document.getElementById('user_id').textContent = userID;

   document.getElementById('signOut__btn').addEventListener('click', () => {
      welcomeEl.classList.remove('welcome_active');
      localStorage.removeItem('userID');
      showSignin();
   });
}

function showSignin() {
   const signinEl = document.getElementById('signin');
   signinEl.classList.add('signin_active');

   document.getElementById('signin__btn').addEventListener('click', event => {
      event.preventDefault();
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');

      xhr.addEventListener('readystatechange', () => {
         if (xhr.readyState === xhr.DONE && xhr.status === 200) {
            if (xhr.response.success) {
               signinEl.classList.remove('signin_active');
               Array.from(signinEl.getElementsByTagName('input')).forEach(input => input.value = '');
               localStorage.userID = xhr.response.user_id;
               showWelcome(xhr.response.user_id);

            } else alert('Неверный логин/пароль');
         }
      });

      xhr.responseType = 'json';
      xhr.send(new FormData(document.forms.signinForm));
   });
}

if (localStorage.userID) showWelcome(localStorage.userID);
else showSignin();

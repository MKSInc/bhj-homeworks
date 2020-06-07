'use strict';

function showSubscribeModal() {
   const subscribeModalEl = document.getElementById('subscribe-modal');
   subscribeModalEl.classList.add('modal_active');

   subscribeModalEl.addEventListener('click', event => {
      if (event.target.classList.contains('modal__close')) {
         subscribeModalEl.classList.remove('modal_active');
         document.cookie = 'subscribe=active';
      }
   })
}

if (document.cookie) {
   const cookies = {};
   document.cookie
      .split('; ')
      .forEach(cookie => cookies[cookie.split('=')[0]] = cookie.split('=')[1]);

   if (!cookies.subscribe) showSubscribeModal();

} else showSubscribeModal();

// Удалить cookie subscribe
// document.cookie = 'subscribe=; Expires=Mon, 01 May 2019 00:00:00 GMT;';

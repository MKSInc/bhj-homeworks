'use strict';

const revealElements = document.getElementsByClassName('reveal');

document.addEventListener('scroll', function documentScroll() {
   for (const revealElement of revealElements)
       if (revealElement.getBoundingClientRect().top < window.innerHeight / 2)
           revealElement.classList.add('reveal_active');
});

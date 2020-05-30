'use strict';

const fontSizeEls = document.getElementsByClassName('font-size');
const bookEl = document.getElementById('book');

for (const fontSizeEl of fontSizeEls)
    fontSizeEl.addEventListener('click', function(event) {
        event.preventDefault();
        if (!this.classList.contains('font-size_active')) {
            console.log('not active');
            document.getElementsByClassName('font-size_active')[0].classList.remove('font-size_active');
            this.classList.add('font-size_active');
            bookEl.classList.remove('book_fs-small');
            bookEl.classList.remove('book_fs-big');
            if (this.classList.contains('font-size_small')) bookEl.classList.add('book_fs-small');
            else if (this.classList.contains('font-size_big')) bookEl.classList.add('book_fs-big');
        }
    });

const colorEls = document.querySelectorAll('.book__control_color .color');

for (const colorEl of colorEls)
    colorEl.addEventListener('click', function(event) {
        event.preventDefault();
        if (!this.classList.contains('color_active')) {
            document.querySelectorAll('.book__control_color .color_active')[0].classList.remove('color_active');
            this.classList.add('color_active');
            bookEl.classList.remove('book_color-gray');
            bookEl.classList.remove('book_color-whitesmoke');
            if (this.classList.contains('color_gray')) bookEl.classList.add('book_color-gray');
            else if (this.classList.contains('color_whitesmoke')) bookEl.classList.add('book_color-whitesmoke');
        }
    });

const backgroundEls = document.querySelectorAll('.book__control_background .color');

for (const backgroundEl of backgroundEls)
    backgroundEl.addEventListener('click', function(event) {
        event.preventDefault();
        if (!this.classList.contains('color_active')) {
            document.querySelectorAll('.book__control_background .color_active')[0].classList.remove('color_active');
            this.classList.add('color_active');
            bookEl.classList.remove('book_bg-gray');
            bookEl.classList.remove('book_bg-black');
            if (this.classList.contains('color_gray')) bookEl.classList.add('book_bg-gray');
            else if (this.classList.contains('color_black')) bookEl.classList.add('book_bg-black');
        }
    });

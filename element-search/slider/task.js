'use strict';

const sliderItem = document.getElementsByClassName('slider__item');
const sliderItemCount = sliderItem.length;
const sliderDot = document.getElementsByClassName('slider__dot');
let currentSliderItem = 0;

sliderDot[currentSliderItem].classList.add('slider__dot_active');

const sliderArrows = document.getElementsByClassName('slider__arrow');

for (let sliderArrow of sliderArrows)
    sliderArrow.onclick = function sliderArrowClick() {
        sliderItem[currentSliderItem].classList.remove('slider__item_active');
        sliderDot[currentSliderItem].classList.remove('slider__dot_active');
        if (sliderArrow.classList.contains('slider__arrow_next'))
            currentSliderItem = (currentSliderItem < sliderItemCount - 1) ? currentSliderItem + 1 : 0;
        else currentSliderItem = (currentSliderItem > 0) ? currentSliderItem - 1 : sliderItemCount - 1;

        sliderItem[currentSliderItem].classList.add('slider__item_active');
        sliderDot[currentSliderItem].classList.add('slider__dot_active');
    };

for (let sliderDotItem of sliderDot)
    sliderDotItem.onclick = function sliderDotClick() {
        sliderItem[currentSliderItem].classList.remove('slider__item_active');
        sliderDot[currentSliderItem].classList.remove('slider__dot_active');
        sliderDotItem.classList.add('slider__dot_active');
    //  Определяем индекс нажатой точки.
        currentSliderItem = Array.from(sliderDot).indexOf(sliderDotItem);
        sliderItem[currentSliderItem].classList.add('slider__item_active');
    };

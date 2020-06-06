'use strict';

document.addEventListener('click', event => {
    event.preventDefault();
    const {target} = event;

    function addTooltip() {
        target.insertAdjacentHTML('afterend', `
            <div class="tooltip tooltip_active">
              ${target.title}
            </div>`)
    }

    if (target.classList.contains('has-tooltip')) {
        const tooltipActiveEl = document.getElementsByClassName('tooltip_active')[0];

        if (tooltipActiveEl) {
            tooltipActiveEl.classList.remove('tooltip_active');
            if (target === tooltipActiveEl.previousElementSibling) return;
        }

        if (target.nextElementSibling)
            if (target.nextElementSibling.classList.contains('tooltip'))
                target.nextElementSibling.classList.add('tooltip_active');
            else addTooltip();
        else addTooltip();

    //  Задаем позицию подсказки
        const {left: targetLeft, top: targetTop, right: targetRight} = target.getBoundingClientRect();
        const tooltipEl = target.nextElementSibling;

        switch (target.dataset.position) {
            case 'bottom':
                tooltipEl.style.left = targetLeft + 'px';
                break;

            case 'top':
                tooltipEl.style.left = targetLeft + 'px';
                tooltipEl.style.top = targetTop - target.nextElementSibling.getBoundingClientRect().height + 'px';
                break;

            case 'left':
                tooltipEl.style.top = targetTop + 'px';
                tooltipEl.style.left = targetLeft - target.nextElementSibling.getBoundingClientRect().width + 'px';
                break;

            case 'right':
                tooltipEl.style.top = targetTop + 'px';
                tooltipEl.style.left = targetRight + 'px';
        }
    }
});

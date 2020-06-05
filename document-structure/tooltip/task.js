'use strict';

document.addEventListener('click', event => {
    event.preventDefault();
    const {target} = event;

    function addTooltip() {
        target.insertAdjacentHTML('afterend', `
            <div class="tooltip tooltip_active" data-position="bottom">
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

        if (tooltipEl.dataset.position === 'bottom') {
            tooltipEl.style.left = targetLeft + 'px';
        }

        if (tooltipEl.dataset.position === 'top') {
            tooltipEl.style.left = targetLeft + 'px';
            tooltipEl.style.top = targetTop - target.nextElementSibling.getBoundingClientRect().height + 'px';
        }

        if (tooltipEl.dataset.position === 'left') {
            tooltipEl.style.top = targetTop + 'px';
            tooltipEl.style.left = targetLeft - target.nextElementSibling.getBoundingClientRect().width + 'px';
        }

        if (tooltipEl.dataset.position === 'right') {
            tooltipEl.style.top = targetTop + 'px';
            tooltipEl.style.left = targetRight + 'px';
        }
    }
});

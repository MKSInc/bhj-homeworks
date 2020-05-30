'use strict';

const rotatorEls = document.getElementsByClassName('rotator');

for (const rotatorEl of rotatorEls) {
    const rotatorCaseEls = rotatorEl.getElementsByClassName('rotator__case');
    const rotatorCaseCount = rotatorCaseEls.length;
    let rotatorCaseIndex = 0;
    let timeout = Number(rotatorCaseEls[0].dataset.speed);

    function rotator () {
        rotatorCaseEls[rotatorCaseIndex].classList.remove('rotator__case_active');
        rotatorCaseIndex = (rotatorCaseIndex === rotatorCaseCount - 1) ? 0 : rotatorCaseIndex + 1;
        rotatorCaseEls[rotatorCaseIndex].classList.add('rotator__case_active');
        rotatorCaseEls[rotatorCaseIndex].style.color = rotatorCaseEls[rotatorCaseIndex].dataset.color;
        timeout = Number(rotatorCaseEls[rotatorCaseIndex].dataset.speed);

        rotate = setTimeout(rotator, timeout);
    }

    let rotate = setTimeout(rotator, timeout);
}

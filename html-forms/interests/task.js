'use strict';

const interestCheckEls = document.getElementsByClassName('interest__check');

for (const interestCheckEl of interestCheckEls)
    interestCheckEl.addEventListener('click', () => {
    //  Список включает сам выбранный элемент и все в него вложенные
        const interestCheckChildrenEl = Array.from(interestCheckEl.closest('.interest').getElementsByClassName('interest__check'));
    //  Установка галочек вниз по дереву
        if (interestCheckEl.checked) interestCheckChildrenEl.forEach(element => element.checked = true);
        else interestCheckChildrenEl.forEach(element => element.checked = false);
    //  Установка галочек вверх по дереву
        function checkParent (interestCheck) {
        //  Если пункт не является на первом уровне вложенности ('Еда', 'Домашние животные') рекурсия заканчивается
            if (!interestCheck.closest('.interests').classList.contains('interests_main')) {
            //  Список включает сам выбранный элемент, соседние и все вложенные (вложенные не нужны, но они не мешают)
                const interestSibling = Array.from(interestCheck.closest('.interests').getElementsByClassName('interest__check'));
            //  Родительский пункт выбранного пункта
                const interestCheckParent = interestCheck.closest('.interests').closest('.interest').querySelector('.interest__check');

                if (interestSibling.every(element => element.checked === false)) {
                    interestCheckParent.indeterminate = false;
                    interestCheckParent.checked = false;

                } else if (interestSibling.some(element => element.checked === false)) {
                    interestCheckParent.indeterminate = true;
                    interestCheckParent.checked = false;

                } else {
                    interestCheckParent.indeterminate = false;
                    interestCheckParent.checked = true;
                }

                checkParent(interestCheckParent);
            }
        }

        checkParent(interestCheckEl);
    });

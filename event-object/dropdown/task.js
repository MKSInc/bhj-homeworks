'use strict';

const dropdownValue = document.getElementsByClassName('dropdown__value')[0];
const dropdownList = document.getElementsByClassName('dropdown__list')[0];
let dropdownListStatus = 'Close';

dropdownValue.addEventListener('click', function() {
    dropdownList.classList.toggle('dropdown__list_active');
    dropdownListStatus = (dropdownListStatus === 'Close') ? 'Open' : 'Close';

    const dropdownItems = dropdownValue.closest('.dropdown').getElementsByClassName('dropdown__item');

    function removeEvent() {
        for (let dropdownItem of dropdownItems)
            dropdownItem.removeEventListener('click', dropdownItemClick);
    }

    function dropdownItemClick(event) {
        event.preventDefault();
        dropdownValue.textContent = event.target.textContent;
        dropdownList.classList.remove('dropdown__list_active');
        dropdownListStatus = 'Close';
        removeEvent();
    }

    if (dropdownListStatus === 'Open')
        for (let dropdownItem of dropdownItems)
            dropdownItem.addEventListener('click', dropdownItemClick);
        else removeEvent(); // Не удалось разобраться, почему removeEvent вызванный в случае закрытия списка,
                            // при нажатии на 'dropdown__value' элемент, не удаляет обработчики событий.
});

'use strict';

const menuLinks = document.getElementsByClassName('menu__link');

for (let menuLink of menuLinks) {
    const menuSubCurrent = menuLink.closest('.menu__item').getElementsByClassName('menu_sub');

    if (menuSubCurrent.length !== 0) {

        menuLink.onclick = function menuLinkClick () {
            if (!menuSubCurrent[0].classList.contains('menu_active')) {
            //  Выбираем список всех подменю(menu_sub), но только в пределах меню, к которому относится нажатый пункт.
            //  Таким образом нажатие на выпадающее меню в первом меню(main_menu) не влияет на второе меню(second_menu).
                const menuSubAll = menuLink.closest('.menu').getElementsByClassName('menu_sub');
                for (let menuSub of menuSubAll) {
                    menuSub.classList.remove('menu_active');
                }
            }

            menuSubCurrent[0].classList.toggle('menu_active');
            return false;
        }
    }
}

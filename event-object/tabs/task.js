'use strict';

const tabs = document.getElementsByClassName('tab');

for (let tab of tabs)
    tab.addEventListener('click', function tabClick() {
        const currentTabs = tab.closest('.tab__navigation').getElementsByClassName('tab');
        const tabIndex = Array.from(currentTabs).indexOf(tab);
        for (let currentTab of currentTabs) currentTab.classList.remove('tab_active');
        tab.classList.add('tab_active');

        const currentTabContents = tab.closest('.tabs').getElementsByClassName('tab__content');
        for (let currentTabContent of currentTabContents)
            currentTabContent.classList.remove('tab__content_active');
        currentTabContents[tabIndex].classList.add('tab__content_active');
    });

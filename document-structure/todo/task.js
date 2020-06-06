'use strict';

const taskInputEl = document.getElementById('task__input');
const tasksListEl = document.getElementById('tasks__list');
const tasksAddEl = document.getElementById('tasks__add');

tasksAddEl.addEventListener('click' , event => event.preventDefault());

taskInputEl.addEventListener('change', () => {
    taskInputEl.value = taskInputEl.value.trim();

    if (taskInputEl.value !== '') {
        tasksListEl.insertAdjacentHTML('beforeend', `
            <div class="task">
                <div class="task__title">${taskInputEl.value}</div>
                <a href="#ui" class="task__remove">&times;</a>
            </div>
        `);

        const taskRemoveEl = tasksListEl.lastElementChild.getElementsByClassName('task__remove')[0];
        taskRemoveEl.addEventListener('click', () => taskRemoveEl.closest('.task').remove());
    }
});

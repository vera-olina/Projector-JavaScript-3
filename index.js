`use strict`;

import { renderList } from "./renderList.js";
import { formListener } from "./formListener.js";
import { saveList, loadList } from "./ls.js";
import { listClickListener } from "./listClickListener.js";
import { formChangeListener } from "./formChangeListener.js";
import { byName } from "./filters.js";
import { removeAllTasks } from "./removeAllTasks.js";
import { listEditListener } from "./listEditListener.js";

const startApp = () => {

    console.log('Workshop startApp');

    const taskList = loadList();

    renderList(taskList);

    const updateList = () => {
        saveList(taskList);
        renderList(taskList);
    };

    const onSubmit = (newTask) => {
        taskList.push({
            name: newTask,
            completed: false
        });
        updateList();
    };

    formListener(onSubmit);

    listClickListener ((index) => {
        taskList.splice(index, 1);
        updateList();
    });

    formChangeListener ((text)=>{
        const filteredTasks = taskList.filter(byName(text));
        renderList(filteredTasks)
    });

    removeAllTasks(taskList);

    listEditListener();

};

document.addEventListener('DOMContentLoaded', startApp);

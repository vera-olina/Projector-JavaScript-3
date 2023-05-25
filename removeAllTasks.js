const removeAllTasksButton = document.querySelector('#remove-all-button');
const listElement = document.querySelector('#list');
const LS_KEY = 'taskList';

export const removeAllTasks = (taskList) => {
    removeAllTasksButton.addEventListener('click', ()=> {
        if(localStorage.getItem(LS_KEY) !== null) {
            if(confirm('Are you sure you want to delete all your tasks?')) {
                listElement.remove(taskList);
                localStorage.clear();
                // JSON.parse([]);
            } 
        } else {
            alert("You don't have any tasks");
        }
    })
};
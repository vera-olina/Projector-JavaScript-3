const removeAllTasksButton = document.querySelector('#remove-all-button');
const listElement = document.querySelector('#list');
const LS_KEY = 'taskList';

export const removeAllTasks = (taskList) => {
    removeAllTasksButton.addEventListener('click', ()=> {
        if(confirm('Are you sure you want to delete all your tasks?')) {
            listElement.innerHTML = '';
            if(localStorage.getItem(LS_KEY) !== null) {
                console.log('localStorage is full');
                localStorage.removeItem(LS_KEY);
            } alert("You don't have any tasks");
        }
    })
};
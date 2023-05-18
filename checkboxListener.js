const list = document.querySelector('#list');
const LS_KEY = 'taskList';


export const checkboxListener = (taskList) => {
    let counter = 0;
    list.addEventListener('click', (event) => {
        if ('completed' in event.target.dataset) {
            event.target.dataset.completed = true;
            counter++;

            if (counter%2 !== 0) {
                taskList.forEach((task) => {
                    task.completed = true;
                })
            } else {
                taskList.forEach((task) => {
                    task.completed = false;
                })
            }
            localStorage.setItem(LS_KEY, JSON.stringify(taskList));
            JSON.parse(localStorage.getItem(LS_KEY))
        }
    })
};

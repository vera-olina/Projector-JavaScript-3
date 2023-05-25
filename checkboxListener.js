const list = document.querySelector('#list');
const LS_KEY = 'taskList';

export const checkboxListener = (taskList) => {
    list.addEventListener('click', (event) => {
      if ('completed' in event.target.dataset) {
        const checkbox = event.target;
        checkbox.dataset.completed = checkbox.checked; 
  
        const taskId = checkbox.dataset.taskId;
        const task = taskList.find((task) => task.id === taskId);
  
        if (task) {
            task.completed = checkbox.checked; 
            localStorage.setItem(LS_KEY, JSON.stringify(taskList)); 
        }
      }
    });
};
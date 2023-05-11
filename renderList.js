const listElement = document.querySelector('#list');

export const renderList = (taskList) => {
    listElement.innerHTML = '';

    taskList.forEach((task, index) => {
        const taskElement = document.createElement('li');
        taskElement.className = 'todo-list-item';
        taskElement.innerHTML = 
            `<div class="form-check">
                <label class="form-check-label">
                    <input class="checkbox" type="checkbox" id="checkbox">
                    <span class="checkmark"></span>
                    <p id="form-text">${task.name}<p>
                    <i class="input-helper"></i>
                </label>
            </div>
            <div class="form-button-holder">
                <a class="edit-button"><i class="fa fa-edit" style="font-size:20px; color:#151515; line-height: 1.5px; align-items: center; display: flex;"></i></a>
                <a class="delete-button"><i data-index="${index}" class="fa fa-remove" style="font-size:20px; color:#151515; line-height: 1.5px; align-items: center; display: flex;"></i><a>
            </div>`;
        listElement.append(taskElement);
    });
};


    


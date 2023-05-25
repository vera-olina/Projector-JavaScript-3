const editButton = document.getElementsByClassName('edit-button');
const LS_KEY = 'taskList';

export const listEditListener = (taskList) => {
    console.log(editButton);
    
    for (let i = 0 ; i < editButton.length; i++) {
        editButton[i].addEventListener('click' , ()=>{
            let editWindow = prompt('Please edit your task', '');
            if (editWindow !== null) {
                document.querySelector('#form-text').innerHTML = editWindow;
                const index = i;
                taskList[index].name = editWindow;
            }
            localStorage.setItem(LS_KEY, JSON.stringify(taskList));
        }) ; 
    }
};
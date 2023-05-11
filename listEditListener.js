const editButton = document.getElementsByClassName('edit-button');

export const listEditListener = () => {
    console.log(editButton);
    
    for (var i = 0 ; i < editButton.length; i++) {
        editButton[i].addEventListener('click' , ()=>{
            let editWindow = prompt('Please edit your task', '');
            if (editWindow !== null) {
                document.querySelector('#form-text').innerHTML = editWindow;
            }
        }) ; 
    }
};
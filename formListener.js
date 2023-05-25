const formElement = document.querySelector('#form');
const inputElement = document.querySelector('#input-text');

export const formListener = (cb) => {
    formElement.addEventListener('submit', (event) => {
        event.preventDefault();
        if(inputElement.value === ''){
            return null;
        }
        cb(inputElement.value);
        inputElement.value = '';
    })
};
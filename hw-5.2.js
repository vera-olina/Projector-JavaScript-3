'use strict';

const main = document.getElementById('main');

const action_button = document.getElementById('action-button');

const text_message=document.getElementById('text-message');

const checkboxListener = () => {
    action_button.addEventListener('click', ()=>{
        action_button.classList.toggle('active');
        main.classList.toggle('dark-mode');
        text_message.classList.toggle('active');
        text_message.innerText= '' + new Date().toLocaleString();
        if (main.classList.contains('dark-mode')){
            localStorage.setItem('mode', 'dark')
        }
    })
}

const saveMode = localStorage.getItem('mode')
if (saveMode && saveMode === 'dark') {
    action_button.classList.add('active');
    main.classList.add('dark-mode');
}

checkboxListener();

'use strict';

const navSelector = document.getElementById('headerTwo');
const sectionSelector = document.getElementsByTagName('section')[0];
const listSelector = () =>{
    const li = document.querySelector('li');
    if (li.innerHTML = 'Пункт 5'){
        return console.log(li);
    }
};
const classSelector = document.getElementsByClassName('hatredLevelBlock');

console.log(navSelector);
console.log(sectionSelector);
listSelector();
console.log(classSelector);





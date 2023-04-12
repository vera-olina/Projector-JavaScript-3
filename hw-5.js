'use strict';

const navSelector = document.getElementById('headerTwo');
const sectionSelector = document.getElementsByTagName('section')[0];
const givenText = 'Пункт 5';
const listSelector = [];
for (let li of document.querySelectorAll('li:nth-child(n)')) {
    if (li.textContent.includes(givenText)) {
        listSelector.push(li);
    }
};
const classSelector = document.getElementsByClassName('hatredLevelBlock');

console.log(navSelector);
console.log(sectionSelector);
console.log(listSelector);
console.log(classSelector);
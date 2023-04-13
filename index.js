`use strict`;

import {renderList} from './renderList.js';

const submit = document.getElementById('submit');
const output = document.getElementById('output');
const calcSelector = document.getElementById('option-1');
const radioButton = document.querySelectorAll('input[type=radio]');

const startApp = () => {
    submit.addEventListener('click', () => {
        const date1 = new Date(document.getElementById('date-1').value);
        const date2 = new Date(document.getElementById('date-2').value);
        const unit = document.getElementById('option-2');
        const unitValue = unit.options[unit.selectedIndex].value;
        const unitText = unit.options[unit.selectedIndex].text.toLowerCase();
        
    
        if(date1.getTime() && date2.getTime()) {
            const calcDuration = Math.abs(date2.getTime()- date1.getTime());
            const unitDimension = {
                1 : calcDuration / (3600000 * 24),
                2 : calcDuration / 3600000,
                3 : calcDuration / 60000,
                4 : calcDuration / 1000
            }
        
            output.innerHTML = 'Difference between the two dates is ' + unitDimension[unitValue] + ' ' + unitText;
    
        } 
        else {
            output.innerHTML = 'Please select a valid date to start';
        }
    });

    renderList(['01/01/2022 - 02/01/2023']);
}

document.addEventListener('DOMContentLoaded', startApp);

`use strict`;

const submit = document.getElementById('submit');
const output = document.getElementById('output');
const calcSelector = document.getElementById('option-1');
const presetButton = document.querySelectorAll('#week-button, #month-button');
const unit = document.getElementById('option-2');
const d1 = document.getElementById('date-1');
const d2 = document.getElementById('date-2');

submit.addEventListener('click', calculateSpan);

function calculateSpan() {
    const date1 = new Date(d1.value);
    const date2 = new Date(d2.value);
    const unitValue = unit.options[unit.selectedIndex].value;
    const unitText = unit.options[unit.selectedIndex].text.toLowerCase();

    presetButton[0].addEventListener('click', getDate2);
    function getDate2(){
        if (date1.getTime()) {
            date2.setDate(date2.getDate() + 7);
        } else {
            output.innerHTML = 'Please select Start Date';
        }
    }

    if(date1.getTime() && date2.getTime()) {
        const calcDuration = Math.abs(date2.getTime()- date1.getTime());
        const unitDimension = {
            1 : calcDuration / (3600000 * 24),
            2 : calcDuration / 3600000,
            3 : calcDuration / 60000,
            4 : calcDuration / 1000
        }
    
        output.innerHTML = 'Difference between the two dates is ' + unitDimension[unitValue] + ' ' + unitText;

    } else {
        output.innerHTML = 'Please select a valid date to start';
    }
}

document.addEventListener('DOMContentLoaded', startApp);

`use strict`;

const submit = document.getElementById('submit');
const output = document.getElementById('output');
const calcSelector = document.getElementById('option-1');
const presetButton = document.querySelectorAll('#week-button, #month-button');
const unit = document.getElementById('option-2');
const d1 = document.getElementById('date-1');
const d2 = document.getElementById('date-2');

presetButton[0].addEventListener('click', getDate2Week);
presetButton[1].addEventListener('click', getDate2Month);

function getDate2Week() {
    if (new Date(d1.value).getDate()) {
        return d2.value = new Date(new Date(d1.value).setDate(new Date(d1.value).getDate() + 7)).toISOString().split('T')[0];
    } else {
        output.innerHTML = 'Please select Start Date';
        // output.classList.add('alert');
    }
}

function getDate2Month() {
    if (new Date(d1.value).getDate()) {
        return d2.value = new Date(new Date(d1.value).setMonth(new Date(d1.value).getMonth() + 1)).toISOString().split('T')[0];
    } else {
        output.innerHTML = 'Please select Start Date';
        // output.classList.add('alert')
    }
}

submit.addEventListener('click', calculateSpan);

function calculateSpan() {
    const date1 = new Date(d1.value);
    const date2 = new Date(d2.value);
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

    } else {
        output.innerHTML = 'Please select a valid date to start';
        // output.classList.add('alert')
    }
}

calcSelector.addEventListener('click', determineDays);

// function determineDays() {
//     const calcSelectorValue = calcSelector.options[calcSelector.selectedIndex].value;
//     const nWeekdays = Math.floor( (date2.getDay()+calcDuration) / 7 )
//     determine = {
//         1:
//         2:
//         3: 2*nWeekdays + (date2.getDay()==0) - (date1.getDay()==6);
//     }
// }

// function loadResults() {
//     let results;

//     if (localStorage.getItem('results') !== null) {
//         results = JSON.parse(localStorage.getItem('results'));
//     } else {
//         results = [];
//     }

//     results.forEach(function(result) {
//         const li = document.createElement('li');
//         li.className = 'output-item';
//         li.appendChild(document.createTextNode(result));

//         outputList.appendChild('li')
//     });
// }

// document.addEventListener('DOMContentLoaded', startApp);

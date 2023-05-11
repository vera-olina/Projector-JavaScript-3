`use strict`;

const submit = document.getElementById('submit');
const output = document.getElementById('output');
const calcSelector = document.getElementById('option-1');
const presetButton = document.querySelectorAll('#week-button, #month-button');
const unit = document.getElementById('option-2');
const d1 = document.getElementById('date-1');
const d2 = document.getElementById('date-2');
const table = document.getElementById('table');
const deleteButton = document.getElementsByClassName('delete-button');

const startApp = () => {

    presetButton[0].addEventListener('click', getDate2Week);
    presetButton[1].addEventListener('click', getDate2Month);

    function getDate2Week() {
        if (new Date(d1.value).getDate()) {
            return d2.value = new Date(new Date(d1.value).setDate(new Date(d1.value).getDate() + 7)).toISOString().split('T')[0];
        } else {
            output.innerHTML = 'Please select Start Date';
            output.classList.add('alert');
            setTimeout(()=>{output.classList.remove('alert')}, 900)
        }
    }

    function getDate2Month() {
        if (new Date(d1.value).getDate()) {
            return d2.value = new Date(new Date(d1.value).setMonth(new Date(d1.value).getMonth() + 1)).toISOString().split('T')[0];
        } else {
            output.innerHTML = 'Please select Start Date';
            output.classList.add('alert');
            setTimeout(()=>{output.classList.remove('alert')}, 900)
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

            const row = table.insertRow(1);
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            const cell4 = row.insertCell(3)
            cell1.innerHTML = date1.toLocaleDateString();
            cell2.innerHTML = date2.toLocaleDateString();
            cell3.innerHTML = unitDimension[unitValue] + ' ' + unitText;
            cell4.innerHTML = `<button class="delete-button"></button>`;
            cell4.classList.add('delete');
            table.style.display = 'table';

        } else {
            output.innerHTML = 'Please select a valid date to start';
            output.classList.add('alert');
            setTimeout(()=>{output.classList.remove('alert')}, 900)
        }
    }

    function rowCapacityFunc() {
        const rowCapacity = table.rows.length;
        if (rowCapacity > 2) return //table.deleteRow(-1);
    }

    // deleteButton.addEventListener('click', deleteRow);

    // function deleteRow() {
    //     return
    // }

    calcSelector.addEventListener('click', determineDays);

    function determineDays() {
        // var ndays = 1 + Math.round((d1.getTime()-d0.getTime())/(24*3600*1000));
        // var nsaturdays = Math.floor( (d0.getDay()+ndays) / 7 );
        // return 2*nsaturdays + (d0.getDay()==0) - (d1.getDay()==6);
    }

}

document.addEventListener('DOMContentLoaded', startApp);
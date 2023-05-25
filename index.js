`use strict`;

const submit = document.getElementById('submit');
const output = document.getElementById('output');
const calcSelector = document.getElementById('option-1');
const presetButton = document.querySelectorAll('#week-button, #month-button');
const unit = document.getElementById('option-2');
const d1 = document.getElementById('date-1');
const d2 = document.getElementById('date-2');
const table = document.getElementById('table');

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

    calcSelector.addEventListener('change', determineDays);

    function determineDays() {
        const calcSelectorValue = calcSelector.options[calcSelector.selectedIndex].value;

        function weekdaysCounter(){
            const date1 = new Date(d1.value);
            const date2 = new Date(d2.value);
            let counter = 0;
            while (date1 < date2) {
                const dayOfWeek = date1.getDay();
                if (dayOfWeek !== 0 && dayOfWeek !== 6){
                    counter++;
                }
                date1.setDate(date1.getDate() + 1);
            }
            return counter;
        }

        function weekendsCounter() {
            const date1 = new Date(d1.value);
            const date2 = new Date(d2.value);
            let counter = 0;
            while (date1 < date2) {
                const dayOfWeek = date1.getDay();
                if (dayOfWeek == 0 || dayOfWeek == 6){
                    counter++;
                }
                date1.setDate(date1.getDate() + 1);
            }
            return counter;
        }

        const determineDaysFilter = {
            1 : 0,
            2 : weekendsCounter(),
            3 : weekdaysCounter(),
        }

        if (typeof(determineDaysFilter[calcSelectorValue]) == 'undefined') {
            return 0;
        }
        return determineDaysFilter[calcSelectorValue] * 86400000;
    }

    submit.addEventListener('click', calculateSpan);

    function calculateSpan() {
        const date1 = new Date(d1.value);
        const date2 = new Date(d2.value);
        const unitValue = unit.options[unit.selectedIndex].value;
        const unitText = unit.options[unit.selectedIndex].text.toLowerCase();

        if(date1.getTime() && date2.getTime() && date1.getTime()<date2.getTime()) {
            const calcDuration = Math.abs(date2.getTime()- date1.getTime() - determineDays());
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
            cell1.innerHTML = date1.toLocaleDateString();
            cell2.innerHTML = date2.toLocaleDateString();
            cell3.innerHTML = unitDimension[unitValue] + ' ' + unitText;
            table.style.display = 'table';

            const tableData = { cell1, cell2, cell3 };
            let dataLS = [];
            dataLS.push(tableData);

            const lsListenner = (dataLS) => {
                localStorage.setItem('tableData', JSON.stringify(dataLS));
                localStorage.getItem('tableData');
                JSON.parse(localStorage.getItem('tableData'));
            }

            lsListenner(dataLS);

            const rowCapacity = document.querySelector('tbody').rows.length;
            if (rowCapacity > 11) {
                return document.querySelector('tbody').deleteRow(-1)
            }
            
        } else {
            output.innerHTML = 'Please select a valid date to start';
            output.classList.add('alert');
            setTimeout(()=>{output.classList.remove('alert')}, 900)
        }
    }
}

document.addEventListener('DOMContentLoaded', startApp);
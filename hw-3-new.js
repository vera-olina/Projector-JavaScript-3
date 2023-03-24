//Task 1
function durationBetweenDates(
    date1='31 Jan 2022',
    date2='1 Jan 2022',
    dimension = 'seconds' 
) {     
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const calcDuration = d2 - d1;
    const unitDimension = {
        'seconds' : calcDuration / 1000,
        'minutes' : calcDuration / 60000,
        'hours' : calcDuration / 3600000,
        'days' : calcDuration / (3600000 * 24)
    }
    return console.log(Math.abs(unitDimension[dimension])+' '+dimension);
}

durationBetweenDates();
durationBetweenDates('31 Jan 2022', '03 Feb 2022', 'days');  

//Task 2
const priceData = { 
    Apples: '23.4', 
    BANANAS: '48', 
    oRAngGEs: '48.7584',
};
  
function optimizer() {
    return Object.fromEntries(Object.entries(priceData).map(([key,value]) => ([key.toLowerCase(), parseFloat(value).toFixed(2)])))
};
  
let updatedPriceData = optimizer(priceData);
console.log(updatedPriceData);

//Task 3
    //Recursive function

function recursiveOddSumTo(n){
    if (n===0) {
        return 0
    }    
    if (n===1) {
        return 1
    }
    if (n%2 == 0) {
        return recursiveOddSumTo(n-1);
    }
    return n + recursiveOddSumTo(n-1);
}
      
console.log(recursiveOddSumTo(10))
  
    //Iterative function
  
function iterativeOddSumTo(n) {
    let sum = 0;
    for (i = 1; i <= n; i += 2){
    sum += i;
    }
    return sum
}

console.log(iterativeOddSumTo(10))
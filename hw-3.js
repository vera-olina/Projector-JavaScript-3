//Task 1
function durationBetweenDates(date1, date2, word) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    return (d2.getTime() - d1.getTime())/1000 + ' ' + word;
}
  
console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds'))
  
//Task 2
const priceData = { 
    Apples: '23.4', 
    BANANAS: '48', 
    oRAngGEs: '48.7584',
};
  
function optimizer(data) {
    return data = Object.entries(priceData).map(([key,value]) => ([key.toLowerCase(), parseFloat(value).toFixed(2)]))
};
  
let updatedPriceData = optimizer(priceData);
console.log(updatedPriceData);

//Task 3
    //Recursive function

function recursiveOddSumTo(n){
    if (n===1)
      return 1
    else if (n%2 == 0)
      return 0 + recursiveOddSumTo(n-1);
    else
     return n + recursiveOddSumTo(n-1);
}
  
console.log(recursiveOddSumTo(10))
  
    //Iterative function
  
function iterativeOddSumTo(n) {
    let i, sum = 0;
    for (i = 1; i <= n; i += 2){
    sum += i;
    }
    return sum
}

console.log(iterativeOddSumTo(10))
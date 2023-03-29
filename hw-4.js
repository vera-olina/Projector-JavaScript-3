'use strict';

//Task 1

//Option 1
// function addThemAll (...rest) {
//     let sum = 0;
//     for (const element of rest) {
//         sum += element;
//     }
//     return sum;
// }

//Option2
function addThemAll (...rest) {
    return rest.reduce((num,a) => num+a, 0);
}

console.log(addThemAll(2,4));
console.log(addThemAll(1,2,3,4));
console.log(addThemAll(5,5,10));

//Task 2 Uncurring

function multiply(a) {
    return function (b) {
        return a*b;
    }
}

console.log(multiply(5)(5));
console.log(multiply(2)(-2));
console.log(multiply(4)(3));

//Task 3

const movies = [
    {
    movieName: 'The Thing',
    releaseYear: 1982,
    directedBy: 'Carpenter',
    runningTimeInMinutes: 109,
    },
    {
    movieName: 'Aliens',
    releaseYear: 1986,
    directedBy: 'Cameron',
    runningTimeInMinutes: 137,
    },
    {
    movieName: 'Men in Black',
    releaseYear: 1997,
    directedBy: 'Sonnenfeld',
    runningTimeInMinutes: 98,
    },
    {
    movieName: 'Predator',
    releaseYear: 1987,
    directedBy: 'McTiernan',
    runningTimeInMinutes: 107,
    },
];

console.log(movies.sort(byProperty('releaseYear', '>'))); 
console.log(movies.sort(byProperty('runningTimeInMinutes', '<')));
console.log(movies.sort(byProperty('movieName', '>')));

function byProperty(property, direction) {
    return (a, b)=>{
        if (direction == '<') return a[property]-b[property];
        if (a[property] > b[property]) return -1;
        if (a[property] < b[property]) return 1;
        return 0;
    }
}

//Task 4

function detonatorTimer(delay) {
    if (delay > 0) {
        console.log(delay);
        delay --;
        setTimeout(detonatorTimer, 1000, delay);
    }
    else if (delay === 0) {
        console.log ('BOOM!');
    }
}

detonatorTimer(3);

//Task 5

let userProfile = {
    firstName: 'Vira',
    lastName: 'Olina',
    age: 24,
    activity: 'yoga',
    purpose: 'get fit and healthy',
    hobby: 'programming',
    program: 'JavaScript',
    userName() {
        console.log(`My name is ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`)
    },
    userActivity() {
        console.log(`I want to practice ${this.activity} to ${this.purpose}.`)
    },
    userInterests() {
        console.log(`I learn ${this.program} to become successful in ${this.hobby}.`)
    }
}
userProfile.userName();
userProfile.userActivity();
userProfile.userInterests();

//Task 6

let securedUserName = userProfile.userName.bind(userProfile);
let securedUserActivity = userProfile.userActivity.bind(userProfile);
let securedUserInterests = userProfile.userInterests.bind(userProfile);

setTimeout(securedUserName, 1000);
setTimeout(securedUserActivity, 2000); 
setTimeout(securedUserInterests, 3000);

// //Task 7

function someFunction (a, b) {
    return console.log(a + b); 
}

function slower(func, seconds) {
    return () => {
        console.log('Chill out, you will get you result in ' +seconds+ ' seconds');
        setTimeout(func, seconds * 1000);
    }
}

let slowedSomeFunction = slower(someFunction, 2);
slowedSomeFunction(5, 2);
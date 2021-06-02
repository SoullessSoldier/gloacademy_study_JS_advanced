'use strict';

//5.1
let arr = [];
/*
Generator ))
let el = 7;
let i =0;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }

do {
    arr.push(getRandomIntInclusive(100, 10000000));
    i++;
}
while(i < 7);
console.log(arr);
*/
arr = [
    5068192, 1329538,
    8727930, 2781180,
    8151162,  276186,
    4956454
];
let i = 0;
while (i < arr.length){
    if (String(arr[i]).startsWith('2') || String(arr[i]).startsWith('4'))
        console.log(arr[i]);
    i++;
}

//5.2
function isPrime(n){
    let prime = n != 1;
    for (let i = 2; i < Math.floor(Math.sqrt(n))+1; i++ ){
        if (n % i === 0){
            prime = false;
            break;
        }
    }
    return prime;
}

for (let i = 1; i <= 100; i++){
    if(isPrime(i)) console.log(i, `Делители этого числа: 1 и ${i.toString()}`);
}


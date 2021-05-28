//Task 1
let num = 266219;


//Task 2
//Approach #1  - pure digital
let integer, result = 1;
let numLength = String(num).length;
for (let i = 0; i < numLength; i++){
    integer = Math.floor(num / 10);
    result *= num % 10;
    num = integer;
}
console.log('Task 2 approach 1 - product of digits is: ', result);

//Approach # 2 - via array
num = 266219;
result = 1;
String(num).split("").forEach(el => result *= Number(el));
console.log('Task 2 approach 2 - product of digits is: ', result);

//Approach # 3 - via literal substr
num = 266219;
result = 1;
for (let i = 0; i < String(num).length; i++) {
    result *= Number(String(num).substr(i,1));
};
console.log('Task 2 approach 3 - product of digits is: ', result);


// Task 3
//Pow without Math.Pow()
result = result ** 3;
//console.log('result: ', result);


//Task 4
let resDigits = String(result).substr(0,2);
console.log('First two digits of powered result are: ', resDigits);

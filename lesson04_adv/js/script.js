/*
В ТЗ не совсем понятно, как передавать аргумент в функцию - 
    если через prompt, то строка будет ВСЕГДА, даже пустая
*/
function foo(arg){
    if (typeof(arg) === 'string'){
        let result = '';
        result = arg.trim();
        if (result.length>30) result = result.substr(0,30) + '...';
        return result;
    } else {
        alert('В качестве аргумента передана НЕ строка!');
        return false;
    }
}
/*console.log(foo(false));
console.log(foo(5));
console.log(foo(undefined));
console.log(foo(NaN));
console.log(foo('   ***NaN***   '));
let lorem40 = 'Lorem ipsum dolor sit amet orci aliquam.'
console.log(foo(lorem40));
*/
let lorem40 = 'Lorem ipsum dolor sit amet orci aliquam.'
let result = foo(prompt('Введите что-нибудь, желательно строку', lorem40));
console.log(result);
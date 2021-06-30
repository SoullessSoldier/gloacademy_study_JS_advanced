'use strict';
//ТЗ не уточняет, надо вывести ТЕКУЩИЙ день недели, или ВСЕ СРАЗУ
//ТЗ не требует тестирования вводимых данных
let ruDaysOfWeek = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
];
let enDaysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

//let lang = 'ru';
let lang = prompt('Язык/language - ru/en?','ru');
let currentDate = new Date();
let currentDayOfWeek = currentDate.getDay();
let result = '';
//3.1a
console.log('Using if:');
if (lang === 'ru'){
    result = ruDaysOfWeek[currentDayOfWeek];
    console.log('Текущий день недели:', result);
} else {
    result = enDaysOfWeek[currentDayOfWeek];
    console.log('Current day of week:', result);
}

//3.1b
console.log('Using switch/case:');
switch(lang){
    case 'ru':
        result = ruDaysOfWeek[currentDayOfWeek];
        console.log('Текущий день недели:', result);
        break;
    case 'en':
        result = enDaysOfWeek[currentDayOfWeek];
        console.log('Current day of week:', result);
        break;
}

//3.1c varian 1
console.log('Using multi-dimensional array, but w/o any if or switch/case:');
let arrDays = [];
for (let i=0; i<ruDaysOfWeek.Length; i++){
    arrDays.push([ruDaysOfWeek[i],enDaysOfWeek[i]]);
}
result = lang === 'ru' ? 
    'Текущий день недели:' + ruDaysOfWeek[currentDayOfWeek]:
    'Current day of week: ' + enDaysOfWeek[currentDayOfWeek];
//В ТЗ сказано без ифов и switch, но про тернарник речи не было
console.log(result);

//3.1c variant 2
//В дискорде что-то про объект говорили...
console.log('Using Object & multi-dimensional array:')
let daysObj = new Object();
daysObj = {
    'ru': ['Текущий день недели: ', ruDaysOfWeek],
    'en': ['Current day of week: ', enDaysOfWeek]
}
result = daysObj[lang][0] + daysObj[lang][1][currentDayOfWeek];
console.log(result);

//M-M-Monster kill - ?


//3.2
let namePerson = prompt('Ваше имя?','Артем');;
let result2 = '';

result2 = namePerson === 'Артем' ? 'директор':
          namePerson === 'Максим' ? 'преподаватель':
          'студент';
console.log('result2:', result2);


//Очень странное ТЗ, но вам виднее...
'use strict';
let week = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
];

let elem;
let today = new Date();
let dayOfWeek = today.getDay();

const container = document.querySelector('.container');
week.forEach((el, ind) => {
    
    elem = el+'<br>';
    if (ind === dayOfWeek-1) {
        elem = '<b>' + elem+'</b>';
    }
    if (ind === 5 || ind === 6){
        elem = '<i>' + elem+'</i>';
    }
    //elem = el+'<br>';
    container.insertAdjacentHTML('beforeend',elem);    
});

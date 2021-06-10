'use strict';
const blockExtended = document.querySelector('.block_extended');
const blockShort = document.querySelector('.block_short');
const addZero = (num) => {
    let s = num.toString();
    if (s.length === 1){
        s=s.padStart(2,'0');
    }
    return s;
}
const showDateTime = () => {
    let now;
    let res_short,res_extended,hours,minutes, seconds;
                    
    // Запрашиваем день недели вместе с длинным форматом даты
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
            
    let arrSeconds = ['секунда','секунды','секунд'];
    let arrMinutes = ['минута','минуты','минут'];
    let arrHours = ['час','часа','часов'];
            
            

    function capitalizeFirstLetter(string) {
        return string[0].toUpperCase() + string.slice(1);
    }
                
    function timeWords(num, arr){
            /*if ((num.toString().slice(-1)==='1')&& (num!==11)) return arr[0];
        if (((num>=2)&&(num<5))||((num%10>=2)&&(num%10<5))&&(num%100>20)) return arr[1];
        return arr[2];*/
        return ((num.toString().slice(-1)==='1')&& (num!==11)) ? arr[0] : 
        (((num>=2)&&(num<5))||((num%10>=2)&&(num%10<5))&&(num%100>20)) ? arr[1] : arr[2];    
    }
            
    now  = new Date();
    res_extended = now.toLocaleDateString('ru-RU', options);
            
    res_extended = 'Сегодня ' + capitalizeFirstLetter(res_extended);
            
    hours = now.getHours();
    minutes = now.getMinutes();
    seconds = now.getSeconds();

    res_extended += ' , ' + addZero(hours) + ' ' + timeWords(hours, arrHours)
        + ' ' + addZero(minutes) + ' ' + timeWords(minutes, arrMinutes)
        + ' ' + addZero(seconds) + ' ' + timeWords(seconds, arrSeconds);

    res_short = addZero(now.getDate()) + '.' 
        + addZero(now.getMonth()) + '.'
        + now.getFullYear().toString() + ' - '
        + addZero(hours) + ':'
        + addZero(minutes) + ':'
        + addZero(seconds);
                 
    blockExtended.textContent = res_extended;
    blockShort.textContent = res_short;
};
//let date = Date.now();
setInterval(showDateTime,1000);
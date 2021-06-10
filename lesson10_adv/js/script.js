'use strict';
const btnAddLiItem = document.getElementsByTagName('button')[0];
const inputItem = document.querySelector('[type="text"]');
const list = document.getElementsByTagName('ul')[0];

btnAddLiItem.addEventListener('click',()=>{
    let newItem = document.createElement('li');
    let inputValue = inputItem.value;
    newItem.textContent = inputValue;
    list.appendChild(newItem);
    inputItem.value = '';

})
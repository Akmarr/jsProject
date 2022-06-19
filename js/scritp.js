"use strict";


let storeName = 'Rusty';
const storeDescription = { 
    budget: 10000,
    employees:['Andy','Harry','Olaf'],
    products:{
        pasta:50,
        tuna:180
    },
    open:true
};

const answers = [];

answers[0] = prompt('How old are you?');
answers[1] = prompt('What is your name?');
answers[2] = prompt('What is your surname?');

document.write(answers);
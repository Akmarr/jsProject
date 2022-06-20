"use strict";


const numberOfFilms = +prompt('How many movies did you watch?', ''); 

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:{},
    privat: false

};
const answerFirst = prompt('Last one of watched movie?', ''),
      answerSecond = prompt('How do you rate this movie?', ''),
      answerThird = prompt('Last one of watched movie?', ''),
      answerFourth = prompt('How do you rate this movie?', '');

personalMovieDB.movies[answerFirst] = answerSecond;
personalMovieDB.movies[answerThird] = answerFourth;

console.log(personalMovieDB);







// let storeName = 'Rusty';
// const storeDescription = { 
//     budget: 10000,
//     employees:['Andy','Harry','Olaf'],
//     products:{
//         pasta:50,
//         tuna:180
//     },
//     open:true
// };

// const answers = [];

// answers[0] = prompt('How old are you?');

// answers[1] = prompt('What is your name?');

// answers[2] = prompt('What is your surname?');

// document.write(answers);

// let incr = 10,
//     decr = 10;
    
// // incr++;
// // decr--;

// console.log(++incr);
// console.log(--decr);
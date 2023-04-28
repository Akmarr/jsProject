"use strict";

let  numberOfFilms;

function start() {
       numberOfFilms = +prompt('How have movies you watched?');
   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
       numberOfFilms = +prompt('How have movies you watched?');  
   }    
}

function rememberMyFilms () {
   for(let i = 0; i<2; i++) {
      const a = prompt('One of the last seen movie?', ''),
            b = prompt('How match estimate movie?', '');
      if(a != null && b!= null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] =b;
            console.log('Done');
            
      } else {
         console.log('Error');
         i--;
      }    
   
   }

}

function detectPersonalLevel() {

   if( personalMovieDB.count < 10){
      console.log('You have watch to little movies');
      
   }else if( personalMovieDB.count >= 10 && personalMovieDB < 30) {
      console.log('You are classic watcher');

   }else if( personalMovieDB.count >= 30) {
      console.log('You are cinemaaddict');
   }else{
      console.log('An error ocured');
   }
}

start();
const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

function showMyDB(hidden){
   if(!hidden){
          console.log(personalMovieDB);
   }
}

function wrightYourGenres(){
   for(let i =1; i <=3; i++){
      
      personalMovieDB.genres[i - 1] = prompt(`You best genre for number ${i}`);

   }
}
wrightYourGenres();



// let i = 0;

// while (i <= 10)

// {

//    console.log(i);

//    i=i+10;

// }

// let num = 20;
// function showFirstMessage(text){
//     console.log(text);
//     num = 20;
// }

// showFirstMessage("Hey you!");



// function sayHello(name) {
//        let someName = name;
//        return "Hello, " + someName;
//    }

// console.log(sayHello(''));



// let arrNum = [];
// function returnNumbers(number){
//     let arrNum = [];
//  let a = number - 1;
//  let b = number;
//  let c = number + 1;
//  arrNum = [a,b,c];
//    return arrNum; 

// }
// console.log(returnNumbers(55));

// function getMathResult(firstNum, secondNum){
                      
//            let number = firstNum;  

//            let result = number;  

//             for(let j = 1; j < secondNum; j++){
                                            
//                 number = firstNum + number;
               
//               result = result +  "---" + number ;
              
//             }
                        
//         return result;                     

// }
// console.log(getMathResult(5,3)); 

// let userName = 'John';
// let userNumber = 25;
// userNumber--;
// console.log(userNumber); 
// const personalMovieDB = [];

// for(let i = 0; i < 2; i++){
//     const a = prompt('One of the latest movies?', ''),
//           b = prompt('Rate it', ''); 

//     if(a != null && b != null && a != '' && b != '' && a.length < 50){
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     }else{
//         console.log('error');
//         i--;
//     }      
// }
// if(personalMovieDB.count < 10){
//     console.log("Too few movies watched");
// }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
//      console.log("You are classic viewer");   
// }else if(personalMovieDB.count >= 30){
//     console.log("You are movies fan");
// }else{
//     console.log("Error");
// }

// console.log(personalMovieDB);

// let result = '';
// const lenght = 7;
// for(let i = 1; i < lenght; i++){
//     for(let j = 0; j < i; j++){
//         result += "*";
        
//     }
//     result += '\n';
// }

// console.log(result);
    
// const len = 11;
// for(let i = 5; i < len; i++ ){
//     console.log(i);
// }

// const ln = 10;
// for(let i = 20; i > ln; i--){
//     if(i < 13){
//         break;
//     }
//     console.log(i);
// }



// for(let i = 2; i < 11; i++ ){
//     if(i % 2 == 0){
//         console.log(i);
//     }
    
// }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }
// let num = 2;
// while(num < 16){
//     num++;
//       if(num % 2 === 0){
//         continue;
//       }else{
//         console.log(num);
//       }
// }

// let arr = [];
// for(let i = 5; i <= 10; i++){
//     arr[0] = i;
//     console.log(arr); 
// }

// const arrayOfNumbers = [];

 
// for(let i = 5; i <= 10; i++){
//     arrayOfNumbers[i - 5] = i;
    
// console.log(arrayOfNumbers); 
// }




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
"use strict";

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result);


// const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     for (let i = 1; i <= data.length; i++) {
//         result[i - 1] = data[data.length - i]
//     }

//     console.log(result);
//     return result;

// Место для первой задачи

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }
    
// let i = 2;
// while (i <= 16 && i % 2 != 0) {
//     // while (i % 2 === 0 ){
//     //     continue;
//     // }
//     console.log(i);
//   i++;
// }

// const arrayOfNumbers = [];

//     for (let i = 5; i < 11; i++) {
//         arrayOfNumbers[i] = i;
//     }

//     console.log(arrayOfNumbers);
//     return arrayOfNumbers;




// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }

// let result = '';
// const lenght = 7;

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue first;
//             console.log(`Third level: ${k}`);
            
//         }
//     }
// }

// console.log(result);


// let num = 50;

// // while (num <= 55) {
// //     console.log(num);
// //     num++;
// // }

// // do {
// //     console.log(num);
// //     num++;
// // }
// // while (num <= 55);

// for (let i = 1; i < 8; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// } 












// if (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log("Error!")
// }

// const num = 50;

// if (num < 49) {
//     console.log("Error");
// } else if (num > 100) {
//     console.log("Too much");
// } else {
//     console.log("Ok!");
// }

// (num === 50) ? console.log("ok") : console.log("err");

// switch (num) {
//     case 49:
//         console.log("Neverno");
//         break;
//     case 100:
//         console.log("Neverno");
//         break;
//     default:
//         console.log("Ne v etot raz")
//         break;
// }



// const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genders: [],
//     privat: false
// };

// const a = prompt("Один из последних фильмов", ""),
//       b = prompt("На сколько вы его оцените?", ""),
//       c = prompt("Один из последних фильмов", ""),
//       d = prompt("На сколько вы его оцените?", "");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);


// alert('Hello');

// const result = confirm('Are you here?');
// console.log(result);

// const answer = prompt("Вам есть 18?", "18");
// console.log(typeof(answer));

// let number = 4.5;
// const person = "Alex";
// const bool = true;


// const obj = {
//     name: "John", //ключ: "значение"
//     age: 25,
//     isMarried: false
// };

// console.log(obj.name);

// let arr = ['plum.png, orange.jpeg, apple.bmp', [], {}];

// const array = [1, 2, 3]; //массив
// console.log(array[1]);

// const object = { //объект
//     'Anna': 500,
//     'Jane':600
// };

// // object.b = '123';
// object['b'] = '123';

// console.log(object.b);




// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);


// const obj = {
//     a: 50
// };

// obj.a = 10;
// console.log(obj.a);

// {
//     let result = 50;
// }
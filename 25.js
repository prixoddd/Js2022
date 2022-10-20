"use strict";

let num = 20;

function showFirstMessage(text) {
    console.log(text);
    num = 20;
}

showFirstMessage("Hello");

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));

function ret() {
    let num = 50;

    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {

};


const calc = (a,b) => a + b;
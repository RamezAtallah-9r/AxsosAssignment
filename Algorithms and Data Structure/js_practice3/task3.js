const prompt = require('prompt-sync')();

function welcome(){
    console.log("Welcome to Coding!");
}
welcome();


function square(a){
    return a * a;
}
let a = parseInt(prompt("Enter a number: "));
console.log("The square of the number is: " + square(a));

function convertToCelsius(f){
    return (f - 32) * 5 / 9;
}
let f = parseInt(prompt("Enter a Fahrenheit degree: "));
var c = convertToCelsius(f);
console.log(f + " degrees Fahrenheit is equal to " + c + " degrees Celsius.");

function isEven(e){
    if(e % 2 == 0){
        return true;
    } else {
        return false;
    }
}
let e = parseInt(prompt("Enter a number: "));
console.log(e + " is even: " + isEven(e));
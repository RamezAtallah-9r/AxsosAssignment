const prompt = require('prompt-sync')();

function square(a){
    return a * a;
}
let a = parseInt(prompt("Enter a number: "));
console.log("The square of the number is: " + square(a));

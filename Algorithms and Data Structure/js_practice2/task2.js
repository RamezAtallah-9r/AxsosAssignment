const prompt = require('prompt-sync')();

let a = parseInt(prompt("Enter a number: "));
if (a>=0){
    console.log("The number is positive");
}
else{
    console.log("The number is negative");  
}

let b = parseInt(prompt("Enter a Time: "));
if(b>=12){
    console.log("good night");
}
else{
    console.log("good morning");
}

let c = parseInt(prompt("Enter a Grade: "));
if(c>=90){
    console.log("A");
}
else if(c>=80 && c<90){
    console.log("B");
}
else if(c>=70 && c<80){
    console.log("C");
}
else{
    console.log("D");
}

let d = prompt("Enter A Day: ").toLowerCase();

if(d=="sunday"||d=="monday"||d=="tuesday"||d=="wednesday"){
    console.log("week day");
}
else if(d=="thursday"||d=="friday"||d=="saturday"){
    console.log("week end");
}
else{
    console.log("invalid day");
}

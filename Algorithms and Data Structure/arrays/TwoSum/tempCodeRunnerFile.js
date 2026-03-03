const prompt = require('prompt-sync')();
let arr = prompt("Enter an array of numbers (comma separated): ");
let target = prompt("Enter the target number: ");
arr = arr.split(',').map(Number);

var map = new Map();
for (var i = 0; i < arr.length; i++) {
    var complement = target - arr[i];
    if(map.has(complement)){
        console.log("Indices: " + map.get(complement) + ", " + i);
        break;
    }
    else{
        map.set(arr[i], i);
    }
}

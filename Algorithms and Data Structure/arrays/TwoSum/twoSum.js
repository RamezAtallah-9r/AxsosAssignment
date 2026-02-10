const prompt = require('prompt-sync')();


let arr = prompt("Enter an array of numbers (comma separated): ");
let target = prompt("Enter the target number: ");
arr = arr.split(',').map(Number);
var found = false;
for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] == target) {
            console.log("Indices: " + i + ", " + j);
            found = true;
            break;
        }
    }
    if (found) {
        break;  
    }
}
var map=[];
function addmap(arr,x,y) {
    arr.push([x,y]);
    return arr;
}
function search(arr,z){
    for(var i=0;i<arr.length;i++){
        if(arr[i][0]==z){
            return arr[i][1];
        }
}}
for (var i = 0; i < arr.length; i++) {
    var complement = target - arr[i];
    var index = search(map, complement);
    if (index !== undefined) {
        console.log("Indices: " + index + ", " + i);
        break;
    }
    addmap(map,arr[i],i);
}

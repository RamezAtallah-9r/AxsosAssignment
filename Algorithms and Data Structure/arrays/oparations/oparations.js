
//Accessing Elements
let colors = ["red", "blue", "green", "yellow", "purple"];
console.log(colors[0]);
console.log(colors[colors.length-1]);
console.log(colors[1]);
colors[2]= "orange";
for(i=0;i<colors.length;i++){
    console.log(colors[i]);
}

//Traversing an Array

let numbers = [10, 20, 30, 40, 50];
for(let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}

for(let i=numbers.length-1;i>=0;i--){
    console.log(numbers[i]);
}

//Searching in an Array
numbers = [5, 10, 15, 20, 25];
for(let i=0;i<numbers.length;i++){
    if(numbers[i]==25){
        console.log("Found 15 at index "+i);
    }
    else{
        console.log("Not Found");
    }
}



//Sorting an Array
let scores = [50, 20, 70, 10, 40];
function swap(arr, index1, index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}
function quickSort(arr){
    if(arr.length<2){
        return arr;
    }
    if(arr.length==2){
        if(arr[0]>arr[1]){
        arr=swap(arr, 0, 1);
        return arr;
    }}

    let pivot = arr[0];
    let left = [];
    let right = [];
    for(let i=1;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }
        else{
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}              
console.log(quickSort(scores)); 


let scores2 = [50, 20, 70, 10, 40];
function swap(arr, index1, index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}

for(let i =0;i<scores2.length;i++){
    for(let j=0;j<scores2.length;j++){
        if(scores2[i]>scores2[j]){
            swap(scores2, i, j);
        }
    }
}
console.log(scores2);


let names = ["Shatha", "Sara", "Lina", "Sami", "Dalia"];
a=names[0].split("");
console.log(names);
function swap(arr, index1, index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}

for(i=0;i<names.length;i++){
    for(j=0;j<names.length;j++){
        if(names[i]<names[j]){
            swap(names, i, j);
        }
    }
}
console.log(names);


//Inserting Elements
let animals = ["dog", "cat", "rabbit"];
animals.push("elephant");


var a=["lion"];
animals=a.concat(animals)
console.log(animals);

var b=["tiger"];
var sub1=[];
var sub2=[];
for(i=0;i<animals.length;i++){
    if(i<=1){
        sub1.push(animals[i]);
    }
    else{
        sub2.push(animals[i]);
    }
}
animals=sub1.concat(b).concat(sub2);
console.log(animals);


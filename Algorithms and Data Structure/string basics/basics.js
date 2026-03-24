
// Remove the spaces from the string
function removeBlanks(str) {
    // Your code here
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            newStr += str[i];
        }
    }
    return newStr;
}
console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));



//2. Get Digits

function getDigits(str) {
  // Your code here
      var newStr = [];
    for (var i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            newStr.push(Number(str[i]));
        }
    }
    return newStr;
}
console.log((getDigits("abc8c0d1ngd0j0!8")));

//3 Acronyms

function acronym(str) {
  // Your code here
  str = str.split(" ");  
  var newStr = "";
  for (var i = 0; i < str.length; i++) {
      newStr += str[i][0].toUpperCase();
  }
  return newStr;
}
console.log(acronym("there's no free lunch - gotta pay yer way."));

//4 Count Non-Spaces
function countNonSpaces(str) {
  // Your code here
  var count=0;
  for(var i=0;i,i<str.length;i++){
      if(str[i]!=" "){
          count++;
      }
  }
  return count;
}
console.log(countNonSpaces("Honey pie, you are driving me crazy"));

//Remove Shorter Strings

function removeShorterStrings(arr, minLength) {
  // Your code here
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
      if (arr[i].length >= minLength) {
          newArr.push(arr[i]);
      }
  }
  return newArr;
}
console.log(removeShorterStrings(["hello", "hi", "hola"], 3));
// toString method in Javascript

const num = 54;

console.log(num);

console.log(num.toString());

//Converts Number to Binary. Works only on Numbers
console.log(num.toString(2));

// ParseInt converts Numbers in string form to Number form


const numInStr = "54";
const str = "Hello";
console.log(parseInt(numInStr));
console.log(parseInt(str));

// Convert Array to String

const arr= ["Goat", "Cat", "Pig", ["were", [3, "best"], "friends", ]];

console.log(arr.toString());

// convert Object to String

const obj = {name: "Sriki"}
console.log(obj.toString());
console.log(obj);

function print() {};
const arr1 = [];
const obj1 = {};
console.log(
  Object.prototype.toString.call(print),
  Object.prototype.toString.call(arr1),
  Object.prototype.toString.call(obj1)
)

// Reference
// https://www.freecodecamp.org/news/javascript-tostring-example-convert-number-to-string-in-js/

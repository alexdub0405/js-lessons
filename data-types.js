// commentary in one row,  /*commentary in 2 or more rows*/


//data tipes (primitives)

//String
const greetings = "hi there";
console.log("primitives");
console.log(typeof greetings);

//Number
const num = 100;
console.log(typeof num);

//Boolean
const boolTrue = true;
const boolFalse = false;
console.log(typeof boolTrue);
console.log(typeof boolFalse);

//Null
const someNullValue = null;
console.log(someNullValue);

//Undefined
let someUndefinedValue;
console.log(someUndefinedValue);


//Objects
const obj = {
  name: "Alex",
  age: 38,
  gender: "male",
};

const obj2 = {};
obj.name = "Alex";
obj.age = 38;
obj.gender = "male";

//big int
const bigInt = 99999999999999999999999n;
console.log(typeof bigInt);

//symbol
const user = {
  id: 10,
  age: 38,
  height: 177,
};
const id = Symbol("some new symbol");
user[id] = 500;
console.log(typeof id);

console.log(typeof obj);


//Conditional Statements - if, else, switch

const userLoggedIn = true;
if (userLoggedIn) {
  alert("you are logged in");
} else {
  alert("you are not logged in");
}

//ternary operator

userLoggedIn ? alert("you are logged in") : alert("you are not logged in");

const age = 70;
switch (age) {
  case 10:
    alert("10 years");
    break;
  case 20:
    alert("20 years");
    break;
  case 30:
    alert("30 years");
    break;
  default:
    alert("your age");
}
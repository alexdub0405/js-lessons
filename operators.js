//Arithmetic Operators
const num1 = 10;
const num2 = 5;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2); // % returns the division remainder.


//Assignment Operators
let num3 = 50;
num3 += 30; // num3 = num3 + 30
console.log(num3);


//Comparison Operators
const age = 20;
if(age <= 25) {
    alert('truth');
}

//Logical Operators
const myName = "Alex";
const myAge = 25;
if(myAge === 25 && myName === "Alex") {
    alert('this is truth'); // && - and
}
if(myAge === 25 || myName === "Alex") {
    alert('this is truth'); // || - or
}
if(myAge === 25 && myName === !"Alex") {
    alert('this is truth'); // ! - not
}

//String Comparison
console.log('my' + 'string');


//Unary operator
const obj = {
    name: "Alex",
    age: 38,
    height: 177,
  };
  delete obj.age;
  console.log(obj);

  //Relational operator
  console.log('height' in obj); //true or false
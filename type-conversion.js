//Type Conversion

const age = 0;
if (undefined) {
  console.log("true");
}

// 0
// -0
// NaN (not a number)
// undefined
// Null
// ''
// false

let num1 = 10;
let num2 = null;
console.log(num1 + num2); // result is 10


// ==, ===
let num3 = 10;
let num4 = "10";
console.log(num3 == num4); // true

let num5 = 10;
let num6 = "10";
console.log(num5 === num6); // false
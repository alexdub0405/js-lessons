/* js loops:
- for
- for off
- for in
- while
- do while */

// for
const subscribers = [
  { name: "Alex", isCloseFriend: true },
  { name: "Ellen", isCloseFriend: false },
  { name: "Matt", isCloseFriend: true },
  { name: "Jenny", isCloseFriend: false },
  { name: "Steve", isCloseFriend: true },
];
for (let i = 0; i < subscribers.length; i++) {
  // i === 0
  // i < 5 === true
  // console.log(subscribers[0])
  // i + 1
  // i === 1
  // 1 < 8 === true
  // console.log(subscribers[1])
  // i + 1
  // i === 2
  // 2 < 8 === true
  // console.log(subscribers[2])
  console.log(subscribers[i]);
}

// for of
for (const item of subscribers) {
  console.log(item);
}

// for in
const obj = {
  name: "Alex",
  gender: "male",
  age: 18,
  nationality: "ukrainian",
};
for (const key in obj) {
  console.log(obj[key]);
}

// while
let i = 0;
while (i < subscribers.length) {
  console.log(subscribers[i]);
  i++;
}

// do while
/*do {
        console.log(subscribers[i]);
        i++;  
    } while(i > 0)*/ // виконується навіть при неправильній умові

// home work -1
const Numbers = [1, 2, 3, 4, 5];

function squareArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= arr[i];
  }
  return arr;
}

console.log(squareArr(Numbers));

// home work -1
const people = [
  { name: "Ross", sex: "male" },
  { name: "Monica", sex: "female" },
  { name: "Chandler", sex: "male" },
  { name: "Phoebe", sex: "female" },
  { name: "Joey", sex: "male" },
  { name: "Rachel", sex: "female" },
];
function addAdjectives(arr) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element.sex === "male") {
        element.name += " handsome";
    } else {
        element.name += " beautiful";
    }
  }
  return arr;
}
console.log(addAdjectives(people))


function getNewNumbers(numbArr, number) {
  let counter = 0;
  for(item of numbArr) {
    if(item === number) {
      counter++;
    }
  }
  return counter > 0 ? counter: 'not in array';
}

console.log(getNewNumbers([1, 3, 5, 7, 9, 1, 2, 8, 9, 1], 1));
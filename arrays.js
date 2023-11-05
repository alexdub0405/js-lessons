// Arrays

const myArray = [1, 2, 3, 4];
console.log(myArray);

const userArray = [
  { name: "user1", age: 25, profession: "programmer" },
  { name: "user2", age: 35, profession: "tester" },
];
console.log(userArray[0]); // 0-index (0 - first element in array)

const subscribers = [
  { name: "user1", age: 25, profession: "programmer" },
  { name: "user2", age: 35, profession: "tester" },
];

console.log(subscribers.length);

const youJustGotNewSubscriber = true;

if (youJustGotNewSubscriber) {
  subscribers.push({ name: "user3", age: 45, profession: "teacher" });
  // push - add element at the end of array, unshift - at the start of array
  subscribers.splice(0, 1, "new item"); // del or replace item from array
  subscribers.shift(); // del first item from array
  subscribers.pop(); // del last item from array
}

console.log(subscribers);



// home work
const mySubscribers = [
    {amount: 1},
    {amount: 2},
    {amount: 3},
];

function congratsIfMoreThan100(mySubscribers) {
  if (mySubscribers.length > 2) {
    alert("enough");
  }
    else {
        alert('not enough');
    }
  }
congratsIfMoreThan100(mySubscribers);

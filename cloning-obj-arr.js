// CLONING OBJECTS

const obj1 = {
  nane: "Alex",
  age: 38,
  favFood: {
    sweet: "chocolate",
    salt: "meat",
  },
  sayHello() {
    console.log("hello");
  },
};

// shallow cloning
// const obj2 = { ...obj1 };
// const obj2 = Object.assign({}, obj1); - shallow cloning

// deep cloning (doesn't work with methods)
// const obj2 = JSON.parse(JSON.stringify(obj1));

// Lodash method is used to create a deep copy of the value and it recursively clones the value
const obj2 = _.cloneDeep(obj1);

obj2.nane = "John";
obj2.favFood = "potato";

console.log(obj1);
console.log(obj2);


// CLONING ARRAYS

const arr1 = [
  {
    name: "Alex",
    age: 38,
    sayHello() {
        console.log("hello");
      },
  },
  {
    name: "John",
    age: 30,
  },
  {
    name: "James",
    age: 25,
  },
];

// const arr2 = [...arr1];
// const arr2 = JSON.parse(JSON.stringify(arr1));
const arr2 = _.cloneDeep(arr1);

arr2.push({
    name: 'Rick',
    age: 38,
});

console.log(arr1);
console.log(arr2);

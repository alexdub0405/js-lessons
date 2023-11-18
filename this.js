// THIS keyword

// 1
console.log(this);

// 2
function showThis() {
  console.log(this);
}
showThis();

// 3
const obj = {
  showThis() {
    console.log(this);
  },
};
obj.showThis();

// 4
function Person(name) {
  this.name = name;
  this.sayHello = function () {
    console.log("Hello", this.name);
  };
}
const person1 = new Person("Alex");
person1.sayHello();

// 5
class Person2 {
  constructor(name) {
    this.name = name;
  }
  showThis() {
    console.log("Hello", this.name);
  }
}
const person2 = new Person2("Alex");
person2.showThis();

// 6
const obj2 = {
  sayHello() {
    function inner() {
      console.log(this);
    }
    inner(); // this === window
  },
  sayHelloArrow() {
    const inner = () => {
      // this === obj
      console.log(this);
    };
    inner();
  },
};
obj2.sayHello();
obj2.sayHelloArrow();

// 7
const obj3 = { name: "Alex", age: 38 };
const obj4 = {
  sayHello2(a, b, c) {
    console.log(a, b, c);
    console.log(this.age);
  },
};
obj4.sayHello2.call(obj3, 1, 2, 3);
obj4.sayHello2.apply(obj3, [1, 2, 3]);

// 8
const obj5 = { name: "Alex", age: 38 };
function sayHello3() {
  console.log(this.age);
}
const updatedContextSayHello = sayHello3.bind(obj5);
updatedContextSayHello();

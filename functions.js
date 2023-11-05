// Functions

const userName = "Alex";
const age = 30;
const gender = "male";
function sayHello(name, age, gender) {
  alert("hi there " + name);
  if (age < 18) {
    alert("too young");
  }
  if (gender === "male") {
    alert("welcome");
  }
}
sayHello(userName, age, gender);

const newUserName = "Alex"; // 1

function createUserName(name) {
  return name.toUpperCase(); // 2
}

const updatedName = createUserName(newUserName); // 3

console.log(updatedName); // 4

function sayHello(greetings) {
  // function declaration
  alert(greetings);
}

const sayHello2 = function (greetings) {
  // function expression
  alert(greetings);
};
sayHello2("hi there");

const car = {
  speed: 100,
  color: "red",
  drive: function (speed) {
    console.log(speed);
  }
};
car.drive(100);

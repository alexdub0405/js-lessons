// Array methods

const users = [
    {name: 'Alex', age: 38, sex: 'male'},
    {name: 'Ellen', age: 25, sex: 'female'},
    {name: 'Steve', age: 30, sex: 'male'},
    {name: 'Margo', age: 28, sex: 'female'},
    {name: 'Vince', age: 41, sex: 'male'},
];


// forEach method
const count = {
    men: 0,
    women: 0
}
users.forEach(function(item, index) {
    item.sex === 'male' ? count.men++ : count.women++;
})
console.log(count)


// filter method
const adultUsers = users.filter(function(item) {
   return item.age >= 30;
});
console.log(adultUsers);


// map method
const correctNames = users.map(function(item) {
    return  item.sex === 'male' ? 'mr ' + item.name : 'mrs ' + item.name;
})
console.log(correctNames)


// reduce method

// 1. accumulator = 0, currentValue = 38
// 2. accumulator = 38, currentValue = 25
// 3. accumulator = 63, currentValue = 30
// 4. accumulator = 93, currentValue = 28
// 5. accumulator = 121, currentValue = 41 = 126

const summ = users.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue.age;
 }, 0);
 console.log(summ / users.length);


 // find method (повертає тільки одне значення, на відміну від filter)
 const foundObj = users.find(function(item) {
    return item.name === 'Alex';
 });
 console.log(foundObj);


 // some method
 const someObj = users.some(function(item) {
    return item.age > 30;
 });
 console.log(someObj);


 // every method
 const everyUser = users.every(function(item) {
    return item.age > 30;
 });
 console.log(everyUser);


 // findIndex method
 const usersIndex = users.findIndex(function(item) {
    return item.name === 'Margo';
 });
 console.log(usersIndex);

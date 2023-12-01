// Event Loop

function one() {
    console.log(1);
}

function two() {
    console.log(2);
}

function three() {
    console.log(3);
}

function four(number) {
    console.log(number);
}

setTimeout(one, 0); // moved to Web API

two();

setTimeout(three, 1000); // moved to Web API

console.log(4);

Promise.resolve(5).then(four);

// https://felixgerschau.com/javascript-event-loop-call-stack/
// https://www.jsv9000.app/
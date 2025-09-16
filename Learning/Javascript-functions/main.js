// default parameter
function calc(a, b = 0) {
    return (2 * (a + b))
}
// console.log(calc(3))

//rest parameter
function collectThings(x, ...y) {
    console.log(x)
    console.log(y)
}
// collectThings(1, 2, 3, 4, 5, 6, 7, 8, 9);

// arrow functions
const add = (x, y) => x + y;

const subtract = x => 10 - x;

// nested functions
function outer() {
    console.log("outer")
    function inner() {
        console.log("Inner")
    }
    inner();
}

// outer();

// function scopes
function doSomething() {
    let x = 10;
    const y = 20;
    var z = 30;

    console.log(x, y, z)
}

// console.log(z) // z is not defined

// doSomething();

// closure
function outer(x) {
    function inner(y) {
        return x + y;
    }
    return inner;
}

const outerReturn = outer(10);
// console.log(outerReturn(20))

// callback function
function foo(fun) {
    if (true) {
        fun();
    }

    if (true) {
        fun();
    }
}

const bar = function () {
    console.log("bar");
}
// foo(bar);

// higher order function
function getCapture(camera) {
    camera();
}

// getCapture(function () {
//     console.log("canon");
// })

function returnFn() {
    return function () {
        console.log("returning...");
    }
}
const fn = returnFn();
// fn();

// pure function
function greet(name) {
    console.log(`hello ${name}`)
}

// greet("Anas");
// greet("Anas");
// greet("Anas");

// impure function
let greeting = "hello";

function sayGreeting(name) {
    console.log(`${greeting} ${name}`)
}

// sayGreeting("Anas")
// sayGreeting("Anas")
// greeting = "Hola";
// sayGreeting("Anas")
// sayGreeting("Anas")

// IIFE
(function () {
    console.log("IIFE");
})();

// recursion
function foo() {
    console.log("foo");
    foo();
}
// foo();

const secondFoo = function buz() {
    secondFoo();
}
// secondFoo();

// // format:
// function recurse(){
//     if(baseCondition){
//         // do something
//         return;
//     }

//     recurse();
// }

function fetchWater(count) {
    if (count === 0) {
        console.log("No more water left!")
        return;
    }

    console.log("fetching water...")
    fetchWater(count - 1);
}

// fetchWater(3#8F6628);
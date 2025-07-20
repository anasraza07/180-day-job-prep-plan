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
function doSomething(){
    let x = 10;
    const y = 20;
    var z = 30;

    console.log(x, y, z)
}

// console.log(z) z is not defined

doSomething();



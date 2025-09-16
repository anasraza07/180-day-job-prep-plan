// How to Create a Promise in JavaScript:
const promise = new Promise((resolve, reject) => {
    // condition to resolve or reject the promise
})

// a promise to resolve after a timeout of two seconds.
const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Done!"), 2000) // resolved value of the promise is 'Done!'.
})

// const promiseThree = new Promise((resolve, reject) => {
//     const num = Math.random();
//     if (num >= 0.5) {
//         resolve("Promise is fulfilled!")
//     } else {
//         reject("promiseThree error: Promise failed!")
//     }
// })
// promiseThree.then(handleResolve, handleReject);

// How to Attach a Callback to a Promise:
function handleResolve(value) {
    console.log(value);
}

function handleReject(reason) {
    console.error(reason);
}


// Promise.resolve("Successful").then((result) => console.log(result)); // immediately resolved or rejected promise with .then() method

// Promise.reject("Not Successful").then((result) => console.log(result)); // The error in the rejected promise is because you need to define a separate callback to handle a rejected promise.

// Promise.reject("Not Successful").then(
//     () => { },
//     (reason) => console.error("error:",reason));

// Promise.reject(new Error())
//     .catch((reason) => console.error(reason))

const promise1 = Promise.resolve("First promise value")
const promise2 = new Promise((resolve) => {
    setTimeout(() => resolve("Second promise value"), 2000)
})
const promise3 = new Promise((resolve) => {
    setTimeout(() => resolve("Third promise value"), 1000)
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => reject("reason of rejection promise4"), 2000)
})

// const promise5 = new Promise((resolve, reject) => {
//     setTimeout(() => reject("reason of rejection promise5"), 2000)
// })

// console.log(Promise.any([promise4, promise5]));
// Promise.any([promise4, promise5])
//     .catch(error => {
//         error.errors.forEach(err => console.log(err))
//         console.error(error)
//     });


// Promise.all([promise1, promise2, promise3])
//     .then(values => {
//         values.forEach(value => {
//             console.log(value)
//         })
//     })
//     .catch(reason => console.error(reason))

// console.log(Promise.race([promise1, promise2, promise3]))

// console.log(Promise.any([promise4, promise2, promise3]))

console.log(Promise.allSettled([promise1, promise2, promise3, promise4]))



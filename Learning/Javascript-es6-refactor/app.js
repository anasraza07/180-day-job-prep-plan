const items = document.getElementsByTagName("li");

// for (var x = 0; x < items.length; x++) {
//     items[x].onclick = function () {
//         console.log(x)
//     }
// }

for (let x = 0; x < items.length; x++) {
    items[x].onclick = function () {
        console.log(x)
    }
}

// var And let Difference in for loop //
// for(var i = 0; i < 3; i++){
//     setTimeout(function(){console.log("var", i)}, 1000)
// }
// for(let i = 0; i < 3; i++){
//     setTimeout(function(){console.log("let", i)}, 1000)
// }

// Spread operator //
var nums = [1, 3, 5, 7, 9];
// console.log(nums);
// console.log(...nums);

// var num2 = [nums, 2, 4, 6, 8]
// console.log(num2)

// var num2 = [...nums, 2, 4, 6, 8]
// console.log(num2)

// var num3 = [12, 21, 30];

// function addNums(a, b, c) {
//     console.log(a + b + c)
// }

// addNums(...num3);

// es5 // 
const nameNinja = "Crystal"
const belt = "Black"

// var ninja = {
//     nameNinja: nameNinja,
//     belt: belt,
//     chop: function (x) {
//         console.log(x)
//     }
// }

// // es6 //
// const ninja = {
//     nameNinja, belt,
//     chop(x) {
//         console.log(x);
//     }
// }

// console.log(ninja)
// ninja.chop(5);

// new string methods //
// repeat:
// let str = "goodbye";
// console.log(str.repeat(200));

// startsWith:
// console.log(str.startsWith("good"));
// console.log(str.startsWith("bye", 4));
// console.log(str.startsWith("god"));

// endsWith:
// console.log(str.endsWith("bye"));
// console.log(str.endsWith("good", str.length -3));

// example:
// let youSay = "goodbye";

// if (youSay.startsWith("goodbye")) {
//     var iSay = "hello";
// }

// console.log(`You say ${youSay}, I say ${iSay}.`);

// includes:
// const str1 = "My name is Anas";
// console.log(str1.includes("name"))
// console.log(str1.includes("names"))

// normal function:
// const greeting = function (name) {
//     console.log(name + " says hiyyyaaa")
// }
// greeting("Mark")

// arrow function:
// const greeting = name => console.log(`${name} says hiyyyaaa`);
// greeting("Mark with arrow func")

// arrow function binds the 'this'
// const ninja = {
//     name: "Ryu",
//     chop(x) {
//         setInterval(() => {
//             if (x > 0) {
//                 console.log(this.name + " chopped the enemy")
//                 x--;
//             }
//         }, 1000)
//     }
// }
// ninja.chop(5)

// Set Data Structure //
// const names = new Set();
// names.add("Shaun").add("Ryu").add("Ninja");

// names.delete("Ninja")
// console.log(names.has("Ryu"))
// // names.clear();

// console.log(names.size);
// console.log(names);

// // removing duplicates using Set:
// let ninjas = ["shaun", "ryu", "crystal", "yoshi", "ryu", "crystal"];

// const refinedNinjas = new Set(ninjas);
// console.log(refinedNinjas)

// ninjas = [...refinedNinjas]
// console.log(ninjas) // duplicates removed

// Generators //
function* gen() {
    const x = yield "pear";
    const y = yield "banana";
    const z = yield "apple";
    return x + y + z;
}

const myGen = gen();
console.log(myGen.next());
console.log(myGen.next(10));
console.log(myGen.next(5));
console.log(myGen.next(20));
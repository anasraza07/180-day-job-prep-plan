// alert("Hello world!")

// console.log("Hello world!")
// console.error("This is an error");
// console.warn("This is a warning");

const x = null;
const y = undefined;
let z;

// console.log(typeof x)
// console.log(typeof y)
// console.log(typeof z)

// String //
const s = "Hello world";

// console.log(s.substring(0, 5).toUpperCase())
// console.log(s.split("")); //

// const tags = "tech, code, IT";
// console.log(tags.split(", "))

// Arrays //
const numbers = new Array(1, 2, 3, 4, 5)
// console.log(numbers);
const fruits = ["apple", "oranges", "pears"];

fruits[3] = "grapes";

// console.log(fruits);
// console.log(fruits[1]);

// console.log(Array.isArray(fruits))
// console.log(Array.isArray("hello"))

// console.log(fruits.indexOf("oranges"))

// Objects // 
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["music", "movies", "sport"],
    address: {
        street: "123 st",
        city: "Boston"
    }
}

const { firstName, lastName, address: { city } } = person;

// console.log(firstName)
// console.log(lastName)
// console.log(city)

const todos = [
    {
        id: 1,
        text: "Take out trash",
        isCompleted: true,
    },
    {
        id: 2,
        text: "Meeting with boss",
        isCompleted: true,
    },
    {
        id: 3,
        text: "Dentist appt",
        isCompleted: false,
    }
]

// console.log(todos);

const todosJSON = JSON.stringify(todos);
// console.log(todosJSON) 

// Loops //
// for (let i = 0; i <= 10; i++) {
//     console.log(`For loop number: ${i}`);
// }

// let i = 0;
// while (i < 10) {
//     console.log(`While loop number: ${i}`);
//     i++;
// }

// for (let i = 0; i < todos.length; i++) {
//     console.log(todos[i].text)
// }

// for (let todo of todos) {
//     console.log(todo.text);
// }

// High order array methods: forEach, map, filter //

// todos.forEach(function(todo){
//     console.log(todo.text)
// })

// const todoText = todos.map(function (todo) {
//     return todo.text;
// })
// console.log(todoText)

// const todosCompleted = todos.filter(function (todo) {
//     return todo.isCompleted == true;
// }).map(function (todo){
//     return todo.text;
// })
// console.log(todosCompleted)

// Conditionals //
const a = 11;
const b = 11;

// if (a === 10) {
//     console.log("a is 10")
// } else if (a > 10) {
//     console.log("a is greater than 10")
// }
// else {
//     console.log("a is less than 10");
// }

// if(a > 5 || b > 10){
//     console.log("a is greater than 5 or b is greater than 10")
// }

// if(a > 5 && b > 10){
//     console.log("a is greater than 5 and b is greater than 10")
// }

// Ternary operator //
const color = a > 10 ? "red" : "blue"
// console.log(color)

// Switch statement //
const secondColor = "black";
switch (secondColor) {
    case "red":
        console.log("color is red");
        break;
    case "blue":
        console.log("Color is blue")
        break;
    default:
        console.log("color is not red or blue")
}
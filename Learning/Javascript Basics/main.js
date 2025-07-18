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

const s = "Hello world";

// console.log(s.substring(0, 5).toUpperCase())
// console.log(s.split("")); //

// const tags = "tech, code, IT";
// console.log(tags.split(", "))

const numbers = new Array(1, 2, 3, 4, 5)
// console.log(numbers);
const fruits = ["apple", "oranges", "pears"];

fruits[3] = "grapes";

// console.log(fruits);
// console.log(fruits[1]);

// console.log(Array.isArray(fruits))
// console.log(Array.isArray("hello"))

// console.log(fruits.indexOf("oranges"))

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

// for (let i = 0; i <= 10; i++) {
//     console.log(`For loop number: ${i}`);
// }

// let i = 0;
// while (i < 10) {
//     console.log(`While loop number: ${i}`);
//     i++;
// }

for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text)
 }

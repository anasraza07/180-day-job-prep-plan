// // EXAMINE THE DOCUMENT OBJECT //
// console.dir(document)
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// // document.title = 123;
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all) // each and everything in html
// console.log(document.all[7])
// // document.all[7].textContent = "Hello";
// console.log(document.forms[0])
// console.log(document.links)
// console.log(document.images)

// selecting methods
// console.log(document.getElementById("header-title"));
// const headerTitle = document.getElementById("header-title");
// const header = document.getElementById("main-header");
// headerTitle.textContent = "Hello";
// headerTitle.innerText = "Goodbye";
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = "<h4>Hello</h4>"
// header.style.borderBottom = "3px solid #000";

// // selecting by class name
// const items = document.getElementsByClassName("list-group-item")
// // console.log(items)
// items[0].textContent = "Hello2";
// items[1].style.fontWeight = "bold";
// items[2].style.backgroundColor = "yellow"

// // gives error
// // items.style.backgroundColor = "#f4f4f4"

// for(let i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = "#f4f4f4"
// }

// // selecting elements by tag name
// const li = document.getElementsByTagName("li")
// // console.log(li)
// li[0].textContent = "Hello2";
// li[1].style.fontWeight = "bold";
// li[2].style.backgroundColor = "yellow"

// // gives error
// // li.style.backgroundColor = "#f4f4f4"

// for(let i = 0; i < li.length; i++){
//     li[i].style.backgroundColor = "#f4f4f4"
// }

// // Query Selector //
// const header = document.querySelector("#main-header");
// header.style.borderBottom = "4px solid gray"

// const input = document.querySelector("input");
// input.value = "hello world!"

// const submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// const item = document.querySelector(".list-group-item");
// item.style.color = "red";

// const lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "green";

// const secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color = "blue";

// // Query selctor all //
// const titles = document.querySelectorAll("h3");
// // console.log(titles);
// titles[0].textContent = "Hello title 1";

// const odd = document.querySelectorAll("li:nth-child(odd)");
// const even = document.querySelectorAll("li:nth-child(even)");
// odd.forEach(eachOdd => eachOdd.style.backgroundColor = "#f4f4f4");
// even.forEach(eachEven => eachEven.style.backgroundColor = "#ccc");

// Traversing the DOM
const itemList = document.querySelector("#items");
// // parentNode //
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode.parentNode);

// // parentElement //
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentElement.parentElement);

// // childNodes //
// console.log(itemList.childNodes)

// // children
// console.log(itemList.children)
// console.log(itemList.children[1])
// itemList.children[1].style.backgroundColor = "yellow";

// // firstChild //
// console.log(itemList.firstChild);

// // firstElementChild //
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Hello1"

// // lastChild //
// console.log(itemList.lastChild);

// // lastElementChild //
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "Hey Last"

// // nextSibling
// console.log(itemList.nextSibling)

// // nextElementSibling
// console.log(itemList.nextElementSibling)

// // previousSibling
// console.log(itemList.previousSibling)

// // previousElementSibling
// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.color = "green";

// create element
// creating div
const newDiv = document.createElement("div");

// adding class
newDiv.className = "hello"

// adding id
newDiv.id = "hello1"

// adding attribue
newDiv.setAttribute("title", "hello div")

// creating text node
const newDivText = document.createTextNode("Hello World");

// // adding text to div //
// newDiv.appendChild(newDivText);

// const container = document.querySelector("header .container");
// const h2 = document.querySelector("header h2");

// newDiv.style.fontSize = "14px";
// newDiv.style.color = "gray";

// container.insertBefore(newDiv, h2)

// console.log(newDiv);

// events //
// const button = document.getElementById("button").addEventListener("click", function () {
//     console.log(123)
// })

// const button = document.getElementById("button").addEventListener("click", buttonClick)

// function buttonClick(event) {
//     // console.log("button clicked");
//     // document.querySelector("#header-title").textContent = "Changed";
//     // document.querySelector("#main").style.backgroundColor = "#f4f4f4";

//     // console.log(event);
//     // console.log(event.target);
//     // console.log(event.target.id);
//     // console.log(event.target.className);
//     // console.log(event.target.classList);
//     // const output = document.getElementById("output").innerHTML = "<h3>" + event.target.id + "</h3>"

//     // console.log(event.type)
//     // console.log(event.clientX)
//     // console.log(event.clientY)

//     // console.log(event.offsetX)
//     // console.log(event.offsetY)

//     // console.log(event.ctrlKey)
//     // console.log(event.shiftKey)
//     // console.log(event.altKey)
// }

// // Mouse events //

// const button = document.getElementById("button");
// const box = document.getElementById("box");

// // button.addEventListener("click", runEvent);
// // button.addEventListener("dblclick", runEvent);
// // button.addEventListener("mouseup", runEvent);
// // button.addEventListener("mousedown", runEvent);

// // box.addEventListener("mouseenter", runEvent)
// // box.addEventListener("mouseleave", runEvent)

// // box.addEventListener("mouseover", runEvent)
// // box.addEventListener("mouseout", runEvent)

// box.addEventListener("mousemove", runEvent);
const output = document.querySelector("#output");

// function runEvent(e) {
//     console.log("EVENT TYPE:", e.type)

//     output.innerHTML = "<h3>MouseX: " + e.offsetX + "</h3>" + "<h3>MouseY: " + e.offsetY + "</h3>"

//     box.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + "," + 40 + ")"
//     document.body.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + "," + 40 + ")"
// }

// Keyboard events //

const itemInput = document.querySelector("input[type='text']");
const form = document.querySelector("form");

itemInput.addEventListener("keydown", runEvent)

function runEvent(e) {
    console.log("EVENT TYPE:", e.type)

    // console.log(e.target.value)
    output.innerHTML = "<h3>" + e.target.value + "</h3>"
}
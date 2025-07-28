const btn = document.querySelector("button");
// btn.onclick = function (e) {
//     console.log("event handling in js")

//     // event details
//     console.log(e)
//     console.log(e.type)
//     console.log(e.target)
// }

btn.addEventListener("click", function (event) {
    console.log("clicked - handler 1")
    // console.log(event)
})

btn.addEventListener("click", function (event) {
    console.log("clicked - handler 2")
})

const handler3 = function () {
    console.log("clicked - handler 3")
}

btn.addEventListener("click", handler3)

btn.addEventListener("click", function () {
    console.log("clicked - handler 4")
})

btn.removeEventListener("click", handler3)


// btn.addEventListener("dblclick", function () {
//     console.log("dbl clicked - handler 2")
// })

const box = document.querySelector("div");
box.onmouseover = function (event) {
    console.log("you are inside the div")

    // event details
    console.log(event)
    console.log(event.type)
    console.log(event.target)
}
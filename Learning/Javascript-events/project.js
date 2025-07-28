const modeBtn = document.querySelector("#mode");
// let mode = "light";

modeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-toggle");

    // if (mode === "dark") {
    //     mode = "light"

    //     // document.body.style.background = "#fff"
    //     // document.body.style.color = "#000"

    //     document.body.classList.remove("dark")
    //     document.body.classList.add("light")


    // } else {
    //     mode = "dark"

    //     // document.body.style.background = "#000"
    //     // document.body.style.color = "#fff"

    //     document.body.classList.remove("light")
    //     document.body.classList.add("dark")
    // }
})
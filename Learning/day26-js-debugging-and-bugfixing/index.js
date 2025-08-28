const btn = document.getElementById("btn")
const container = document.getElementById("container")

btn.addEventListener("click", handleClick);

function handleClick() {
    if (btn.innerText == "updated") {
        btn.innerText = "CLICK ME"
        container.innerText = ""
        return;
    }

    let text = "updated"
    btn.innerText = text;

    handleContainer();
}

function handleContainer() {
    let content = "The button has been updated"
    container.innerText = content;
}
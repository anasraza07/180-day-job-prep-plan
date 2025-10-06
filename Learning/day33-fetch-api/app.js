const URL = "https://official-joke-api.appspot.com/random_ten";
const setupPara = document.querySelector("#setup")
const punchlinePara = document.querySelector("#punchline")
const jokeBtn = document.querySelector(".btn")

jokeBtn.addEventListener("click", () => {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setupPara.innerText = data[0].setup;
            punchlinePara.innerText = data[0].punchline;
        })
})

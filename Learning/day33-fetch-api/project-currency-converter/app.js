import { countryList } from "./country-list.js";

// MY CODE //
/* const form = document.querySelector("form")
const selectInputs = document.querySelectorAll("select");

// rendering options
for (let currencyCode in countryList) {
    selectInputs.forEach((eachSelectElement, index) => {
        const defaultCode = index == 1 ? "PKR" : "USD";

        eachSelectElement.innerHTML += `
            <option value="${currencyCode}" 
                ${currencyCode === defaultCode && "selected"}>
                ${currencyCode}
            </option>
        `;

        changeFlag(eachSelectElement, currencyCode);
    })
}

getExchangeRate();
// api call & getting exchange rate
function getExchangeRate() {
    const baseURL = "https://latest.currency-api.pages.dev/v1/currencies"
    const from = selectInputs[0].value.toLowerCase() || "usd";
    const to = selectInputs[1].value.toLowerCase() || "pkr";
    fetch(`${baseURL}/${from}.json`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const rate = data[from][to].toFixed(2);
            showMsg(rate);
            // console.log(rate)
        })
}

function showMsg(rate) {
    const msgElement = document.querySelector(".msg");
    const from = selectInputs[0].value;
    const to = selectInputs[1].value;
    msgElement.innerHTML = `1${from} = ${rate}${to}`
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Amount:", this[0].value);
    console.log("FROM:", this[1].value);
    console.log("TO:", this[2].value);
})

selectInputs.forEach(eachSelectElement => {
    eachSelectElement.addEventListener("input", function () {
        for (let currencyCode in countryList) {
            changeFlag(this, currencyCode);
        }
        getExchangeRate();
    })
})

function changeFlag(element, code) {
    if (code == element.value) {
        const img = element.previousElementSibling;
        img.src = `https://flagsapi.com/${countryList[code]}/flat/64.png`;
    }
} */

// MORE BETTER CODE
const dropdowns = document.querySelectorAll(".select-container select");
const btn = document.querySelector(".btn");
const fromCurr = document.querySelector("#from-select");
const toCurr = document.querySelector("#to-select");
const msg = document.querySelector(".msg");

window.addEventListener("load", updateExchangeRate)

btn.addEventListener("click", updateExchangeRate)

async function updateExchangeRate(e) {
    e.preventDefault();
    const amountInput = document.querySelector(".amount input");
    let amountValue = document.querySelector(".amount input").value;
    if (amountValue == "" || amountValue < 0) {
        amountInput.value = "1";
        amountValue = 1;
    }

    const baseURL = "https://latest.currency-api.pages.dev/v1/currencies";
    const from = fromCurr.value.toLowerCase();
    const to = toCurr.value.toLowerCase();
    const response = await fetch(`${baseURL}/${from}.json`)
    const data = await response.json()
    const rate = data[from][to];
    const finalAmount = amountValue * rate;
    msg.innerHTML = `${amountValue} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
}

for (let select of dropdowns) {
    for (let currCode in countryList) {
        const option = document.createElement("option");
        option.innerText = currCode;
        option.value = currCode;
        if (select.name == "from" && currCode == "USD") {
            option.selected = "selected"
        } else if (select.name == "to" && currCode == "PKR") {
            option.selected = "selected"
        }
        select.appendChild(option);
    }

    select.addEventListener("change", (event) => {
        updateFlag(event.target)
    })
}

function updateFlag(element) {
    const currCode = element.value;
    const countryCode = countryList[currCode];
    const img = element.parentElement.querySelector("img");
    const newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    img.src = newSrc;
}
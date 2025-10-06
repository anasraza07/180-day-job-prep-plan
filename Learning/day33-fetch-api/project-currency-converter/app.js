import { countryList } from "./country-list.js";

const form = document.querySelector("form")
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
}
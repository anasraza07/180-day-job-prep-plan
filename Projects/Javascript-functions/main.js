const valueOne = document.getElementById("value-one");
const valueTwo = document.getElementById("value-two");

const resultElem = document.getElementById("result");

function calculate(operator) {
    let result = "";

    if (operator === "add") {
        result = Number(valueOne.value) + Number(valueTwo.value);
    }
    else if (operator === "subtract") {
        result = valueOne.value - valueTwo.value;
    }
    else if (operator === "multiply") {
        result = valueOne.value * valueTwo.value;
    }
    else if (operator === "divide") {
        result = valueOne.value / valueTwo.value;
    }

    resultElem.innerHTML = result;

}
import { capitalize, roundToDecimalPlace } from './main.js'

function displayTotal(name, total) {
    return `${capitalize(name)}, your total cost is: ${roundToDecimalPlace(total)}`;
}

console.log(displayTotal(`anas`, 20.44444));

export { displayTotal };
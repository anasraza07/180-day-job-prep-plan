// import { capitalize } from "./main.js";
// import * as mainFunctions from "./main.js"

import capitalize, { getPower } from "./main.js"

function warn(name) {
    // return `I am warning you, ${mainFunctions.capitalize(name)}!`;
    return `I am warning you, ${capitalize(name)}!`;
}

console.log(warn("anas"));

export { warn };

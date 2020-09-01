import { generateOptions } from "./utils.js";
import currencies from "./currencies.js"; // don't need {} because we export it from default
import { handleInput } from "./handler.js";
import { fromSelect, toSelect } from './elements.js';

//when the page load, this code runs
export const form = document.querySelector('.app form');
export function init() {
    const optionsHTML = generateOptions(currencies);
    fromSelect.innerHTML = optionsHTML;
    toSelect.innerHTML = optionsHTML;
    form.addEventListener('input', handleInput);
};
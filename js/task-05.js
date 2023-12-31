const inputEl = document.querySelector("#name-input");
const outputEl  = document.querySelector('#name-output');


const  handleInput = (event) => (outputEl.textContent = event.currentTarget.value.trim() || "Anonymous");

inputEl.addEventListener("input", handleInput);


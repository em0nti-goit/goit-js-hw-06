const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", textInputHandler);

function textInputHandler() {
  outputRef.textContent = inputRef.value.trim()
    ? inputRef.value.trim()
    : "Anonymous";
}

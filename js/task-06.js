const inputRef = document.querySelector("#validation-input");
const VALID_SYMBOLS_NUMBER = Number(inputRef.dataset.length);

inputRef.addEventListener("blur", validationInputHandler);

function validationInputHandler(event) {
  if (event.currentTarget.value.trim().length === VALID_SYMBOLS_NUMBER) {
    inputRef.className = "valid";
  } else {
    inputRef.className = "invalid";
  }
}

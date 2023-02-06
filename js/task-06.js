/*Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.*/

const inputRef = document.querySelector("#validation-input");
const VALID_SYMBOLS_NUMBER = Number(inputRef.dataset.length);

inputRef.addEventListener("blur", validationInputHandler);

function validationInputHandler(event) {
  if (event.currentTarget.value.length === VALID_SYMBOLS_NUMBER) {
    inputRef.className = "valid";
  } else {
    inputRef.className = "invalid";
  }
}

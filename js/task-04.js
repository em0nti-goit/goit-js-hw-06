/*
1. Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
2. Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
3. Обновляй интерфейс новым значением переменной counterValue.*/

let counterValue = 0;

const counterRef = document.querySelector("#counter");
const decrementButtonRef = counterRef.querySelector(
  '[data-action="decrement"]'
);
const incrementButtonRef = counterRef.querySelector(
  '[data-action="increment"]'
);
const valueRef = counterRef.querySelector("#value");

decrementButtonRef.addEventListener("click", onClickDecrementButton);
incrementButtonRef.addEventListener("click", onClickIncrementButton);

function onClickDecrementButton() {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}

function onClickIncrementButton() {
  counterValue += 1;
  valueRef.textContent = counterValue;
}

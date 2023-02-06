function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyRef = document.body;
const widgetRef = document.querySelector(".widget");
const buttonChangeColorRef = widgetRef.lastElementChild;
const spanColorRef = widgetRef.querySelector("span.color");

buttonChangeColorRef.addEventListener("click", onClickChangeColorButton);

function onClickChangeColorButton() {
  const randomColor = getRandomHexColor();
  bodyRef.style.backgroundColor = randomColor;
  spanColorRef.textContent = randomColor;
}

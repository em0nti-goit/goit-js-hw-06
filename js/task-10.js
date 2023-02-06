function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const START_BOX_SIZE = 30;
const boxesRef = document.querySelector("#boxes");
const controlsRef = document.querySelector("#controls");
const inputNumberRef = controlsRef.firstElementChild;
const createButtonRef = controlsRef.querySelector("button[data-create]");
const destroyButtonRef = controlsRef.querySelector("button[data-destroy]");

createButtonRef.addEventListener("click", onClickButtonCreate);
destroyButtonRef.addEventListener("click", destroyBoxes);

function onClickButtonCreate() {
  boxesRef.append(...createBoxes(inputNumberRef.value));
}

function createBoxes(amount) {
  const boxesMarkup = [];
  let boxSize = START_BOX_SIZE;
  let i = amount;
  while (i) {
    const box = document.createElement("div");
    box.style.width = boxSize + "px";
    box.style.height = boxSize + "px";
    box.style.backgroundColor = getRandomHexColor();
    boxesMarkup.push(box);
    i -= 1;
    boxSize += 10;
  }
  return boxesMarkup;
}

function destroyBoxes() {
  boxesRef.innerHTML = "";
}

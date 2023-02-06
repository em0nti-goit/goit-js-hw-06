const fontSizeControlRangeRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

fontSizeControlRangeRef.addEventListener("input", fontSizeControlInputHandler);

function fontSizeControlInputHandler(event) {
  textRef.style.fontSize = `${event.currentTarget.value}px`;
}

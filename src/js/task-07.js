const fontSizeControl = document.querySelector("#font-size-control");

const span = document.querySelector("#text");

fontSizeControl.addEventListener("input", (event) => {
  span.style.fontSize = `${event.currentTarget.value}px`;
});

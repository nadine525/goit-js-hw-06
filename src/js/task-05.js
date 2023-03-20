const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
  output.textContent = event.currentTarget.value;
  if (event.target.value === "") {
    output.textContent = "Anonymous";
  }
}

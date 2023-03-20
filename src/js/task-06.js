const validationInput = document.querySelector("#validation-input");

const baseLength = Number(validationInput.getAttribute("data-length"));
console.log(baseLength);

validationInput.addEventListener("blur", (event) => {
  const lengthInFact = event.target.value.length;
  console.log(lengthInFact);

  if (lengthInFact === baseLength) {
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.add("invalid");
  }
});

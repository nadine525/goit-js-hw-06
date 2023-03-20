let counterValue = 0;

const incementButton = document.querySelector('button[data-action="inrement"]');
const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const spanEl = document.querySelector("#value");

incementButton.addEventListener("click", function () {
  counterValue += 1;
  console.log(counterValue);
  spanEl.innerHTML = counterValue;
});

decrementButton.addEventListener("click", function () {
  counterValue -= 1;
  console.log(counterValue);
  spanEl.innerHTML = counterValue;
});

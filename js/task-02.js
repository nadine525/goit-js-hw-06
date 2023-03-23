const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const items = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const food = ingredients[i];

  const liElement = document.createElement("li");
  liElement.textContent = food;
  liElement.classList.add("li");
  items.push(liElement);
}

const list = document.querySelector("#ingredients");
list.append(...items);

console.log(list);

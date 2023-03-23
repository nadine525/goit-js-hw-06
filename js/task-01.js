const allCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${allCategories.length}`);

allCategories.forEach((item) => {
  const nameOfCategory = item.querySelector("h2");
  console.log(`Category: ${nameOfCategory.textContent}`);
  const quantityOfElements = item.querySelector("ul");
  console.log(`Elements: ${quantityOfElements.querySelectorAll("li").length}`);
});

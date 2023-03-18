const allCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${allCategories.length}`);

const Categories = document.querySelectorAll(".item");
Categories.forEach((item) => {
  const nameOfCategory = item.querySelector("h2");
  console.log(`Category: ${nameOfCategory.textContent}`);
  const valueElements = item.querySelector("ul");
  console.log(`Elements: ${valueElements.querySelectorAll("li").length}`);
});

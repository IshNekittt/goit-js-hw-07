const categoriesListItems = document
  .querySelector("#categories")
  .querySelectorAll(".item");
function categoryOutput(listItems) {
  Array.from(listItems).forEach((category) => {
    console.log(`Category: ${category.querySelector("h2").textContent}`);
    console.log(
      `Elements: ${category.querySelector("ul").querySelectorAll("li").length}`
    );
  });
}
console.log(`Number of categories: ${categoriesListItems.length}`);
categoryOutput(categoriesListItems);

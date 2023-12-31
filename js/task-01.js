const categoriesElements = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesElements.length}`);

categoriesElements.forEach((el) => {
  const categoryName = el.firstElementChild.textContent;
  console.log(`Category: ${categoryName}`);

  const categoryList = el.lastElementChild;
  const categoryListLength = categoryList.children.length;
  console.log(`Elements: ${categoryListLength}`);
});

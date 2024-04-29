const categoriesList = document.querySelectorAll("#categories");
const categoriesItems = document.querySelectorAll("li.item");

console.log(categoriesItems.length);

categoriesItems.forEach(category => {
    const categoryName = category.querySelector("h2").textContent;
    const categoryItemNumber = category.querySelectorAll("li").length;

    console.log(`Category: ${categoryName}`);
    console.log(`Number of category: ${categoryItemNumber}`);
});
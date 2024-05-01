const categories = document.querySelectorAll('ul#categories li.item');

const numberOfCategories = categories.length;
console.log(`Number of categories: ${numberOfCategories}`);

categories.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const numberOfItems = category.querySelectorAll('li').length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${numberOfItems}`);
});
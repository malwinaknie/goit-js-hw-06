const numOfCategories = document.querySelectorAll("#categories > li");
console.log(`Number of categories: ${numOfCategories.length}`);

const categories = numOfCategories.forEach((el) =>
  console.log(
    `Category: ${el.querySelector("h2").textContent} \ Elements: ${
      el.querySelector("ul").childElementCount
    }`
  )
);

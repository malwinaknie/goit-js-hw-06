const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const findList = document.querySelector('#ingredients');

const list = ingredients.forEach((ingredient)=> {
  let newList = document.createElement('li');
  newList.textContent = ingredient;
  newList.classList.add('item');
  findList.append(newList);
  console.log(newList)
}
)


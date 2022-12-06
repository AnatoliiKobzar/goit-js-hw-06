const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const list = document.querySelector('#ingredients');

const ingredientsEl = [];

// for (const ingredient of ingredients) {
//   const itemEl = document.createElement('li');
//   itemEl.textContent = ingredient;
//   itemEl.classList.add('item');
//   ingredientsEl.push(itemEl);
// }
// // console.log(ingredientsEl);

// list.append(...ingredientsEl);

function addMarkup(array) {
  for (const ingredient of array) {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingredient;
    itemEl.classList.add('item');
    ingredientsEl.push(itemEl);
  }
  // console.log(ingredientsEl);

  list.append(...ingredientsEl);
}

addMarkup(ingredients);

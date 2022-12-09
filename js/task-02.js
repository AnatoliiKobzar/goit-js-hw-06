const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const list = document.querySelector('#ingredients');

function addMarkup(array) {
  const ingredientsEl = array.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingredient;
    itemEl.classList.add('item');
    return itemEl;
  });

  list.append(...ingredientsEl);
}

addMarkup(ingredients);

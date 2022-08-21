const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


function addIngredients(ingredients) {
  let ingredientsList = []
  for (const ingredient of ingredients) {
    const newItem = document.createElement("li");
    newItem.classList.add("item");
    newItem.textContent = ingredient;
    ingredientsList.push(newItem);
  }
  return document.querySelector("#ingredients").append(...ingredientsList);
}

addIngredients(ingredients);
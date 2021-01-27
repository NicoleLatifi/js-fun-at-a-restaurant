function nameMenuItem(name) {
  return `Delicious ${name}`
}

function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type,
  }
}

function addIngredients(name, ingredients) {
  if(!ingredients.includes(name)) {
    return ingredients.push(name)
  }
}

function formatPrice(price) {
  return `$${price}`
}

function decreasePrice(price) {
  return price = price * .9
}

function createRecipe(title, ingredients, menuItemType) {
  return {
    title: title,
    ingredients: ingredients,
    type: menuItemType,
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe,
}



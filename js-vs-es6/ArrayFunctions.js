// ES6

const shoppingList = ['Milk', 'Chocs', 'Biscuit', 'Cheese'];

// forEach
shoppingList.forEach((product) => console.log(product));

shoppingList.forEach((product, index) => console.log(`Product is ${product} and index is ${index}`));

// map

const newList = shoppingList.map((item, index) => {
    return ('Item' + index + ': ' + item);
});

console.log(newList);

// filter

const filterList = shoppingList.filter(item => item !== 'Chocs');

console.log(filterList);

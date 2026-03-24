function pizzaOven(typeOfCrust, typeOfSauce, typeOfCheese, pizzaToppings) {
  return {
    typeOfCrust: typeOfCrust,
    typeOfSauce: typeOfSauce,
    typeOfCheese: typeOfCheese,
    pizzaToppings: pizzaToppings
  };
}

const pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
const pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);

const pizza3 = pizzaOven("thin crust", "barbecue", ["cheddar"], ["chicken", "bacon"]);
const pizza4 = pizzaOven("deep dish", "alfredo", ["parmesan"], ["spinach", "artichokes"]);


function randomPizza() {
  const crustTypes = ["hand tossed", "deep dish", "thin crust", "stuffed crust"];
  const sauceTypes = ["marinara", "alfredo", "barbecue", "traditional"];
  const cheeseTypes = ["mozzarella", "cheddar", "feta", "parmesan"];
  const toppings = [
    "pepperoni", "sausage", "mushrooms", "olives", "onions", "bacon", "chicken", "spinach", "artichokes"
  ];

  const randomCrust = crustTypes[Math.floor(Math.random() * 4)];
  const randomSauce = sauceTypes[Math.floor(Math.random() * 4)];
  const randomCheese = cheeseTypes[Math.floor(Math.random() * 4)];
  const randomToppings = toppings.slice(0, Math.floor(Math.random() * 5));

  return pizzaOven(randomCrust, randomSauce, [randomCheese], randomToppings);
}
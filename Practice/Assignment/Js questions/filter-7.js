/*

Questions :

You want to show only available products from a product list.
Use filter() to return items with inStock === true.

Answers :

filter() creates a new array containing elements that match the condition.

*/

let products = [
  { name: "Laptop", inStock: true },
  { name: "Mouse", inStock: false },
  { name: "Keyboard", inStock: true }
]

let availableProducts = products.filter(item => item.inStock === true)

console.log(availableProducts)

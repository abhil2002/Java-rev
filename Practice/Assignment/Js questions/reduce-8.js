/*

Questions :

Calculate the total price of items in a shopping cart using reduce().

Answers :

reduce() combines all values of an array into a single value.

*/


let cart = [
  { item: "Book", price: 300 },
  { item: "Pen", price: 50 },
  { item: "Bag", price: 1200 }
]

let total = cart.reduce((sum, product) => sum + product.price, 0)

console.log(total)

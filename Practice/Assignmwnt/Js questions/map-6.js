/*

Questions : 

An e-commerce site gives 10% discount on all prices.
Use map() to create a new discounted price list.

Answers : 

map() returns a new array by applying a function to each element.

*/


let prices = [1000, 2000, 3000]

let discountedPrices = prices.map(price => price * 0.9)

console.log(discountedPrices)

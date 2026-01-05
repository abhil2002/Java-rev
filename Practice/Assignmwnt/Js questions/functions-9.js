/*

Questions :

Create a function to calculate GST using

Function Declaration

Arrow Function
Mention one key difference.

Answers :

Key difference: Function declarations are hoisted, arrow functions are not.

*/

function calculateGST(price) {
  return price * 0.18
}

const calculateGSTArrow = price => price * 0.18

console.log(calculateGST(1000))
console.log(calculateGSTArrow(1000))

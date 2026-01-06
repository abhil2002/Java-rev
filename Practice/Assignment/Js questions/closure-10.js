/*

Questions :

Create a counter function that cannot be directly modified from outside.

Answers :

A closure allows inner functions to access outer function variables while keeping them private.

*/

function counter() {
  let count = 0

  return function () {
    count++
    return count
  }
}

let secureCounter = counter()

console.log(secureCounter())
console.log(secureCounter())

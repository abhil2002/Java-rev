/*

Questions :

You receive this API response as a string

'{"id":101,"name":"Laptop","price":50000}'

Convert it into a JavaScript object and access the name.


Answers :

JSON.parse() converts a JSON string into a JavaScript object.
After parsing, object properties can be accessed using dot notation.

*/


let response = '{"id":101,"name":"Laptop","price":50000}'

let product = JSON.parse(response)

console.log(product.name)


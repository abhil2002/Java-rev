/*

Questions : 

You want to store user details in localStorage.
Convert the following object into a JSON string

{ username: "admin", role: "manager" }

Answers :

JSON.stringify() converts a JavaScript object into a JSON string, which can be stored in localStorage.

*/


let user = {
  username: "admin",
  role: "manager"
}

let jsonString = JSON.stringify(user)

console.log(jsonString)

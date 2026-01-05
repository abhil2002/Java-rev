/*

Questions :

You validate a user and then redirect them.
Implement validation using callback functions.

Answers :

A callback function is executed after another function completes its task.

*/


function validateUser(username, callback) {
  if (username === "admin") {
    callback("Login Successful")
  } else {
    callback("Invalid User")
  }
}

function redirect(message) {
  console.log(message)
}

validateUser("admin", redirect)

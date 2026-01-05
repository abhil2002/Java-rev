/*

Question

You click a button and dynamically add a new list item to <ul>.
Which DOM methods will you use?

Answers :

Use document.createElement(), textContent, and appendChild() to dynamically add elements.

*/


let ul = document.querySelector("ul")
let button = document.querySelector("button")

button.addEventListener("click", () => {
  let li = document.createElement("li")
  li.textContent = "New Item"
  ul.appendChild(li)
})

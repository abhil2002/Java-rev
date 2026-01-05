/*

Questions :

A form should display an error message when submitted without input.
Explain how addEventListener() helps.

Answers :

addEventListener() allows you to attach an event handler to the form submit event.
You can prevent the default form submission and show a custom error message.

*/


let form = document.querySelector("form")
let input = document.querySelector("input")
let errorMsg = document.querySelector("#error")

form.addEventListener("submit", (e) => {
  if (input.value === "") {
    e.preventDefault()
    errorMsg.textContent = "Input cannot be empty"
  }
})

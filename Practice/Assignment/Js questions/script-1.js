/*

Questions :

A web page has a button that logs "Start", then uses setTimeout to log "Async Task", and finally logs "End".


Answers : 

Execution order will be

Start → End → Async Task

--->>  happens

Synchronous code runs first and goes directly into the Call Stack

setTimeout is sent to Web APIs and its callback waits in the Callback Queue

The Event Loop pushes the callback to the Call Stack only after it becomes empty

*/



console.log("Start")

setTimeout(() => {
  console.log("Async Task")
}, 0)

console.log("End")

/*

Questions :

You are loading ads after page load using setTimeout.
Why does the ad load after the main content even if the timeout is 0ms?


Answers :

Because JavaScript executes synchronous code first.
Even with 0ms, the callback is placed in the Callback Queue and waits until the Call Stack is empty.
Only then does the Event Loop move it to the Call Stack, so ads load after main content.

*/


console.log("Main Content Loaded")

setTimeout(() => {
  console.log("Ads Loaded")
}, 0)

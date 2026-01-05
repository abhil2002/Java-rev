/*

Questions : 

Convert this promise-based API call into async/await

fetch(url)
  .then(res => res.json())
  .then(data => console.log(data));


  Answers :

  async/await makes asynchronous code look synchronous and easier to read.

*/


async function fetchData() {
  try {
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
  } catch (error) {
    console.log("Error:", error)
  }
}

fetchData()


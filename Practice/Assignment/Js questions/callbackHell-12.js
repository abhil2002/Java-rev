/*

Questions :

A payment flow involves:

Validate user

Process payment

Generate invoice

Explain why nested callbacks become difficult to manage.

Answers : 

Nested callbacks create deeply indented code that is hard to read, debug, and maintain.
Error handling becomes complex, and code reusability is reduced.
This problem is known as Callback Hell, which is why Promises and async/await are preferred.

*/


validateUser(user, function () {
  processPayment(order, function () {
    generateInvoice(invoice, function () {
      console.log("Payment Completed")
    })
  })
})


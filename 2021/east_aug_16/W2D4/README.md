# Promises

## Outline
1. Intro to Promises
1. Fixing callback hell
1. Error handling
1. Parallelizing

## Promises
Promises give us another way to interact with asynchronous code. Many of the asynchronous functions that you use on a day-to-day basis will use the Promise syntax that we covered today.

Promises let us handle values whose final value is uncertain or takes time to calculate. When a Promise is returned it's immediate value is `pending`. A pending value will eventually either `resolve` or `reject` depending on whether it was successful or not.

A function that returns a Promise gives us three standard functions that we can use to interact with it:
* `.then()` -> waits for the promise to `resolve` and gives us access to the returned value
* `.catch()` ->if our Promise `rejects`, lets us handle any errors thrown by our promise immediately
* `.finally()` -> lets us run code after all of our `.then` and `.catch` functions are complete

```JS
promiseFunc()
  .then(response => {
    // do something with the response from our Promise
  })
  .catch(error => {
    // handle any errors from our Promise (including any errors from a .then())
  })
  .finally(() => {
    // will run after every .then() or .catch() is complete
  })
```

## Areas to explore if you're curious
Promises give us access to some other interesting functionality that you might want to explore once you get a better handle on using promises as we've discussed.

### Creating Promises
We can create our own Promises using the `Promise()` constructor.

```JS
// this example promise will resolve with the value "Example value" after 1s
const examplePromise = new Promise((resolve, reject) => {
  setTime(() => {
    resolve("Example value")
  }, 1000)
})
```

[Read more about the `Promise()` constructor on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)

### `Promise.all()` and `Promise.race()`
`Promise.all()` lets us wait for multiple Promises to finish and then gives us access to all of their responses.

```JS
const promises = [promise1, promise2, promise3]
Promise.all(promises).then((values) => {
  // now we can access the values of the promises in the order we passed them into Promise.all
  // eg. the result of promise1 can be accessed as values[0], etc.
})
```

`Promise.race()` lets us run multiple Promises at the same time and returns the value of whichever Promise finished first.

```JS
const promises = [promise1, promise2, promise3]
Promise.all(promises).then((value) => {
  // now we can access the value of whichever Promise resolved first
})
```

[Read more about `Promise.all()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
[Read more about `Promise.race()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)
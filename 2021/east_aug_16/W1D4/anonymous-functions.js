// We can save anonymous functions using variables
let show = function() {
  console.log('Anonymous function')
}

// Or we can immediately invoke them (for single use)
// (function() {
//   console.log("Immediately invoked function")
// })()

// Arrow functions are a shorthand for declaring anonymous functions
// The following anonymous function:
let add = function(a, b) {
  return a + b
}
// Is the same as the following arrow function
let arrowAdd = (a, b) => a + b
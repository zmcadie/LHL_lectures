const array = [1, 2, 3]

// for (const item of array) {
//   console.log(item)
// }

// can be rewritten as:

// const logEach = function(items) {
//   for (const item of items) {
//     console.log(item)
//   }
// }

// but if we want something more abstract and single-purpose

const forEach = function(items, action) {
  for (const item of items) {
    action(item)
  }
}

const logItem = function(item) {
  console.log("The item is:", item)
}

const logLetters = function(string) {
  for (const letter of string) {
    console.log(letter)
  }
}

const arrayOfStrings = ["hello", "world"]

forEach(arrayOfStrings, logLetters)

// Array.prototype.forEach (just means the forEach method is part of the Array prototype)
// array.forEach(logItem)

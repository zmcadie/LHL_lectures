let state = {
  firstName: "Zola",
  lastName: "McAdie",
  age: "30~"
}

const getName = () => `${state.firstName} ${state.lastName}`

const updateField = function(field) {
  return function(newValue) {
    state = {
      ...state,
      [field]: newValue
    }
  }
}

const updateFirstName = updateField("firstName")
const updateLastName = updateField("lastName")
const updateAge = updateField("age")

console.log(getName())
updateFirstName("Nicholas")
console.log(getName())


// function addTo(baseNumber) {
//   return function(anotherNumber) {
//     return baseNumber + anotherNumber
//   }
// }

// const addTwo = addTo(2)
// const addFour = addTo(4)

// let exampleNumber = 10

// console.log(addTwo(exampleNumber))
// console.log(addFour(exampleNumber))


// const returnOutput = require("./export.js")
// const output = "test"

// console.log(returnOutput())
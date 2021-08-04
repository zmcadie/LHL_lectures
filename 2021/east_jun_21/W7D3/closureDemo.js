function addTo(baseNumber) {
  return function(anotherNumber) {
    return baseNumber + anotherNumber
  }
}

const addTwo = addTo(2)
const addFour = addTo(4)

let exampleNumber = 10

console.log(addTwo(exampleNumber))
console.log(addFour(exampleNumber))

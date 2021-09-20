// Create a function named repeatNumbers that will return a string with each of the given values repeated the appropriate number of times, if there are multiple sets of values each set should be separated by a comma. If there is only one set of values then you should omit the comma. 

// 1) Import assertion library
const assert = require("chai").assert

// 2) Import functions to be tested
const repeatNumbers = require("../countNum")

// 3) Write your tests
describe("repeatNumbers", function() {
  it("will return a string", function() {
    assert.typeOf(repeatNumbers([[10, 4], [34, 6], [92, 2]]), "string")
  })
  it("will return a string with each of the given values repeated the appropriate number of times", function() {
    assert.equal(repeatNumbers([[10, 4], [34, 6], [92, 2]]), "10101010, 343434343434, 9292")
  })
})
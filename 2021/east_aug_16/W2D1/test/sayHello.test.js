// 1) import your assertion library
const assert = require("chai").assert

// 2) import any functions you want to test
const helloFunctions = require("../sayHello")

// 3) write your test code
describe("sayHello()", function() {
  it('should say hello to my little friend', function() {
    assert.equal(helloFunctions.sayHello("my little friend"), "Hello, my little friend!")
  })
})
describe("helloWorld()", function() {
  it('should hello world', function() {
    assert.equal(helloFunctions.helloWorld(), "Hello, world!")
  })
})
  
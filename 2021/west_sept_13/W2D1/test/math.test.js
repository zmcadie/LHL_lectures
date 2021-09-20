// 1) Import assertion library
const assert = require("chai").assert

// 2) Import functions to be tested
const math = require("../math")

// 3) Write your tests
describe("math.js", function() {
  describe("math.sum", function() {
    it("should return a number", function() {
      assert.typeOf(math.sum(2, 2), "number")
    })
    it("should return 10 when given 7 + 3", function() {
      assert.equal(math.sum(7, 3), 10)
    })
  })
  describe("math.minus", function() {
    it("should return 0 when given 2 - 2", function() {
      assert.equal(math.minus(2, 2), 0)
    })
    it("should return 4 when given 7 - 3", function() {
      assert.equal(math.minus(7, 3), 4)
    })
  })
})
const math = require("../math.js")
const expect = require("chai").expect

describe("math functions", function() {
  describe("math.sum", function() {
    it("math.sum should add two numbers together", function() {
      expect(math.sum(2, 2)).to.equal(4)
    })
  })
  describe("math.minus", function() {
    it("math.minus should subract one number from another", function() {
      expect(math.minus(2, 2)).to.equal(0)
    })
  })
})

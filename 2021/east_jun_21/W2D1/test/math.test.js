const expect = require('chai').expect
const math = require('../math')

// SUM TESTS
// assert.equal(math.sum(2, 2), 4, "2 + 2 = 4")
// assert.equal(math.sum(200, 2000), 2200, "2k + 200 = 2200")

// expect(math.sum(2, 2)).to.equal(4)

describe("math.sum", function() {
  it("should return 4 when given 2 and 2", function() {
    expect(math.sum(2, 2)).to.equal(4)
  })
  
  it("should return 22 when given 20 and 2", function() {
    expect(math.sum(20, 2)).to.equal(22)
  })
})

// MINUS TESTS
// assert.equal(math.minus(2, 2), 0, "2 - 2 = 0")
// assert.equal(math.minus(2000, 200), 1800, "2k - 200 = 1800")

// expect(math.minus(2, 2)).to.equal(0)

describe("math.minus", function() {
  it("should return 0 when given 2 and 2", function() {
    expect(math.minus(2, 2)).to.equal(0)
  })
})
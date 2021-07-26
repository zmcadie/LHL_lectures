const expect = require("chai").expect
const whereCanIPark = require("../smartParking")

describe("where can I park function", function() {
  it("should return false if no spots available", function() {
    expect(whereCanIPark([["S"]], "regular")).to.equal(false)
  })
  it("should return coordinates for an available parking spot if one exists", function() {
    expect(whereCanIPark([
      ["s", "R", "R"],
      ["s", "R", "S"],
    ], "small")).to.eql([2,1])
  })
})
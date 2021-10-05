import { getRandomRPS, checkWinner } from "./rpsHelpers"

describe("getRandomRPS", () => {
  it("should return a string", () => {
    const result = getRandomRPS()
    expect(typeof result).toBe("string")
  })
  it("should return ✊, 🖐, or ✌️", () => {
    const result = getRandomRPS()
    expect(["✊", "🖐", "✌️"].includes(result)).toBe(true)
  })
})

describe("checkWinner", () => {
  it("should return null if not given items", () => {
    const result = checkWinner()
    expect(result).toBeNull()
  })
  it("should return null if items doesn't contain player or computer option", () => {
    const results = [
      checkWinner({ player: "✊"}),
      checkWinner({ computer: "✊"})
    ]
    expect(results.every(res => res === null)).toBe(true)
  })
  it("should return null if player or computer option is not valid", () => {
    const results = [
      checkWinner({ player: "✊", computer: "test" }),
      checkWinner({ computer: "✊", player: "test" })
    ]
    expect(results.every(res => res === null)).toBe(true)
  })
  it("should return win if the player beats the computer", () => {
    const winConditions = [
      { player: "✊", computer: "✌️" },
      { player: "✌️", computer: "🖐" },
      { player: "🖐", computer: "✊" }
    ]
    const results = winConditions.map(items => checkWinner(items))
    expect(results.every(res => res === "win")).toBe(true)
  })
  it("should return tie if the player and computer choose the same option", () => {
    const tieConditions = [
      { player: "✊", computer: "✊" },
      { player: "✌️", computer: "✌️" },
      { player: "🖐", computer: "🖐" }
    ]
    const results = tieConditions.map(items => checkWinner(items))
    expect(results.every(res => res === "tie")).toBe(true)
  })
  it("should return lose if the player loses to the computer", () => {
    const loseConditions = [
      { player: "✌️", computer: "✊" },
      { player: "🖐", computer: "✌️" },
      { player: "✊", computer: "🖐" }
    ]
    const results = loseConditions.map(items => checkWinner(items))
    expect(results.every(res => res === "lose")).toBe(true)
  })
})
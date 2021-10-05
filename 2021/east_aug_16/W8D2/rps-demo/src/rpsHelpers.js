const options = ["✊", "🖐", "✌️"]
export const getRandomRPS = () => {
  const randomIndex = Math.floor(Math.random() * options.length)
  return options[randomIndex]
}

export const checkWinner = (items) => {
  if (!items) return null
  const { player, computer } = items
  if (!player || !computer) return null
  if ([player, computer].some(op => !options.includes(op))) return null
  
  if (player === computer) return "tie"

  if (player === "✊" && computer === "✌️") return "win"
  if (player === "✌️" && computer === "🖐") return "win"
  if (player === "🖐" && computer === "✊") return "win"

  return "lose"
}
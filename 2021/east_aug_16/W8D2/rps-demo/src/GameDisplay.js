import { useEffect, useState } from "react"
import { getRandomRPS, checkWinner } from "./rpsHelpers"
import "./GameDisplay.css"

export function DisplayResults({ player, computer }) {
  const results = checkWinner({ player, computer })
  return (
    <>
      <h2>{results}!</h2>
      <div className="outcome-description" data-testid="outcome-description">
        Your <span>{player}</span> {results}s against the computer's <span>{computer}</span>
      </div>
      <button className="reset-button">Play again</button>
    </>
  )
}

export function ChooseOption({ setSelectedOption }) {
  const handleClick = (op) => {
    setSelectedOption(op)
  }
  return (
    <>
      <h2>Choose your fighter!</h2>
      <div className="option-container">
        { ["✊", "🖐", "✌️"].map((op, i) => (
          <button
            key={ i }
            onClick={() => handleClick(op)}
            className="option-button"
          >
            {op}
          </button>
        )) }
      </div>
    </>
  )
}

export default function GameDisplay() {
  const [selectedOption, setSelectedOption] = useState(null)
  const [computerOption, setComputerOption] = useState(null)

  useEffect(() => {
    const newOption = selectedOption ? getRandomRPS() : null
    setComputerOption(newOption)
  }, [selectedOption])
  
  return (
    <section className="game-container">
      { computerOption
        ? <DisplayResults player={selectedOption} computer={computerOption} />
        : <ChooseOption {...{ setSelectedOption }} />
      }
    </section>
  )
}
import { render, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'

import GameDisplay from "./GameDisplay"

describe("GameDisplay", () => {
  it("renders the RPS buttons", () => {
    const { container, getByText } = render(<GameDisplay />)
    expect(getByText("✊")).toBeInTheDocument()
    expect(getByText("✌️")).toBeInTheDocument()
    expect(getByText("🖐")).toBeInTheDocument()
  })
  it("displays results when an option is chosen", async () => {
    const { container, getByText, getByTestId } = render(<GameDisplay />)

    fireEvent.click(getByText("✊"))

    await waitFor(() => {
      expect(getByTestId("outcome-description")).toBeInTheDocument()
    })
  })
})

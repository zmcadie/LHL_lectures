const b = "B"

const board = [
  [b,1,0,0,0,1,b,1],
  [1,2,1,1,0,1,1,1],
  [0,1,b,1,1,1,1,0],
  [0,1,3,3,2,b,1,0],
  [0,1,b,b,2,1,2,1],
  [0,2,3,3,2,1,2,b],
  [1,2,b,1,1,b,2,1],
  [b,2,1,1,1,1,1,0],
]

let isGameOver

function createGameboard() {
  isGameOver = false
  const $gameboard = $("#gameboard")
  $gameboard.html("")
  for (let rowNum = 0; rowNum < board.length; rowNum++) {
    const row = board[rowNum];
    const $tr = $("<tr>")

    for (let colNum = 0; colNum < row.length; colNum++) {
      const element = row[colNum];
      const $td =  $("<td>")
      
      $td.on("click", () => {
        if (isGameOver) return
        $td.text(element)
        if (element === b) {
          $td.addClass("has-bomb")
          alert("Oops! You've lost... ")
          isGameOver = true
        }
      })
      
      $td.on("contextmenu", (event) => {
        event.preventDefault()
        if (isGameOver) return
        $td.toggleClass("is-flagged")
      })
      
      $tr.append($td)
    }

    $gameboard.append($tr)
  }
}

$(document).on("ready", () => {
  const button = $("#create-game")
  button.on("click", (event) => {
    createGameboard()
  })
})
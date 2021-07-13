// document.addEventListener("DOMContentLoaded", function() {

//   const createGameForm = document.getElementById("create-game")

//   createGameForm.addEventListener("submit", event => {
//     event.preventDefault()
//     const numberOfColumns = document.getElementById("column-number").value
//     const numberOfRows = document.getElementById("row-number").value

//     console.log("Create a game with " + numberOfColumns + " columns and " + numberOfRows + " rows")
//   })

// })

$(document).ready(function() {
  $("#create-game").on("submit", function(event) {
    event.preventDefault()
    
    const numberOfColumns = $("#column-number").val()
    const numberOfRows = $("#row-number").val()

    const $board = $("#gameboard")
    $board.html("")

    for (let index = 0; index < numberOfRows; index++) {
      const $row = $("<tr>")
      
      for (let i = 0; i < numberOfColumns; i++) {
        const $cell = $("<td>")
        
        $cell.on("click", function(event) {
          $(this).toggleClass("clicked")
        })
        
        $row.append($cell)
      }

      $board.append($row)
    }
  })
})
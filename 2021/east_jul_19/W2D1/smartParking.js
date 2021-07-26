// https://web.compass.lighthouselabs.ca/activities/1135

const openSpotCode = {
  motorcycle: "M",
  small: "S",
  regular: "R"
}

function whereCanIPark(parkingLot, type) {
  let coords = false
  
  parkingLot.forEach(function(row, rowIndex) {
    row.forEach(function(spot, columnIndex) {
      if (spot === openSpotCode[type]) coords = [columnIndex, rowIndex]
    })
  })
  
  return coords
}

module.exports = whereCanIPark
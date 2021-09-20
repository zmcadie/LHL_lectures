const repeatNumbers = function(array) {
  const arrayOfStrings = array.map(data => {
    const num = data[0]
    const count = data[1]
    return num.toString().repeat(count)
  })
  return arrayOfStrings.join(", ")
}

// const repeatNumbers = function(array) {
//   let output = ""
//   array.forEach(data => {
//     const num = data[0]
//     const count = data[1]
//     for (let i = 0; i < count; i++) {
//       output += num.toString()
//     }
//     output += ", "
//   })
//   return output.slice(0, -2)
// }

module.exports = repeatNumbers
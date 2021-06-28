function repeatNum(num, count) {
  return num.toString().repeat(count)
}

function repeatNumbers(arrayOfArrays) {
  if (!arrayOfArrays) return null
  
  let output = ""

  for (let i = 0; i < arrayOfArrays.length; i++) {
    const element = arrayOfArrays[i];
    const val = repeatNum(element[0], element[1])
    let prefix = ""
    if (i) {
      prefix = ", "
    }
    output += `${prefix}${val}`
  }

  return output
}

module.exports = repeatNumbers
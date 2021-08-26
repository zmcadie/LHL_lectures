const { readFile, readdir } = require("fs/promises")
const readlinePromise = require("./readline-promise")

const rlp = readlinePromise.createInterface({
  input: process.stdin,
  output: process.stdout
})

const options = {
  encoding: "utf8"
}

let provinces

readdir("./provinces")
  .then(res => {
    provinces = res.map(filename => filename.split(".")[0])
    console.log("Options are:", provinces.join(", "))
    return rlp.question("What province would you like to see? ")
  })
  .then(input => {
    const isValid = provinces.includes(input)
    if (!isValid) throw new Error(`${input} is not a province!`)
    return readFile(`./provinces/${input}.json`, options)
  })
  .then(fileContents => {
    const json = JSON.parse(fileContents)
    console.log(json.name)
  })
  .catch(error => {
    console.log(error)
  })
  .finally(() => {
    rlp.close()
  })



/////////////////////
// Callback Method //
/////////////////////

// Hopefully this illustrates how promises make it easier to handle these complex interactions

// const { readFile, readdir } = require("fs")
// const readline = require("readline")

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// const options = {
//   encoding: "utf8"
// }

// readdir("./provinces", (err, files) => {
//   if (err) {
//     console.log(err)
//   } else {
//     const provinces = files.map(filename => filename.split(".")[0])
//     console.log("Options are:", provinces.join(", "))
    
//     rl.question("What province would you like to see? ", (input) => {
//       const isValid = provinces.includes(input)
//       if (!isValid) {
//         console.log(`${input} is not a province!`)
//       } else {
//         readFile(`./provinces/${input}.json`, options, (err, data) => {
//           const json = JSON.parse(data)
//           console.log(json.name)
//           rl.close()
//         })
//       }
//     })
//   }
// })
// const readline = require("readline")

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// const answers = []

// rl.question("What is your name? ", input => {
//   console.log(`Hello, ${input}`)
  
//   rl.question("What is your favourite colour? ", input => {
//     console.log(`Oh! I love ${input}!`)

//     rl.question("What is the airspeed velocity of a swallow? ", input => {
//       console.log("Hmmm, I'm not sure you're right...")
//       rl.close()
//     })
//   })
// })

const readlinePromise = require("./readline-promise")

const rlp = readlinePromise.createInterface({
  input: process.stdin,
  output: process.stdout
})

rlp.question("What is your name? ")
  .then(input => console.log(`Hello, ${input}`))
  .then(() => rlp.question("What is your favourite colour? "))
  .then(input => console.log(`Oh! I love ${input}!`))
  .then(() => rlp.question("What is the airspeed velocity of a swallow? "))
  .then(() => console.log("Hmmm, I'm not sure you're right..."))
  .catch(error => console.log("\n" + error))
  .finally(() => rlp.close())

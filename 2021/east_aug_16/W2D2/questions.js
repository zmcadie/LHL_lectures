const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let name

rl.question("What's your name? ", (input) => {
  name = input
  console.log(`Hi, ${name}`)
  rl.close()
})

rl.on('close', () => {
  console.log(`Goodbye, ${name}`)
})
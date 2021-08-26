const readline = require('readline')

function createInterface(opts) {
  const rl = readline.createInterface(opts)

  function question(prompt) {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject("Took too long to answer")
      }, 5000)
      rl.question(prompt, (input) => {
        clearTimeout(timeout)
        resolve(input)
      })
    })
  }
  
  function close() {
    rl.close()
  }

  return {
    question,
    close
  }
}

module.exports = {
  createInterface
}

///////////////
// DEMO CODE //
///////////////

// const readlinePromise = require("./readline-promise")

// const rlp = readlinePromise.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// rlp.question("What is your name? ")
//   .then(name => console.log(`Hello ${name}`))
//   .then(() => rlp.ask("What is your favourite colour? "))
//   .then(colour => console.log(`Oh! I love ${colour}!`))
//   .catch(err => console.error("\n" + err))
//   .finally(() => {
//     console.log("Thanks for chatting, goodbye!")
//     rlp.close()
//   })
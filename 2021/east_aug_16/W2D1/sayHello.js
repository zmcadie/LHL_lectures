function sayHello(name) {
  const output = `Hello, ${name}!`
  return output
}

function helloWorld() {
  return sayHello("world")
}

module.exports = {
  sayHello,
  helloWorld
}

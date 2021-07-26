# W2D1 TDD with Mocha and Chai

## Outline
1. Recap assertions
1. Exporting a module
1. Initializing a package
1. Introducing Chai
1. Automating our tests with Mocha
1. Getting started with TDD

## Glossary
* **TDD** — Test driven development *(dev practice)*
* **BDD** — Behaviour driven development *(team methodology)*
* **Mocha** — BDD test framework
* **Chai** — Assertion library
* **Module** — A self-contained bundle of code

## Assertions
> A confident or forceful statement of fact or belief

* This thing is true
* These two things are the same

```javascript
// Assert that the passed value is true
function assert(value, message) {
  if (!value) throw new Error(message)
}

// Assert that two values are the same (not strict)
function assertEqual(valOne, valTwo, message) {
  if (valOne != valTwo) throw new Error(message)
}

// Assert that two values are the same (strict)
function assertStrictEqual(valOne, valTwo, message) {
  if (valOne !== valTwo) throw new Error(message)
}
```

## Exporting a module
For now we will use the CommonJS syntax (modules.exports, require) for importing and exporting modules.

```javascript
// ...module file that exports a function
function someFunc() {
  // ...do something
}

module.exports = someFunc

// ...file that imports the module and uses it
const someFunc = require("./someFunc") // import module

someFunc() // now we can use the imported module
```

## Initializing a package
* To make our folder a package with just run `npm init`
* `npm init` will create a `package.json` file that includes metadata about our project
* Making our project a package allows us to use npm to import other packages known as dependencies
* Saving dependencies in package.json means other developers can run `npm install` to download everything they need for our project

## Introducing Chai
Chai is an assertion library. We will use it instead of the Node built-in `assert`

https://www.chaijs.com/

## Automating our tests with Mocha
Mocha is a framework that will automate our tests. It will run all test files in the folder `test`

We covered two functions from Mocha today:
* `describe` — used for grouping tests that are testing the same thing or similar context
* `it` — used for running individual tests, usually within a `describe`

https://mochajs.org/

## Getting started with TDD
> Test driven development is a development practice that tells us how to approach writing our code.

When following TDD we write our tests *first* and then write our function to pass the tests.

This is a simplified definition, for more detail check out: https://en.wikipedia.org/wiki/Test-driven_development

The steps we took today were:
1. Identify software requirements (what does our function do?)
1. Write a test that checks each requirement
1. Update our function so that it passes the first failing test (repeat until all tests pass)

### Benefits of TDD
* Writing tests first let us precisely define what our function should do
* We receive feedback right away that lets us fix bugs quickly
* Our tests tell us exactly what isn't working instead of having to search for the bug
* Solving one test at a time lets us work incrementally (which lets us focus on one problem at a time)
* Lots and lots of others!

To read some more on the advantages of TDD check out: https://www.codica.com/blog/test-driven-development-benefits/

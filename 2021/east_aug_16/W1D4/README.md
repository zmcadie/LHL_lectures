# Callbacks

1. Functions as values
1. Anonymous functions
1. Arrow functions
1. Implementing our own forEach
1. Nested scope and "scope chain"

## Functions as values
In JavaScript functions are values just like everything else. This means that we can pass functions as parameters to other functions the same way we would pass an object or string. When we pass a function to be called as a parameter to another function this is called a *callback*.

### Higher Order Functions
A function that accepts functions as parameters and/or returns a function is a *higher-order function*

In the example below we pass `logItem` as a *callback* to our higher-order function `forEach`

```JS
const forEach = function(items, action) {
  for (const item of items) {
    action(item)
  }
}

const logItem = function(item) {
  console.log(item)
}

const array = [1, 2, 3]

forEach(array, logItem)
```

So why do we create callbacks and higher-order functions? Single Responsibility Principle.

> Our callback and our higher-order function now each only have a single responsibility.

A function should only have a single reason to exist, and it should delegate other responsibilities to other functions as needed.

## Anonymous Functions
Anonymous functions are simply functions created without a name. An anonymous function is often not accessible after its initial creation.

We can however assign anonymous functions to variables so we can still reference them later.

```JS
let show = function () {
    console.log('Anonymous function')
}

show()
```

## Arrow Functions
Arrow functions give us a shorthand for declaring anonymous functions.

```JS
let show = () => console.log('Anonymous function')

show()
```

Arrow functions can one line or multiple lines. One line arrow functions will implicitely return the expression that follows the `=>` symbol.

The following anonymous function:
```JS
let add = function (a, b) {
  return a + b
}
```

Is the same as the following arrow function:
```JS
let add = (a, b) => a + b
```

Which can also be written as:
```JS
let add = (a, b) => {
  return a + b
}
```

## Nested Scope
> "To put it simply, each time you attempt to access a variable within a function’s execution context, the look-up process will always begin with its own variable object. If the identifier is not found in the variable object, the search continues into the scope chain. It will climb up the scope chain examining the variable object of every execution context looking for a match to the variable name."
>
> http://ryanmorr.com/understanding-scope-and-context-in-javascript/
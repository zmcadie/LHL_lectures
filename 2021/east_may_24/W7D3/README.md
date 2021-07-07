# W7D3 — Data Fetching & Other Side Effects

## Outline
1. Closure recap
1. Side effects
1. `useEffect` in action

## Closure recap
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

Functions within functions have access to their parents variables.

* Functions have access to the variables of the scope (or context) they're defined in
* Therefore a function defined within another function has access to the parent's scope
* If we create a function that returns a function the returned value maintains that scope

```javascript
function setName(name) {
  function getName() {
    return name
  }
  return getName
}

let getName = setName("Lighthouse Labs")
getName() // -> "Lighthouse Labs"
```

## Side effects
> Any application state change that is observable outside the called function other than its return value

### Exmples of side effects
* `console.log`
* changing a global variable
* HTTP request
* Updating the DOM

### Pure Functions
* No side effects
* Same input === same output
# W7D3 — Data Fetching & Other Side Effects

## Outline
1. Closure recap
1. Side effects
1. `useEffect` in action

## Closure recap
> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

Functions within functions have access to their parents variables.

* Functions have access to the variables of the scope (or context) they're *defined* in
* Therefore a function *defined* within another function has access to the parent's scope
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
Any application state change that is observable outside the called function other than its return value

### Pure Functions
* No side effects
* Same input === same output

### Exmples of side effects
* `console.log`
* changing a global variable
* HTTP request
* Updating the DOM

## Rules of hooks
1. **Only call Hooks from React functions.**
2. **Always use Hooks at the top level.** Not inside loops, conditions, or nested functions

## `useEffect`
`useEffect` takes 2 arguments: a callback function and an optional dependencies array

* `useEffect` is a hook for using side effects in our React functions
* `useEffect` fires *after* your component has rendered
* You can use multiple `useEffect` hooks in a single React function

### Dependencies
* The dependencies array defines the dependencies for your effect
* This is ***not*** a list of triggers
* Your effect will be run everytime one of its dependencies updates
* **Note:** You can get stuck in an infinite loop if your effect updates one of its own dependencies
* **Note:** Dependencies are anything used in your effect but defined at the top level of your React function

### Cleanup an effect
Some effects need to be cleaned up before they can be run again! React lets us return a "cleanup function" from our effect function that will be run before the effect is run again.

```JS
// For example, an interval needs to be cleared before creating another one
// If we don't clear the interval we'll just create more and more intervals everytime state changes
useEffect(() => {
  const intervalID = setInterval(() => {
    // do something with state variable
  }, 3000)

  return () => {
    clearInterval(intervalID)
  }
}, [state])
```

> [Hooks API reference](https://reactjs.org/docs/hooks-reference.html)
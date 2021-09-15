# W1D3 - Objects in JS

> Most of your lectures will include instructors live coding. Don't worry about following along line by line. Instead pay attention and collaborate/ask questions.

## Outline
1. Primitive Data Types
2. Object Fundamentals
3. Functions and Objects
    * pass-by-value
    * Object methods

## Primitive Data Types
1. string
2. number
3. boolean
4. null
5. undefined
6. symbol
7. bigint

> Is there a difference between string and String?
JavaScript wraps primitive data types in an Object wrapper. This is what allows us to use built-in methods like `String.prototype.length`

```js
var str = "test"
str.length // -> 4

"test".length
```

Primitive data types are immutable!

```js
var x = "this is a string"
x.toUpperCase()
console.log(x) // "this is a string"
```

## Object Fundamentals

> So what is an object?

* Is an array an object? YES
* Is a function an object? YES

> An object is a value in memory which is referenced by an identifier.
> In JS objects can be thought of as a collection of properties.

### Examples of objects
1. "normal" objects (collections of key value pairs)
2. Functions (objects that are "callable")
3. Arrays (indexed collections/lists)

```js
// proof arrays are objects
const arr = [1, 2, 3]
arr.test = "test"
console.log(arr) // [1, 2, 3, test: "test"]
```

> **What are key value pairs?**
> Key value pairs are the pattern in objects where a property is assigned a name that references the value of the property. That name is refered to as a key.
> We can access the value of the property by referencing the key using "dot" syntax or "square bracket" syntax.

```js
// first we create an object with a key "exampleKey" that points to the value "example value"
const exampleObject = {
  exampleKey: "example value"
}

// dot syntax
exampleObject.exampleKey // "example value"

// square bracket syntax
exampleObject["exampleKey"] // "example value"
```

## Functions and Objects

### Pass-by-value
**Key Takeaways**
* When we create an object, JavaScript stores that object in memory and gives us a pointer (reference) to it.
* When we pass a value to a function, JavaScript creates a copy of that value for the function to use.
* Therefore, when we pass an object to a function JavaScript creates a copy of the pointer.


```js
const replace = function(ref) {
  ref = {} // this changes which object ref is pointing to but doesn't change the value of the original object
}

const update = function(ref) {
  ref.key = "newvalue" // this updates the key value in the object
}

let exampleObject = { key: "value" }

update(exampleObject) // exampleObject still has its original value (unchanged)
replace(exampleObject) // exampleObject contents has changed
```

### Object methods (and "this")

```js
// this referes to the context the function is called in
// since we make the function a method in `person`, `this` will refer to `person`
function getFullName() {
  return this.firstName + " " + this.lastName
}

function setAge(age) {
  this.age = age
}

const person = {
  firstName: "Zola",
  lastName: "McAdie",
  getFullName,
  setAge
}
```

/////////////////////////////////////
// Pass by value (object pointers) //
/////////////////////////////////////

const replace = function(ref) {
  ref = { newKey: "newValue" } // this changes which object ref is pointing to
}

const update = function(ref) {
  ref.key = "newvalue" // this updates the key value in the object
}

let obj = { key: "value" }

update(obj) // obj still has its original value (unchanged)
replace(obj) // obj contents has changed



////////////////////
// Object methods //
////////////////////

// this referes to the context the function is called in
// since we make the function a method in `person`, this will refer to `person`
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
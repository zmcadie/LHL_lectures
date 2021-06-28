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

module.exports = {
  assert,
  assertEqual,
  assertStrictEqual
}
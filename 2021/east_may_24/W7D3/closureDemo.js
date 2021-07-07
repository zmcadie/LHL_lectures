function setName(name) {
  function sayName() {
    console.log(name)
  }
  
  return sayName
}

const sayLabs = setName("Lighthouse Labs")
const sayMoz = setName("Mozilla")

sayLabs()
sayMoz()
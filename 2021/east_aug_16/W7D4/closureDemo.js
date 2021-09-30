// const sayName = name => {
//   console.log(name)
// }

// const setName = name => {
//   return () => {
//     sayName(name)
//   }
// }

// const ll = setName("Lighthouse Labs")
// const me = setName("Zola")

// ll()
// me()

const twoDecimals = num => {
  return Math.floor(num * 100) / 100
}

const getDiscount = age => {
  if (age < 18) return 15
  if (age > 65) return 30
  return 0
}

const applyDiscount = (age) => {
  const discount = getDiscount(age)
  return (price) => {
    return twoDecimals(price - (price * (discount / 100)))
  }
}

const peter = {
  first_name: "Peter",
  last_name: "Parker",
  age: 17
}

const may = {
  first_name: "Aunt",
  last_name: "May",
  age: 67
}

const neighbourhoodDiscount = applyDiscount(may.age)

neighbourhoodDiscount(18.00)
neighbourhoodDiscount(3.50)

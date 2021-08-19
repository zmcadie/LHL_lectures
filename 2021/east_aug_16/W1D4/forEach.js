const forEach = (items, callback) => {
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    callback(item, i)
  }
}

const words = ["Hello", "lighthouse", "labs"]
const numbers = [1, 2, 3]
console.log("-----> FOREACH FUNCTIONS <-----")
forEach(words, (item, index) => console.log("Item at index:", index, "is", item))
forEach(numbers, num => console.log(num * 2))

const forEachInReverse = (items, callback) => {
  for (let i = items.length - 1; i >= 0; i--) {
    callback(items[i], i)
  }
}

console.log("-----> REVERSE FUNCTIONS <-----")
forEachInReverse(words, (item, index) => console.log("Item at index:", index, "is", item))
forEachInReverse(numbers, num => console.log(num * 2))
// const numbers = [900, 310, 1006, 0, 2, 3630, 1, 52, 603, 59, 81, -500, -50];
const numbers = [900, 310, -200, -500, 52, 1, 5]

const numFunc = function(nums) {
  for (const num of nums) {
    setTimeout(() => console.log(num), num);
  }
}

numFunc(numbers);
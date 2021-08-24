const start = Date.now()
console.log("Started at:", start)

// Blocks the main thread so nothing else can happen until the given time has elapsed
function block(time = 500) {
  const blockUntil = Date.now() + time
  while (Date.now() < blockUntil) {
    // do nothing...
  }
}

// logs when an action is added to the queue, then logs when the action is run in the event loop
function doAction(actionName, duration) {
  const startedAt = Date.now()
  console.log("Starting", actionName)
  setTimeout(function() {
    console.log("Ending", actionName)
    console.log(actionName, "took", Date.now() - startedAt, "ms")
  }, duration)
}

doAction("Power on", 500)
block(1000)
doAction("Stand up", 1000)
doAction("Try not to take over the world", 5000)
doAction("Go to sleep", 1000)

// doAction("Action 1", 1000)
// doAction("Action 2", 2000)

// this error thrown between the previous actions will break our event loop
// setTimeout(function() {
//   throw new Error("will this break the queue")
// }, 1500)


// setTimeout(function() {
//   console.log("Action 1 took:", Date.now() - start, "ms")
//   block(1000)
// }, 1000)
// setTimeout(function() {
//   console.log("Action 2 took:", Date.now() - start, "ms")
// }, 1000)


// let data = "test"

// // first
// console.log(data, "(", Date.now() - start, "ms)")

// // retrieve new data and change the data variable value
// setTimeout(function() {
//   data = "new data"
// }, 3000)

// // second
// console.log(data, "(", Date.now() - start, "ms)")

// // third
// // this runs after the timeout that reassigns the data value so data will change
// setTimeout(function() {
//   console.log(data, "(", Date.now() - start, "ms)")
// }, 3000)

// // This function works similarly to timeout but blocks the main thread until its function runs
// // So, instead of scheduling an action for the future it forces everything to wait until it runs its action
// function blockingTimeout(callback, duration) {
//   block(duration)
//   callback()
// }

// blockingTimeout(() => console.log("action 1"), 3000)
// blockingTimeout(() => console.log("action 2"), 1000)
// blockingTimeout(() => console.log("action 3"), 5000)

// setTimeout(function (){ console.log("action 2") }, 3000)
// setTimeout(function (){ console.log("action 1") }, 1000)
// setTimeout(function (){ console.log("action 3") }, 5000)

// block(5001)


const end = Date.now()
console.log("Ended at:", end)
console.log("Time elapsed:", end - start)

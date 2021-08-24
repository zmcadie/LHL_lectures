# Asynchronous control flow

## Outline
1. Asynchronous control flow
1. setTimeout and setInterval functions
1. Higher-order functions
1. Events and event handling

## Asynchronous control flow
Today we learned that JavaScript is "single-threaded". This means that it can only do one thing at a time.

When we use functions like `setTimeout()` and `setInterval()` what we're actually doing is scheduling a task to be run in the future.

Once JavScript is done running it's main thread it will check for scheduled tasks and run them as close to their scheduled times as it can.

## `setTimeout` and `setInterval`
Both of these are higher-order functions because they accept functions as callbacks.

The second argument for both of these tells JavaScript how long in the future to run the callback functions. **But**, as we learned, this is not a gaurantee that the callbacks will run at that time, it is only a gaurantee that they won't run before that time. If another function blocks the main execution thread then JavaScript will only check the scheduled functions after the main thread is free.
// Lesson 06 practical: asynchronous JavaScript
// Run this file in a browser console or with Node.js.

// Synchronous statements run in order.
console.log("1. Script started");

// setTimeout schedules a callback. It does not block this file.
setTimeout(() => {
  console.log("4. Timer callback");
}, 0);

// Promise callbacks run as microtasks before timer callbacks.
Promise.resolve().then(() => {
  console.log("3. Promise callback");
});

console.log("2. Script continues");

// Expected output:
// 1. Script started
// 2. Script continues
// 3. Promise callback
// 4. Timer callback

// A Promise represents a result that may be available later.
function wait(milliseconds) {
  return new Promise(resolve => {
    setTimeout(resolve, milliseconds);
  });
}

async function runLesson() {
  console.log("Waiting...");
  await wait(1000);
  console.log("One second has passed.");
}

runLesson().catch(error => {
  console.error("The lesson example failed:", error);
});

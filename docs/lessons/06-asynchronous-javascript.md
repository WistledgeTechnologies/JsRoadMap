# Lesson 06 — Asynchronous JavaScript

## Lesson purpose

Some operations take time: waiting for a timer, reading a file, or requesting data from a server. Asynchronous JavaScript lets the program continue doing useful work while it waits. This lesson explains callbacks, promises, Fetch and async/await.

## Learning outcomes

Learners should be able to distinguish synchronous and asynchronous work, explain why a timer does not block the whole page, use a promise, fetch JSON, check HTTP responses, and handle failures with `try/catch`.

## 1. Synchronous vs asynchronous

Synchronous code runs in sequence. Each statement completes before the next statement begins.

```js
console.log("First");
console.log("Second");
console.log("Third");
```

Output:

```text
First
Second
Third
```

An asynchronous operation allows JavaScript to continue while the operation is pending. When the result is ready, a callback or promise continuation is scheduled to run.

```js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 1000);

console.log("C");
```

Output:

```text
A
C
B
```

The timer schedules the callback; it does not pause the rest of the script for one second.

## 2. A beginner view of the event loop

JavaScript code in a browser runs on a call stack. Browser APIs handle work such as timers and network activity. When asynchronous work completes, its callback is queued. The event loop coordinates when queued work can run after the current stack is clear.

Promise callbacks (microtasks) are processed before timer callbacks (tasks) at the relevant event-loop checkpoint. This is why the following order is predictable:

```js
console.log("Start");

setTimeout(() => console.log("Timer"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
```

Output:

```text
Start
End
Promise
Timer
```

A zero-millisecond timer does not mean "run immediately". It means the callback can run after the current work and scheduling rules allow it.

## 3. Promises

A Promise represents the eventual result of an asynchronous operation. It can be:

- **pending** — still waiting.
- **fulfilled** — completed successfully.
- **rejected** — failed.

```js
const resultPromise = new Promise((resolve, reject) => {
  const requestSucceeded = true;

  if (requestSucceeded) {
    resolve("Data received");
  } else {
    reject(new Error("Request failed"));
  }
});

resultPromise
  .then(result => console.log(result))
  .catch(error => console.error(error.message))
  .finally(() => console.log("Finished"));
```

`resolve` fulfils the promise; `reject` rejects it. `then` handles success, `catch` handles rejection, and `finally` runs after either outcome.

## 4. Fetch data from an API

The Fetch API makes HTTP requests. A fulfilled Fetch promise does not automatically mean the server returned a successful status. Check `response.ok`.

```js
async function loadUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.error("Could not load users:", error.message);
  }
}

loadUsers();
```

Step by step:

1. `fetch(url)` starts the request and returns a Promise.
2. `await` pauses this async function until that Promise settles; it does not block the entire JavaScript thread.
3. `response.ok` is true for successful HTTP status codes (200–299).
4. `response.json()` reads and parses the response body, returning another Promise.
5. `catch` handles network failures, JSON parsing failures and the error thrown for a non-success HTTP response.

## 5. async and await

An `async` function always returns a Promise. `await` can be used inside an async function to write promise-based code in a sequential style.

```js
async function getProduct(productId) {
  const response = await fetch(
    `https://fakestoreapi.com/products/${productId}`
  );

  if (!response.ok) {
    throw new Error("Product could not be loaded.");
  }

  return response.json();
}

getProduct(1)
  .then(product => console.log(product.title))
  .catch(error => console.error(error.message));
```

Errors thrown inside an async function reject the Promise returned by that function. The caller should handle that rejection with `try/catch` or `.catch()`.

## 6. Avoid common mistakes

- Do not forget to check `response.ok`.
- Do not forget to await `response.json()`.
- Do not assume a promise has completed just because the function call returned.
- Do not write an async function and then ignore its rejected Promise.
- Do not use `setTimeout` as a substitute for waiting for an API response.
- Do not call `await` at the top level in a classic browser script; use an async function unless the file is an ES module.

## Guided practice

Fetch the users endpoint from JSONPlaceholder. Display a loading message before the request, render the users after success, and display an error message if the request fails.

## Independent exercises

1. Predict the output of the event-loop example before running it.
2. Create a Promise that resolves after a short delay.
3. Fetch one post from JSONPlaceholder and display its title.
4. Handle an HTTP error and a network error.
5. Add a loading state that is cleared in a `finally` block.
6. Explain why `await` does not freeze the entire browser.

## Review questions

- What is the difference between synchronous and asynchronous work?
- What are the three states of a Promise?
- Why does Fetch require a separate `response.json()` call?
- Why must we check `response.ok`?
- What does an async function return?

## Lesson recap

Asynchronous operations allow JavaScript to wait for work without blocking the whole page. Promises represent future results. Fetch performs HTTP requests, and async/await makes promise-based code easier to read. Always handle unsuccessful HTTP responses and rejected promises.

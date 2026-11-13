# Lesson 07 — Scope and Closures

## Lesson purpose

A closure allows a function to continue accessing variables from the scope in which it was created, even after that outer function has finished running. This is useful for keeping state private and exposing only controlled operations.

## Learning outcomes

Learners should be able to explain global, function and block scope; describe lexical scope; identify a closure; and use a closure to manage private account state.

## 1. Scope

Scope determines where a variable can be accessed.

### Global scope

A variable declared at the top level of a script is generally available throughout that script (module scripts have their own module scope).

### Function scope

Variables declared inside a function are available within that function and its nested scopes.

```js
function greet() {
  const message = "Hello";
  console.log(message);
}

greet();
// console.log(message); // ReferenceError
```

### Block scope

`let` and `const` are limited to the block in which they are declared.

```js
if (true) {
  const status = "active";
  console.log(status);
}

// console.log(status); // ReferenceError
```

## 2. Lexical scope

JavaScript uses lexical scoping: a function's access to variables is determined by where the function is written, not where it is called.

```js
const course = "JavaScript";

function showCourse() {
  console.log(course);
}

function run() {
  showCourse();
}

run(); // JavaScript
```

The function `showCourse` can access `course` because it was defined in a scope where `course` is available.

## 3. What is a closure?

A closure is the combination of a function and the lexical environment it retains access to.

```js
function createCounter() {
  let count = 0;

  return function increment() {
    count += 1;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

After `createCounter()` returns, its local variable `count` is not discarded while the returned function still needs it. The returned function retains access to that binding.

Each call to `createCounter()` creates a separate counter with separate state.

## 4. Private account balance example

```js
function createAccount(initialBalance = 0) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      if (!Number.isFinite(amount) || amount <= 0) {
        throw new Error("Deposit must be a positive number.");
      }

      balance += amount;
      return balance;
    },

    withdraw(amount) {
      if (!Number.isFinite(amount) || amount <= 0) {
        throw new Error("Withdrawal must be a positive number.");
      }

      if (amount > balance) {
        throw new Error("Insufficient funds.");
      }

      balance -= amount;
      return balance;
    },

    getBalance() {
      return balance;
    }
  };
}

const account = createAccount(1000);

console.log(account.getBalance()); // 1000
console.log(account.deposit(500)); // 1500
console.log(account.withdraw(200)); // 1300
console.log(account.getBalance()); // 1300
```

The variable `balance` is not a property on the returned object. Code outside `createAccount` cannot directly assign `account.balance`. Instead, the object exposes controlled methods that interact with the private variable.

This is an example of encapsulation. It is a programming technique, not a security boundary for money or real financial accounts. A real account balance must be enforced by a trusted backend.

## 5. A closure is not the same as a class

Closures and classes can both organise state and behaviour. A closure is useful when a small API needs private variables without creating a class. A class is useful when creating many instances with a shared structure and methods. Choose the design that makes the code easiest to understand.

## 6. Common mistakes in the original practical

The original account example demonstrates a closure, but its browser integration needs careful attention:

- A variable named `balance` is assigned outside the closure even though the private balance is inside `createAccount`. Use the value returned by `deposit` or `withdraw` instead.
- Loading a saved number from localStorage does not automatically update the closure's private variable. The displayed balance and the closure's internal balance can become inconsistent after a refresh.
- Validate that an amount is finite and positive before depositing or withdrawing.
- Do not treat localStorage as a secure or authoritative financial ledger.

For the first closure lesson, run the console-only example before connecting it to a DOM interface or storage.

## Guided practice

Create a counter factory that accepts a starting value and returns `increment`, `decrement` and `getValue` methods. Confirm that two counters do not share state.

## Independent exercises

1. Create a closure that remembers a learner's name and returns a greeting function.
2. Add a `reset()` method to the counter.
3. Create two accounts and demonstrate that changing one balance does not change the other.
4. Prevent an account from withdrawing more than its balance.
5. Explain why a closure can still access a local variable after the outer function has returned.

## Review questions

- What is scope?
- What is lexical scope?
- What makes the counter example a closure?
- Why can outside code not directly change the private `balance` variable?
- What is the difference between encapsulation and security?

## Lesson recap

Scope controls where bindings are accessible. JavaScript uses lexical scope, so functions retain access to the environment in which they were created. Closures make it possible to preserve private state and expose a small set of controlled operations.

# Lesson 02 — Operators, Functions and Collections

## Lesson purpose

Programs need to calculate values, compare information, make decisions and organise related data. This lesson introduces operators and functions, then uses arrays and objects to model a small product catalogue.

## Learning outcomes

Learners should be able to use arithmetic, assignment, comparison and logical operators; write and call functions; explain parameters and return values; choose common array methods; and read object properties.

## 1. Operators

An operator performs an operation on one or more values. The values it works with are called operands.

### Arithmetic operators

```js
const firstNumber = 10;
const secondNumber = 3;

console.log(firstNumber + secondNumber); // 13
console.log(firstNumber - secondNumber); // 7
console.log(firstNumber * secondNumber); // 30
console.log(firstNumber / secondNumber); // 3.333...
console.log(firstNumber % secondNumber); // 1 (remainder)
console.log(firstNumber ** 2); // 100
```

The remainder operator (`%`) is useful for questions such as whether a number is even: `number % 2 === 0`.

### Assignment operators

Assignment stores a value in a variable. Compound assignment updates an existing binding.

```js
let cartTotal = 500;
cartTotal += 150; // cartTotal = cartTotal + 150
cartTotal -= 50;
console.log(cartTotal); // 600
```

### Comparison operators

Comparison expressions produce a Boolean (`true` or `false`).

```js
console.log(10 > 5);       // true
console.log(10 <= 10);     // true
console.log(10 === "10"); // false
console.log(10 == "10");  // true
console.log(10 !== 5);     // true
```

Prefer strict equality (`===`) and strict inequality (`!==`). Loose equality (`==`) may convert values before comparing them. That conversion is called type coercion; it can produce surprising results.

### Logical operators

- `&&` (AND) requires both conditions to be truthy.
- `||` (OR) succeeds when at least one operand is truthy.
- `!` (NOT) reverses a truthy/falsy result.

```js
const isAdult = true;
const hasValidTicket = false;

console.log(isAdult && hasValidTicket); // false
console.log(isAdult || hasValidTicket); // true
console.log(!isAdult);                  // false
```

JavaScript's logical operators return one of their operands, not always a Boolean. In conditions, values are evaluated for truthiness.

### Increment and ternary

```js
let itemCount = 0;
itemCount++;
console.log(itemCount); // 1

const temperature = 29;
const weather = temperature > 25 ? "Hot" : "Cool";
console.log(weather); // Hot
```

The ternary operator is useful for a short choice between two expressions. Use a normal `if/else` when the decision has multiple steps or becomes difficult to read.

## 2. Decisions

A conditional statement runs code only when a condition is satisfied.

```js
const orderTotal = 12500;

if (orderTotal >= 10000) {
  console.log("Free delivery");
} else if (orderTotal >= 5000) {
  console.log("Discounted delivery");
} else {
  console.log("Standard delivery");
}
```

Conditions are evaluated from top to bottom. The first matching branch runs.

## 3. Functions

A function is a reusable block of code that can receive input and optionally return a result.

```js
function calculateTotal(price, quantity) {
  const total = price * quantity;
  return total;
}

const orderTotal = calculateTotal(2500, 3);
console.log(orderTotal); // 7500
```

- `price` and `quantity` are **parameters** in the function definition.
- `2500` and `3` are **arguments** passed during the call.
- `return` sends a value back to the caller and ends that function execution.
- `console.log()` displays a value; it does not replace `return`.

A function without an explicit return value returns `undefined`.

### Arrow functions

```js
const add = (a, b) => a + b;
console.log(add(4, 6)); // 10
```

Arrow functions are useful for short callbacks and function expressions. They do not have their own `this` value, so they are not a universal replacement for every traditional function.

## 4. Arrays

An array stores an ordered list of values.

```js
const topics = ["variables", "functions", "arrays"];
console.log(topics[0]); // variables
console.log(topics.length); // 3
```

Common methods:

| Method | What it does | Changes original array? |
|---|---|---|
| `push` | Adds to the end | Yes |
| `pop` | Removes from the end | Yes |
| `unshift` | Adds to the beginning | Yes |
| `shift` | Removes from the beginning | Yes |
| `forEach` | Runs a callback for each item | No new array returned |
| `map` | Transforms each item into a new array | No |
| `filter` | Creates an array of matching items | No |
| `find` | Returns the first matching item or undefined | No |
| `findIndex` | Returns the first matching index or -1 | No |
| `some` | Checks whether at least one item matches | No |
| `every` | Checks whether all items match | No |
| `reduce` | Combines items into one accumulated result | No |
| `slice` | Copies part of an array | No |
| `splice` | Adds/removes items at an index | Yes |
| `includes` | Checks whether a value exists | No |

Example: a product list.

```js
const products = [
  { id: 1, name: "Laptop", price: 250000, category: "Electronics" },
  { id: 2, name: "Phone", price: 150000, category: "Electronics" },
  { id: 3, name: "Backpack", price: 12000, category: "Fashion" }
];

const affordableProducts = products.filter(product => product.price < 200000);
const productNames = products.map(product => product.name);
const laptop = products.find(product => product.id === 1);
const totalValue = products.reduce((total, product) => total + product.price, 0);

console.log(affordableProducts.length); // 2
console.log(productNames); // ["Laptop", "Phone", "Backpack"]
console.log(laptop.name); // Laptop
console.log(totalValue); // 412000
```

Choose a method based on the result you need. Use `map` to transform, `filter` to select many, `find` to select one, and `reduce` to accumulate.

### Sorting numbers correctly

By default, `sort()` converts values to strings. Provide a comparator for numeric sorting:

```js
const prices = [100, 9, 40];
prices.sort((a, b) => a - b);
console.log(prices); // [9, 40, 100]
```

`sort()` mutates the original array. If the original order must be preserved, copy first: `[...prices].sort((a, b) => a - b)`.

## 5. Objects and arrays of objects

An object stores named properties. An array of objects is a common way to represent records returned by an API or stored in a database.

```js
const learner = {
  firstName: "Ada",
  age: 22,
  course: "JavaScript"
};

console.log(learner.firstName); // Ada

const { firstName, age } = learner;
console.log(firstName, age); // Ada 22
```

Objects help keep related information together. Avoid storing unrelated fields in separate arrays that must stay aligned by index.

## Guided practice

Given a list of products, display only Electronics products, find the product with a particular ID, calculate the total value of all products, and sort a copy by price from low to high.

## Independent exercises

1. Write a function `calculateDiscount(price, percentage)` that returns the discounted price.
2. Determine whether a number is even or odd using the remainder operator.
3. Filter a list of learners to those with a score of at least 50.
4. Use `map` to create an array containing only product names.
5. Use `reduce` to calculate the total of an array of order amounts.
6. Explain the difference between `slice` and `splice`.

## Review questions

- What is the difference between `=` and `===`?
- What does a function return if it has no `return` statement?
- When should you use `map` instead of `forEach`?
- Why is a comparator needed when sorting numbers?
- Which array methods in this lesson mutate the original array?

## Lesson recap

Operators calculate and compare values. Conditions choose which code runs. Functions make logic reusable and return results. Arrays store ordered collections, and their methods let you transform, select, search and aggregate data. Objects group related properties into a single value.

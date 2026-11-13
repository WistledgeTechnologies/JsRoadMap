# Lesson 01 — JavaScript Foundations

## Lesson purpose

JavaScript gives a web page behaviour. HTML describes the content, CSS controls presentation, and JavaScript responds to data and user actions. In this lesson, learners write their first scripts, inspect output, and understand how JavaScript stores values.

## Learning outcomes

By the end, learners should be able to:

- Explain what JavaScript is and name environments where it runs.
- Connect an external JavaScript file to an HTML document.
- Use `console.log()` and browser DevTools.
- Write comments and statements.
- Declare variables with `const` and `let`.
- Identify primitive values and objects using examples and `typeof`.

## 1. What is JavaScript?

JavaScript is a general-purpose programming language commonly used to make websites interactive. In a browser it can respond to clicks, validate forms, update page content and communicate with servers. It also runs outside the browser through environments such as Node.js.

A useful mental model:

- **HTML** gives the page structure.
- **CSS** controls how the structure looks.
- **JavaScript** controls behaviour and updates.

JavaScript and Java are different programming languages. The name does not mean they share the same syntax or runtime.

### A short history

Brendan Eich created the language at Netscape in 1995. It was standardised through ECMA International, and the language specification is called ECMAScript. ES2015 (often called ES6) introduced major modern features such as `let`, `const`, classes, arrow functions, modules and promises. Node.js later made JavaScript widely usable on servers as well as in browsers.

## 2. Run JavaScript in a web page

Create two files in the same folder.

**index.html**

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>First JavaScript Program</title>
  <script src="./script.js" defer></script>
</head>
<body>
  <h1>My first JavaScript page</h1>
</body>
</html>
```

**script.js**

```js
console.log("Hello, JavaScript!");
console.log("I am learning to write programs.");
```

Open the HTML file in a browser. Open Developer Tools (usually F12) and select the Console tab. The two messages should appear.

The `src` attribute tells the browser where the JavaScript file is. The `defer` attribute tells the browser to download the script while parsing HTML, then execute it after the document has been parsed. This is useful when JavaScript needs to find elements in the page.

### Ways to include JavaScript

- Inline event attributes place code directly in HTML; avoid this in normal projects because it mixes structure and behaviour.
- An internal `<script>` block puts code inside the HTML file. It is useful for tiny demonstrations.
- An external `.js` file keeps behaviour separate and is the preferred approach for this course.

## 3. Comments and statements

A **statement** is an instruction that JavaScript can execute.

```js
const learnerName = "Ada";
console.log(learnerName);
```

A **comment** is explanatory text that the JavaScript engine ignores.

```js
// This is a single-line comment.

/*
  This is a multi-line comment.
  Use it for explanations that need more than one line.
*/
```

Comments should explain intent or non-obvious decisions. Avoid commenting every obvious line.

A semicolon marks the end of a statement. JavaScript has automatic semicolon insertion, but using semicolons consistently helps make examples predictable.

## 4. Variables: names that refer to values

A variable is a named binding that lets a program refer to a value.

```js
const courseName = "JavaScript";
let learnersEnrolled = 20;

learnersEnrolled = 21;

console.log(courseName);       // JavaScript
console.log(learnersEnrolled); // 21
```

- Use **`const`** when you will not reassign the binding.
- Use **`let`** when you need to assign a different value later.
- **`var`** is older syntax. Learn to recognise it, but prefer `const` and `let` in new code.

Important: `const` prevents reassignment of the variable binding. It does not make an object or array deeply immutable.

```js
const scores = [10, 20];
scores.push(30); // Allowed: the array contents changed.

console.log(scores); // [10, 20, 30]
```

### Scope

Scope describes where a variable can be accessed.

```js
if (true) {
  const message = "Inside the block";
  let count = 1;
  console.log(message, count);
}

// console.log(message); // ReferenceError: message is not defined
```

Variables declared with `let` and `const` are block-scoped. A block is commonly the code between a pair of curly braces.

### Naming

Use descriptive camelCase names such as `firstName`, `totalPrice` and `isLoggedIn`. Names can contain letters, digits, underscores and dollar signs, but cannot begin with a digit. Names are case-sensitive: `userName` and `username` are different identifiers.

## 5. JavaScript data types

A data type describes the kind of value a variable currently refers to.

### Primitive types

Primitive values are not objects. JavaScript has seven primitive types:

| Type | Example | Meaning |
|---|---|---|
| String | `"Ada"` | Text |
| Number | `42`, `3.14` | Integers and floating-point numbers |
| BigInt | `9007199254740993n` | Integers larger than Number can safely represent |
| Boolean | `true`, `false` | Logical truth values |
| Undefined | `let score;` | A declared binding with no assigned value |
| Null | `null` | An intentional absence of an object value |
| Symbol | `Symbol("id")` | A unique symbol value, often used as a property key |

### Objects (non-primitive values)

Objects group related values. Arrays are specialised objects used for ordered collections. Functions are also objects in JavaScript.

```js
const learner = {
  name: "Ada",
  age: 22,
  isEnrolled: true
};

const topics = ["variables", "strings", "objects"];

console.log(learner.name); // Ada
console.log(topics[0]);    // variables
console.log(topics.length); // 3
```

Array positions start at index `0`, not index `1`.

### Check a type with typeof

```js
console.log(typeof "hello"); // "string"
console.log(typeof 25);      // "number"
console.log(typeof true);    // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof 10n);     // "bigint"
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof {});      // "object"
console.log(typeof []);      // "object"
console.log(typeof null);    // "object" — historical JavaScript quirk
```

Do not use `typeof value === "object"` as a complete null/object check. Use `value !== null` as well. To check an array, use `Array.isArray(value)`.

### Template literals

Template literals use backticks and allow expressions inside `${}`.

```js
const learnerName = "Ada";
const topic = "JavaScript";

console.log(`Hello ${learnerName}, welcome to ${topic}.`);
// Hello Ada, welcome to JavaScript.
```

This is often easier to read than joining many strings with `+`.

## Guided practice

Create a learner profile with a name, age, enrolled status, and an array of topics. Log each property and check the type of each value. Add a template literal that produces a complete introduction.

## Independent exercises

1. Declare a `const` variable for a school name and a `let` variable for the number of learners. Increase the learner count and print both.
2. Create one example of each primitive type. Log the value and its type.
3. Create an object representing a product with `name`, `price` and `inStock`.
4. Create an array of three favourite programming topics. Print the first and last items.
5. Deliberately access a block-scoped variable outside its block. Read the error and explain it.

## Review questions

- What is the difference between JavaScript and ECMAScript?
- Why is an external script usually easier to maintain?
- When should you choose `let` instead of `const`?
- Why does `typeof null` produce `"object"`?
- What is the difference between an array and an ordinary object?

## Lesson recap

JavaScript runs in browsers and other runtimes. A script is made of statements; comments explain code but do not execute. Variables are bindings to values, and choosing between `const` and `let` communicates whether reassignment is expected. Values have types, and objects allow related data to be grouped.

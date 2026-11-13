# Lesson 08 — Destructuring, Rest/Spread and APIs

## Lesson purpose

JavaScript applications frequently receive arrays and objects from functions and APIs. Destructuring makes it easier to extract values from those structures. Rest and spread syntax help collect and copy values. The lesson ends by applying these features to API data.

## Learning outcomes

Learners should be able to destructure arrays and objects, rename variables, provide defaults, access nested data, use rest and spread syntax, and extract values from API responses.

## 1. Array destructuring

Destructuring assigns values from an array to variables based on position.

```js
const colors = ["red", "blue", "green"];

const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor);  // red
console.log(secondColor); // blue
console.log(thirdColor);  // green
```

Array order matters. To skip an item, leave an empty position.

```js
const [first, , third] = ["A", "B", "C"];
console.log(first, third); // A C
```

### Default values

A default is used when the array position is `undefined`.

```js
const [primary = "blue", secondary = "white"] = ["black"];
console.log(primary, secondary); // black white
```

A default does not replace an explicit `null` value.

## 2. Object destructuring

Object destructuring uses property names, not positions.

```js
const learner = {
  name: "Ada",
  age: 22,
  country: "Nigeria"
};

const { name, age } = learner;
console.log(name, age); // Ada 22
```

### Rename a variable

```js
const { name: learnerName, country: learnerCountry } = learner;
console.log(learnerName, learnerCountry);
```

The syntax `name: learnerName` means "read the name property and assign it to a local variable called learnerName". It does not rename the property on the original object.

### Default values

```js
const user = { username: "ada" };
const { username, role = "learner" } = user;

console.log(username, role); // ada learner
```

### Nested destructuring

```js
const person = {
  name: "Ada",
  address: {
    city: "Port Harcourt",
    country: "Nigeria"
  }
};

const {
  address: { city, country }
} = person;

console.log(city, country);
```

The nested `address` object must exist for this exact pattern to work. If the API may omit it, use optional chaining or a safe default before destructuring.

## 3. Function parameter destructuring

```js
function introduce({ name, course }) {
  return `My name is ${name} and I am learning ${course}.`;
}

console.log(introduce({ name: "Ada", course: "JavaScript" }));
```

This is useful when a function accepts an object with several named options. The caller can pass the properties in any order.

## 4. Rest syntax

Rest collects remaining values into a new array or object.

```js
const [first, ...otherScores] = [90, 85, 72, 66];

console.log(first);        // 90
console.log(otherScores);  // [85, 72, 66]
```

For objects:

```js
const { password, ...publicProfile } = {
  name: "Ada",
  email: "ada@example.com",
  password: "not-for-display"
};

console.log(publicProfile);
// { name: "Ada", email: "ada@example.com" }
```

This example only demonstrates object selection. It is not a complete data-security technique; sensitive fields should not be sent to clients in the first place.

## 5. Spread syntax

Spread expands an iterable or object properties into a new array or object.

```js
const firstBatch = [1, 2];
const secondBatch = [3, 4];

const allScores = [...firstBatch, ...secondBatch];
console.log(allScores); // [1, 2, 3, 4]
```

For objects:

```js
const originalUser = { name: "Ada", role: "learner" };
const updatedUser = { ...originalUser, role: "mentor" };

console.log(updatedUser); // { name: "Ada", role: "mentor" }
console.log(originalUser.role); // learner
```

Spread makes a shallow copy. Nested objects and arrays are still shared references unless they are copied separately.

### Rest vs spread

The same three dots are used for different purposes:

- **Rest** collects remaining values into one variable.
- **Spread** expands values into another array, object or function call.

The surrounding syntax determines which meaning applies.

## 6. Destructure API data

Use the JSONPlaceholder demo API to practise reading structured response data.

```js
async function loadFirstUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const users = await response.json();
    const [firstUser] = users;

    const {
      name,
      email,
      address: { city }
    } = firstUser;

    console.log(name, email, city);
  } catch (error) {
    console.error("Unable to load user:", error.message);
  }
}

loadFirstUser();
```

The API returns an array of user objects. Array destructuring selects the first object. Object destructuring then extracts the name, email and nested city.

Never assume every external API response has the exact shape you expect. Check the response status and validate that required fields exist before using them in a real application.

## Guided practice

Fetch the users endpoint. Render each user's name, email and city in a list. Use destructuring inside the loop to keep the rendering code readable.

## Independent exercises

1. Destructure the first and last values from an array of five subjects.
2. Rename an object's `name` property to a local variable called `fullName`.
3. Give a missing `role` property a default value.
4. Use rest syntax to collect all scores after the first two.
5. Use spread syntax to add one new property without mutating the original object.
6. Fetch a list of users and display their names and cities. Handle missing nested address data safely.

## Review questions

- Why does order matter in array destructuring but not object destructuring?
- What does `name: learnerName` mean in object destructuring?
- What is the difference between rest and spread?
- Is spread a deep copy?
- Why should an API response be checked before destructuring nested properties?

## Lesson recap

Destructuring extracts values from arrays and objects. Rest collects remaining values; spread expands values into a new structure. These features make everyday data handling clearer, especially when working with API responses.

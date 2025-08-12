/*
DESTRUCTURING
Destructuring in javascript is a short way of extracting values from an object and arrays then assign them to variables in a convenient way;
We can use square brackets [] = to perform array destructuring and curcly braces {} to perform object destructuring;

First of all, before you get your hands on your computer to start coding or moving to the next level, ask your self this question.

What is destructuring?
Why destructuring?
Where do i need to use destructuring?
How do i use destructuring?


DESTRUCTURING ARRAYS
const colors = ["red", "blue", "green"];

const [first, second, third] = colors;
console.log(first, second, third)

When destructuring arrays the order matters a lot, also you can skip values by leaving empty slots and also set default values;

e.g2
const colors = ["red", "blue", "green"];

const [first, , third] = colors;
console.log(first)
console.log(third)

Swapping the values of two properties with destructuring
const a = 1;
const b = 2;

[a, b] = [b, a]
console.log(a)
console.log(b)

const colors = ["red", "blue", "green", "black", "white"];
[colors[0], colors[4]] = [colors[4], colors[0]]
console.log(colors);


===============Assigning of values==============
const [a, b, c = "yellow"] = ["Black", "white"];
console.log(a, b, c)

Rest vs Spread Operator (...);
Rest syntax (...) lets you collect the remaining items.
Spread syntax (...) lets you expand an array or object into individual elements or property.

//Rest
const [first, ...others] = [10, 20, 30, 40];
console.log(first);  // 10
console.log(others); // [20, 30, 40]

//Spread
const firstArr = [1, 2];
const secondArr = [3, 4];
const arr = [...firstArr, ...secondArr];
console.log(arr);



DESTRUCTURING OBJECTS
example:
const person = {
 name: "Victor",
 age: 30,
 country: "Nigeria"
}

Normal way of doing this would be
const name = person.name;
const age = person.age;
const country = person.country;

console.log(name, age, country);

lets destructure the object person in this case, we'll have a reverse of the object that we created earlier inrtead of storing them in a variable;

const person = {
    name: "Victor",
    age: 30,
    country: "Nigeria"
}

const { name, age, country } = person;
console.log(name, age, country);


Example:
const user = {
  username: "john_doe",
  email: "john@example.com",
  role: "admin"
};

const { username, role } = user;
console.log(username); // "john_doe"
console.log(role);     // "admin"


Change variable names while destructuring:
const { username: userName, role: userRole } = user;
console.log(userName); // "john_doe"
console.log(userRole); // "admin"


//Setting default values:
const { username, status = "active" } = user;
console.log(username); // "john_doe"
console.log(status);   // "active";


4. Nested Destructuring
You can destructure inside arrays or objects.

const person = {
  name: "Victor",
  address: {
    city: "Lagos",
    country: "Nigeria"
  }
};

const { address: { city, country } } = person;

console.log(city);    // "Lagos"
console.log(country); // "Nigeria"



5. Mixed Destructuring (Arrays + Objects)
Sometimes, data is a mix of both arrays and objects.

const users = [
  { id: 1, name: "Victor" },
  { id: 2, name: "Ada" }
];

const [ { name: firstUserName }, { name: secondUserName } ] = users;

console.log(firstUserName);  // "Victor"
console.log(secondUserName); // "Ada";



6. Function Parameter Destructuring
You can destructure directly inside function parameters.

function greet({ name, age }) {
  console.log(`Hello, ${name}. You are ${age} years old.`);
}

const person = { name: "Victor", age: 25 };
greet(person);
// Output: Hello, Victor. You are 25 years old.



7. Rest Syntax with Destructuring

Rest vs Spread Operator
Rest syntax (...) lets you collect the remaining items.
Spread syntax (...) lets you expand an array or object into individual elements or property.

const [first, ...others] = [10, 20, 30, 40];
console.log(first);  // 10
console.log(others); // [20, 30, 40]

//Spread
const firstArr = [1, 2];
const secondArr = [3, 4];
const arr = [...firstArr, ...secondArr];
console.log(arr)

Example with object:
const { name, ...rest } = { name: "Victor", age: 25, country: "Nigeria" };
console.log(name); // "Victor"
console.log(rest); // { age: 25, country: "Nigeria" }


Things to note;
Array Destructuring	const [a, b] = arr;	Order matters
Object Destructuring	const {x, y} = obj;	Property names must match
Default Values	const [a = 1] = [];	Used if value is undefined
Rename Variables	const {x: newX} = obj;	Useful for avoiding name clashes
Nested Destructuring	const {a: {b}} = obj;	Works deeply inside structures
Rest Syntax	const [...rest] = arr;	Captures remaining values


fetching a single user from an api, then destructuring the user data;
fetching multiple users from an api, then destructuring the user data;

fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json())
.then(users => {
    if(!users) return;
    const [firstUser] = users;
    const { name, email, address: { city }} = firstUser;
    console.log(name, email, city)
}).catch( error => {
    console.error(`Error fetching users`)
})

const API_URL = "https://jsonplaceholder.typicode.com"

async function fetchData(endpoint){
    return fetch(`${API_URL}/${endpoint}`)
    .then(response => {
        if(!response.ok){
            throw new Error(`Http error ${endpoint}`)
        } else {
            return response.json()
        }
    }).catch(error => {
        console.error(`Error fetching ${endpoint}`)
    })
}

fetchData("users").then(users => {
    if(!users) return;
    users.forEach(user => {
        const { name, email, address : { city }} = user;
        console.log(name, email, city)
    })
})
*/

/*

// INTRODUCTION TO JAVASCRIPT
/*

// HISTORY OF JAVASCRIPT

In 1995 JavaScript was created 
by Brendan Eich in just ten days 
while working at Netscape.
It was originally called Mocha, 
then renamed to LiveScript, 
and finally Javascript to ride on 
popularity of Java even though 
they are very different languages.

In 1996 - Microsoft released its own 
version called Jscript for internet explorer, 
leading to browser incompatibility issues.

In 1997 - Javascript was then standardized
 by ECMA International as ECMAScript (ES)
 to ensure all browsers used the same rules

In 2009 - NodeJs was released allowing javascript
Javascript to run outside of the web browser (on servers).
revolutionilizing backend development.

In 2015 - ES6 (ECMAScript 2015) introduced
 major features like let, const, arrow functions
 classes, promises, and modulus - making Javascript
 more powerful and mordern.

Today - JavaScript is one of the most popular and 
powerful programming languages in the world, used for web,
mobile apps, server-side, games, and even AI.


Lesson 1.1: WHAT IS JAVASCRIPT?

"JavaScript is a high level,
dynamic, sigle-threaded,
and interpreted programming 
language that is designed
 basically for the web."

ANALOGY
"HTML is the skeleton,
 CSS is the skin/clothes, 
 JavaScript is the brain/muscles 
 that make it move and respond."

Where it Runs: JavaScript runs in the
Browser (client-side) frontend, Node.js 
(server-side) backend. Focus on browser for now.

int main add(a, b){
    return (a + b);
}

funtion add( a, b){
    return ( a + b);
}

SETTING UP JAVASCRIPT FOR USE ---
--- WITHIN A DOCUMENT OR WEB-PAGE

The same way we have inline css, 
internal css and external css so 
we also do for javascript

INLINE JAVASCRIPT
Inline Script (Less Common):
<script> console.log("Hello!"); </script>
 in HTML (not recommended for large scripts).

EXTERNAL JAVASCRIPT
"This is the recommended way to keep 
your code organized and maintainable.";
External File (Best Practice): 
<script src="script.js"></script> in HTML.

INTERNAL JAVASCRIPT
Internal Script (Less Common): 
<script src="script.js"></script> in HTML, but the
 script is embedded in the HTML file 
 (not recommended for large scripts).
*/


/*
// LESSON 1.2:

// COMMENTS: comments in javascript 
// are used to explain code, make it 
// readable, and also prevent certain 
// codes from executing.
These codes are ignored by the 
browser during execution.


// single line and  multi-line 
// Explain their purpose.
//SINGLE LINE COMMENTS
Usefull for commenting sigle lines ,
 especially for making a brief explaination.

//MULTI-LINE COMMENTS
Useful for preventing codes from 
being executed and creating a document.

// STATEMENTS: 
// What is a JavaScript statement? 
// A statement is a complete instruction 
// that tells the browser to do something,
// often ends with a semicolon, though optional 
// in modern JS, good practice to use.
N/B it is the smallest unit of code 
that tells the browser what to do.





EXAMPLES OF JAVASCRIPT STATEMENTS
// Variables Statements  */

   age = 25;  
   
   /*
// Function call statement  */ 
    greet();

 /*
// Conditional Statement  */   
    if(age < 18) {
    console.log("Adult")
}   

/*
// Return Statements  */
    return age;
/*

// Declaration Statement */ let age = 25; function greet(){};/*


VARIABLES
A variable is like a box where 
you store information.
You can label the box ( naming the variable )
 and put something inside ( the value )
Concept: A container for storing data.

*/ 
 let name_of_students = "Victor";
 let ageGro67up = 25;
 
/*
// var (legacy), 
// let (reassignable), 
// const (constant/read-only). 
// Emphasize let and const as 
// modern best practices.


NAMING CONVENTIONS: 
1. Can include letters, numbers, _, and $
2. Cannot start with a number
3. Cannot use spaces or special characters
4. camelCase (myVariableName).


// Hands-on:

PRINTING MESSAGES TO THE CONSOLE
Using console.log to print messages
console.log("Hello, JavaScript!");
console.log("This is fun!");

// VARIABLE DECLARATION ------- Declaring variables

let userName = "Victor"; 
// using let can be reassigned and they are blocked scoped
{
    let age = 25; // This age is only accessible within this block
    console.log("User age:", age); // 25
}
    console.log(" age:", age); // Wont work, age is not defined outside the block

const appName = "Awesome Chat";
// using const (cannot be reassigned) they are blocked scoped


var oldVariable = 10; 
// Avoid var in new code they are not blocked scoped
{
    var oldVariable = 20; // This will affect the outer scope
}
console.log("Old variable:", oldVariable); // 20
// // old way of declaring variables

console.log(userName);
console.log(appName);

userName = "Shadrach"; // Reassigning let
console.log("New user name:", userName);

"appName = " // This would cause an error!

------------------------TODO
Create index.html and script.js.
// Link script.js in index.html.

// Write/print the message 
// "Hello wrold!" in script.js 
// and show them the browser's
//  developer console.

// Write your name, state of origin,
//  and any other details that you wish
//  to add and print it to the console.
//  and finally print  The programmer's 
// best friend for debugging to the console
// console.log(): Show how to print messages.

// DATA TYPES AND OPERATORS

// Lesson 2.1: Data Types (15-20 mins)
// Concept: Different kinds of data JavaScript can work with.

// Primitives:

// String: Text. ("Hello", 'World', `Template` literals).
// template literals for easy variable embedding (${variable}).

// Under the string method we have the template literals

// TEMPLATE LITERALS 
// Example: `Hello, ${name}!` 
// (allows multi-line strings and 
// variable interpolation).
for example: you havea sister or a 
sibling which is 5 years old and you 
want to constantly update the age of 
your sibling.

you can then say 

let siblingAge = 5;
let siblingName = "Tamunoibuomi";
console.log(`My sister's name is 
${siblingName} and she is ${siblingAge} years old.`); 
// My sister's name is Tamunoibuomi 
// and she is 5 years old.

// String Concatenation: 
// "Hello" + " " + "World" Text data enclosed in quotes
// This contains Single, Double or Backticks
// (not recommended, use template literals instead).

// Number: Both integers and decimals (5, 3.14).
// This contains numeric values both intergers or decimal

// Boolean: True or False (true, false).
// This consist of only two values which is either.
// True or False;

// Undefined: Variable declared but no value assigned.
// This is a variable that has been declared but not assigned any value;

// Null: Intentional absence of any object value.
// This is a special value that means nothing or empty

// Symbol: This is a unique, unchangeable value often used as an
// object key/ its used to avoid name clashes in objects or create
// a unique id e.g let id = Symbol("userID").
// console.log(id) //Symbol(userID);

// BigInt: This represents very large intergers
// that are beyond number limits, it is used for
//  big numbers like cryptography or scientific data. 

// Non-Primitive (Object):

// Object: Collections of key-value pairs 
// It is used to group data like a real world object.
// e.g ({ name: "Alice", age: 30 }).

// Array: Ordered lists of values ([1, 2, 3], ["apple", "banana"]).

// typeof operator: Show how to check a variable's data type.
*/

// --------------------------- TODO ----------------------Hands-on-PRACTICALS:
// Define each data type
// check their typeof
// log each of them to the console and
// update their values


// let greeting = "Hello there!"; // String
// let age = 25; // Number
// let price = 99.99; // Number
// let isLoggedIn = true; // Boolean
// let undefinedVar; // Undefined
// let selectedColor = null; // Null (intentional empty)

// console.log(typeof greeting);     // "string"
// console.log(typeof age);          // "number"
// console.log(typeof isLoggedIn);   // "boolean"
// console.log(typeof undefinedVar); // "undefined"
// console.log(typeof selectedColor);// "object" (historical quirk, explain this)

// let person = {
//     firstName: "Tamunoibuomi",
//     lastName: "Shadrach",
//     city: "Okrika"
// }; // Object
// console.log(typeof person);       
// // "object"
// console.log(person.firstName);    
// // Accessing object properties

// let fruits = ["Apple", "Banana", "Cherry"]; // Array
// console.log(typeof fruits);       
// // "object" (Arrays are a type of object)
// console.log(fruits[0]);           
// // Accessing array elements (zero-indexed)
// console.log(fruits.length);       
// // Array length

// // Template Literals
// let product = "Laptop";
// let cost = 1200;
// console.log(`The ${product} costs $${cost}.`);

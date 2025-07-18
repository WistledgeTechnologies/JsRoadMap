// N/B We will be making references to some other parts in javaScript tho we will still talk about them

/*
Lesson 2.2: Operators (20-30 mins)
// Concept: Symbols that perform operations on values and variables.

// Arithmetic Operators: +, -, *, /, % (modulus/remainder), ** (exponentiation).

let a = 10;
let b = 5;

// Arithmetic
console.log("a + b =", a + b); // 15
console.log("a % b =", a % b); // 0 (remainder)
console.log("a ** 2 =", a ** 2); // 100

// Assignment Operators: =, +=, -=, *=, /=, etc. (Shorthand for assigning results).

// Assignment
let x = 7;
x += 3; // Same as x = x + 3;
console.log("x =", x); // 10


// Comparison Operators:

// == (loose equality, type coercion) - 

// === (strict equality, no type coercion) - Recommend using this!

// != (loose inequality)

// !== (strict inequality) - Recommend using this!

// >, <, >=, <=

// Comparison
console.log("10 == '10'", 10 == '10');   
// true (loose equality - BAD!)
console.log("10 === '10'", 10 === '10'); 
// false (strict equality - GOOD!)
console.log("5 > 3", 5 > 3);             
// true
console.log("a !== b", a !== b);         
// true

// Logical Operators:

// && (AND): Both true

// || (OR): At least one true

// ! (NOT): Reverses boolean value

// Logical
let isAdult = true;
let hasLicense = false;
console.log("Can drive?", isAdult && hasLicense); // false
console.log("Can enter?", isAdult || hasLicense); // true
console.log("Not adult?", !isAdult);             // false

// Unary Operators: ++ (increment),
//  -- (decrement). (Prefix vs. Postfix).

// Unary
let count = 0;
count++; // count is now 1
console.log("Count:", count); // 1


// Ternary Operator (Conditional Operator): 
// condition ? exprIfTrue : exprIfFalse (Shorthand if/else).

// Ternary
let temperature = 28;
let weather = (temperature > 25) ? "Hot" : "Cool";
console.log("Weather:", weather); // Hot



// ARRAY METHODS
// forEach: This is to 
// find 
// splice
// push
// fiter 
// sort 
// forEach 
// reduce
// concat
// map
// some 
// every 
// incudes 
// slice 
// reverse 
// shift 
// unshift


class Products{
    constructor(id, name, price, location, category){
        this.id = id;
        this.name = name;
        this.price = price;
        this.location = location;
        this.category = category
    }

    display(){
        return `${this.name}, ${this.price}, ${this.location} ${this.category}`;
    }
}

const user1 = new Product("Laptop", 20000, "Lagos", "Electronics");

const products1 = [
    new Products(1, "Laptop", 250000, "Rivers", "Electronics"),
    new Products(2, "Phone", 150000, "Akwa_Ibom", "Fashion"),
    new Products(3, "Sneakers", 18000, "Abia", "Electronics"),
    new Products(4, "Watch", 10000, "Imo", "Accessories"),
    new Products(5, "BackPack", 250000, "Bayelsa", "Fashion")
]

// ARRAY OF OBJECTS
const products2 = [ 
 { id: 1, name:"Laptop", price: 250000, location: "Rivers", category: "Electronics"},
 { id: 2, name: "Phone", price: 150000, location: "Akwa_Ibom", category: "Fashion"},
 { id: 3, name: "Sneakers", price: 18000,location: "Abia", category: "Electronics"},
 { id: 1, name:"Watch", price: 250000, location: "Rivers", category: "Electronics"},
 { id: 1, name:"BackPack", price: 6000, location: "Mile One", category: "Fashion"},
]

const products3 = {
 names: [ 1, "Laptop", 250000, "Rivers", "Electronics"],
  ids: [ 2,  "Phone", 150000, "Akwa_Ibom", "Fashion"],
 prices: [ 3,  "Sneakers", 18000, "Abia", "Electronics"],
 categories: [ 4,  "Watch", 10000, "Imo", "Accessories"],
 locations:[ 1, "Watch", 250000, "Rivers", "Electronics"]
}

 */


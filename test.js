alert('This is external JavaScript file')

// Single line comments
/* 
// Multi-line
*/

//
//Statements and types

let age = 15;
console.log(age);

function add(a , b){
    return (a + b);
}
console.log(add(5, 10))

// conditional statement;
if(age === 18){
    console.log("You're under aged");
} else if( age >= 18){
    console.log("You are an adult");
} else {
    console.log("Invalid Document");
}

// Initializing is let const and var

//Blocked Scoped Variables
{
    let ageOfAdults = 30;
    ageOfAdults = 60;
    console.log(ageOfAdults);
}

let Victory = "Girl";
Victory = "Boy";
console.log(Victory);

// const numberOfStudents = 50;
// numberOfStudents = 55;
// console.log(numberOfStudents);


var car = "Lexus";
car = "Toyota";
console.log(car);
{
    const ageOfAdult = 60;
    console.log(ageOfAdult);
}

    // This is not block scoped
{
    var ageOfAdults = 60;
    console.log(ageOfAdults);
}

    console.log(ageOfAdults);

//String Primitive Data typesd
    let nameOfSibling = "Victory Tamunoibuomi";
    let ageOfSibling = 40.6;
    let characterOfSibling = "quiet";
    let complexion = "Albino";
    let bestFood = "rice";
    let isBad = false;
    let school;
    let ignorance = "but we dont know the nanme of her school";
    let bestFriend = null;
    let id = Symbol("123 345 4355");
    let bigInt = 564656465646564654634654646564654646465464646464646;

    console.log(id);
    console.log(school);
    
    // Template literals
    console.log(`My Sister name is ${nameOfSibling} she is ${ageOfSibling} years old, he is a very ${characterOfSibling} person, she is ${complexion} in color and she loves eating ${bestFood}, people that she is a bad person but i dont consider that to be true rather ${isBad}, she attends ${ignorance}`);

 function createPerson(name, id, character, complexion, bestFood, bestFriend, age){
    name,
    id,
    character,
    complexion,
    bestFood,
    bestFriend,
    age
 }

    class Animal {
        constructor(name, id, character, complexion, bestFood, bestFriend, age){
            this.name = name;
            this.id = id;
            this.character = character;
            this.complexion = complexion;
            this.bestFood = bestFood;
            this.bestFriend = bestFriend;
            this.age = age;
        }
    }


//Array

let nameOfSibling1 = "Victory Tamunoibuomi";
let ageOfSibling2 = 40.6;
let characterOfSibling3 = "quiet";
let complexion4 = "Albino";
let bestFood5 = "rice";
let isBad6 = false;
let school7;
let ignorance8 = "but we dont know the nanme of her school";
let bestFriend9 = null;
let id10 = Symbol("123 345 4355");
let bigInt11 = 564656465646564654634654646564654646465464646464646;
let fruits = ["mango", "Banana", "Orange"];

console.log(typeof nameOfSibling1)
console.log(typeof ageOfSibling2)
console.log(typeof characterOfSibling3)
console.log(typeof complexion4)
console.log(typeof bestFood5)
console.log(typeof isBad6)
console.log(typeof school7)
console.log(typeof ignorance8)
console.log(typeof bestFriend9)
console.log(typeof id10)
console.log(typeof bigInt11)
console.log(typeof fruits)
console.log(fruits);


console.log(`My Sister name is ${nameOfSibling1} she is ${ageOfSibling2} years old, he is a very ${characterOfSibling3} person, she is ${complexion4} in color and she loves eating ${bestFood5}, people that she is a bad person but i dont consider that to be true rather ${isBad6}, she attends ${ignorance7}`);

e-commerce
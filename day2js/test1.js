// Group 1 day2
let a = 5;
let b = 5;

console.log("a + b =", a + b);
console.log("a % b =", a % b); 
console.log("a ** 2 =", a ** 2);
console.log("a - b =", a - b);
console.log("a / b =", a / b);
//////////////////////////////
function add(a, b){
    return ( a + b)
}
console.log(add(30, 25));
//////////////////////////////
function subtract(a, b){
    return ( a - b)
}
console.log(subtract(30, 25));
////////////////////////////
function multiply(a, b){
    return ( a * b)
}
console.log(multiply(30, 25));

// Assignment operators
let x = 7;
x += 3; let y = x + 3;

console.log("x =", x, y); 

// let const and var 

//let is a block scoped

let year = 2015;


{
    let year = 3020;
    year = 2040;
    console.log(year);
    
}
console.log(year);

{
const dob = "31/12/2025";
console.log(dob);

}
{
var time = "12:00"

}
console.log(time)


console.log("10 == '10'", 10 == '10');   
console.log("10 === '10'", 10 === '10'); 
console.log("5 > 3", 5 > 3);             
console.log("a !== b", a !== b); 


let isAdult = true;
let hasLicense = false;
console.log("Can drive?", isAdult && hasLicense); 
console.log("Can enter?", isAdult || hasLicense); 
console.log("Not adult?", !isAdult);            

// Unary
let count = 0;
count++; 
console.log("Count:", count);

for(let i = 0; i < 11; i++){
    console.log(i);
}

let temperature = 24;
let weather = (temperature > 25) ? "Hot" : "Cold";
console.log("The weather is", weather); 

if(temperature > 25){
    console.log("The weather is very hot")
} else if(temperature < 25){
    console.log("The weather is cold")
} else {
    console.log("The day is bright");
}
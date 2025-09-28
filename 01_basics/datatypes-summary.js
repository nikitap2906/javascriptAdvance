//  ****** Primitive ******

//  7 types :  String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);  // false

// const bigNumber = 3456543576654354678n

// ****** Reference (Non primitive) ******

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "Nikita",
    age: 24,
}

const myFunction = function () {
    // console.log ("Hello world")
}
console.log (typeof bigNumber);  // undefined
console.log (typeof outsideTemp);  // object
console.log (typeof scoreValue);  //  number
console.log (typeof anotherId);  // symbol
console.log (typeof myFunction);  // function

// dataTypas

// Type fo val   => "Result"
// undefined     => "undefined"
// null          => "object"
// Boolean       => "boolean"
// Number        => "number"
// String        => "string"


// link to study
// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "nikitapatidotcom"

let anothername = myYoutubename

anothername = "nikitavaibhs"

console.log (anothername);
console.log (myYoutubename)

let userOne = {
    email: "user@google.com",
    upi: "user@bl"
}

let userTwo = userOne

userTwo.email = "nikita@google.com"

console.log (userOne.email);
console.log (userTwo.email);
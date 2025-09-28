let score = "33" // "33"  =>  33
let score2 = "33abc" //  "33abc" => NaN
let score3 = null
let score4 = undefined
let score5 = true  //  true => 1, false => 0
let score6 = "Nikita"

// console.log (typeof score);
// console.log (typeof (score));

let valueInNumber = Number (score)
// console.log (typeof valueInNumber);

let valueInNumber2 = Number (score2)
// console.log (typeof valueInNumber2);
// console.log (valueInNumber2); // NaN

let valueInNumber3 = Number (score3)
// console.log (typeof valueInNumber3);
// console.log ( valueInNumber3); // 0

let valueInNumber4 = Number (score4)
// console.log (typeof valueInNumber4);
// console.log ( valueInNumber4); // NaN

let valueInNumber5 = Number (score5)
// console.log (typeof valueInNumber5);
// console.log ( valueInNumber5); // 1

let valueInNumber6 = Number (score6)
// console.log (typeof valueInNumber6);
// console.log ( valueInNumber6); // NaN

// nots

// "33"  =>  33
//  "33abc" => NaN
//  true => 1, false => 0



let isLoggedIn = 1
let isLoggedIn1 = ""
let isLoggedIn2 = "Nikita"  // true

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log (booleanIsLoggedIn); // true

let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
// console.log (booleanIsLoggedIn1); // false

// nots

// 1 => true, 0 => false
// "" => false
// "Nikita" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)


//*****************  Operations  ***************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = "Nikita"

let str3 = str1 + str2
// console.log (str3)

// console.log("1" + 2) // 12
// console.log(1 + "2") // 12
// console.log("1" + 2 + 2) // 122
// console.log(1 + 2 + "2") // 32

console.log (true) // true
console.log (+true) // 1
console.log(+"")  // 0

let gameCounter = 100
gameCounter++;
console.log (gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

function sayMyName() {
    console.log("N");
    console.log("I");
    console.log("K");
    console.log("I");
    console.log("T");
    console.log("A");
}

// sayMyName()

// function addTwoNumbers(number1, number2) {  //  perametar
//     console.log(number1 + number2);
// }

addTwoNumbers(3, 5);  //  argument

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2;
    // return result
    return number1 + number2;
}

const result = addTwoNumbers(3, 5)

// console.log ("Result : ", result);

function loginUserMessage(username = "sem") {
    if (!username) {
        console.log("Please enter a username");
        return;
    }
    // if (username === undefined) {
    //     console.log("Please enter a username");
    //     return;
    // }
    return `${username} just logged in`
}

// console.log(loginUserMessage("nikita"));
// console.log(loginUserMessage())


function calculateCartPrice(...num1) {  //  RestOperator 
    return num1
}

// console.log(calculateCartPrice(200, 300, 400, 600)); // [200, 300, 400, 600]

function calculateCartPrice1(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice1(200, 300, 400, 600)); // [400, 600]

const user = {
    username: "nikita",
    price: 199
}
function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)
handleObject({
    username: "sem",
    price: 399
})

const myNewArray = [200, 300, 500, 100];

function returnSecondValue(getArray) {
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 500, 700, 2000]));
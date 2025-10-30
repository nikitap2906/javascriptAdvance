const user = {
    username: "nikita",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sem"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "nikita"
//     console.log(this.username);
    
// }
// chai()

// const chai = function () {
//     let username = "nikita"
//     console.log(this.username);
// }
// chai()

 const chai =  () => {
    let username = "nikita"
    console.log(this);
}
// chai()

// const addTwo  = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) =>  ({username: "nikita"})

console.log(addTwo(3, 4 ));

const myArray = [2, 3, 5, 8, 9];

myArray.forEach()
myArray.forEach(function () {})
myArray.forEach(() => {})
myArray.forEach(() => ())

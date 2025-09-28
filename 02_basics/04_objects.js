// const tinderUser = new Object();  //   singleton Object
const tinderUser = {};  // Non singleton Object

tinderUser.id = "123abc"
tinderUser.name = "nikita"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email : "nikita@gmail.com",
    fullname : {
        userfullname : {
            firstname : "vaibhav",
            lastname : "patidar"
        }
    }
}

// console.log (regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "ni@gmail.com"
    },
    {
        id: 1,
        email: "ni@gmail.com"
    },
    {
        id: 1,
        email: "ni@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "nikita"
}

//  course.courseInstructor

const {courseInstructor} = course
const {courseInstructor: instructor} = course

console.log(courseInstructor);
console.log(instructor);

// ***** React code ****

// const navbar1 = ({company}) => {

// }

// navbar(company = "newput")

// ***** API json*****

// {
//     "name": "nikita",
//     "coursename" : "js in hindi",
//     "price" :  "free"
// }

[
    {},
    {},
    {}
]
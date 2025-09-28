//  singleton
//  Object.create

// object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Nikita",
    [mySym] : "mykey1",
    age : 25,
    location : "indor",
    email : "nikita@vai.com"

}

// console.log(JsUser.name)
// console.log(JsUser["age"])
// console.log(JsUser[mySym])

JsUser.email = "nikita@Chatgpt.com"
// console.log(JsUser)
// Object.freeze(JsUser)
JsUser.email = "nikita@Chatgpt.com"
// console.log(JsUser)

JsUser.greeting = function() {
    console.log("Hello Js user")
}
JsUser.greetingTow = function() {
    console.log(`Hello Js user, ${this.name}`)
}

console.log (JsUser.greeting());
console.log (JsUser.greetingTow());
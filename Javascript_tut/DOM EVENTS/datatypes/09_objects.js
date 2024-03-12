// There are two ways to declare an object one is literala and another is constructor
//Singleton: Objects made by constructor are sigleton
// Object.create//Method to create an object using constructor

// Object Literals

const mySym = Symbol("key1")
const jsUser = {
    name: "Adarsh",
    // Here it follow the key value pair and considered as string by itself
    [mySym]:"key1",
    // The only way to declare Symbol in object using brackets[]
    age: 23,
    location: "kolkata",
    email : "agoogle.com",
    isLoggedin: false,
    lastLoggedIn: ["Monday","Saturday"]
}
// Object values are accessed using dot(.) notation
// console.log(jsUser.email);
// console.log(jsUser["email"]);//As it is considered as string so to access the value we must call it by using string method i.e. by semicolon """
// console.log(jsUser[mySym])//To access the symbol from tye object we must follow this syntax.

// jsUser.email = "Adarsh@googl.com"//The only way to chamge or overwrite any value
// Object.freeze(jsUser)//It freezes the object and cannot allow anyone to overwrite.

jsUser.greeting = function(){
    console.log("Hello js user");
}
jsUser.greeting2 = function(){
    console.log(`Hello js user,${this.name}`);
}
console.log(jsUser.greeting2());

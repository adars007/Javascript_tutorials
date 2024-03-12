/*In Javascript datatypes are divided into two parts based on the data
1. How datas are store in the memory
2. How datas are accessed from the memory.

# Primitive Data type:(call by value)
7 TYPES: String, Number, Booleaan, Null, Undefined, Symbol, BigInt.
# Reference Types(Non Primitive)
Arrays, Objects, Functions.
*/
// const myFunction = function(){
//     console.log("Hello WOrld");
// }
// console.log(typeof myFunction);
// const nos = ["1","2"];
// console.log(typeof nos);

// Stack and Heap Memory
/* In primitive data types stack memory is used and in non primitive data type heap memory is used.*/
let myUtubename = "Hitesh.com"
let anotherUtubename = myUtubename
anotherUtubename = "CHAI OR CODE"
console.log(myUtubename);
console.log(anotherUtubename);

let user1 = {
    email: "user@google.com",
    upi: "user@ybl"
}
let user2 = user1
user2.email = "adarsh@google.com"
console.log(user1.email);
console.log(user2.email);

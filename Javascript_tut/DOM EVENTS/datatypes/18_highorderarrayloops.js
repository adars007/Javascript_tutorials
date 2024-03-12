// for off loops
// These are very basic kind of loops use to iterate not only through objects but with different categories as well
// 
// const arr = [1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
// }

// const greeting  = "Hello world"
// Here greet is the name of iterator such as i or j in for loop simmilarly and greeting is the object name
// for (const greet of greeting) {
//     console.log(`Each char is ${greet}`);
// }

// Maps: These are objects which follows the key value pair and avoid insertion of duplicate items and follow a structure order

// const map = new Map()
// map.set('IN', "India")
// map.set('CHIN', "China")
// map.set('Fr', "France")
// // console.log(map);
// To destructure the key and value pair in for off loop it follow the syntax of [key, value]
// for (const [key, value] of map) {
//     console.log(key, value);
// }
// const myObject = {
//     js: 'Javascript',
//     cp :'c++',
//     rb : 'ruby',
//     swift : 'swift'
//  }
// FOR IN LOOP: it also prints the key value pair of objects and itterable in object
//  for (const key in myObject) {
//     console.log(`${key}  shot is for ${myObject[key]} `);
//  }
const programming =['java','ruby','js','react']
// for (const key in programming ) {
//     console.log(programming[key]);
// }
// const prog = ['js','ruby']
// for (const key in prog) {
//    console.log(prog[key]);
// }

// const map = new Map()
// map.set('IN', "India")
// map.set('CHIN', "China")
// map.set('Fr', "France")

// //Maps are not itteratable
// for (const key in map ) {
//  console.log(map[key]);
// }

//For each loop: It is the prototype of array object and it uses call back function. Call back function are those function which dont have name
// 

const coding = ["java","cpp","ruby","swift","react"]
// In the function we dont add the name of function and inside the parenthesis () we add the name of item which could be anything
// and inside braces {} we add the function which we want to perform in it
// coding.forEach( function(item){
//  console.log(item);
// } )

//  we can also give reference of callbackfun

// function printme(item) {
//     console.log(item);
// }
// coding.forEach(printme)

const myCoding = [
    {
        language: "javascript",
        languageFileName: "js"
    },

    {
        language: "java",
        languageFileName: "java"
    },

    {
        language: "Python",
        languageFileName: "py"
    }
]

myCoding.forEach((item)=>{
console.log(item.languageFileName);
})
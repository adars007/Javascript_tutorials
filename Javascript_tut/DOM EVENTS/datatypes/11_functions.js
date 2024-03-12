// //Declaring Functions
// function sayMyName(){
//     console.log("Hello World");
// }
// // Reference of the function
// sayMyName
// // Calling the function
// sayMyName()

// function addTwoNums(num1, num2){
//     //Definition of function is parameter
//    console.log(num1+num2);
// }
// function addTwoNums(num1, num2){
    //Definition of function is parameter
//   let result = num1+num2;
//   return result
    // return num1+num2
 
// }
// const result = addTwoNums(3,5);
// Arguments when we call the parameter
// console.log("Result:",result);

function loginuserMessage(username){
    if (!undefined) {
        console.log("Please enter the name");
        return
    }
    return`${username} just logged in`
}
// console.log(loginuserMessage("Adarsh"))
// If no arguement is passed on function call then the output is undefined
// console.log(loginuserMessage())

function calculateCartPrice(...num1){// Rest operator used to pack all the arguments into an array
    return num1
}
// console.log(calculateCartPrice(200,400,600,800,1000))

const user = {
    username: "Hitesh",
    price:199
}
 function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is${anyObject.price}`);
 }
//  handleObject(user)
handleObject(
    {
        username: "Sam",
        price : 399
    }
)

const myNewArray = [200,400,600,800]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));

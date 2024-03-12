// IF ELSE LOOP
//  const temp = 51;
//  if (temp<50) {
//     console.log("Temperature is greater than 50");
//  } else {
//     console.log("Less than 50");
//  }

// const score = 200
// if (score>100) {
//     let power = "Fly"
//     console.log(`User power: ${power}`);
// }
// // It is out of scope of if condition so not executable
// console.log(`User power: ${power}`);

// const balance = 1000

// if (balance<500) {
//     console.log("lESS THAN 500");
// } else if(balance<750) {
//     console.log("Less than 750");
// } else if(balance<900){
//     console.log("less than 900");
// }
// else{
//     console.log("Less than 1200");
// }

//  const isloggedIn = true
//  const debitCard = true
//  const gmail = true
//  const email = false

//  if (isloggedIn && debitCard) {
//     console.log("Good to go");
//  }
//  if (gmail || email) {
//     console.log("Either of the statement is correct");
//  }

    // const month = 3
    // switch (month) {
    //     case 3:
    //         console.log("True");
    //         break;
    //     default:
    //         break;
    // }
    // ////////////////////////TRUTHIFY/FALSIFY//////////////////////
    // const gmail = "adi@gmail.com"
    // const one = {}
    // const two = ""

    // if (gmail) {
    //  console.log("Executed1");   
    // }
    // else{
    //     console.log("not executed1");
    // }

    // if (one) {
    //  console.log("Executed2");   
    // }
    // else{
    //     console.log("not executed2");
    // }

    // if (two) {
    //  console.log("Executed3");   
    // }
    // else{
    //     console.log("not executed3");
    // }

// Falsy values: false,0,-0, BigInt, "", null, undefined, Nan 
//Truthy Values : Rest are all true
// "0"-> Truthy value
// Falsy Value Anything inside the colons are string and considerd as truthy values
//

// const emptyObj = {}
// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }

//Nullish coalescing Operator(??): null undefined
// let val1;
// // val1 = 5??10
// // val1 = null ?? 10
// // val1 = undefined ?? 15
// val1 = null ?? 10 ?? 15
// console.log(val1);

// Ternary Operator
const iceTea = 100
iceTea<=80 ? console.log("less than 80"):console.log("more than 80");
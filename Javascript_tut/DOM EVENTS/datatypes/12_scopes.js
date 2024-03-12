// Global Scope
// Let and Const cannot be accessible outside the block scope.
// Var is accessible outside the block scope which is not a good practise
let a = 300;
if (true) {
 // Block Scope
let a = 10
const b = 20
// var c = 30
// console.log("Inner: ", a);
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const userNmae="Adarsh"
    function two(){

/*Note: Nested function can access all the variable of parent object i.e function two
can access all te variable of function one*/

        const website = "youtube"
        console.log(userNmae);
    }
    /*But this is not same in vice versa case function one cannot access the function two variables*/
    // console.log(website);// Cannot be accessible ouside the scope and hence throw the error

    two()
}
// one()

if (true) {
    const userName = "Adarsh"
    if (userName == "Adarsh") {
        const website = "youtube"
        // console.log(userName + website);
    }
    // console.log(website); // Throw an error as it is outside the scope of the function 
}
/////////////////////////Interesting////////////////////////////

//Here we have declared the function normally
function addOne(num){
    return num+1
}
console.log(addOne(5))

//Here we have decalred the function and hold it into the 
const addTwo = function(num){
    return num + 2
}
addTwo(5)




// objects with constructor singleton
const tinderUse = new Object()

 tinderUse.id = "123abc"
 tinderUse.name = "sammy"
 tinderUse.isloggedIn = false

// console.log(tinderUse);

const regularUser = {
    email:"sam@gmail.com",
    fullname: {
        userfullName:{
            firstName: "Adarsh",
            lastName: "Singh"
        }
    }
}
// console.log(regularUser.fullname.userfullName.firstName);
const Obj1 = {1:"a", 2:"b"}
const Obj2 = {3: "a", 4:"b"}
const Obj4 = {5:"a",6:"b"}

// const Obj3 = {Obj1,Obj2}
//const Obj3 = Object.assign({}, Obj1, Obj2,Obj4)

// const obj3 = {...Obj1,...Obj2,...Obj4}
// Spread operator
// console.log(obj3);
// console.log(tinderUse);

// console.log(Object.keys(tinderUse));
// console.log(Object.values(tinderUse));
// console.log(Object.entries(tinderUse));
// console.log(tinderUse.hasOwnProperty('isLoggedIn'));

//////////////////////// Objects Destrcucturing /////////////////////

const course = {
    courseName: "js in hindi",
    price: "999",
    Instructor: "Adarsh"
}
const {Instructor} = course
//Destructuring Objects
console.log(Instructor);




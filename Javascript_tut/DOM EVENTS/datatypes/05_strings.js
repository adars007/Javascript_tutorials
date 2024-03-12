// It is the direct way to initaialise the string value
// const name = "Adarsh"
// const repoCount = 50;
// console.log(name+repoCount+"value");
// Here it is the backtrick method to access the string
// console.log(`Hello my name is ${name} and my repository count is ${repoCount}`);
// By using new operator we can also declare string with an object type
const gameName = new String('Adarsh-hc-com')
// // String is stored in key value pair as if here it is A->0 D->1 A->3 and so on.
// console.log(gameName[6]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('t'));
const newString = gameName.substring(0,4)
console.log(newString);
// const anotherString = gameName.slice(-8,4)
// console.log(anotherString);

// const newStringOne = " hitesh  "
// console.log(newStringOne);
// console.log(newStringOne.trim());

// const url = "https://hitesh.com/hitesh%20chaudhary"
// url.replace('%20','_')
// console.log(url.replace('%20','_'));
// console.log(url.includes('admin'));

// console.log(gameName.split('-'));


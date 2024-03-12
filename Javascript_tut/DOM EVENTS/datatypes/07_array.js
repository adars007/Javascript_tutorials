const myArray = [0,1,2,3,4,5]
/* Javascript arrays are resizable and can contain mix of different data types*/
const myArr2 = new Array(1,2,3,4)
// console.log(myArray[1]);
// Array Methods
// myArray.push(6)// push method used in array to add the element
// myArray.pop()// POP method used in array to REMOVE the last element

// myArray.unshift(9)//Adds the value at the staring index by shifting all the methods ahead
// myArray.shift()//Removes the value from the starting index 

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(3));

// const newArray = myArray.join()
// console.log(myArray);
// console.log(typeof(newArray));//Join method binds all the elements as well as convert into string

// Slice Method
console.log("A", myArray);
const myn1 = myArray.slice(1,3)//slice method extrat the elements from the array and does not include the last index mentioned and also does not manipulate array in any manner
console.log(myn1);
console.log("B", myArray);

const myn2 = myArray.splice(1,3)//Splice method extarct the element from array and also manipulate the array and removes the element
console.log("C", myArray);
console.log(myn2);
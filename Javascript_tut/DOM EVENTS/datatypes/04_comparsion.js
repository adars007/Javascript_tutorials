// console.log("2">1)
// console.log("02">1)
// console.log("abc" == "bac");
// console.log("abc" == "abc");
// console.log(1 == '1');

console.log(null>0);
console.log(null==0);
console.log(null>=0);
// /*The reason is that an equality check  == and comparsion ><>=<= work differently.
// Comparsions convert null to a number, tretaing it as 0.
// Thtat's why (3)  null>=0 is true and (1) null false*/
// console.log(undefined>0);
// console.log(undefined==0);
// console.log(undefined>=0);

// console.log("2" === 2)
// === is called strict check it not only comapre the value it also checks the datatypes.
//Here "2" is a string and  2 is number so the required comparison is false
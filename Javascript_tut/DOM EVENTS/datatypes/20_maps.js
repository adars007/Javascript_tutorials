const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// It is simmilar to filter
// const newNums = myNumbers.map((num)=>num+10)
// console.log(newNums);
// Maps autmatically return the value
// Whenevr scope is defined return keyword need to call otherwise it will be undefined
// const newNums = myNumbers.map((num)=>{return num+10})
// console.log(newNums);

// Chaining Method
// const newNums = myNumbers
//                     .map((num)=>num*10)
//                     .map((num)=>num+1)
//                     .filter((num)=>num>40)
// console.log(newNums);

//REDUCE METHOD: 

// const myNums = [1,2,3]
// const myTotal = myNums.reduce(function(acc,curvalue){
    // console.log(`acc is ${acc} and currvalue is ${currvalue}`);
//     return acc + curvalue},0
// )


// const shoppingCart = [
//     {
//         itemName : "JS course",
//         price  : 2999
//     },
//     {
//         itemName : "PY course",
//         price  : 1999
//     },
//     {
//         itemName : "MOBILE DEV course",
//         price  : 3999
//     },
//     {
//         itemName : "React JS course",
//         price  : 4999
//     },
// ]

// const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price,0)
// console.log(priceToPay);
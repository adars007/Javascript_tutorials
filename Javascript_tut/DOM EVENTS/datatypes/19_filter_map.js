// const coding =["js","ruby","python","java","c++"]
// // Note: foreach() never return any value.It only prints the array.
// const values = coding.forEach((item) => {
//     console.log(item);
//     return item
// // It gives the value undefined
// })
// console.log(values);->undefined

// To resolve this we use filter 
// filter also takes callback function

// const myNum = [1,2,3,4,5,6,7,8,9,10]
// let newNums = myNum.filter((num)=> num > 4 )

// console.log(newNums);



// const neNums = []
// myNum.forEach((num)=>{
//     if (num>4) {
//         neNums.push(num)
//     }
// })
// console.log(neNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
  const userBooks = books.filter( (bk) => bk.genre === 'History')
  console.log(userBooks);

  const userBook = books.filter((bk)=> bk.publish>=1995 && bk.genre === 'History')
  console.log(userBook);





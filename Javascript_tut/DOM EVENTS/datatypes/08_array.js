const marvel_heroes = ["Thor","Ironman","Spiderman"]
const dc_heroes = ["suprman","flash","batman"]

// marvel_heroes.push(dc_heroes)
//Rather merging of element it takes the dc_heroes array as an element.
// console.log(marvel_heroes);

// const allHeroes = marvel_heroes.concat(dc_heroes)
// //Concat method in array merge both the array together unlike push method
// console.log(allHeroes);

const allHeroes = [...marvel_heroes,...dc_heroes]//This line includes spread operator whic merge all the array and also there is not any limitation of arrays can merge more than 2 arrays 
console.log(allHeroes);


const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_arr = anotherArr.flat(Infinity)
//Flat method in array spread out and merges all the array serially
// console.log(real_another_arr);

console.log(Array.from("Adarsh"));
console.log(Array.from({name:"Adarsh"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

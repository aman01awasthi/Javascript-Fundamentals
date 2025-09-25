// Mini Exercise 1
// Create variables: your first name, middle name(optional), last name, favorite number. Print them.

let fName = "Amandeep";
// let midName;
let lName = "Awasthi";
let age = 27;
let luckyNum = 7;
let birthYear;
let isMarried = false;
let hobbies = ["Coding", "Gym", "Travelling"];
// console.log(fName + " " + lName);
// console.log(luckyNum);

console.log(`Hi I am ${fName} ${lName}. I am ${age} years old and my lucky Number is ${luckyNum}`);
console.log(`In 10 years, I'll be ${age + 10}`);
console.log(`My lucky number doubled is ${luckyNum * 2}`);
console.log(`I was born in ${new Date().getFullYear() - age}`);
console.log(`Married Status : ${isMarried ? "Married":"Not Married"}`);
console.log(`My Hobbies are : ${hobbies.join(", ")}`)
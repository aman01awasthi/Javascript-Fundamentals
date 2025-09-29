let array = [];
let num = 50
for(let i = 1; i <= num; i++){
    let newArray = array.push(i);
}
console.log(array);


// filtering odd numbers from this 1–50 array

let oddNum = array.filter(array => array % 2 !== 0);
console.log(oddNum);

let evenNum = array.filter(array => array % 2 === 0);
console.log(evenNum);

let crr = 1;
let sum = array.reduce((acc, crr) => acc + crr, 0);
console.log(sum);

let evenSum = evenNum.reduce((acc, crr) => acc + crr, 0);
console.log(evenSum)

let oddSum = oddNum.reduce((acc, crr) => acc + crr, 0);
console.log(oddSum);
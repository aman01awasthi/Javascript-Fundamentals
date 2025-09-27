// 👉 Write a function that takes an array of numbers and returns the sum of the squares of all numbers.
let arr = [1,2,3,4,5];
function sumOfSquares(arr){
    let square = 0;
    for(let i = 0; i < arr.length; i++){
        square += arr[i] * arr[i];
        // square += square;
    }
    return square;
}
console.log(sumOfSquares(arr));


function sumForSquares(arr){
    let sumSq = 0;
   for (let num of arr){
    sumSq += num * num;
   }
   return sumSq
}

console.log(sumForSquares(arr));

let n = 5;
function fact(n){
    let res = 1;
    while(n >= 1){
       res *= n; 
       n--; 
    }
    return res;
}

console.log(fact(5));
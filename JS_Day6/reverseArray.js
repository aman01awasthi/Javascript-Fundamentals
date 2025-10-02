// Write a function that takes an array and returns a new array with elements in reverse order.

let array = [1,2,3,4,5,6];
function reverseData(arr){
    let newArray = [];
    for(let i = 0; i < arr.length; i++){
        newArray.unshift(arr[i]);
    }
    return newArray;
}

console.log(reverseData(array));
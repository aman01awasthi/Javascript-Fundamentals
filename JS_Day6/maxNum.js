// Question 4 is usually about finding the largest or smallest number in an array (or similar array manipulations).

let array = [11,62,53,64,95,69,67,78,81];

function getNumber(arr){
    let max = arr[0];
    let min = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        } 
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return {min, max};
}

let result = getNumber(array);

console.log(result.min);
console.log(result.max);
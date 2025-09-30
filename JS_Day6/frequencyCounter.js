// Write a function that takes an array and returns an object showing the frequency of each element.

let array = [1, 2, 2, 3, 1];

function countFrequency(array){
    let arrayObj = {}
    for(let i = 0; i < array.length; i++){
        let frequency = array[i];

        if(arrayObj[frequency]){
            arrayObj[frequency] += 1;
        } else {
            arrayObj[frequency] = 1
        }
    }
    return arrayObj;
}

console.log(countFrequency(array));
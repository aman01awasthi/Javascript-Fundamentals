// Count occurrences of each character in a string.

let str = "community";

function countOccurence(str){
    let charCount = {};
    for(let i = 0; i < str.length; i++){
        if(charCount[str[i]]){
            charCount[str[i]]++
        }
        else{
            charCount[str[i]] = 1
        }
    }

    return charCount;
}

console.log(countOccurence(str));
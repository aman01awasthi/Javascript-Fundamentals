// Write a function that takes a string and returns the number of vowels in it.

let vowels = ["a", "e", "i", "o", "u"];
let str = "Education";

function checkVowel(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i].toLowerCase())){
            count++;
        }
    }
    return count;
}

console.log(checkVowel(str));
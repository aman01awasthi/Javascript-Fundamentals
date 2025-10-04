// Write a function that takes a string and returns the number of vowels in it.

let vowels = ["a", "e", "i", "o", "u"];
let str = "Studying";

function checkVowel(str){
    let countVowels = 0;
    let vowel = [];
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i].toLowerCase())){
            countVowels++;
            vowel.push(str[i]);        }
    }
    return [countVowels, vowel];
}

console.log(checkVowel(str));
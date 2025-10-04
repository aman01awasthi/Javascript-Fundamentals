// Write a function that takes a string and returns it reversed (without using .reverse()).

let str = "Hello";

function reverseString(str){
    let newStr = "";
    for(let i = str.length -1; i >= 0; i--){
        newStr += str[i];
    }
    return newStr;
}

console.log(reverseString(str));
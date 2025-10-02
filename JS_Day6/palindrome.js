// Write a function that checks if a given string is a palindrome (same forward & backward).

let str = "Racecar";

function checkPalindrome(str){
    // let newStr = "";
    str = str.toLowerCase();
    for(let i = 0; i < Math.floor(str.length / 2); i++){
        if(str[i] !== str[str.length - 1 - i]){
            return false;
        } 
    }
    return true;
}
console.log(checkPalindrome(str));
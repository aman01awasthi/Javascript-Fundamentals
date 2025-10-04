// Check if two strings are anagrams.
let str = "Earth";
let str2 = "Heart";

function checkAnagram(str, str2){
    // let newStr;
    str = str.toLowerCase().split("");
    str2 = str2.toLowerCase().split("");
    str.sort();
    str2.sort();

    // newStr = {str, str2}
    
    // if(str.length === str2.length){
    //     return true;
    // } else{
    //     return false;
    // }

    for(let i = 0; i < str.length; i++){
        if (str[i] !== str2[i]){
            return false;
        }
    }

    return true;
}

console.log(checkAnagram(str, str2))
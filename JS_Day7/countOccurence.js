// Count occurrences of each character in a string.

let str = "community";

function countOccurence(str){
    let charCount = {};
    let maxCharCount = 0;
    let maxChar = "";
    for(let i = 0; i < str.length; i++){
        if(charCount[str[i]]){
            charCount[str[i]]++
        }
        else{
            charCount[str[i]] = 1
        }

        

        if (charCount[str[i]] > maxCharCount){
            maxCharCount = charCount[str[i]];
            maxChar = str[i];
        }
    }



    return {charCount, maxChar, maxCharCount};
}

console.log(countOccurence(str));
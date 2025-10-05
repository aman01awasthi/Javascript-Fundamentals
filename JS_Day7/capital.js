// Capitalize the first letter of each word in a sentence.

let sentence = "i am learning javascript";

function capital(sentence){
    let words = sentence.split(" ");
    for(let i = 0; i < words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    return words.join(" ");
}

console.log(capital(sentence));
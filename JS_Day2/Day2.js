// let name = "Amandeep Awasthi";
function greet(name){
    return("Hello " + name);
}

console.log(greet("Amandeep Awasthi"));


// function checkEvenOdd(number){
//     if(number % 2 === 0){
//         return("Number is Even");
//     }else{
//         return("Number is Odd")
//     }
// }

// console.log(checkEvenOdd(5));

function checkEvenOdd(number){
   return number % 2 === 0 ? "Number is Even" : "Number is Odd";
}

console.log(checkEvenOdd(5));
console.log(checkEvenOdd(16));


let arr = [1,2,3,4,5];

for (let i = 0; i < arr.length; i++){
    let res = arr[i];
    console.log(res);
}

for(let num of arr){
    console.log(num * num)
}


let n = 1;
while(n <= arr.length){
    console.log(n);
    n++;
}
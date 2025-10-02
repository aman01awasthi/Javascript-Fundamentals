// Write a function that takes an array of numbers and returns a new array containing only prime numbers.

// let array = [];

// function isPrime(arr){
//     for(let i = 1; i <= 50; i++){
//         arr.push(i);

//         if(arr[i] % 2 !== 1){
            
//         }
//     }
// }
// console.log(isPrime(array));

function getPrimes(n){
    let primes = [];
    for(let i = 2; i <= n; i++){
        let isPrime = true;
        for(let j = 2; j <= Math.sqrt(i); j++){
            if(i % j === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime){
            primes.push(i);
        }
    }
    return primes;
}

console.log(getPrimes(50));
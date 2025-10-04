// Write a function that takes an array of numbers and returns a new array containing only prime numbers.

function checkPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function isPrime(arr) {
    let primes = [];
    for (let i = 2; i <= 50; i++) {
        if (checkPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

console.log(isPrime([]));

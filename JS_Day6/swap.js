// Write a function that swaps the keys and values of an object.

function swapKeysAndValues(obj) {
    let swapped = {};
    for (let key in obj) {
        swapped[obj[key]] = key;
    }
    return swapped;
}

console.log(swapKeysAndValues({a:1, b:2, c:3}));

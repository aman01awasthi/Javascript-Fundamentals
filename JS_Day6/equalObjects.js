// Q2: Write a function that checks if two objects are equal (same keys and values).

function isEqual(obj1, obj2) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

console.log(isEqual({a:1, b:2}, {a:1, b:2}));
console.log(isEqual({a:1, b:2}, {a:1, b:3}));

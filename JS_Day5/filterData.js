// Write a function that takes an array of objects (each object has name and age) and returns an array of names of people who are above 18.

let data =[
    {name: "Harsh", age: 29},
    {name: "Aman", age: 27},
    {name: "Nayan", age: 25},
    {name: "Yash", age: 1},
    
]

function arrOfObject(arr){
    let adults = arr.filter(person  => person.age >= 18);
    let names = adults.map(person  => person.name);
    return names;
}
console.log(arrOfObject(data));


// Write a function that takes an object and returns the number of properties in it.

let obj = {
    name: "Aman",
    age: 27,
    city: "Palampur"
}

function numOfProperties(obj){
    Object.keys(obj);
    return Object.keys(obj).length;
}

console.log(numOfProperties(obj));

// Write a function that merges two objects and returns the result.

let obj1 ={
    laptop: "Lenovo"
}

let obj2 ={
    processor: "Ryzen"
}

function mergeObj(obj1, obj2){
    let mergeObj = {...obj1, ...obj2};
    return mergeObj;
}

console.log(mergeObj(obj1, obj2));
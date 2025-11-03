console.log("1");
const promise = new Promise((resolve, reject) => {
    console.log("2");
    resolve("3");
})

promise.then((val) => console.log(val));

console.log("4");
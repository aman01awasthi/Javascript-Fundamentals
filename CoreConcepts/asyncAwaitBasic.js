async function greet(){
    console.log("Before Await");
    const result = await Promise.resolve("Resolved");
    console.log("After Await:", result);
}

greet();
console.log("Outside Function");


async function greet2(){
    console.log("Before Promise");
    const result = Promise.resolve("Resolved");
    console.log("After Promise:", result);
}

greet2();
console.log("Outside Greet 2 Function");
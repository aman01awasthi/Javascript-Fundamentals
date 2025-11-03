console.log("Start");

Promise.resolve()
  .then(() => {
    console.log("Step 1");
    return "Data";
  })
  .then((value) => {
    console.log("Step 2 with", value);
  });

console.log("End");

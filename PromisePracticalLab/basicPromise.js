const promise = new Promise((resolve, reject) => {
  console.log("Promise started...");
  setTimeout(() => {
    resolve("✅ Data fetched successfully!");
  }, 2000);
});

promise.then((result) => {
  console.log(result);
});

console.log("Code after promise creation...");

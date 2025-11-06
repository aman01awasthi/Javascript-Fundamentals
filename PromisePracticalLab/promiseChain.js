new Promise((resolve) => {
  setTimeout(() => resolve(10), 1000);
})
  .then((num) => {
    console.log("Step 1:", num);
    return num * 2;
  })
  .then((num) => {
    console.log("Step 2:", num);
    return num + 5;
  })
  .then((num) => {
    console.log("Final Result:", num);
  });

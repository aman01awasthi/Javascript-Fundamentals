const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = Math.random() > 0.5;
    success ? resolve("✅ Data loaded!") : reject("❌ Network Error!");
  }, 1500);
});

fetchData
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
  .finally(() => console.log("🔁 Request finished"));

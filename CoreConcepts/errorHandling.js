Promise.reject("Error")
    .then(() => console.log("Then 1"))
    .catch((err) => console.log("Caught:", err))
    .then(() => console.log("Then 2 after Catch"));
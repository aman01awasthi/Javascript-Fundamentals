console.log("before fetch");

fetch("https://jsonplaceholder.typicode.com/postss")
  .then((response) => {
    console.log("response:", response);
    if (!response.ok) {
      throw new Error("HTTP error! status: " + response.status);
    }
    return response.json();
  })
  .then((data) => {
    console.log("Data:", data);
  })
  .catch((err) => {
    console.log("Something Went Wrong:", err);
  });

console.log("after fetch");

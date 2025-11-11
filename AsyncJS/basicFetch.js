console.log("before fetch")
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        console.log("response:", response );
        return response.json();
    })

    .then( data => {
        console.log("Data:", data)
    })

    .catch(err => {
        console.log("Something Went Wrong:", err);
    })

    console.log("after fetch")
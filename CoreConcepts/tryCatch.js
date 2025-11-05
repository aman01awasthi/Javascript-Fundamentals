async function fetchData(){
    try{
        throw new Error("Something went wrong");
    } catch (err){
        console.log("Caught error:", err.message);
    } finally {
        console.log("Cleanup always runs");
    }
}
fetchData();
let searchVal = document.getElementById("searchInput");
let findVal = document.querySelectorAll("tbody  tr");
searchVal.addEventListener("input", function () {
  let searchTerm = searchVal.value.toLowerCase();
  for (let i = 0; i < findVal.length; i++) {
    if (findVal[i].textContent.includes(searchTerm).trim()) {
      findVal[i].style.display = "table-row";
    } else {
        findVal[i].style.display = "none";
    }
  }
});

let searchInput = document.getElementById("searchInput");
let table = document.getElementById("studentTable");
let rows = table.getElementsByTagName("tr");

searchInput.addEventListener("input", function () {
  let filter = searchInput.value.toLowerCase();
  for (let i = 1; i < rows.length; i++) {
    let cells = rows[i].getElementsByTagName("td");
    let match = false;
    for (let j = 0; j < cells.length; j++) {
      let text = cells[j].textContent.toLowerCase();
      if (text.includes(filter)) {
        match = true;
        break;
      }
    }
    rows[i].style.display = match ? "" : "none";
  }
});

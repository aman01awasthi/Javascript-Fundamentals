let searchVal = document.getElementById("searchInput");
let findVal = document.querySelectorAll("tbody tr");

searchVal.addEventListener("input", function () {
  let searchTerm = searchVal.value.trim().toLowerCase();

  for (let i = 0; i < findVal.length; i++) {
    let rowVisible = false;
    let cells = findVal[i].querySelectorAll("td");

    for (let j = 0; j < cells.length; j++) {
      let cellText = cells[j].textContent.trim().toLowerCase();
      if (cellText.includes(searchTerm)) {
        rowVisible = true;
        break;
      }
    }

    if (rowVisible) {
      findVal[i].style.display = "table-row";
    } else {
      findVal[i].style.display = "none";
    }
  }
});

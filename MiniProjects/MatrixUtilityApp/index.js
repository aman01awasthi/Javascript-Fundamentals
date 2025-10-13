let gridTable = []; // Global matrix storage

function createMatrix() {
  let rowVal = parseInt(document.getElementById("rows").value);
  let colVal = parseInt(document.getElementById("cols").value);
  let display = document.getElementById("matrixDisplay");
  display.innerHTML = "";

  // Validation
  if (isNaN(rowVal) || isNaN(colVal) || rowVal <= 0 || colVal <= 0) {
    alert("Please enter valid rows and columns!");
    return;
  }

  // Reset matrix
  gridTable = [];

  let table = document.createElement("table");
  table.classList.add("table", "table-bordered", "table-sm", "mx-auto");

  // Build table
  for (let i = 0; i < rowVal; i++) {
    let arrRow = [];
    let tr = document.createElement("tr");

    for (let j = 0; j < colVal; j++) {
      let td = document.createElement("td");

      // Create input for each cell
      let input = document.createElement("input");
      input.type = "number";
      input.value = 0;
      input.classList.add("form-control", "text-center", "p-1");

      td.appendChild(input);
      tr.appendChild(td);
      arrRow.push(0);
    }

    table.appendChild(tr);
    gridTable.push(arrRow);
  }

  display.appendChild(table);
  console.log("Matrix created:", gridTable);
}

function resetMatrix() {
  document.getElementById("rows").value = "";
  document.getElementById("cols").value = "";
  document.getElementById("matrixDisplay").innerHTML = "";
  gridTable = [];
  console.log("Matrix reset");
}

// Transpose Matrix
function transposeMatrix() {
  let display = document.getElementById("matrixDisplay");
  let table = display.querySelector("table");

  if (!table) {
    alert("Please create a matrix first!");
    return;
  }

  // Read matrix from input fields
  let rows = table.rows.length;
  let cols = table.rows[0].cells.length;
  gridTable = [];

  for (let i = 0; i < rows; i++) {
    let rowArr = [];
    for (let j = 0; j < cols; j++) {
      let value = parseFloat(table.rows[i].cells[j].querySelector("input").value);
      rowArr.push(isNaN(value) ? 0 : value);
    }
    gridTable.push(rowArr);
  }

  console.log("Original Matrix:", gridTable);

  // Transpose logic
  let transposed = [];
  for (let i = 0; i < gridTable[0].length; i++) {
    let newRow = [];
    for (let j = 0; j < gridTable.length; j++) {
      newRow.push(gridTable[j][i]);
    }
    transposed.push(newRow);
  }

  console.log("Transposed Matrix:", transposed);

  // Display transposed matrix
  display.innerHTML = "";
  let newTable = document.createElement("table");
  newTable.classList.add("table", "table-bordered", "table-sm", "mx-auto");

  for (let i = 0; i < transposed.length; i++) {
    let tr = document.createElement("tr");
    for (let j = 0; j < transposed[i].length; j++) {
      let td = document.createElement("td");
      let input = document.createElement("input");
      input.type = "number";
      input.value = transposed[i][j];
      input.classList.add("form-control", "text-center", "p-1");
      td.appendChild(input);
      tr.appendChild(td);
    }
    newTable.appendChild(tr);
  }

  display.appendChild(newTable);
  gridTable = transposed; // Update global matrix
}



let gridTable = []; // Global matrix storage

function createMatrix() {
  let rowVal = parseInt(document.getElementById("rows").value);
  let colVal = parseInt(document.getElementById("cols").value);
  let display = document.getElementById("matrixDisplay");
  display.innerHTML = "";

  if (isNaN(rowVal) || isNaN(colVal) || rowVal <= 0 || colVal <= 0) {
    alert("Please enter valid rows and columns!");
    return;
  }

  gridTable = [];

  let table = document.createElement("table");
  table.classList.add("table", "table-bordered", "table-sm", "mx-auto");

  for (let i = 0; i < rowVal; i++) {
    let arrRow = [];
    let tr = document.createElement("tr");

    for (let j = 0; j < colVal; j++) {
      let td = document.createElement("td");

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
  gridTable = transposed;
}


// Sum of Matrix
function sumMatrix() {
  let display = document.getElementById("matrixDisplay");
  let table = display.querySelector("table");

  if (!table) {
    alert("Please create a matrix first!");
    return;
  }

  let rows = table.rows.length;
  let cols = table.rows[0].cells.length;
  let totalSum = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let value = parseFloat(table.rows[i].cells[j].querySelector("input").value);
      totalSum += isNaN(value) ? 0 : value;
    }
  }

  console.log("Total Sum:", totalSum);

  let resultDiv = document.getElementById("resultDisplay");
  if (!resultDiv) {
    resultDiv = document.createElement("div");
    resultDiv.id = "resultDisplay";
    resultDiv.classList.add("mt-3", "fw-bold", "text-center");
    display.parentNode.appendChild(resultDiv);
  }

  resultDiv.innerHTML = `🧮 Total Sum of Matrix Elements = <strong>${totalSum}</strong>`;
}


// Search Matrix
function searchMatrix() {
  let display = document.getElementById("matrixDisplay");
  let table = display.querySelector("table");
  let searchVal = document.getElementById("searchValue").value;

  if (!table) {
    alert("Please create a matrix first!");
    return;
  }

  if (searchVal === "") {
    alert("Please enter a number to search!");
    return;
  }

  let found = false;
  let rows = table.rows.length;
  let cols = table.rows[0].cells.length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      table.rows[i].cells[j].style.backgroundColor = "white";
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let value = table.rows[i].cells[j].querySelector("input").value;
      if (value === searchVal) {
        found = true;
        table.rows[i].cells[j].style.backgroundColor = "yellow";
      }
    }
  }

  let resultDiv = document.getElementById("resultDisplay");
  if (!resultDiv) {
    resultDiv = document.createElement("div");
    resultDiv.id = "resultDisplay";
    resultDiv.classList.add("mt-3", "fw-bold", "text-center");
    display.parentNode.appendChild(resultDiv);
  }

  if (found) {
    resultDiv.innerHTML = `🔍 Value <strong>${searchVal}</strong> found and highlighted in matrix.`;
  } else {
    resultDiv.innerHTML = `❌ Value <strong>${searchVal}</strong> not found in matrix.`;
  }
}


// Find Min or Max
function findMinMax() {
  let display = document.getElementById("matrixDisplay");
  let table = display.querySelector("table");

  if (!table) {
    alert("Please create a matrix first!");
    return;
  }

  let rows = table.rows.length;
  let cols = table.rows[0].cells.length;
  let values = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let inputVal = table.rows[i].cells[j].querySelector("input").value;

      if (inputVal !== "") {
        values.push(Number(inputVal));
      }
    }
  }

  if (values.length === 0) {
    alert("Please fill some values in the matrix first!");
    return;
  }

  let min = Math.min(...values);
  let max = Math.max(...values);

  let resultDiv = document.getElementById("resultDisplay");
  if (!resultDiv) {
    resultDiv = document.createElement("div");
    resultDiv.id = "resultDisplay";
    resultDiv.classList.add("mt-3", "fw-bold", "text-center");
    display.parentNode.appendChild(resultDiv);
  }

  resultDiv.innerHTML = `📊 <strong>Min:</strong> ${min} &nbsp;&nbsp; | &nbsp;&nbsp; <strong>Max:</strong> ${max}`;
}


document.getElementById("sumBtn").addEventListener("click", sumMatrix);
document.getElementById("searchBtn").addEventListener("click", searchMatrix);
document.getElementById("minMaxBtn").addEventListener("click", findMinMax);

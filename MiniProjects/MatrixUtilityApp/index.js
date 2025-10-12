// Matrix Utility App
function createMatrix(){
let rowVal = parseInt(document.getElementById("rows").value);
let colVal = parseInt(document.getElementById("cols").value);
let gridRow = rowVal;
let gridCol = colVal;
let gridTable = [];
    for(let i = 0; i < gridRow; i++){
        let arrRow = [];
        for(let j = 0; j < gridCol; j++){
            arrRow.push("*");
        }
        gridTable.push(arrRow);
    }
    console.log(gridTable);
    // document.getElementById("matrixDisplay").innerText = gridRow;
    let display = document.getElementById("matrixDisplay");
    display.innerHTML = "";

    let table = document.createElement("table");
    table.classList.add("table", "table-bordered");

    for(let i = 0; i < rowVal; i++){
        let tr = document.createElement("tr");

        for(let j = 0; j < colVal; j++){
            let td = document.createElement("td");
            td.innerText = gridTable[i][j];
            td.contentEditable = true;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    display.appendChild(table);
}
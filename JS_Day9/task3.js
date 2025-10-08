// Question 3 (sum of diagonal elements)
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let diaSum = 0;
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (i === j) {
      diaSum += matrix[i][j];
    }
    if (i + j === matrix.length - 1 && i !== j) {
      diaSum += matrix[i][j];
    }
  }
}
console.log(diaSum);
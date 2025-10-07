// Create a 2D array called matrix with the following values:
// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix);
// console.log(matrix[1][2]);

let el = 0;
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (i === 1 && j === 2) {
      el += matrix[i][j];
    }
  }
}
console.log(el);

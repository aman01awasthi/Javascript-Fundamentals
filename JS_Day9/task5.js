// finding the maximum and minimum element in a 2D array.
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let min = matrix[0][0];
// console.log(min);
let max = matrix[0][0];
// console.log(max);
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (min > matrix[i][j]) {
      min = matrix[i][j];
    }
    if (max < matrix[i][j]) {
      max = matrix[i][j];
    }
  }
}
console.log(min);
console.log(max);

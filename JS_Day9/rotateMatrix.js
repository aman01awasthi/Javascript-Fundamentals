// Rotate a 2D Array (Matrix) by 90° clockwise
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let newMatrix = [];
for (let i = 0; i < matrix.length; i++) {
  let arr = [];
  for (let j = matrix[i].length - 1; j >= 0; j--) {
    arr.push(matrix[j][i]);
  }
  newMatrix.push(arr);
}
console.log(newMatrix);

// let newMatrix1 = newMatrix;
// for (let a = matrix.length -1; a >= 0; i--) {
//   let arr1 = [];
//   for (let j = matrix[i].length - 1; j >= 0; j--) {
//     arr1.push(matrix[j][i]);
//   }
//   newMatrix1.push(arr1);
// }
// console.log(newMatrix1);

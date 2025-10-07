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

for(let i = 0; i <= matrix.length; i++){
    let el= 0;
    for(let j = 0; j = matrix[i]; j++){
        el += matrix[j][2];
    }
    console.log(el);
}

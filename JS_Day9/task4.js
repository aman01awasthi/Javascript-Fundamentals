// Question 4: Sum of Each Row and Each Column
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let sum = 0;
let colSum = 0;
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix.length; j++) {
      sum += matrix[i][j];
      colSum += matrix[j][i];
    }
    console.log(sum);
    sum = 0;
    console.log(colSum);
    colSum = 0;
}

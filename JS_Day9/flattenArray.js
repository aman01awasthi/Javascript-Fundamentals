// Flatten a 2D array → 1D array
let array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let arr = [];
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    arr.push(array[i][j]);
  }
}
console.log(arr);

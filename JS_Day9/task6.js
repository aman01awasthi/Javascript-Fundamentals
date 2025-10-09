// Transpose a 2D array (swap rows and columns).
let array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let newArr = [];
for (let i = 0; i < array.length; i++) {
  let row = [];
  for (let j = 0; j < array[i].length; j++) {
    row.push(array[j][i]);
  }
  newArr.push(row);
}
console.log(newArr);

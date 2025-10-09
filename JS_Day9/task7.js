// Matrix Multiplication
let a = [
  [1, 2],
  [3, 4],
];

let b = [
  [5, 6],
  [7, 8],
];
let newArr = [];

if (a.length === b.length) {
  console.log(true);
} else {
  console.log(false);
}
for (let i = 0; i < a.length; i++) {
  //   let res = 0;
  let row = [];
  for (let j = 0; j < a.length; j++) {
    let result = 0;
    for (let k = 0; k < b.length; k++) {
      result += a[i][k] * b[k][j];
    }
    row.push(result);
  }
  newArr.push(row);
  // result = 0;
}
console.log(newArr);

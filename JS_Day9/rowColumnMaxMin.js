// Row-wise & Column-wise Max/Min
let array = [
  [3, 5, 9],
  [1, 6, 4],
  [8, 2, 7],
];
// let maxVal = [];
for (let i = 0; i < array.length; i++) {
  let colVals;
  let maxRowEl = Math.max(...array[i]);
  let minRowEl = Math.min(...array[i]);
  console.log(maxRowEl);
  console.log(minRowEl);
}
console.log("Hello")

for (let j = 0; j < array.length; j++) {
  let maxColEl = array[0][j];
  let minColEl = array[0][j];
  for (let i = 0; i < array.length; i++) {
    if (array[i][j] > maxColEl) {
      maxColEl = array[i][j];
    }
    if (array[i][j] < minColEl) {
      minColEl = array[i][j];
    }
  }
  console.log(maxColEl);
  console.log(minColEl);
}

// Row-wise & Column-wise Max/Min
let array = [
  [3, 5, 9],
  [1, 6, 4],
  [8, 2, 7],
];
let maxColEl;
// let maxVal = [];
for (let i = 0; i < array.length; i++) {
  let maxRowEl = Math.max(...array[i]);
  let minRowEl = Math.min(...array[i]);
  //   console.log(maxRowEl);
  //   console.log(minRowEl);
  let colVals;
  for (let j = 0; j < array[i].length; j++) {
    maxColEl = array[i][j];
    if (array[i][j] < maxColEl) {
      colVals = Math.max(maxColEl);
    //   console.log(colVals);
    }
  }
  console.log(colVals);
}

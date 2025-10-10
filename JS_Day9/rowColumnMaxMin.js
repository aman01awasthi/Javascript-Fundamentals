// Row-wise & Column-wise Max/Min
let array = [
  [3, 5, 9],
  [1, 6, 4],
  [8, 2, 7],
];

// Row-wise max and min
for (let i = 0; i < array.length; i++) {
  let maxRow = Math.max(...array[i]);
  let minRow = Math.min(...array[i]);
  console.log(`Row ${i} → Max: ${maxRow}, Min: ${minRow}`);
}

// Column-wise max and min
for (let j = 0; j < array[0].length; j++) {
  let maxCol = -Infinity;
  let minCol = Infinity;
  for (let i = 0; i < array.length; i++) {
    if (array[i][j] > maxCol) maxCol = array[i][j];
    if (array[i][j] < minCol) minCol = array[i][j];
  }
  console.log(`Column ${j} → Max: ${maxCol}, Min: ${minCol}`);
}

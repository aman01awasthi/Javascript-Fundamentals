// Take a 2D array and a target number.

let array = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let n = 4;
let found = false;
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    if (array[i][j] === n) {
      found = true;
      console.log("found at:", i, j);
      break;
    }
  }
}
if (!found) {
  console.log("Not Found");
}

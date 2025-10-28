let genBtn = document.getElementById("generateBtn");
let displayBox = document.getElementById("colorBox");
genBtn.addEventListener("click", function () {
  let R = Math.floor(Math.random() * 256);
  let G = Math.floor(Math.random() * 256);
  let B = Math.floor(Math.random() * 256);
  let hexColor =
    R.toString(16).padStart(2, "0") +
    G.toString(16).padStart(2, "0") +
    B.toString(16).padStart(2, "0");

let finalColor = "#" + hexColor;
console.log(finalColor);
  displayBox.style.backgroundColor = finalColor;
});

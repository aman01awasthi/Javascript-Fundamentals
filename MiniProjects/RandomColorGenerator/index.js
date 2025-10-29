let genBtn = document.getElementById("generateBtn");
let displayBox = document.getElementById("colorBox");
let finalColor = "";
genBtn.addEventListener("click", function () {
  let R = Math.floor(Math.random() * 256);
  let G = Math.floor(Math.random() * 256);
  let B = Math.floor(Math.random() * 256);
  let hexColor =
    R.toString(16).padStart(2, "0") +
    G.toString(16).padStart(2, "0") +
    B.toString(16).padStart(2, "0");

finalColor = "#" + hexColor;
console.log(finalColor);
  displayBox.style.backgroundColor = finalColor;
});
displayBox.addEventListener("click", () => {
  navigator.clipboard.writeText(finalColor);
  alert(finalColor + " Copied!")
})

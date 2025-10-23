let displayVal = document.getElementById("calcDisplay");
displayVal.addEventListener("input", function () {
  console.log(displayVal.value);
});
const buttonValues = [
  "C",
  "%",
  "/",
  "*",
  "7",
  "8",
  "9",
  "4",
  "5",
  "6",
  "1",
  "2",
  "3",
  "0",
  "-",
  "+",
  ".",
  "=",
];
let allButtons = document.querySelector(".allButtons");
allButtons.innerHTML = "";
for (let i = 0; i < buttonValues.length; i++) {
  let button = document.createElement("button");
  button.textContent = buttonValues[i];
  button.classList.add("btn", "btn-outline-primary", "m-1");
  allButtons.appendChild(button);
}

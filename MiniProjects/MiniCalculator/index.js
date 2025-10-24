let inputVal = document.getElementById("calcDisplay");
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
let displayVal = "";
let allButtons = document.querySelector(".allButtons");
allButtons.innerHTML = "";
for (let i = 0; i < buttonValues.length; i++) {
  let button = document.createElement("button");
  button.textContent = buttonValues[i];
  button.classList.add("btn", "btn-outline-primary", "m-1");
  allButtons.appendChild(button);
  button.addEventListener("click", function () {
    if (this.textContent === "C") {
      inputVal.value = "";
    } else {
      inputVal.value = displayVal;
      console.log(displayVal);
    }
    displayVal += this.textContent;
  });
}

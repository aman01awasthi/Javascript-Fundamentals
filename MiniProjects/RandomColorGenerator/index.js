let genBtn = document.getElementById("generateBtn");
let displayBox = document.getElementById("colorBox");
genBtn.addEventListener("click", function(){
let R = Math.floor(Math.random() * 256);
let G = Math.floor(Math.random() * 256);
let B = Math.floor(Math.random() * 256);

console.log(R+G+B)
    console.log("clicked")
    displayBox.style.color = "#0000"; 
})
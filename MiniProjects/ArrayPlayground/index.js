function handleSubmit() {
  let numberInputVal = document.getElementById("numberInput").value;
  let sortedVal = numberInputVal.split(",");
  sortedVal = sortedVal.map(Number);
  document.getElementById("sortedOutput").innerText = sortedVal;

  let reversedVal = sortedVal.reverse();
  document.getElementById("reversedOutput").innerText = reversedVal;

  let maxVal = Math.max(...sortedVal);
  document.getElementById("maxOutput").innerText = maxVal;

  let minVal = Math.min(...sortedVal);
  document.getElementById("minOutput").innerText = minVal;
}

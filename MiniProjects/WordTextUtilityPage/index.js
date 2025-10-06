function reverseString() {
  let revInputVal = document.getElementById("reverseInput").value;
  let revString = "";

  for (let i = revInputVal.length - 1; i >= 0; i--) {
    revString += revInputVal[i];
  }
  document.getElementById("reverseOutput").innerText = revString;
}

function countVowels() {
  let vowelInputVal = document.getElementById("vowelInput").value;
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < vowelInputVal.length; i++) {
    if (vowels.includes(vowelInputVal[i].toLowerCase())) {
      count++;
    }
  }
  document.getElementById("vowelOutput").innerText = count;
}

function checkPalindrome() {
  let palindromeInputVal = document.getElementById("palindromeInput").value;
  let result = "It is a Palindrome";
  for (let i = 0; i < Math.floor(palindromeInputVal.length / 2); i++) {
    if (
      palindromeInputVal[i].toLowerCase() !==
      palindromeInputVal[palindromeInputVal.length - 1 - i].toLowerCase()
    ) {
      result = "It is not a Palindrome";
      break;
    }
  }

  document.getElementById("palindromeOutput").innerText =
    palindromeInputVal + ": " + result;
}

function checkCapital() {
  let capitalizeInputVal = document.getElementById("capitalizeInput").value;
  let capital = capitalizeInputVal.split(" ");
  for (let i = 0; i < capital.length; i++) {
    capital[i] = capital[i][0].toUpperCase() + capital[i].slice(1);
  }

  document.getElementById("capitalizeOutput").innerText = capital.join(" ");
}

function checkAnagram() {
  let anagramInput1Val = document.getElementById("anagramInput1").value;
  let anagramInput2Val = document.getElementById("anagramInput2").value;

  let newAnagram = anagramInput1Val.toLowerCase().split("").sort().join(" ");
  let newAnagram1 = anagramInput2Val.toLowerCase().split("").sort().join(" ");

  console.log(newAnagram)
  console.log(newAnagram1)
  let response = "";

    if (newAnagram === newAnagram1) {
      response = anagramInput1Val + " & " + anagramInput2Val + " is Anagram";
    } else {
      response = anagramInput1Val + " & " + anagramInput2Val + " is not Anagram";
    }
  console.log(response);
  document.getElementById("anagramOutput").innerText = response;
}
let questions = [
  {
    question: "What is JavaScript?",
    options: ["Language", "Framework", "Library", "None"],
    correct: "Language",
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "int", "string", "declare"],
    correct: "var",
  },
  {
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["//", "/*", "#", "<!--"],
    correct: "//",
  },
  {
    question: "Which method is used to print something to the console?",
    options: ["print()", "console.log()", "log()", "display()"],
    correct: "console.log()",
  },
  {
    question: "What does the '===' operator check?",
    options: [
      "Only value",
      "Only type",
      "Both value and type",
      "None of these",
    ],
    correct: "Both value and type",
  },
];

let currentQuestion = 0;
function quizApp() {
  let question = questions[currentQuestion];
  let options = question.options;
  let correct = question.correct;
  document.querySelector(".questionContainer").innerText = question.question;
  let optionArea = document.querySelector(".optionArea");
  optionArea.innerHTML = "";
  let selectedVal;
  for (let i = 0; i < options.length; i++) {
    let button = document.createElement("button");
    button.textContent = options[i];
    button.classList.add("btn", "btn-outline-primary");
    optionArea.appendChild(button);
    button.classList.remove("selected");
    button.addEventListener("click", function () {
      const allBtn = document.querySelectorAll(".optionArea button");
      for (let button of allBtn) {
        button.classList.remove("selected");
      }
      this.classList.add("selected");
      selectedVal = this.textContent;
    });
  }

  let submitBtn = document.getElementById("submitBtn");
  submitBtn.addEventListener("click", function () {
    let scoreArea = document.querySelector(".scoreArea");
    scoreArea.classList.remove("true", "false");
    if (selectedVal == correct) {
      scoreArea.innerText = selectedVal + " Correct Answer!!!  Got 5 points";
      scoreArea.classList.add("true");
    } else {
      scoreArea.innerText = selectedVal + " Wrong Answer!!!";
      scoreArea.classList.add("false");
    }

    if (currentQuestion < questions.length){
      currentQuestion++;
      selectedVal = "";
      quizApp();
    }
  });
  
}

quizApp();

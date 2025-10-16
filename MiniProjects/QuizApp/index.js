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
let score = 5;
let total = 0;
let selectedVal = "";

const scoreArea = document.querySelector(".scoreArea");
const submitBtn = document.getElementById("submitBtn");

function quizApp() {
  // Reset message
  scoreArea.innerText = "";

  let question = questions[currentQuestion];
  document.querySelector(".questionContainer").innerText = question.question;

  let optionArea = document.querySelector(".optionArea");
  optionArea.innerHTML = "";

  // Render options
  question.options.forEach((opt) => {
    let button = document.createElement("button");
    button.textContent = opt;
    button.classList.add("btn", "btn-outline-primary", "m-2");
    optionArea.appendChild(button);

    button.addEventListener("click", function () {
      document
        .querySelectorAll(".optionArea button")
        .forEach((btn) => btn.classList.remove("selected"));
      this.classList.add("selected");
      selectedVal = this.textContent;
    });
  });
}

// ✅ Single submit listener (not duplicated)
submitBtn.addEventListener("click", function () {
  let scoreArea = document.querySelector(".scoreArea");
  scoreArea.classList.remove("true", "false");

  // get current question and correct answer here
  let question = questions[currentQuestion];
  let correct = question.correct;

  if (!selectedVal) {
    scoreArea.innerText = "⚠️ Please select an option!";
    scoreArea.classList.add("false");
    return;
  }

  if (selectedVal === correct) {
    scoreArea.innerText =
      selectedVal + " ✅ Correct Answer! Got " + score + " points";
    scoreArea.classList.add("true");
    total += score;
  } else {
    scoreArea.innerText = selectedVal + " ❌ Wrong Answer!";
    scoreArea.classList.add("false");
  }

  // wait 1 second before loading next question
  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      quizApp();
    } else {
      document.querySelector(".questionContainer").innerText = "";
      document.querySelector(".optionArea").innerHTML = "";
      document.querySelector(".totalScore").innerText =
        "🎯 Quiz Over! Total Score: " + total;
    }
  }, 1000);
});

quizApp();

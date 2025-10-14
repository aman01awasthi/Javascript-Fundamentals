let questions = [
  {
    question: "What is JavaScript?",
    options: ["Language", "Framework", "Library", "None"],
    correct: "Language",
  },
];
let currentQuestion = 0;
function quizApp() {
  let question = questions[currentQuestion];
  let options = question.options;
  document.querySelector(".questionContainer").innerText = question.question;
  document.querySelector(".optionArea").innerText = options;
  console.log(options);
  for (let i = 0; i < options.length; i++) {
        options.addEventListener("click", function () {
        options[i] = options;
      options.classList.add("selected");
    });
    }
}
quizApp();

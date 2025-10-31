const cells = document.querySelectorAll("[data-cell]");
const statusText = document.getElementById("statusText");
const resetBtn = document.getElementById("resetBtn");

let currentPlayer = "O";
let gameActive = true;
let board = ["", "", "", "", "", "", "", "", ""];

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

statusText.textContent = `Player ${currentPlayer}'s Turn`;
cells.forEach((cell, index) => {
  cell.addEventListener("click", () => handleCellClick(cell, index));
});
resetBtn.addEventListener("click", resetGame);

function handleCellClick(cell, index) {
  if (!gameActive || board[index] !== "") return;

  board[index] = currentPlayer;
  cell.textContent = currentPlayer;

  if (checkWinner()) {
    statusText.textContent = `🎉 Player ${currentPlayer} Wins!`;
    gameActive = false;
  } else if (board.every((cell) => cell !== "")) {
    statusText.textContent = "🤝 It's a Draw!";
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === "O" ? "X" : "O";
    statusText.textContent = `Player ${currentPlayer}'s Turn`;
  }
}

function checkWinner() {
  return winPatterns.some((pattern) => {
    const [a, b, c] = pattern;
    return (
      board[a] !== "" &&
      board[a] === board[b] &&
      board[b] === board[c]
    );
  });
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  currentPlayer = "O";
  statusText.textContent = `Player ${currentPlayer}'s Turn`;
  cells.forEach((cell) => (cell.textContent = ""));
}

var cells = document.querySelectorAll("td");
var reset = document.querySelector("#reset");
var result = document.querySelector("#result");
var currentPlayer = "X";
var gameOver = false;

for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function () {
    if (!gameOver) {
      if (!this.textContent) {
        this.textContent = currentPlayer;
        checkResult();
        
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    }
  });
}

reset.addEventListener("click", function () {
  for (var i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
  }
  gameOver = false;
  currentPlayer = "X";
  result.textContent = "";
});

function checkResult() {
  var combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];


  for (var i = 0; i < combinations.length; i++) {
    if (
      cells[combinations[i][0]].textContent === currentPlayer &&
      cells[combinations[i][1]].textContent === currentPlayer &&
      cells[combinations[i][2]].textContent === currentPlayer
    ) {
      result.textContent = currentPlayer + " wins!";
      gameOver = true;
      return;
    }
  }

  var draw = true;
  for (var i = 0; i < cells.length; i++) {
    if (!cells[i].textContent) {
      draw = false;
      break;
    }
  }

  if (draw) {
    result.textContent = "It's a draw!";
    gameOver = true;
  }
}

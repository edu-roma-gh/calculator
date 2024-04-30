const move = document.getElementById("move");
let computerPlaying = true;
let turn = "X";

let board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function checkRow(row) {
  return board[row].every((e) => e === turn);
}

function checkColumn(column) {
  let prevElement = board[0][column];
  for (let i = 0; i < 3; i++) {
    const currentElement = board[i][column];
    if (prevElement !== currentElement || currentElement === null) {
      return false;
    }
    prevElement = currentElement;
  }
  return true;
}

function checkBoard() {
  for (let i = 0; i < 3; i++) {
    const rowCheck = checkRow(i);
    if (rowCheck) {
      return true;
    }
    const columnCheck = checkColumn(i);
    if (columnCheck) {
      return true;
    }
  }
  return false;
}

function changeTurn(element) {
  element.innerText = turn;
  element.disabled = true;
  if (turn === "X") {
    turn = "0";
  } else {
    turn = "X";
  }
  move.innerText = turn;
}

function syncBoard(idx) {
  const row = Math.floor(idx / 3);
  const column = idx % 3;
  board[row][column] = turn;
}

function computerMove() {
  const emptyBoxes = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === null) {
        emptyBoxes.push(i * 3 + j);
      }
    }
  }
  const computerChoice = Math.floor(Math.random() * emptyBoxes.length);
  const btn = document.getElementById(computerChoice);
  syncBoard(computerChoice);
  const someoneWon = checkBoard();
  if (someoneWon) {
    console.log(turn, " WON");
  }
  changeTurn(btn);
}

function play(element, idx) {
  syncBoard(idx);
  const someoneWon = checkBoard();
  if (someoneWon) {
    console.log(turn, " WON");
  }
  changeTurn(element);
  if (computerPlaying) {
    computerMove();
  }
}

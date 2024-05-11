const move = document.getElementById("move");
let computerPlaying = true;
let turn = "X";

let board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function checkDiagonals() {
  const mainDiagonal = [board[0][0], board[1][1], board[2][2]];
  const secondDiagonal = [board[0][2], board[1][1], board[2][0]];
  const wonOnMainDiagonal =
    mainDiagonal.every((element) => element === "X") ||
    mainDiagonal.every((element) => element === "0");
  const wonOnSecondDiagonal =
    secondDiagonal.every((element) => element === "X") ||
    secondDiagonal.every((element) => element === "0");

  return wonOnMainDiagonal || wonOnSecondDiagonal;
}

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
  const diagonalCheck = checkDiagonals();
  if (diagonalCheck) {
    return true;
  }
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
  move.innerText = turn;
  const thereIsWinner = checkBoard();
  if (thereIsWinner) {
    return alert(`${turn} won the game`);
  }
  if (turn === "X") {
    turn = "0";
  } else {
    turn = "X";
  }
}

function syncBoard(idx) {
  const row = Math.floor(idx / 3);
  const column = idx % 3;
  board[row][column] = turn;
}

function computerMove() {
  const thereIsWinner = checkBoard();
  if (thereIsWinner) {
    return;
  }
  const emptyBoxes = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] === null) {
        emptyBoxes.push(i * 3 + j);
      }
    }
  }
  const computerChoice = Math.floor(Math.random() * emptyBoxes.length);
  const btn = document.getElementById(emptyBoxes[computerChoice]);
  syncBoard(emptyBoxes[computerChoice]);
  const someoneWon = checkBoard();
  if (someoneWon) {
    console.log(turn, " WON");
  }
  changeTurn(btn);
}

function play(element, idx) {
  syncBoard(idx);
  changeTurn(element);
  if (computerPlaying) {
    computerMove();
  }
}

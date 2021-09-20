//Requisito-01
console.log(document.getElementById("title").innerText = "Paleta de Cores");
const paleta = document.getElementById("color-palette");

//Cores
function generateColors() {
  const colors = ['black'];
  const palette = ['blue', 'orange', 'green', 'yellow',
    'pink', 'brown', 'grey', 'red', 'cyan', 'GoldenRod',
    'Indigo', 'magenta', 'orange', 'violet', 'Yellowgreen', 'lightpink'];
  do {
    const colorIndex = blockGenerator(0, palette.length - 1);
    const color = palette[colorIndex];
    if (colors.includes(color) === false) {
      colors.push(color);
    }
  } while (colors.length < 4);
  return colors;
}

function blockGenerator(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let selectedColor = 'black';
function setSelectedColor(color) {
  selectedColor = color;
  console.log(selectedColor);
}

function resetSelected() {
  const palletes = document.getElementsByClassName('color');
  for (let index = 0; index < palletes.length; index += 1) {
    palletes[index].className = 'color';
  }
}

function createSquare(colorIndex) {
  const colors = generateColors();
  const palette = document.createElement('div');
  palette.style.backgroundColor = colors[colorIndex];
  palette.className = 'color';
  palette.addEventListener('click', () => {
    setSelectedColor(colors[colorIndex]);
    resetSelected();
    palette.className = 'color selected';
  });
  if (colorIndex === 0) {
    palette.className = 'color selected';
  }
  return palette;
}

function creatPalettes(size) {
  const allPalettes = document.getElementById('color-palette');
  for (let index = 0; index < size; index += 1) {
    allPalettes.appendChild(createSquare(index));
  }
}

function createSquareboard() {
  const squareBoard = document.createElement('div');
  squareBoard.className = 'pixel';
  squareBoard.addEventListener('click', () => {
    squareBoard.style.backgroundColor = selectedColor;
  });
  return squareBoard;
}

function createRowBoard(size) {
  const row = document.createElement('div');
  for (let index = 0; index < size; index += 1) {
    row.appendChild(createSquareboard());
  }
  return row;
}

function creatBoards(boardSize) {
  const mainBoard = document.getElementById('pixel-board');
  for (let index = 0; index < boardSize; index += 1) {
    mainBoard.appendChild(createRowBoard(boardSize));
}
}
function resetSquareBoardColors() {
  const squareBoards = document.getElementsByClassName('pixel');
  for (let i = 0; i < squareBoards.length; i += 1) {
    squareBoards[i].style.backgroundColor = 'white';
  }
}

function buildButtonEvent() {
  const buttonClearBoard = document.getElementById('clear-board');
  buttonClearBoard.addEventListener('click', resetSquareBoardColors);
  const buttonCreateBoard = document.getElementById('generate-board');
  buttonCreateBoard.addEventListener('click', NewBoard);
}

function NewBoard() {
  const inputBoardSize = document.getElementById('board-size');
  let boardSize = inputBoardSize.value;
  if (validateBoardValue(boardSize)) {
    removeBoard();
    boardSize = generateLimit(boardSize);
    creatBoards(boardSize);
    return;
  }
  alert('Board inválido!');
}

function removeBoard() {
  const pixelBoard = document.getElementById('pixel-board');
  pixelBoard.innerHTML = '';
}

function validateBoardValue(value) {
  if (value.trim().length === 0) {
    return false;
  }
  return true;
}

function generateLimit(value) {
  if (value < 5) {
    return 5;
  }
  if (value > 50) {
    return 50;
  }
  return value;
}

function buildAll() {
  creatPalettes(4);
  creatBoards(5);
  buildButtonEvent();
}
buildAll();

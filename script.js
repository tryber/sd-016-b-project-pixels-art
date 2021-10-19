const boardColor = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
const buttonSize = document.getElementById('generate-board');
const buttonClear = document.getElementById('clear-board');
const colorSelect = document.getElementsByClassName('color');

function randomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 
  ${Math.floor(Math.random() * 256)} )`;
}

function createColor() {
  const arrColor = ['black', randomColor(), randomColor(), randomColor()];
  for (let i = 0; i < arrColor.length; i += 1) {
    boardColor.children[i].style.backgroundColor = arrColor[i];
    if (arrColor[i] === 'black') {
      boardColor.children[0].className = 'color selected';
    } else {
      boardColor.children[i].className = 'color';
    }
  }
}

function clearBoard() {
  while (pixelBoard.hasChildNodes()) {
    pixelBoard.removeChild(pixelBoard.lastChild);
  }
}

function colorCall(color) {
  document.querySelector('.selected').className = 'color';
  const singleColor = color;
  singleColor.target.className = 'color selected';
}

function selectColor() {
  for (let i = 0; i < 4; i += 1) {
    colorSelect[i].addEventListener('click', colorCall);
  }
}

function bSize(boardSize) {
  for (let i = 1; i <= boardSize ** 2; i += 1) {
    const createPixel = document.createElement('div');
    pixelBoard.appendChild(createPixel);
    createPixel.className = 'pixel';
    pixelBoard.style.width = `${(boardSize ** 2) * 10}px`;
  }
}

function pixelsBoard() {
  let boardSize = document.getElementById('board-size').value;
  if (!boardSize) {
    window.alert('Board inválido!');
  } else if (boardSize < 5) {
    boardSize = 5;
  } else if (boardSize > 50) {
    boardSize = 50;
  }
  clearBoard();
  bSize(boardSize);
}

function colorPaint(color) {
  const colored = document.querySelector('.selected').style.backgroundColor;
  const coloredPaint = color.target;
  if (color.target.className === 'pixel') {
    coloredPaint.style.backgroundColor = colored;
  }
}
function pixelsPaint() {
  pixelBoard.addEventListener('click', colorPaint);
}

function vqv() {
  // buttonSize.addEventListener('click', clearBoard);
  buttonSize.addEventListener('click', pixelsBoard);
}

function clear() {
  // buttonClear.addEventListener('click', clearBoard);
  buttonClear.addEventListener('click', pixelsBoard);
}

window.onload = function init() {
  vqv();
  clear();
  createColor();
  selectColor();
  pixelsPaint();
  pixelsBoard();
};

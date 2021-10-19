const pixelBoard = document.getElementById('pixel-board');
const buttonSize = document.getElementById('generate-board');

function randomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 
  ${Math.floor(Math.random() * 256)} )`;
}

function createColor() {
  const boardColor = document.getElementById('color-palette');
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

function bSize(boardSize) {
  for (let i = 1; i <= boardSize ** 2; i += 1) {
    const createPixel = document.createElement('div');
    pixelBoard.appendChild(createPixel);
    createPixel.className = 'pixel';
    pixelBoard.style.width = `${(boardSize ** 2) * 10}px`;
  }
}

function clearBoard() {
  while (pixelBoard.hasChildNodes()) {
    pixelBoard.removeChild(pixelBoard.lastChild);
  }
}

function AlertMsg() {
  const boardSize = document.getElementById('board-size').value;
  if (!boardSize) {
    window.alert('Board inválido!');
  }
}

function pixelsBoard() {
  let boardSize = document.getElementById('board-size').value;
  if (boardSize < 5) {
    boardSize = 5;
  } else if (boardSize > 50) {
    boardSize = 50;
  }
  clearBoard();
  bSize(boardSize);
}

function vqv() {
  buttonSize.addEventListener('click', pixelsBoard);
  buttonSize.addEventListener('click', AlertMsg);
}

function clear() {
  const buttonClear = document.getElementById('clear-board');
  buttonClear.addEventListener('click', pixelsBoard);
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

function colorCall(color) {
  document.querySelector('.selected').className = 'color';
  const singleColor = color;
  singleColor.target.className = 'color selected';
}

function selectColor() {
  const colorSelect = document.getElementsByClassName('color');
  for (let i = 0; i < 4; i += 1) {
    colorSelect[i].addEventListener('click', colorCall);
  }
}

window.onload = function init() {
  pixelsBoard();
  createColor();
  selectColor();
  pixelsPaint();
  vqv();
  clear();
};

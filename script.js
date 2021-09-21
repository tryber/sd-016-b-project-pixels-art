const colorPalette = document.querySelector('#color-palette');
const mainTag = document.getElementsByTagName('main')[0];

function createColor() {
  const arrColor = ['black', 'green', 'red', 'blue'];
  for (let i = 0; i < arrColor.length; i += 1) {
    colorPalette.children[i].style.backgroundColor = arrColor[i];
    if (arrColor[i] === 'black') {
      colorPalette.children[0].setAttribute('id', 'black');
      colorPalette.children[0].className = 'color selected';
    } else {
      colorPalette.children[i].setAttribute('id', arrColor[i]);
    }
  }
}

function selectColor(cor) {
  document.querySelector('.selected').className = 'color';
  const singleColor = cor;
  singleColor.target.className = 'color selected';
}

function listColor() {
  const black = document.querySelector('#black');
  black.addEventListener('click', selectColor);

  const green = document.querySelector('#green');
  green.addEventListener('click', selectColor);

  const red = document.querySelector('#red');
  red.addEventListener('click', selectColor);

  const blue = document.querySelector('#blue');
  blue.addEventListener('click', selectColor);
}

// Requisito 4
const createUl = document.createElement('ul');
mainTag.appendChild(createUl);
createUl.setAttribute('id', 'pixel-board');
const pixelsBoard = document.getElementById('pixel-board');
function pixelBoard() {
  for (let i = 1; i <= 25; i += 1) {
    const createLi = document.createElement('li');
    pixelsBoard.appendChild(createLi);
    createLi.setAttribute('class', 'pixel');
  }
}

function colorPaint(color) {
  const colored = document.querySelector('.selected').style.backgroundColor;
  const coloredPaint = color.target;
  if (color.target.className === 'pixel') {
    coloredPaint.style.backgroundColor = colored;
  }
}
function pixelsPaint() {
  pixelsBoard.addEventListener('click', colorPaint);
}

// Requisito 9
function clear() {
  for (let i = 0; i < 25; i += 1) {
    document.getElementsByClassName('pixel')[i].style.backgroundColor = 'white';
  }
}
function clearBoard() {
  const button = document.querySelector('#clear-board');
  button.addEventListener('click', clear);
}

window.onload = function init() {
  pixelsPaint();
  createColor();
  listColor();
  pixelBoard();
  clearBoard();
};

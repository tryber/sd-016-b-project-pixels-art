const colors = [];
let boardSize = 5;

// Cursor functions
function invert(color) {
  const r = 255 - color.toString().match(/([0-9]+)/g)[0];
  const g = 255 - color.toString().match(/([0-9]+)/g)[1];
  const b = 255 - color.toString().match(/([0-9]+)/g)[2];
  const invertedColor = `rgb(${r}, ${g}, ${b})`;
  return invertedColor;
}

function updateCursorColor(newColor) {
  const bodyStyle = document.body.style;
  bodyStyle.setProperty('--cursor-color', newColor);
  bodyStyle.setProperty('--cursor-border-color', invert(newColor));
}

// Colors functions
function isInvalidColor(color) {
  return color === 'rgb(255, 255, 255)' || color === 'rgb(0, 0, 0)' || colors.includes(color);
}

function getRandomColor() {
  let randomColor = `rgb(
    ${Math.ceil(Math.random() * 255)},
    ${Math.ceil(Math.random() * 255)},
    ${Math.ceil(Math.random() * 255)}
  )`;
  if (isInvalidColor(randomColor)) randomColor = getRandomColor();
  return randomColor;
}

// Board functions
function paintPixel(evt) {
  const selectedColor = document.querySelector('.selected').style.backgroundColor;
  const element = evt.target;
  element.style.backgroundColor = selectedColor;
}

function generatePixelBoard() {
  const board = document.getElementById('pixel-board');
  for (let line = 0; line < boardSize; line += 1) {
    const boardLine = document.createElement('div');
    boardLine.classList.add('boardLine');
    for (let column = 0; column < boardSize; column += 1) {
      const pixelCell = document.createElement('div');
      pixelCell.classList.add('pixel');
      pixelCell.addEventListener('click', paintPixel);
      boardLine.appendChild(pixelCell);
    }
    board.appendChild(boardLine);
  }
}

function clearPixelBoard() {
  const board = document.getElementById('pixel-board');
  board.innerHTML = '';
}

function regeneratePixelBoard(newBoardSize) {
  if (newBoardSize === '') {
    return alert('Board inválido!');
  }
  clearPixelBoard();
  generatePixelBoard();
}

// Color palette functions
function setColor(element, color) {
  const { style } = element;
  style.backgroundColor = color;
}

function selectPaletteColor(evt) {
  Array.from(evt.target.parentElement.children).forEach((inputColor) => {
    inputColor.classList.remove('selected');
  });
  evt.target.classList.add('selected');
  updateCursorColor(evt.target.style.backgroundColor);
}

function updatePaletteColor(evt) {
  const newColor = getRandomColor();
  setColor(evt.target, newColor);
  updateCursorColor(newColor);
}

function generateColorPalette() {
  const colorPaletteSlots = document.getElementById('color-palette').children;
  for (let index = 0; index < colorPaletteSlots.length - 1; index += 1) {
    colors[index] = getRandomColor();
  }
  setColor(colorPaletteSlots[0], 'rgb(0, 0, 0)');
  colors.forEach((color, index) => {
    setColor(colorPaletteSlots[index + 1], color);
  });
}

// Events functions
function clamp(min, value, max) {
  let clampedValue = value;
  if (clampedValue < min) clampedValue = 5;
  if (clampedValue > max) clampedValue = 50;
  return clampedValue;
}

function addInputColorsEvents() {
  const inputColors = document.querySelectorAll('.color');
  inputColors.forEach((inputColor) => {
    inputColor.addEventListener('click', selectPaletteColor);
    if (!inputColor.classList.contains('fixed-color')) {
      inputColor.addEventListener('dblclick', updatePaletteColor);
    }
  });
}

function addClearButtonEvents() {
  const clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', () => {
    regeneratePixelBoard(boardSize);
  });
}

function addBoardSizeInputEvents() {
  const boardSizeInput = document.getElementById('board-size');
  boardSizeInput.addEventListener('change', (evt) => {
    const element = evt.target;
    element.value = clamp(5, element.value, 50);
    boardSize = evt.target.value;
  });
}

function addGenerateBoardButtonEvents() {
  const generateBoardButton = document.getElementById('generate-board');
  generateBoardButton.addEventListener('click', () => {
    const boardSizeInput = document.getElementById('board-size');
    regeneratePixelBoard(boardSizeInput.value);
  });
}

function addCursorEvents() {
  // Custom cursor idea from 'Circle Cursors' pen by Chris Heuberger, available @:
  // https://codepen.io/ChrisBup/pen/rNwLyzV
  document.addEventListener('mousemove', (evt) => {
    const customCursor = document.getElementById('custom-cursor');
    window.requestAnimationFrame(() => {
      customCursor.style.top = `${evt.clientY - customCursor.offsetHeight / 2}px`;
      customCursor.style.left = `${evt.clientX - customCursor.offsetWidth / 2}px`;
    });
  });
}

function addTitleEvents() {
  const title = document.getElementById('title');
  title.addEventListener('click', () => {
    generateColorPalette();
    document.querySelector('.fixed-color').click();
  });
}

function addEvents() {
  addInputColorsEvents();
  addClearButtonEvents();
  addBoardSizeInputEvents();
  addGenerateBoardButtonEvents();
  addCursorEvents();
  addTitleEvents();
}

window.onload = () => {
  generateColorPalette();
  generatePixelBoard();
  addEvents();
};

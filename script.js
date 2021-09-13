function generateRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function generateRandomColor() {
  return `rgb(${generateRandomInt(256)}, ${generateRandomInt(256)}, ${generateRandomInt(256)})`;
}

function generateColorPalette(quantity) {
  const colorPalette = [];
  if (quantity > 0) {
    colorPalette.push('rgb(0, 0, 0)');
  }
  for (let counter = 1; counter < quantity;) {
    const color = generateRandomColor();
    if (!colorPalette.includes(color) && color !== 'rgb(255, 255, 255)') {
      colorPalette.push(color);
      counter += 1;
    }
  }
  return colorPalette;
}

function addColorsToColorPalette() {
  const colorPaletteElements = document.querySelectorAll('.color');
  const colorPalette = generateColorPalette(colorPaletteElements.length);

  for (let index = 0; index < colorPalette.length; index += 1) {
    colorPaletteElements[index].style.backgroundColor = colorPalette[index];
  }
}

function generatePixel() {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';

  return pixel;
}

function generateRow(size) {
  const row = document.createElement('div');
  row.className = 'pixel-board-row';

  for (let counter = 0; counter < size; counter += 1) {
    row.appendChild(generatePixel());
  }
  return row;
}

function generatePixelBoard(size) {
  const pixelBoardContainer = document.querySelector('#pixel-board');

  pixelBoardContainer.innerHTML = '';
  for (let counter = 0; counter < size; counter += 1) {
    pixelBoardContainer.appendChild(generateRow(size));
  }
}

function switchSelectedColor(event) {
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  event.target.classList.add('selected');
}

function changePixelColor(event) {
  const selectedColor = document.querySelector('.selected');
  const element = event.target;
  element.style.backgroundColor = selectedColor.style.backgroundColor;
}

function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');

  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

function addEventListenerTo(selectors, type, func) {
  const element = document.querySelector(selectors);
  element.addEventListener(type, func);
}

function addEventListenerToAll(selectors, type, func) {
  const elements = document.querySelectorAll(selectors);
  for (let index = 0; index < elements.length; index += 1) {
    elements[index].addEventListener(type, func);
  }
}

function resizePixelBoard() {
  const boardSize = document.querySelector('#board-size');

  if (!boardSize.value) {
    window.alert('Board inválido!');
  } else {
    if (boardSize.value < 5) {
      boardSize.value = 5;
    } else if (boardSize.value > 50) {
      boardSize.value = 50;
    }
    generatePixelBoard(Number(boardSize.value));
    addEventListenerToAll('.pixel', 'click', changePixelColor);
  }
}

function initEventListeners() {
  addEventListenerToAll('.color', 'click', switchSelectedColor);
  addEventListenerToAll('.pixel', 'click', changePixelColor);

  addEventListenerTo('#clear-board', 'click', clearBoard);
  addEventListenerTo('#generate-board', 'click', resizePixelBoard);
}

function init() {
  addColorsToColorPalette();
  generatePixelBoard(5);
  initEventListeners();
}

window.onload = init;

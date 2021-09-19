const body = document.getElementsByTagName('body')[0];
const palette = document.getElementById('color-palette');
const pixels = document.getElementById('pixel-board');
const clearBtn = document.getElementById('clear-board');
const resizeInput = document.getElementById('board-size');
const resizeBtn = document.getElementById('generate-board');

function randomColor(quantity) {
  let arrayColors = [];
  for (let i = 0; i < quantity; i += 1) {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    arrayColors.push(randomColor);
  }
  console.log(arrayColors);
  return arrayColors;
}

function createPalette(colors) {
  const colorPalette = document.getElementById('color-palette');

  for (const color of colors) {
    const paletteColor = document.createElement('div');
    paletteColor.className = 'color';
    paletteColor.style.backgroundColor = `#${color}`;
    colorPalette.appendChild(paletteColor);
  }
}

createPalette(randomColor(3));

function addPaletteColor(color) {
  const newColor = document.createElement('div');
  newColor.className = 'color';
  newColor.style.backgroundColor = color;
  palette.prepend(newColor);
}
addPaletteColor('black');

function addPixelBoard(size) {
  if (pixels.children.length > 0) {
    pixels.innerHTML = '';
  }
  for (let i = 0; i < size; i += 1) {
    const newLine = document.createElement('div');
    for (let j = 0; j < size; j += 1) {
      const newPixel = document.createElement('div');
      newPixel.className = 'pixel';
      newPixel.style.backgroundColor = 'white';
      newLine.appendChild(newPixel);
    }
    pixels.appendChild(newLine);
  }
}
addPixelBoard(5);

function selectedColor(selected) {
  const colorList = palette.children;
  for (const color of colorList) {
    if (color.style.backgroundColor === selected) {
      color.classList.add('selected');
    } else {
      color.classList.remove('selected');
    }
  }
}
selectedColor('black');

palette.addEventListener('click', changeSelectedColor);
function changeSelectedColor(event) {
  selectedColor(event.target.style.backgroundColor);
}

pixels.addEventListener('click', paintPixel);
function paintPixel(event) {
  const selected = document.querySelector('.selected');
  event.target.style.backgroundColor = selected.style.backgroundColor;
}

clearBtn.addEventListener('click', clearPixels);
function clearPixels(event) {
  const pixels = document.getElementsByClassName('pixel');
  for (const pixel of pixels) {
    pixel.style.backgroundColor = 'white';
  }
}

resizeBtn.addEventListener('click', changeBoardSize);
function changeBoardSize() {
  const sizeInput = parseInt(resizeInput.value);
  const errorMessage = 'Board inválido!';

  if (resizeInput.value === '') {
    alert(errorMessage);
  } else if (sizeInput < 5) {
    addPixelBoard(5);
    resizeInput.value = '';
  } else if (sizeInput > 50) {
    addPixelBoard(50);
    resizeInput.value = '';
  } else {
    addPixelBoard(sizeInput);
    resizeInput.value = '';
  }
}

const palette = document.getElementById('color-palette');
const pixels = document.getElementById('pixel-board');
const clearBtn = document.getElementById('clear-board');
const resizeInput = document.getElementById('board-size');
const resizeBtn = document.getElementById('generate-board');

function randomColor(quantity) {
  const arrayColors = [];
  for (let i = 0; i < quantity; i += 1) {
    const randomNo = Math.floor(Math.random() * 16777215).toString(16);
    arrayColors.push(randomNo);
  }

  return arrayColors;
}

function createPalette(colors) {
  const colorPalette = document.getElementById('color-palette');

  for (let i = 0; i < colors.length; i += 1) {
    const paletteColor = document.createElement('div');
    paletteColor.className = 'color';
    paletteColor.style.backgroundColor = `#${colors[i]}`;
    colorPalette.appendChild(paletteColor);
  }
}

function addPaletteColor(color) {
  const newColor = document.createElement('div');
  newColor.className = 'color';
  newColor.style.backgroundColor = color;
  palette.prepend(newColor);
}

function addPixelBoard(size) {
  if (pixels.children.length > 0) {
    pixels.innerHTML = '';
  }
  for (let i = 0; i < size; i += 1) {
    const newLine = document.createElement('div');
    for (let j = 0; j < size; j += 1) {
      const newPixel = document.createElement('div');
      newPixel.className = 'pixel';
      newPixel.id = `${i}${j}`;
      newPixel.style.backgroundColor = 'white';
      newLine.appendChild(newPixel);
    }
    pixels.appendChild(newLine);
  }
}

function selectedColor(selected) {
  const colorList = palette.children;
  for (let i = 0; i < colorList.length; i += 1) {
    if (colorList[i].style.backgroundColor === selected) {
      colorList[i].classList.add('selected');
    } else {
      colorList[i].classList.remove('selected');
    }
  }
}

function changeSelectedColor(event) {
  selectedColor(event.target.style.backgroundColor);
}
palette.addEventListener('click', changeSelectedColor);

function paintPixel(event) {
  const selected = document.querySelector('.selected');
  const clicked = document.getElementById(event.target.id);
  clicked.style.backgroundColor = selected.style.backgroundColor;
}
pixels.addEventListener('click', paintPixel);

function clearPixels() {
  const allPixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < allPixels.length; i += 1) {
    allPixels[i].style.backgroundColor = 'white';
  }
}
clearBtn.addEventListener('click', clearPixels);

function changeBoardSize() {
  const sizeInput = parseInt(resizeInput.value, 10);
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
resizeBtn.addEventListener('click', changeBoardSize);

createPalette(randomColor(3));
addPaletteColor('black');
addPixelBoard(5);
selectedColor('black');

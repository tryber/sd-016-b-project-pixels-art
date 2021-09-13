const boardID = 'pixel-board';

function randomColorsPalette() {
  const colors = document.getElementsByClassName('color');
  for (let index = 1; index < colors.length; index += 1) {
    const random1 = Math.ceil(Math.random() * 255);
    const random2 = Math.ceil(Math.random() * 255);
    const random3 = Math.ceil(Math.random() * 255);
    colors[index].style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`;
  }
}

function createPixelBoard(numberOfPixelsPerLine) {
  const board = document.createElement('section');
  const pixelSize = 42;
  const height = pixelSize * numberOfPixelsPerLine;
  const width = pixelSize * numberOfPixelsPerLine;
  board.id = boardID;
  document.body.appendChild(board);
  board.style.height = `${height}px`;
  board.style.width = `${width}px`;
}

function createPixel(n) {
  const pixelBoard = document.getElementById(boardID);

  for (let index = 0; index < n; index += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
  }
}

function setSelectedColor() {
  const color = document.querySelector('.selected');
  const background = window.getComputedStyle(color, null).getPropertyValue('background-color');
  return background;
}

function clearButton() {
  const button = document.createElement('button');
  button.innerHTML = 'Limpar';
  button.id = 'clear-board';
  document.getElementById('buttons').appendChild(button);
}

function clearBoard() {
  const button = document.querySelector('#clear-board');
  const pixels = document.getElementsByClassName('pixel');
  const white = 'white';
  button.addEventListener('click', () => {
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = white;
    }
  });
}

function checkSelectedColor() {
  const paletteOfColors = document.getElementsByClassName('color');
  for (let index = 0; index < paletteOfColors.length; index += 1) {
    if (paletteOfColors[index].classList.contains('selected') === true) {
      paletteOfColors[index].classList.toggle('selected');
    }
  }
}

function chooseColor() {
  const paletteOfColors = document.getElementsByClassName('color');
  for (let index = 0; index < paletteOfColors.length; index += 1) {
    paletteOfColors[index].addEventListener('click', () => {
      checkSelectedColor();
      paletteOfColors[index].classList.toggle('selected');
      setSelectedColor();
    });
  }
}

function checkSelectedPixel() {
  const pixels = document.getElementsByClassName('pixel');
  const classs = 'pixel-selected';
  for (let index = 0; index < pixels.length; index += 1) {
    if (pixels[index].classList.contains(classs) === true) {
      pixels[index].classList.toggle(classs);
    }
  }
}

function addColor(pixel) {
  const pixels = pixel;
  pixels.style.backgroundColor = setSelectedColor();
}

function choosePixel() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', () => {
      checkSelectedPixel();
      addColor(pixels[index]);
      pixels[index].classList.toggle('pixel-selected');
    });
  }
}

function noValueAlert() {
  const button = document.getElementById('generate-board');
  const input = document.getElementById('board-size');
  button.addEventListener('click', () => {
    if (input.value === '') {
      alert('Board inválido!');
    }
  });
}

function removePixels() {
  const pixelList = document.querySelectorAll('.pixel');
  const board = document.getElementById(boardID);
  for (let index = 0; index < pixelList.length; index += 1) {
    board.removeChild(pixelList[index]);
  }
}

function transformBoard(numberOfPixelsPerLine) {
  const pixelBoard = document.getElementById(boardID);
  const pixelSize = 42;
  const squareSide = numberOfPixelsPerLine * pixelSize;
  pixelBoard.style.height = `${squareSide}px`;
  pixelBoard.style.width = `${squareSide}px`;
}

function generatePixelBoard() {
  const button = document.getElementById('generate-board');
  const input = document.getElementById('board-size');
  button.addEventListener('click', () => {
    removePixels();
    if (input.value > 5 && input.value < 50) {
      transformBoard(input.value);
      createPixel(input.value * input.value);
    } else if (input.value < 5) {
      transformBoard(5);
      createPixel(25);
    } else {
      transformBoard(50);
      createPixel(2500);
    }
    chooseColor();
    choosePixel();
  });
}

window.onload = () => {
  randomColorsPalette();
  createPixelBoard(5);
  createPixel(25);
  clearButton();
  clearBoard();

  const blockSelected = document.querySelector('.black');
  blockSelected.classList.add('selected');
  setSelectedColor();

  chooseColor();
  choosePixel();

  noValueAlert();
  generatePixelBoard();
};

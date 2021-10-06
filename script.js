// functions for working with elements

const getOne = (element) => document.querySelector(element);

const getAll = (element) => document.querySelectorAll(element);

const createElement = (tag) => document.createElement(tag);

const addClass = (element, newClass) => element.classList.add(newClass);

const removeClass = (element, delClass) => element.classList.remove(delClass);

const plugHtml = (fatherElement, sonElement) => fatherElement.appendChild(sonElement);

// universal variables

const user = {
  paintingColor: 'black',
  boardSize: '',
};

const staticElements = {
  pixelBoard: getOne('#pixel-board'),
  clearBoard: getOne('#clear-board'),
  boardSize: getOne('#board-size'),
  generateBoard: getOne('#generate-board'),
};

// functions for the project

const validLimit = (limit) => {
  if (limit > 50) return 50;
  if (limit < 5) return 5;
  return limit;
};

const generateBoardElement = (fatherElement, elementType) => {
  const element = createElement('div');
  addClass(element, elementType);
  plugHtml(fatherElement, element);
};

const generatorPixelLine = (limit) => {
  const rows = getAll('.pixel-row');
  const validatedLimit = validLimit(limit);

  rows.forEach((row) => {
    for (let i = 0; i < validatedLimit; i += 1) {
      generateBoardElement(row, 'pixel');
    }
  });
};

const generatorPixelRow = (limit) => {
  const canvas = staticElements.pixelBoard;
  const validatedLimit = validLimit(limit);

  for (let i = 0; i < validatedLimit; i += 1) {
    generateBoardElement(canvas, 'pixel-row');
  }
};

function saveColor(color) {
  user.paintingColor = color;
}

function getColor() {
  const palette = getAll('.color');

  palette.forEach((color) => {
    color.addEventListener('click', (event) => {
      const selectColor = getComputedStyle(event.target).backgroundColor;
      saveColor(selectColor);
    });
  });
}

function paintingPixel() {
  const allPixels = getAll('.pixel');

  allPixels.forEach((pixel) => {
    pixel.addEventListener('click', (event) => {
      const pixelColor = event.target.style;
      pixelColor.backgroundColor = user.paintingColor;
    });
  });
}

function resetSelection() {
  const selectedColor = getOne('.selected');
  removeClass(selectedColor, 'selected');
}

function changeSelection() {
  const palette = getAll('.color');

  palette.forEach((color) => {
    color.addEventListener('click', (event) => {
      resetSelection();
      addClass(event.target, 'selected');
    });
  });
}

function clearPainting() {
  const pixels = getAll('.pixel');
  const resetButton = staticElements.clearBoard;

  resetButton.addEventListener('click', () => {
    pixels.forEach((pixel) => {
      const pixelColor = pixel.style;
      pixelColor.backgroundColor = 'white';
    });
  });
}

function customizeBoardSize() {
  const newBoardSize = staticElements.boardSize;

  newBoardSize.addEventListener('input', (event) => {
    user.boardSize = event.target.value;
  });
}

function resetCanvas() {
  const board = staticElements.pixelBoard;
  const allPixels = getAll('.pixel-row');

  allPixels.forEach((pixel) => {
    board.removeChild(pixel);
  });
}

function applyNewBoardSize() {
  const generateButton = staticElements.generateBoard;

  generateButton.addEventListener('click', () => {
    if (user.boardSize === '') {
      alert('Board inválido!');
    } else {
      resetCanvas();
      generatorPixelRow(parseInt(user.boardSize, 10));
      generatorPixelLine(parseInt(user.boardSize, 10));
    }
  });
}

function randomColorGenerator() {
  const colors = getAll('.color');

  for (let i = 1; i < colors.length; i += 1) {
    colors[i].style.backgroundColor = `rgb(${Math.random() * 255},
     ${Math.random() * 255},${Math.random() * 255})`;
  }
}

window.onload = () => {
  randomColorGenerator();
  generatorPixelRow(5);
  generatorPixelLine(5);
  getColor();
  paintingPixel();
  changeSelection();
  clearPainting();
  customizeBoardSize();
  applyNewBoardSize();
};

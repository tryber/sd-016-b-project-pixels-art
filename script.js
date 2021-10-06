// functions for working with elements

const getOne = (element) => document.querySelector(element);

const getAll = (element) => document.querySelectorAll(element);

const createElement = (tag) => document.createElement(tag);

const addClass = (element, newClass) => element.classList.add(newClass);

const removeClass = (element, delClass) => element.classList.remove(delClass);

const plugHtml = (fatherElement, sonElement) => fatherElement.appendChild(sonElement);

const addMultiplesListeners = (arr, eventName, listener) => {
  arr.forEach((element) => {
    element.addEventListener(eventName, listener, false);
  });
};

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
  palleteCollor: getAll('.color'),
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

const saveColor = (color) => {
  user.paintingColor = color;
};

const getColor = (event) => {
  const selectColor = getComputedStyle(event.target).backgroundColor;
  saveColor(selectColor);
};

const resetSelection = () => {
  const selectedColor = getOne('.selected');
  removeClass(selectedColor, 'selected');
};

const changeSelection = (event) => {
  resetSelection();
  addClass(event.target, 'selected');
};

const palleteEvents = (event) => {
  getColor(event);
  changeSelection(event);
};

const palleteListener = () => {
  const palette = staticElements.palleteCollor;

  addMultiplesListeners(palette, 'click', palleteEvents);
};

const paintingPixel = (event) => {
  const pixelColor = event.target.style;
  pixelColor.backgroundColor = user.paintingColor;
};

const listenerPixel = () => {
  const allPixels = getAll('.pixel');

  addMultiplesListeners(allPixels, 'click', paintingPixel);
};

const clearPainting = () => {
  const pixels = getAll('.pixel');

  pixels.forEach((pixel) => {
    const pixelColor = pixel.style;
    pixelColor.backgroundColor = 'white';
  });
};

const customizeBoardSize = () => {
  staticElements.boardSize.addEventListener('input', (event) => {
    user.boardSize = event.target.value;
  });
};

const resetCanvas = () => {
  const allPixels = getAll('.pixel-row');

  allPixels.forEach((pixel) => {
    staticElements.pixelBoard.removeChild(pixel);
  });
};

const applyNewBoardSize = () => {
  staticElements.generateBoard.addEventListener('click', () => {
    if (user.boardSize === '') {
      alert('Board inválido!');
    } else {
      resetCanvas();
      generatorPixelRow(parseInt(user.boardSize, 10));
      generatorPixelLine(parseInt(user.boardSize, 10));
    }
  });
};

const randomColors = () => Math.random() * 255;

const backgroundRandomColor = () => `rgb(${randomColors()}, ${randomColors()},${randomColors()})`;

const randomColorGenerator = () => {
  const colors = staticElements.palleteCollor;

  for (let i = 1; i < colors.length; i += 1) {
    colors[i].style.backgroundColor = backgroundRandomColor();
  }
};

window.onload = () => {
  randomColorGenerator();
  generatorPixelRow(5);
  generatorPixelLine(5);
  palleteListener();
  listenerPixel();
  staticElements.clearBoard.addEventListener('click', clearPainting);
  clearPainting();
  customizeBoardSize();
  applyNewBoardSize();
};

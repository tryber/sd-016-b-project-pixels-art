// Requisito 1
const body = document.querySelector('body');

const title = document.createElement('h1');
title.id = 'title';
title.innerText = 'Paleta de Cores';
body.appendChild(title);

// Requisitos 2 e 3
const colorPalette = document.createElement('div');
colorPalette.id = 'color-palette';
body.appendChild(colorPalette);

const numberOfColors = 4;

for (let index = 0; index < numberOfColors; index += 1) {
  const color = document.createElement('div');
  // ref: https://www.w3schools.com/jsref/prop_element_classlist.asp
  color.classList.add('color');
  colorPalette.appendChild(color);
}

const colorList = document.getElementsByClassName('color');
// ref: https://www.w3schools.com/jsref/prop_element_classlist.asp
colorList[0].classList.add('black');
colorList[1].classList.add('pink');
colorList[2].classList.add('yellow');
colorList[3].classList.add('green');

// Requisitos 4 e 5
const pixelsBoard = document.createElement('div');
pixelsBoard.id = 'pixel-board';
body.appendChild(pixelsBoard);

let pixelsBoardSize = 5;

function getSelectedColor() {
  for (let index = 0; index < colorList.length; index += 1) {
    // ref: https://www.w3schools.com/jsref/prop_element_classlist.asp
    if (colorList[index].classList.contains('selected')) {
      return colorList[index].classList.item(1);
    }
  }
}

function paintPixels(event) {
  const colorClass = getSelectedColor();
  // ref: https://www.w3schools.com/jsref/prop_element_classlist.asp
  if (!event.target.classList.contains(colorClass)) {
    event.target.classList.remove('white');
    event.target.classList.remove(event.target.classList.item(1));
    event.target.classList.add(colorClass);
  }
}

function pixelsGenerator(sizeNumber) {
  for (let line = 0; line < sizeNumber; line += 1) {
    const pixelLine = document.createElement('div');
    // ref: https://www.w3schools.com/jsref/prop_element_classlist.asp
    pixelLine.classList.add('board-line');
    pixelsBoard.appendChild(pixelLine);

    for (let column = 0; column < sizeNumber; column += 1) {
      const pixelColumn = document.createElement('div');
      // ref: https://www.w3schools.com/jsref/prop_element_classlist.asp
      pixelColumn.classList.add('pixel', 'white');
      pixelLine.appendChild(pixelColumn);
      pixelColumn.addEventListener('click', paintPixels);
    }
  }
}

pixelsGenerator(pixelsBoardSize);

// Requisito 6
// ref: https://www.w3schools.com/jsref/prop_element_classlist.asp
colorList[0].classList.add('selected');

// Requisito 7
function selectColor(event) {
  const selectedColor = document.querySelector('.selected');
  if (event.target !== selectedColor) {
    // ref: https://www.w3schools.com/jsref/prop_element_classlist.asp
    selectedColor.classList.remove('selected');
    event.target.classList.add('selected');
  }
}

for (let index = 0; index < colorList.length; index += 1) {
  colorList[index].addEventListener('click', selectColor);
}

// Requisito 8
const pixels = document.getElementsByClassName('pixel');

// Requisito 9
const clearButton = document.createElement('button');
clearButton.id = 'clear-board';
clearButton.innerText = 'Limpar';
// ref: https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore
body.insertBefore(clearButton, pixelsBoard);

function clearPixelsBoard() {
  for (let index = 0; index < pixels.length; index += 1) {
    // ref: https://www.w3schools.com/jsref/prop_element_classlist.asp
    pixels[index].classList.remove(pixels[index].classList.item(1));
    pixels[index].classList.add('white');
  }
}

clearButton.addEventListener('click', clearPixelsBoard);

// Requisito 10
const input = document.createElement('input');
input.id = 'board-size';
// ref: https://www.w3schools.com/jsref/prop_number_type.asp
input.type = 'number';
// ref: https://www.w3schools.com/jsref/prop_number_min.asp
input.min = '1';
body.insertBefore(input, pixelsBoard);

const generateButton = document.createElement('button');
generateButton.id = 'generate-board';
generateButton.innerText = 'VQV';
body.insertBefore(generateButton, pixelsBoard);

function getInputValue(event) {
  // ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt
  pixelsBoardSize = parseInt(event.target.value, 10);
}

input.addEventListener('keyup', getInputValue);

function deleteBoard() {
  // ref: https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
  while (pixelsBoard.firstChild) {
    pixelsBoard.removeChild(pixelsBoard.firstChild);
  }
}

function resizePixelsBoard() {
  if (input.value === '') {
    alert('Board inválido!');
  } else {
    deleteBoard();
    pixelsGenerator(pixelsBoardSize);
  }
}

generateButton.addEventListener('click', resizePixelsBoard);

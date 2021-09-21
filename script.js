const header = document.querySelector('header');

const section = document.querySelector('section');

const title = document.createElement('h1');
title.id = 'title';
title.innerText = 'Paleta de Cores';
header.appendChild(title);

const colorPalette = document.createElement('div');
colorPalette.id = 'color-palette';
header.appendChild(colorPalette);

const numberOfColors = 4;

for (let index = 0; index < numberOfColors; index += 1) {
  const color = document.createElement('div');
  /*
  Consultei o site abaixo para saber como adicionar uma nova classe sem perder outra que já estivesse aplicada ao elemento
  ref: https://www.w3schools.com/jsref/prop_element_classlist.asp
  */
  color.classList.add('color');
  colorPalette.appendChild(color);
}

const colorList = document.getElementsByClassName('color');

function generateNumber() {
  /*
  Consultei o link abaixo para saber como usar Math.random()
  ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  */
  const randomNumber = (255 * Math.random());
  const roundNumber = Math.round(randomNumber);
  return roundNumber;
}

const color1 = `rgb(${generateNumber()},${generateNumber()},${generateNumber()})`;
const color2 = `rgb(${generateNumber()},${generateNumber()},${generateNumber()})`;
const color3 = `rgb(${generateNumber()},${generateNumber()},${generateNumber()})`;

colorList[0].style.backgroundColor = 'black';
colorList[1].style.backgroundColor = color1;
colorList[2].style.backgroundColor = color2;
colorList[3].style.backgroundColor = color3;

const pixelsBoard = document.createElement('div');
pixelsBoard.id = 'pixel-board';
section.appendChild(pixelsBoard);

let pixelsBoardSize = 5;

function getSelectedColor() {
  for (let index = 0; index < colorList.length; index += 1) {
    /*
    Consultei o link abaixo para saber como identificar se um elemento contém uma classe específica aplicada a ele
    ref: https://www.w3schools.com/jsref/prop_element_classlist.asp
    */
    if (colorList[index].classList.contains('selected')) {
      return colorList[index].style.backgroundColor;
    }
  }
}

function paintPixels(event) {
  const selectedColor = getSelectedColor();
  const element = event.target;
  if (element.style.backgroundColor !== selectedColor) {
    element.style.backgroundColor = 'white';
    element.style.backgroundColor = selectedColor;
  }
}

function pixelsGenerator(sizeNumber) {
  for (let line = 0; line < sizeNumber; line += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.classList.add('board-line');
    pixelsBoard.appendChild(pixelLine);

    for (let column = 0; column < sizeNumber; column += 1) {
      const pixelColumn = document.createElement('div');
      pixelColumn.classList.add('pixel');
      pixelColumn.style.backgroundColor = 'white';
      pixelLine.appendChild(pixelColumn);
      pixelColumn.addEventListener('click', paintPixels);
    }
  }
}

pixelsGenerator(pixelsBoardSize);

colorList[0].classList.add('selected');

function selectColor(event) {
  const selectedColor = document.querySelector('.selected');
  if (event.target !== selectedColor) {
    /*
    Consultei o site abaixo para saber como remover uma nova classe sem perder outra que já estivesse aplicada ao elemento
    ref: https://www.w3schools.com/jsref/prop_element_classlist.asp
    */
    selectedColor.classList.remove('selected');
    event.target.classList.add('selected');
  }
}

for (let index = 0; index < colorList.length; index += 1) {
  colorList[index].addEventListener('click', selectColor);
}

const pixels = document.getElementsByClassName('pixel');

const div = document.createElement('div');
div.id = 'board-control';
/*
Consultei o site abaixo para descobrir como adicionar um elemento HTML antes de um determinado elemento já existente
ref: https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore
*/
section.insertBefore(div, pixelsBoard);

const input = document.createElement('input');
input.id = 'board-size';
/*
Consultei o site abaixo para descobrir como determinar que uma input tivesse o tipo number
ref: https://www.w3schools.com/jsref/prop_number_type.asp
*/
input.type = 'number';
/*
Consultei o site abaixo para descobrir como definir um valor mínimo para uma input
ref: https://www.w3schools.com/jsref/prop_number_min.asp
*/
input.min = '1';
div.appendChild(input);

const generateButton = document.createElement('button');
generateButton.id = 'generate-board';
generateButton.innerText = 'VQV';
div.appendChild(generateButton);

function getInputValue(event) {
  /*
  Consultei o site abaixo para relembrar como usar parseInt()
  ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt
  */
  pixelsBoardSize = parseInt(event.target.value, 10);
  if (pixelsBoardSize < 5) {
    pixelsBoardSize = 5;
  }
  if (pixelsBoardSize > 50) {
    pixelsBoardSize = 50;
  }
}

input.addEventListener('keyup', getInputValue);

function deleteBoard() {
  /*
  Consultei o site abaixo para descobrir como remover todos os filhos de um nó
  ref: https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
  */
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

function clearPixelsBoard() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

const clearButton = document.createElement('button');
clearButton.id = 'clear-board';
clearButton.innerText = 'Limpar';
div.appendChild(clearButton);

clearButton.addEventListener('click', clearPixelsBoard);

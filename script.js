const getPixelBoard = document.getElementById('pixel-board');
const getEachColorPalette = document.getElementsByClassName('color');
const getPixel = document.getElementsByClassName('pixel');
const getButton = document.getElementById('clear-board');
const getInput = document.getElementById('board-size');
const getButtonInput = document.getElementById('generate-board');
let quantityOfPixels = 25;
let status = false;

function creatingPixels() {
  for (let i = 1; i <= quantityOfPixels; i += 1) {
    const createPixel = document.createElement('div');
    createPixel.className = 'pixel';
    createPixel.style.backgroundColor = 'white';
    getPixelBoard.appendChild(createPixel);
  }
}

creatingPixels();

// ref(1): https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
// ref(2): http://devfuria.com.br/javascript/numeros-aleatorios/
// ref(3): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt
function randomColor() {
  return parseInt(Math.random() * 255, 10);
}

function ParameterColor() {
  const r = randomColor();
  const g = randomColor();
  const b = randomColor();
  return `rgb(${r},${g},${b})`;
}

function palletsColors() {
  getEachColorPalette[0].style.backgroundColor = 'black';
  for (let i = 1; i < getEachColorPalette.length; i += 1) {
    getEachColorPalette[i].style.backgroundColor = ParameterColor();
  }
}
palletsColors();

function selectingColor(event) {
  const eventSelected = event;
  for (let i = 0; i < getEachColorPalette.length; i += 1) {
    getEachColorPalette[i].className = 'color';
  }
  eventSelected.target.className = 'color selected';
}

for (let i = 0; i < getEachColorPalette.length; i += 1) {
  getEachColorPalette[i].addEventListener('click', selectingColor);
  console.log(getEachColorPalette[i]);
}

function printingPixel(event) {
  const getSelected = document.getElementsByClassName('selected');
  const eventSelected = event;
  eventSelected.target.style.backgroundColor = getSelected[0].style.backgroundColor;
}

for (let j = 0; j < getPixel.length; j += 1) {
  getPixel[j].addEventListener('click', printingPixel);
}

function removePixelsColors() {
  for (let i = 0; i < getPixel.length; i += 1) {
    getPixel[i].style.backgroundColor = 'white';
  }
}

getButton.addEventListener('click', removePixelsColors);

function checkInput() {
  if (getInput.value === '') {
    alert('Board inválido!');
    status = true;
  }
}

function sizeMaxAndMin() {
  if (getInput.value < 5) {
    getInput.value = 5;
  }
  if (getInput.value > 50) {
    getInput.value = 50;
  }
}

function printingWhenIclickInDiv() {
  for (let j = 0; j < getPixel.length; j += 1) {
    getPixel[j].addEventListener('click', printingPixel);
  }
}

function newPictureWithDifferentesLinesAndColumns() {
  checkInput();
  sizeMaxAndMin();
  // checkMinValue();
  if (status !== true) {
    getPixelBoard.innerHTML = '';
    quantityOfPixels = getInput.value ** 2;
    getPixelBoard.style.width = `${getInput.value * 42}px`;
    creatingPixels();
    printingWhenIclickInDiv();
  }
}

getButtonInput.addEventListener('click', newPictureWithDifferentesLinesAndColumns);

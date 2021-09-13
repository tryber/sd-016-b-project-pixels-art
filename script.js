const pixelLine = document.getElementsByClassName('line');
const pixelBoard = document.querySelector('#pixel-board');
const clearButton = document.querySelector('#clear-board');
const buttonValue = document.getElementById('generate-board');
let boardSize = 5;

function randomColor() {
  return (Math.random() * 255);
}

function rgb() {
  const r = randomColor();
  const g = randomColor();
  const b = randomColor();
  return `rgb(${r},${g},${b})`;
}

function addPalleteColor() {
  const getColor = document.getElementsByClassName('color');
  for (let i = 1; i < getColor.length; i += 1) {
    getColor[i].style.backgroundColor = rgb();
  }
}
addPalleteColor();

function makeEmptyDiv() {
  for (let i = 0; i <= boardSize; i += 1) {
    const emptyDiv = document.createElement('div');
    emptyDiv.classList = 'line';

    pixelBoard.appendChild(emptyDiv);
  }
}
makeEmptyDiv();

function createPixelLine(element) {
  for (let index = 0; index < boardSize; index += 1) {
    const pixelElement = document.createElement('div');
    pixelElement.classList = 'pixel';
    element.appendChild(pixelElement);
  }
}

function createPixelBoard(line) {
  for (let index = 0; index < boardSize; index += 1) {
    createPixelLine(line[index]);
  }
}
createPixelBoard(pixelLine);

const colors = document.getElementsByClassName('color');

// creditos ao canal Rocketseat, video aula muito esclarecedora, que me ajudou a entender a "referencia" de funcao https://www.youtube.com/watch?v=UftSB4DaRU4&ab_channel=Rocketseat.

function selectColor(event) {
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', selectColor);
}

function paintPixel(event) {
  if (event.target.classList.contains('pixel')) {
    const selectedItem = document.querySelector('.selected');
    const palleteColor = window.getComputedStyle(selectedItem).getPropertyValue('background-color');
    const pixel = event.target;
    pixel.style.backgroundColor = palleteColor;
  }
}
document.addEventListener('click', paintPixel);
function clear() {
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}
clearButton.addEventListener('click', clear);

function removeElement(className) {
  let element = document.getElementsByClassName(className);
  while (element.length > 1) {
    element[0].remove();
    element = document.getElementsByClassName(className);
  }
}

function resetBorder() {
  let { value } = document.querySelector('#board-size');
  if (value <= 0) { alert('Board inválido!'); }
  if (value < 5 && value > 0) { value = 5; }
  if (value >= 50) {
    value = 50;
  }
  boardSize = value;

  removeElement('pixel');
  removeElement('line');
  makeEmptyDiv();
  createPixelBoard(pixelLine);
}
buttonValue.addEventListener('click', resetBorder);

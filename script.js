const colors = document.querySelectorAll('.color');
const pixelBoard = document.getElementById('pixel-board');
const button = document.getElementById('clear-board');
const generateBoard = document.getElementById('generate-board');
const backgroundColor = 'background-color';

function addClassName() {
  for (let index = 0; index < colors.length; index += 1) {
    const add = (event) => {
      const selected = event.target;
      for (let i = 0; i < colors.length; i += 1) {
        colors[i].classList.remove('selected');
      }
      selected.classList.add('selected');
    };
    colors[index].addEventListener('click', add);
  }
}
addClassName();

function paintingPixels(e) {
  if (e.target.className === 'pixel') {
    const checkClass = document.querySelector('.selected');
    const getStyle = window.getComputedStyle(checkClass, null).getPropertyValue(backgroundColor);
    e.target.style.backgroundColor = getStyle;
  }
}
pixelBoard.addEventListener('click', paintingPixels);

function cleaningFrame() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

button.addEventListener('click', cleaningFrame);

function generateBoardSize(value) {
  pixelBoard.innerHTML = '';
  for (let index = 1; index <= (value * value); index += 1) {
    const pixelElements = document.createElement('div');
    pixelElements.className = 'pixel';
    pixelBoard.appendChild(pixelElements);
  }
  pixelBoard.style.width = `${value * 42}px`;
}

function checkInvalidBoard(input) {
  if (input === '') {
    window.alert('Board inválido!');
  }
}

function addPixels() {
  let inputValue = document.getElementById('board-size').value;
  checkInvalidBoard(inputValue);
  if (inputValue < 5) {
    inputValue = 5;
  } else if (inputValue > 50) {
    inputValue = 50;
  }
  generateBoardSize(inputValue);
}

function randomColors() {
  const color = document.getElementsByClassName('color');
  const storeColors = ['#9C528B', '#51CB20', '#2708A0',
    '#59656F', '#51A3A3', '#DD403A', '#FFB627', '#02A9EA', '#9E643C'];
  for (let index = 1; index < color.length; index += 1) {
    const sortN = Math.floor(Math.random() * (Math.floor(8) - Math.ceil(0))) + 0;
    color[index].style.backgroundColor = storeColors[sortN];
  }
  const cor1 = window.getComputedStyle(color[1], null).getPropertyValue(backgroundColor);
  const cor2 = window.getComputedStyle(color[2], null).getPropertyValue(backgroundColor);
  const cor3 = window.getComputedStyle(color[3], null).getPropertyValue(backgroundColor);
  if (cor1 === cor2) {
    color[1].style.backgroundColor = '#E9F7CA';
  } if (cor2 === cor3) {
    color[2].style.backgroundColor = '#F694C1';
  } if (cor3 === cor1) {
    color[3].style.backgroundColor = '#34623F';
  }
}
randomColors();

generateBoard.addEventListener('click', addPixels);
generateBoardSize(5);

/* Referências:
getComputedStyles - https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp
event delegation - https://davidwalsh.name/event-delegate
Math.random - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
Math.floor - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
*/

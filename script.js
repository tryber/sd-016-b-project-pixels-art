const colorPalette = document.getElementById('color-palette');
function createColors() {
  const colors = ['black', 'red', 'blue', 'green'];
  for (let index = 0; index < colors.length; index += 1) {
    const color = document.createElement('div');
    color.className = 'color';
    colorPalette.appendChild(color);
    color.style.backgroundColor = colors[index];
  }
}
createColors();

function pixelsFrame() {
  const pixelBoard = document.getElementById('pixel-board'); colorPalette.addEventListener('click', chanceSelected);
  for (let index = 1; index <= 25; index += 1) {
    const div = document.createElement('div');
    div.className = 'pixel';
    pixelBoard.appendChild(div);
  }
}
pixelsFrame();

window.onload = function () {
  const firstColorBlack = document.querySelector('.color');
  firstColorBlack.classList.add('selected');
}

const colors = document.getElementsByClassName('color');
function chanceSelected(event) {
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}
colorPalette.addEventListener('click', chanceSelected);

const pixelBoard = document.getElementById('pixel-board');
function paintFrame(event) {
  const evento = event.target;
  if (event.target.classList.contains('pixel')) {
    evento.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
  }
}
pixelBoard.addEventListener('click', paintFrame);

const clearButton = document.getElementById('clear-board');
function clear() {
  const frame = document.getElementsByClassName('pixel');
  for (let index = 0; index < frame.length; index += 1) {
    frame[index].style.backgroundColor = 'white';
  }
}
clearButton.addEventListener('click', clear);

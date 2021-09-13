const palette = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
function createColumnLines(size) {
  for (let index = 0; index < size; index += 1) {
    const column = document.createElement('div');
    column.className = 'column';
    pixelBoard.appendChild(column);
    document.querySelectorAll('.column');
    for (let indice = 0; indice < size; indice += 1) {
      const lines = document.createElement('div');
      lines.className = 'pixel';
      column.appendChild(lines);
    }
  }
}
createColumnLines(5);

function startingColors() {
  document.querySelector('#black').style.backgroundColor = 'black';
  document.querySelector('#red').style.backgroundColor = 'red';
  document.querySelector('#yellow').style.backgroundColor = 'yellow';
  document.querySelector('#blue').style.backgroundColor = 'blue';
  const black = document.querySelector('#black');
  black.className = 'color selected';
}
startingColors();

function choosePalette() {
  palette.addEventListener('click', (cor) => {
    const eventTarget = cor.target;
    const color = document.getElementsByClassName('color');
    for (let index = 0; index < color.length; index += 1) {
      color[index].classList.remove('selected');
      if (eventTarget.className === 'color') {
        eventTarget.classList.add('selected');
      }
    }
  });
}
choosePalette();

function paint() {
  pixelBoard.addEventListener('click', (pixel) => {
    const element = pixel.target;
    const selected = document.querySelector('.selected').style.backgroundColor;
    if (element.className === 'pixel') {
      element.style.backgroundColor = selected;
    }
  });
}
paint();

function blankPixels() {
  const button = document.querySelector('#clear-board');
  button.addEventListener('click', () => {
    const board = document.querySelectorAll('.pixel');
    for (let index = 0; index < board.length; index += 1) {
      const element = board[index];
      element.style.backgroundColor = 'white';
    }
  });
}
blankPixels();

function sizePixel() {
  const input = document.querySelector('#board-size');
  const buttonVQV = document.querySelector('#generate-board');
  buttonVQV.addEventListener('click', () => {
    if (input.value === '') {
      alert('Board inválido!');
    } else if (input.value < 5) {
      input.value = 5;
    } else if (input.value > 50) {
      input.value = 50;
    }
    pixelBoard.innerHTML = '';
    createColumnLines(input.value);
  });
} sizePixel();

function randomColor() {
  const color = document.getElementsByClassName('color');
  for (let index = 1; index < color.length; index += 1) {
    const r = parseInt(Math.random() * 255, 10);
    const g = parseInt(Math.random() * 255, 10);
    const b = parseInt(Math.random() * 255, 10);
    color[index].style.backgroundColor = `rgba(${r}, ${g}, ${b})`;
  }
}
randomColor();

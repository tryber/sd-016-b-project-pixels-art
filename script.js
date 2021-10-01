window.onload = function startBlack() {
  const colorBlack = document.querySelector('.color');
  colorBlack.classList.add('selected');
};

function changeSelected() {
  const paletteColor = document.querySelector('#color-palette');
  paletteColor.addEventListener('click', (event) => {
    const selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    event.target.classList.add('selected');
  });
}

changeSelected();

// requisito 8
/* Nesse exercicio tive a ajuda do Hugo Daniel para resolver. */

const pixelBoard = document.querySelector('#pixel-board');
pixelBoard.addEventListener('click', (event) => {
  const event1 = event.target;
  const selected = document.querySelector('.selected');
  if (event.target.classList.contains('pixel')) {
    event1.style.backgroundColor = window
      .getComputedStyle(selected)
      .getPropertyValue('background-color');
  }
});

function createPixel(value) {
  const createPixelBoard = document.getElementById('pixel-board');
  createPixelBoard.innerHTML = '';
  for (let line = 0; line < value; line += 1) {
    const createLine = document.createElement('div');
    createLine.className = 'pixelLine';
    createPixelBoard.appendChild(createLine);
    for (let column = 0; column < value; column += 1) {
      const createColumn = document.createElement('div');
      createColumn.className = 'pixel';
      createLine.appendChild(createColumn);
    }
  }
}

createPixel();

function adjustingSize() {
  createPixel('5');
  const buttonPixel = document.querySelector('#generate-board');
  buttonPixel.addEventListener('click', () => {
    const dice = document.querySelector('#board-size').value;
    let valueSize = dice;
    if (dice <= 0) {
      window.alert('Board inválido!');
    } else if (dice < 5) {
      valueSize = 5;
    } else if (dice > 50) {
      valueSize = 50;
    }createPixel(valueSize);
  });
}

adjustingSize();

// requisito 9
function creationButtonClean() {
  const button = document.querySelector('#clear-board');
  button.addEventListener('click', () => {
    const pixel = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = 'white';
    }
  });
}

creationButtonClean();

function createRgb() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function createNewColor() {
  const newColor = document.querySelectorAll('.color');
  for (let index = 1; index < newColor.length; index += 1) {
    newColor[index].style.backgroundColor = createRgb();
  }
}

createNewColor();

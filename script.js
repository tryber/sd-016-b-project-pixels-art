function createABoardOfPixels(tamanhoQuadrado) {
  const pixelBoard = document.querySelector('#pixel-board');
  for (let indexLine = 1; indexLine <= tamanhoQuadrado; indexLine += 1) {
    const line = document.createElement('div');
    line.className = 'line';
    pixelBoard.appendChild(line);
  }
  for (let indexCollum = 0; indexCollum < tamanhoQuadrado; indexCollum += 1) {
    for (let i = 0; i < tamanhoQuadrado; i += 1) {
      const line = document.querySelectorAll('.line')[indexCollum];
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      line.appendChild(pixel);
    }
  }
}

function addClassSelected(event) {
  const classSelected = document.querySelector('.selected');
  const eventTarget = event.target;
  if (eventTarget.classList.contains('selected') === false
  && eventTarget.classList.contains('color') === true) {
    classSelected.classList.remove('selected');
    event.target.classList.add('selected');
  }
}

/* Foi utilizada a ajuda do Victor Shin Kamiguchi para a resolucao desse exercicio */
function changeColor(event) {
  const eventTarget = event.target;
  const colorSelected = document.querySelector('.selected');
  const bgColor = window.getComputedStyle(colorSelected, null).getPropertyValue('background-color'); /* * */
  eventTarget.style.backgroundColor = bgColor;
}

function clearBoard() {
  const pixels = document.getElementsByClassName('pixel');
  const pixelBoard = document.getElementById('pixel-board');
  pixelBoard.style.backgroundColor = 'rgb(255, 255, 255)';
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

function verifyIfPixelExist() {
  const pixelBoard = document.getElementById('pixel-board');
  while (pixelBoard.firstChild) {
    pixelBoard.removeChild(pixelBoard.lastChild);
  }
}

function changeBoardSize() {
  const sizeInput = document.getElementById('board-size');
  const sizeValue = sizeInput.value;
  let value = parseInt(sizeValue, 10);
  if (sizeValue === '') {
    window.alert('Board inválido!');
  } else if (value > 50) {
    value = 50;
    verifyIfPixelExist();
    createABoardOfPixels(value);
  } else if (value < 5) {
    value = 5;
    verifyIfPixelExist();
    createABoardOfPixels(value);
  } else {
    verifyIfPixelExist();
    createABoardOfPixels(value);
  }
}

function numberRandomizer() {
  const randon = Math.floor(Math.random() * 255);
  return randon;
}

function randomColorPalette() {
  const colors = document.getElementsByClassName('color');
  for (let i = 1; i < colors.length; i += 1) {
    const r = numberRandomizer();
    const g = numberRandomizer();
    const b = numberRandomizer();
    colors[i].style.backgroundColor = `rgb(${r}, ${g}, ${b}`;
  }
}

window.onload = () => {
  createABoardOfPixels(5);
  randomColorPalette();
  const randomizerColor = document.querySelector('#randomizeColor');
  const colorSelect = document.querySelector('#color-palette');
  const pixelBoard = document.querySelector('#pixel-board');
  const clearBtn = document.querySelector('#clear-board');
  const createBtn = document.querySelector('#generate-board');
  createBtn.addEventListener('click', changeBoardSize);
  clearBtn.addEventListener('click', clearBoard);
  pixelBoard.addEventListener('click', changeColor);
  colorSelect.addEventListener('click', addClassSelected);
  randomizerColor.addEventListener('click', randomColorPalette);
};

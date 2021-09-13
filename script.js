// 1. Criar h1

function createH1() {
  const newH1 = document.createElement('h1');
  newH1.innerText = 'Paleta de Cores';
  newH1.id = 'title';
  document.body.appendChild(newH1);
}

createH1();

// 2. Criar divs
function createColorPalette() {
  const divColorPalette = document.createElement('div');
  divColorPalette.id = 'color-palette';
  document.body.appendChild(divColorPalette);
}
createColorPalette();

function createDivColor() {
  const colors = ['black', 'blue', 'green', 'yellow'];
  const divColor = document.getElementById('color-palette');
  for (let index = 0; index < colors.length; index += 1) {
    const divColorCreate = document.createElement('div');
    divColorCreate.className = 'color';
    divColorCreate.style.backgroundColor = colors[index];
    divColor.appendChild(divColorCreate);
  }
}
createDivColor();

// // 4. Criar pixel board
function createDivPixelBoard() {
  const divPixelBoard = document.createElement('div');
  divPixelBoard.id = 'pixel-board';
  document.body.appendChild(divPixelBoard);
}
createDivPixelBoard();

function createDivPixel() {
  const divPixel = document.getElementById('pixel-board');
  for (let index = 0; index < 25; index += 1) {
    const divPixelcreate = document.createElement('div');
    divPixelcreate.className = 'pixel';
    divPixelcreate.style.backgroundColor = 'white';
    divPixel.appendChild(divPixelcreate);
  }
}
createDivPixel();

// 6.cria selected
function setClassSelected() {
  const classSelected = document.querySelectorAll('.color');
  classSelected[0].className = 'color selected';
}
setClassSelected();
// 7. Remove selected

const selectedPaletttes = document.querySelector('#color-palette');

function createSelectedOff() {
  selectedPaletttes.addEventListener('click', (event) => {
    const classSelected = document.querySelector('.selected');
    classSelected.classList.remove('selected');
    event.target.classList.toggle('selected');
  });
}
createSelectedOff();

document.onload = function startColor() {
  const initialColor = document.querySelector('.color');
  initialColor[0].classList.add('selected');
};
// 8. add quadro
function createPixelPaint() {
  const pixelPaint = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelPaint.length; index += 1) {
    pixelPaint[index].addEventListener('click', function() {
     const SetColorPaint = document.querySelector('.selected');
     pixelPaint[index].style.backgroundColor = SetColorPaint.style.backgroundColor;})
  }
}
createPixelPaint();

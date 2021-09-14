const colorPalette = document.querySelector('#color-palette');
const pixelBoard = document.querySelector('#pixel-board');
const buttonClear = document.querySelector('#clear-board');
const sizeBoard = document.getElementById('board-size');
const vqvButton = document.getElementById('generate-board');

function genRandomRGB() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb( ${red}, ${green}, ${blue} )`;
}

function genArrayRGB() {
  const colors = ['black'];
  while (colors.length < 4) {
    colors.push(genRandomRGB());
  }
  return colors;
}

function genColorPallete() {
  const colors = genArrayRGB();
  for (let i = 0; i < colors.length; i += 1) {
    const paletteOfColor = document.createElement('div');
    paletteOfColor.style.backgroundColor = colors[i];
    paletteOfColor.classList.add('color');
    if (i === 0) {
      paletteOfColor.classList.add('selected');
    }
    colorPalette.appendChild(paletteOfColor);
  }
}

genColorPallete();

function genPixelsBoard(boardSize) {
  for (let line = 0; line < boardSize; line += 1) {
    const getPixel = document.createElement('div');
    getPixel.classList.add('line');
    pixelBoard.appendChild(getPixel);
    for (let elemento = 0; elemento < boardSize; elemento += 1) {
      const pixel = document.createElement('div');
      getPixel.appendChild(pixel);
      pixel.className = 'pixel';
    }
  }
}

genPixelsBoard(5);

let color = 'black';

function altPaletteSelect(event) {
  const remSel = document.getElementsByClassName('selected');

  for (let i = 0; i < remSel.length; i += 1) {
    remSel[i].classList.remove('selected');
  }

  const eventX = event.target;
  color = eventX.style.backgroundColor;
  eventX.classList.add('selected');
}

colorPalette.addEventListener('click', altPaletteSelect);

function fillPixel(event) {
  event.target.style.backgroundColor = color;
}

pixelBoard.addEventListener('click', fillPixel);

function clearBoard() {
  const pixelsA = document.getElementsByClassName('pixel');

  for (let i = 0; i < pixelsA.length; i += 1) {
    pixelsA[i].style.backgroundColor = 'white';
  }
}

buttonClear.addEventListener('click', clearBoard);

function invalidImput(numbersBoard) {
  if (numbersBoard < 5 && numbersBoard > 0) {
    numbersBoard = 5;
  }
  if (numbersBoard > 50) {
    numbersBoard = 50;
  }
  return numbersBoard;
}

function genTableBoard() {
  const numbersBoard = sizeBoard.value;

  if (!numbersBoard) {
    return alert('Board inválido!');
  }

  const adjBoard = invalidImput(numbersBoard);
  pixelBoard.innerHTML = '';
  return genPixelsBoard(adjBoard);
}

vqvButton.addEventListener('click', genTableBoard);

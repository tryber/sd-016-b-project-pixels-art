const predefinedColors = ['black'];
const pixelSize = '40px';

let selectedColor;
let boardDimension;

function validateDimension(value) {
  const parsed = parseInt(value, 10) || 5;
  return Math.max(5, Math.min(parsed, 50));
}

function onSelectNewColor(event) {
  const selectedElement = document.querySelector('.selected');

  if (selectedElement) {
    selectedElement.classList.remove('selected');
  }

  event.target.classList.add('selected');
  selectedColor = event.target.getAttribute('colorName');

  localStorage.setItem('selectedColor', event.target.getAttribute('colorName'));
}

function setupColorButtons() {
  const colorContainer = document.querySelector('#color-palette');
  colorContainer.addEventListener('click', onSelectNewColor);

  for (let i = 0; i < predefinedColors.length; i += 1) {
    const colorName = predefinedColors[i];

    const colorDiv = document.createElement('div');
    colorDiv.style.backgroundColor = colorName;
    colorDiv.classList.add('color');
    colorDiv.setAttribute('colorName', colorName);

    if (colorName === selectedColor) {
      colorDiv.classList.add('selected');
    }

    colorContainer.appendChild(colorDiv);
  }
}

function setupClearButton() {
  const button = document.querySelector('#clear-board');
  button.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = 'white';
    }
  });
}

function createSinglePixel() {
  const pixel = document.createElement('div');
  pixel.classList.add('pixel');

  pixel.style.width = pixelSize;
  pixel.style.height = pixelSize;
  pixel.style.backgroundColor = 'white';

  return pixel;
}

function onClickPixel(event) {
  const pixel = event.target;
  pixel.style.backgroundColor = selectedColor;
}

function createPixelBoard() {
  const board = document.querySelector('#pixel-board');
  board.onclick = onClickPixel;

  board.style.width = `${parseInt(pixelSize, 10) * boardDimension}px`;
  board.style.height = `${parseInt(pixelSize, 10) * boardDimension}px`;

  for (let x = 1; x <= boardDimension; x += 1) {
    for (let y = 1; y <= boardDimension; y += 1) {
      const pixel = createSinglePixel();
      board.appendChild(pixel);
    }
  }
}

function setupResizeButton() {
  const input = document.querySelector('#board-size');

  const button = document.querySelector('#generate-board');

  button.addEventListener('click', () => {
    if (input.value === '') alert('Board inválido!');

    boardDimension = validateDimension(input.value);

    const pixels = document.querySelectorAll('.pixel');

    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].parentElement.removeChild(pixels[i]);
    }

    createPixelBoard();
  });
}

// https://www.w3schools.com/js/js_random.asp
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

window.onload = () => {
  for (let i = 1; i <= 3; i += 1) {
    predefinedColors.push(`rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`);
  }

  // array destructuring
  [selectedColor] = predefinedColors;

  boardDimension = validateDimension(localStorage.getItem('dimension'));

  setupColorButtons();
  setupClearButton();
  setupResizeButton();
  createPixelBoard();
};

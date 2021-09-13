// Cria os pixels
function createDiv(className, parent) {
  const newPixel = document.createElement('div');
  newPixel.className = className;
  parent.appendChild(newPixel);
}

const generateButton = document.getElementById('generate-board');

const pixelBoard = document.getElementById('pixel-board');

const lines = document.getElementsByClassName('pixel-line');

// função que cria os pixels de acordo com o input recebido
function generateLines(input) {
  for (let index = 1; index <= input; index += 1) {
    createDiv('pixel-line', pixelBoard);
  }

  document.getElementById('board-size').value = '';
}

function generatePixels() {
  for (let index = 0; index < lines.length; index += 1) {
    for (let i = 1; i <= lines.length; i += 1) {
      createDiv('pixel', lines[index]);
    }
  }
}

// Gera os pixels iniciais
generatePixels();

// Função que checa se já existe um quadro de pixels
function checkBoard() {
  const input = document.getElementById('board-size').value;

  if (input === '') {
    alert('Board inválido!');
  } else if (parseInt(input, 10) < 5) {
    pixelBoard.innerHTML = '';
    generateLines(5);
    generatePixels();
  } else if (parseInt(input, 10) > 50) {
    pixelBoard.innerHTML = '';
    generateLines(50);
    generatePixels();
  } else {
    pixelBoard.innerHTML = '';
    generateLines(input);
    generatePixels();
    console.log(pixelBoard);
  }
}

generateButton.addEventListener('click', checkBoard);

const colors = document.getElementsByClassName('color');

// Função que remove/adiciona a classe selected as cores
function selectColor(event) {
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', selectColor);
}

// Função que pinta os pixels

function addColor(event) {
  if (event.target.classList.contains('pixel')) {
    const selectItem = document.querySelector('.selected');
    const color = window.getComputedStyle(selectItem).getPropertyValue('background-color');
    const pixel = event.target;
    pixel.style.backgroundColor = color;
  }
}

document.addEventListener('click', addColor, false);

// Função que limpa o quadro
function clearBoard() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

const clearButton = document.getElementById('clear-board');

clearButton.addEventListener('click', clearBoard);

// Função que gera novas cores aleatórias

function generateRandomColor() {
  const num1 = Math.round(Math.random() * 255);
  const num2 = Math.round(Math.random() * 255);
  const num3 = Math.round(Math.random() * 255);

  return `rgb(${num1}, ${num2}, ${num3})`;
}

const randomElement = document.getElementsByClassName('random-color');

for (let index = 0; index < randomElement.length; index += 1) {
  randomElement[index].style.backgroundColor = generateRandomColor();
}

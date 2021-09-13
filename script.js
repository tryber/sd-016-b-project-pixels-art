console.log('vamo q vamo');

window.onload = function selecting() {
  const corPreta = document.getElementById('black');
  corPreta.classList.add('selected');
  const cores = document.querySelectorAll('.color');
  for (let index = 1; index < cores.length; index += 1) {
    cores[index].classList.remove('selected');
  }
};
// seletores

function selector(event) {
  const colorSelector = document.querySelectorAll('.color');
  for (let index = 0; index < colorSelector.length; index += 1) {
    colorSelector[index].classList.add('selected');
    colorSelector[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

const blackColor = document.getElementById('black');
const redColor = document.getElementById('red');
const greenColor = document.getElementById('green');
const blueColor = document.getElementById('blue');

blackColor.addEventListener('click', selector);
redColor.addEventListener('click', selector);
greenColor.addEventListener('click', selector);
blueColor.addEventListener('click', selector);

// gerando colunas e linhas
function createPixelBoardLine(line) {
  const pixelBoardhtml = document.getElementById('pixel-board');
  const divisao = document.createElement('div');
  pixelBoardhtml.appendChild(divisao);
  for (let index = 1; index <= line; index += 1) {
    const criar = document.createElement('div');
    criar.classList.add('pixel');
    divisao.appendChild(criar);
  }
}

function createPixelColumns(line) {
  for (let index = 1; index <= line; index += 1) {
    createPixelBoardLine(line);
  }
}

createPixelColumns(5);

function generator() {
  const innerHtmlPixelBoard = document.getElementById('pixel-board');
  const input = document.getElementById('board-size');
  if (input.value <= 5) {
    innerHtmlPixelBoard.innerHTML = '';
    createPixelColumns(5);
  } else if (input.value > 50) {
    innerHtmlPixelBoard.innerHTML = '';
    createPixelColumns(50);
  } else {
    innerHtmlPixelBoard.innerHTML = '';
    lines = parseInt(input.value);
    createPixelColumns(lines);
  }
  if (input.value == '') {
    alert('Board Inválido');
  }
}

const submitButton = document.getElementById('generate-board');
submitButton.addEventListener('click', generator);
const input = document.getElementById('board-size');

// Pintando o quadro
function changeColor(event) {
  const seletorQueryId = document.querySelector('.selected').id;
  event.target.style.backgroundColor = seletorQueryId;
}
const pixelSelector2 = document.querySelectorAll('.pixel');
for (let index = 0; index < pixelSelector2.length; index += 1) {
  pixelSelector2[index].addEventListener('click', changeColor);
}

// resetando a cor do quadro
function resetColor() {
  const pixelboardSelector = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelboardSelector.length; index += 1) {
    pixelboardSelector[index].style.backgroundColor = 'white';
  }
}

const resetElement = document.getElementById('clear-board');
resetElement.addEventListener('click', resetColor);

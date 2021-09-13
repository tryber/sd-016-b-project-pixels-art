// Requisito 12 - Gera cores aleatórias para a paleta, exceto pelo preto
function randomColor() {
  const randomColorElement = Math.floor(Math.random() * 16777215).toString(16); // Fonte para o código que gera cores aleatórias https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj
  const novaCor = `#${randomColorElement}`; // Fonte no próprio developer.mozilla.org - na parte de Template Strings
  return novaCor;
}

// Requisito 2 e 3 - Cores dos botões
const colorBtns = document.getElementsByClassName('color');
colorBtns[0].style.backgroundColor = 'black';
colorBtns[1].style.backgroundColor = randomColor();
colorBtns[2].style.backgroundColor = randomColor();
colorBtns[3].style.backgroundColor = randomColor();

// Requisito 4 e 5 - Quadro de pixels
const pixelBoard = document.querySelector('#pixel-board');
const pixelBoardLines = pixelBoard.children;
let size = 5;

function pixelAttribution(index) {
  for (let i = 0; i < size; i += 1) {
    const onePixel = document.createElement('section');
    onePixel.className = 'pixel';
    pixelBoardLines[index].appendChild(onePixel);
  }
}

function lineDef() {
  for (let i = 0; i < size; i += 1) {
    const line = document.createElement('section');
    line.className = 'line';
    pixelBoard.appendChild(line);
    pixelAttribution(i);
  }
}
lineDef();

// Requisito 6 - Classe selected
function defaultColorSelected() {
  localStorage.setItem('defaultColor', 'black');
  colorBtns[0].className = 'color selected';
}
defaultColorSelected();

// Requisito 7 - Aplicar classe a cor escolhida
const paleta = document.querySelector('#color-palette');
let targetAtual = '';
let corAtual = 'black';

function unselect() {
  const selectedToBeRemoved = document.querySelector('.selected');
  selectedToBeRemoved.className = 'color';
}

function colorSelected() {
  paleta.addEventListener('click', (event) => { // Referência para a arrowFunction https://www.30secondsofcode.org/articles/s/javascript-arrow-function-event-listeners
    if (event.target.className === 'color') {
      unselect();
      targetAtual = event.target;
      corAtual = targetAtual.style.backgroundColor;
      targetAtual.className = 'color selected';
    }
  });
}
colorSelected();

// Requisito 8 - Aplica a cor do selected na grade de pixels
// Cor atual está sendo declarada no requisito 7 para uso aqui
const gradePixels = document.querySelector('#pixel-board');
let alvo = '';
function paint() {
  gradePixels.addEventListener('click', (event) => {
    if (event.target.className === 'pixel') {
      alvo = event.target;
      alvo.style.backgroundColor = corAtual;
    }
  });
}
paint();

// Requisito 9 - Botão de clear para a tela
const clearBtn = document.querySelector('#clear-board');
const pixelCells = document.getElementsByClassName('pixel');

function clearAll() {
  clearBtn.addEventListener('click', () => {
    for (let i = 0; i < pixelCells.length; i += 1) {
      pixelCells[i].style.backgroundColor = 'white';
    }
  });
}
clearAll();

// Requisito 10 e 11 - Usuário personaliza o tamanho e mensagens de erro caso o mesmo digite algo inválido
const newSize = document.querySelector('#board-size');
const applyBtn = document.querySelector('#generate-board');
let newNum = 5;

function removeLines() {
  for (let i = 0; i < size; i += 1) {
    pixelBoard.removeChild(pixelBoardLines[0]);
  }
}

function conditions() {
  removeLines();
  size = newNum;
  lineDef();
}

function validation() {
  applyBtn.addEventListener('click', () => {
    if (newSize.value.length === 0) {
      alert('Board inválido!');
    } else if (newSize.value < 5) {
      newNum = 5;
      conditions();
    } else if (newSize.value > 50) {
      newNum = 50;
      conditions();
    } else {
      newNum = newSize.value;
      conditions();
    }
  });
}
validation();

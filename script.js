// requisito 4
// criando a matriz do quadro de pintura 5x5:
let n = 5; // numero de linhas e colunas (matriz quadrada)
const boardID = 'pixel-board';
function createMatriz() {
  // o loop abaixo cria as linhas:
  for (let i = 0; i < n; i += 1) {
    const matriz = document.getElementById(boardID);
    const createLine = document.createElement('div');
    createLine.className = 'line';
    matriz.appendChild(createLine);
  }
  const line = document.getElementsByClassName('line');
  // o loop abaixo pega cada linha e acrescenta colunas:
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      const createColumn = document.createElement('div');
      createColumn.className = 'pixel';
      line[i].appendChild(createColumn);
    }
  }
}
createMatriz();

// requisito 12
// gerar cores aletorias:
function gerarCorRandom() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  return `rgb(${r}, ${g}, ${b})`; // fonte: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
}
const black = document.getElementById('black');
black.style.backgroundColor = 'black';
black.classList.add('selected');
const cor1 = document.getElementById('corRandon1');
const corRandon1 = gerarCorRandom();
cor1.style.backgroundColor = corRandon1;
const cor2 = document.getElementById('corRandon2');
const corRandon2 = gerarCorRandom();
cor2.style.backgroundColor = corRandon2;
const cor3 = document.getElementById('corRandon3');
const corRandon3 = gerarCorRandom();
cor3.style.backgroundColor = corRandon3;

// requisito 7
// Seleciona uma cor da paleta de cores para pintar:
function selectedPaint() {
  const colorSelected = document.querySelector('#color-palette');
  colorSelected.addEventListener('click', (event) => {
    const selected = document.querySelector('.selected');
    if (event.target.id !== 'color-palette') {
      selected.classList.remove('selected'); // fonte: https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList
      event.target.classList.add('selected'); // acrescentou no que foi clicado
    }
  });
}

selectedPaint();
// requisito 8
// pintar pixel apos selecionar a cor e somente o pixel desejado:
function Paint() {
  const matrixPaint = document.getElementById(boardID);
  matrixPaint.addEventListener('click', (event) => {
    if (event.target.className === 'pixel') {
      const currentColor = document.querySelector('.selected').style.backgroundColor; // cor atual selecionada
      const changeColorPixel = event.target;
      changeColorPixel.style.backgroundColor = currentColor; // muda a cor do pixel para a cor selecionada
    }
  });
}

Paint();
// requisito 9
// Apagar todo o quadro, deixando completamente branco:
function clearBoard() {
  const buttonClear = document.getElementById('clear-board');
  const pixels = document.getElementsByClassName('pixel');
  buttonClear.addEventListener('click', () => {
    for (let i = 0; i < pixels.length; i += 1) {
      pixels[i].style.backgroundColor = 'white';
    }
  });
}
clearBoard();

// requisito 11: bônus
// input e botao para aumentar o quadro de pintura:
const input = document.getElementById('board-size');
const buttonInitial = document.getElementById('generate-board');
// numero digitado pelo usurario é adicionado ao n
input.addEventListener('keyup', (event) => { // Tainá me ajudou nesta parte, fonte: https://developer.mozilla.org/pt-BR/docs/Web/API/Document/keyup_event
  n = parseInt(event.target.value, 10);
  if (n < 5) {
    n = 5;
  } else if (n > 50) {
    n = 50;
  }
});

// requisito 10: bônus
// botao que muda o tamanho do quadro de pintura caso receba um valor n:
buttonInitial.addEventListener('click', () => {
  const myNode = document.getElementById(boardID);
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild); // fonte: https://qastack.com.br/programming/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
  }
  if (input.value === '') {
    alert('Board inválido!');
  } else {
    createMatriz();
  }
});

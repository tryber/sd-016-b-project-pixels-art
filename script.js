//requisito 4 
// criando a matriz do quadro de pintura 5x5:
let n = 5; // numero de linhas e colunas (matriz quadrada)
function createMatriz(n) {
 // o loop abaixo cria as linhas:
  for (let i = 0; i < n; i += 1) {
    const matriz = document.getElementById('pixel-board'); 
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
createMatriz(n);

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
  const matrixPaint = document.getElementById('pixel-board');
  matrixPaint.addEventListener('click', (event) => {
  if (event.target.className === 'pixel') {
      const currentColor = document.querySelector('.selected').id; // cor atual selecionada
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

// requisito 10 e 11
// input e botao para aumentar o quadro de pintura:
const input = document.getElementById('board-size');
const buttonInitial = document.getElementById('generate-board');
// numero digitado pelo usurario é adicionado ao n
input.addEventListener('keyup', (event) => {  // fonte: https://developer.mozilla.org/pt-BR/docs/Web/API/Document/keyup_event
  n = parseInt(event.target.value, 10); // fonte: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt
  if (n < 5) {
    n = 5;
  } else if ( n > 50) {
    n = 50;
  }
});
// botao que muda o tamanho do quadro de pintura caso receba um valor n:
buttonInitial.addEventListener('click', () => {
  const myNode = document.getElementById('pixel-board');
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild); // fonte: https://qastack.com.br/programming/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
  }
  if (input.value === '') {
    alert('Board inválido!');
  } else {
    createMatriz(n);
  }
});

//requisito 12 (ta dando problema, consertar!)
/*
// gerar cores aletorias: 
function gerarCorRandom() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  return `rgb(${r}, ${g}, ${b})`;   // fonte: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
}

let cor1 = document.getElementById('red');
cor1.style.backgroundColor = gerarCorRandom();
let cor2 = document.getElementById('green');
cor2.style.backgroundColor = gerarCorRandom();
let cor3 = document.getElementById('blue');
cor3.style.backgroundColor = gerarCorRandom();
*/
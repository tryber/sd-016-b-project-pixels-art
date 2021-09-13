const ulDosPixels = document.querySelector('#ulLocal');
let pixelsCriados = 5;
let linesCriado = 5;

// Adicionando tags para os pixels

function pintarOPixel(event) {
  const a = event.target;
  const colorSelect = document.querySelector('.selected').style.backgroundColor;
  a.style.backgroundColor = colorSelect;
}

function addFuncClick() {
  const pixelLi = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixelLi.length; i += 1) {
    pixelLi[i].addEventListener('click', pintarOPixel);
  }
}

// Criando pixels

function criandoPixels() {
  const createLine = document.createElement('li');
  createLine.classList.add('line');
  ulDosPixels.appendChild(createLine);

  for (let i = 1; i <= pixelsCriados; i += 1) {
    const createPixel = document.createElement('li');
    createPixel.classList.add('pixel');
    createLine.appendChild(createPixel);
  }
}

function criarLines() {
  for (let i = 1; i <= linesCriado; i += 1) {
    criandoPixels();
  }
  addFuncClick();
}

criarLines();

const paletaDeCores = document.querySelectorAll('.color');
const pixelLi = document.querySelectorAll('.pixel');

const colors = ['black'];
let cont = 0;

// Sorteia as cores

function sortearCores() {
  const retonoDeCores = [
    'red', 'blue', 'green',
    'yellow', 'pink', 'orange', 'gold',
    'green', 'lime', 'olive', 'yellow',
    'beige', 'magenta', 'violet', 'cyan'];
  for (let i = 1; i <= 4; i += 1) {
    colors.push(retonoDeCores[Math.floor(Math.random() * 100) % retonoDeCores.length]);
  }
}
sortearCores();

// Adiciona as cores

function adicionarCores(localCor) {
  const localCorOne = localCor;
  localCorOne.style.backgroundColor = colors[cont];
  if (localCorOne.style.backgroundColor === 'black') {
    localCorOne.classList.add('selected');
  }
  cont += 1;
}

function removerSelect() {
  for (let i = 0; i < paletaDeCores.length; i += 1) {
    paletaDeCores[i].classList.remove('selected');
  }
}

function selecionaCor(event) {
  const clicado = event.target;
  removerSelect();
  clicado.classList.add('selected');
}

// Adiciona funcao click a cada pixel

for (let i = 0; i < paletaDeCores.length; i += 1) {
  adicionarCores(paletaDeCores[i]);
  paletaDeCores[i].addEventListener('click', selecionaCor);
}

// Criando Button de Resetar

const classButton = document.querySelector('#id-button-resetar');
const buttonC = document.createElement('button');

buttonC.id = 'clear-board';
buttonC.innerText = 'Limpar';
classButton.appendChild(buttonC);
buttonC.addEventListener('click', () => {
  for (let i = 0; i < pixelLi.length; i += 1) {
    pixelLi[i].style.backgroundColor = 'white';
  }
});

// Criando o Input

const inputLocation = document.querySelector('#input-location');
const inputCreate = document.createElement('input');
inputCreate.id = 'board-size';
inputCreate.type = 'number';
inputCreate.min = '1';
inputCreate.max = '50';
inputLocation.appendChild(inputCreate);

// Verificar valor do input e reconfigurar valor

function verificarValor(valorDoInputR) {
  let valorDoInput = parseInt(valorDoInputR, 10);
  if (valorDoInput >= 50) {
    valorDoInput = 50;
    return valorDoInput;
  }
  if (valorDoInput < 5) {
    valorDoInput = 5;
    return valorDoInput;
  }
  return valorDoInput;
}

// Criando Button do Input

const buttonInput = document.createElement('button');
buttonInput.id = 'generate-board';
buttonInput.innerText = 'VQV';
inputLocation.appendChild(buttonInput);
buttonInput.addEventListener('click', () => {
  const valorDoInput = inputCreate.value;
  if (valorDoInput === '' || valorDoInput === '0') {
    alert('Board inválido!');
    return;
  }
  pixelsCriados = verificarValor(valorDoInput);
  linesCriado = verificarValor(valorDoInput);

  ulDosPixels.innerHTML = '';
  criarLines();
});

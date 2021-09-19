// Selecionando uma cor
function selecionaCor(event) {
  const limpaClasses = document.querySelector('.selected');
  const evento = event;
  limpaClasses.className = 'color';
  evento.target.className = 'color  selected';
}
const preto = document.querySelector('#corPreta');
preto.addEventListener('click', selecionaCor);

const rosa = document.querySelector('#corRosa');
rosa.addEventListener('click', selecionaCor);

const verde = document.querySelector('#corVerde');
verde.addEventListener('click', selecionaCor);

const azul = document.querySelector('#corAzul');
azul.addEventListener('click', selecionaCor);

// Colorindo o pixel
function colorePixel(event) {
  const corSelecionada = document.querySelector('.selected').getAttribute('id');
  const evento = event;
  evento.target.id = corSelecionada;
}

function selecionaPixel() {
  const pixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', colorePixel);
  }
}

selecionaPixel();

// Limpando o quadro de pixels
function limpaPixel() {
  const pixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].id = '';
  }
}
function limpaQuadro() {
  const btnLimpa = document.querySelector('.clearButton');
  btnLimpa.addEventListener('click', limpaPixel);
}

limpaQuadro();

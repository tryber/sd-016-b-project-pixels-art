function selecionaCor(event) {
  const limpaClasses = document.querySelector('.selected');
  const evento = event;
  limpaClasses.className = 'color';
  evento.target.className = 'color  selected';
}
const preto = document.querySelector('#black');
preto.addEventListener('click', selecionaCor);

const rosa = document.querySelector('#pink');
rosa.addEventListener('click', selecionaCor);

const marrom = document.querySelector('#brown');
marrom.addEventListener('click', selecionaCor);

const roxo = document.querySelector('#purple');
roxo.addEventListener('click', selecionaCor);


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


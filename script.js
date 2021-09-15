/* eslint-disable no-param-reassign */
/* Criando quadro de pixels */
const primeiraLinha = document.getElementById('first-line');
const segundaLinha = document.getElementById('second-line');
const terceiraLinha = document.getElementById('third-line');
const quartaLinha = document.getElementById('fourth-line');
const quintaLinha = document.getElementById('fifth-line');

function creatLine(divPai) {
  for (let c = 0; c < 5; c += 1) {
    const newDiv = document.createElement('div');
    newDiv.className = 'pixel';
    divPai.appendChild(newDiv);
  }
}

creatLine(primeiraLinha);
creatLine(segundaLinha);
creatLine(terceiraLinha);
creatLine(quartaLinha);
creatLine(quintaLinha);

/* Inserindo e removendo a classe selected */
const paletaBlack = document.querySelector('.black');
const paletaRed = document.querySelector('.red');
const paletaBlue = document.querySelector('.blue');
const paletaGreen = document.querySelector('.green');

function classSelected(event) {
  const elementContainSelected = document.querySelector('.selected');
  elementContainSelected.classList.remove('selected');
  event.target.classList.add('selected');
  console.log(elementContainSelected);
}

paletaBlack.addEventListener('click', classSelected);
paletaRed.addEventListener('click', classSelected);
paletaBlue.addEventListener('click', classSelected);
paletaGreen.addEventListener('click', classSelected);

/* Pitando o quadro de pixels */
function creatColor(event) {
  const pixelC = document.querySelector('.selected');
  event.target.style.backgroundColor = window.getComputedStyle(pixelC).backgroundColor;
}

function creatEscuta() {
  const arrayPixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < arrayPixel.length; index += 1) {
    const element = arrayPixel[index];
    element.addEventListener('click', creatColor);
  }
}

creatEscuta();

/* Limpando o quadro de pixels */
function limpandoQuadro() {
  const arrayPixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < arrayPixel.length; index += 1) {
    const element = arrayPixel[index];
    element.style.backgroundColor = 'white';
  }
}

const botao = document.getElementById('clear-board');
botao.addEventListener('click', limpandoQuadro);

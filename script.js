const cor = document.querySelectorAll('.color');
const paleta = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
const btn = document.getElementById('clear-board');

// function que faz a classe `.selected` ser alterada dentro da id `color-palette`;
// 1 Eu quero mudar a classe selected
// 2 dentro da classe color

function corSelecionada(event) {
  for (let index = 0; index < cor.length; index += 1) {
    cor[index].classList.remove('selected');
  }
  event.target.classList.add('selected')
}
paleta.addEventListener('click', corSelecionada)

// PARTE 8 
function selecionaCor(event) {
  const pixel = document.querySelector('.selected'); // resgatando a classe que eu vou usar
  pixel.classList.remove('selected'); // removo a classe para não duplicar
  event.target.classList.add('selected'); // adiciona a classe ao clickar nela.

}
paleta.addEventListener('click', selecionaCor) // chamo a função.

function preenchePixelBoard(event) {
  const pixel = document.querySelector('.selected'); // resgato a classe que eu vou usar
  const pixelStyle = getComputedStyle(pixel).backgroundColor; // variavel para resgatar o style da classe + backgroundColor
  event.target.style.backgroundColor = pixelStyle // event.target para definir a cor de fundo que foi selecionada
}
pixelBoard.addEventListener('click', preenchePixelBoard) // chamo a função novamente.

// PARTE 9 
// criar o botão - ok
// resgatar o botão
// resgatar o local em que o botão vai funcionar
// event de remover todas as classes do pixel-board

function btnClear() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}
btn.addEventListener('click', btnClear)

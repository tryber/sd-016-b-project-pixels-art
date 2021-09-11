const colors = document.querySelectorAll('.color');
const pixels = document.querySelectorAll('.pixel');
const corSelecionada = document.querySelector('.selected');
let corAtual = window.getComputedStyle(corSelecionada, null).getPropertyValue('background-color');
console.log(corAtual);

// Requisito 7 - Troca qual cor da paleta possui a classe 'selected'

function trocaSelected(event) {
  const comSelected = document.querySelector('.selected');
  comSelected.classList.remove('selected');
  event.target.classList.add('selected');
  corAtual = window.getComputedStyle(comSelected, null).getPropertyValue('background-color');
  return corAtual;
}

for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', trocaSelected);
}

// Pintar os pixels

function trocaCor(event) {
  event.target.style.backgroundColor = corAtual;
}

for (let i = 0; i < pixels.length; i += 1) {
  pixels[i].addEventListener('click', trocaCor);
}

// Adicionar botão que limpa os pixels
const recebeBotao = document.getElementsByClassName('buttons')[0];
const botaoApaga = document.createElement('button');
botaoApaga.innerText = 'Limpar';
botaoApaga.setAttribute('id', 'clear-board');
recebeBotao.appendChild(botaoApaga);

// Limpar os pixels

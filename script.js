/* eslint-disable no-param-reassign */

// Criando os pixels

const pixelBoard = document.getElementById('pixel-board');
for (let i = 0; i < 25; i += 1) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixel.id = `pixel${i}`;
  pixel.style.backgroundColor = 'white';
  pixelBoard.appendChild(pixel);
}

// Selecionar a cor
const colorP = document.getElementById('color-palette');

function selectColor(event) {
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  event.target.className += ' selected';
}

for (let i = 0; i < colorP.children.length; i += 1) {
  colorP.children[i].addEventListener('click', selectColor);
}

// Pintar os pixels
function changeColor(event) {
  const selectedColor = document.querySelector('.selected');
  event.target.style.backgroundColor = getComputedStyle(selectedColor).backgroundColor;
  console.log(getComputedStyle(selectedColor).backgroundColor);
}

for (let i = 0; i < pixelBoard.children.length; i += 1) {
  pixelBoard.children[i].addEventListener('click', changeColor);
}

// Botão para deixar todos os pixels branco

function changeColorToWhite(event) {
  for (let i = 0; i < pixelBoard.children.length; i += 1) {
    pixelBoard.children[i].style.backgroundColor = 'white';
    console.log('lalala');
  }
}

const button = document.getElementById('clear-board');
button.addEventListener('click', changeColorToWhite);

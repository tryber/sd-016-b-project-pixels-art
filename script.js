// Função que adiociona e remove a class 'selected'

const colors = document.getElementsByClassName('color');

function selectColor(event) {
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', selectColor);
}

// Função para pintar pixels
// referencias: https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
// https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/getPropertyValue
// Se o local do click contém a class "pixel", recupera o item que contém a class "selected" e add na const item, recupera a background-color do item, add ao pixel clicado.

function paintPixel(event) {
  if (event.target.classList.contains('pixel')) {
    const item = document.querySelector('.selected');
    const color = window.getComputedStyle(item).getPropertyValue('background-color');
    const pixel = event.target;
    pixel.style.backgroundColor = color;
  }
}

document.addEventListener('click', paintPixel);

// Função para limpar board

const clear = document.querySelector('#clear-board');
function clearBoard() {
  const pixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

clear.addEventListener('click', clearBoard);

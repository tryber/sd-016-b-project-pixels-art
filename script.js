// Para a parte de JS, foram consultados os materiais de W3Schools, MDN Web Docs,
// Course da Trybe, e aulas da Seção 7 "Working with the DOM (Browser HTML Code) in
// JavaScript" do curso "JavaScript - The Complete Guide 2021 (Beginner + Advanced)",
// ministrado por Maximilian Schwarzmüller.

// Links:
// https://www.w3schools.com/
// https://developer.mozilla.org/en-US
// https://app.betrybe.com/course
// https://www.udemy.com/course/javascript-the-complete-guide-2020-beginner-advanced/

let newDiv;
const pixelBoard = document.querySelector('#pixel-board');
const colorPalette = document.querySelector('#color-palette');
const clearBoardButton = document.querySelector('#clear-board');

function createDiv(divSize, marginSize) {
  // Cria um elemento div com algumas propriedades.
  newDiv = document.createElement('div');
  newDiv.style.border = '1px solid black';
  newDiv.style.display = 'inline-block';
  newDiv.style.margin = marginSize;
  newDiv.style.height = divSize;
  newDiv.style.width = divSize;
  return newDiv;
}

function changeColor() {
  // Verifica se há algum elemento com o atributo class='selected'.
  // Caso haja, remove esse atributo desse elemento e adiciona esse atributo
  // ao elemento que chamou a função.
  const selectedColors = document.getElementsByClassName('selected');
  if (selectedColors.length > 0) {
    selectedColors[0].classList.remove('selected');
  }
  this.classList.add('selected'); // O this aqui está definido para o elemento
  // do evento a partir do qual foi disparado, nesse caso, o .color que foi clicado.
}

function paintBoard() {
  // Muda a cor do fundo do elemento que chamou a função para a cor
  // de fundo do elemento com o atributo class='selected'.
  const selectedColor = document.querySelector('.selected');
  this.style.backgroundColor = selectedColor.style.backgroundColor;
  // O this aqui está definido para o elemento do evento a partir
  // do qual foi disparado, nesse caso, o .pixel que foi clicado.
}

function createPaletteColor(n) {
  // Cria uma paleta com quatro cores.
  for (let i = 0; i < n; i += 1) {
    // Cria quatro divs, adiciona atributo e manipulador de evento a essas divs.
    createDiv('20px', '0 5px');
    newDiv.setAttribute('class', 'color');
    colorPalette.appendChild(newDiv);
    newDiv.addEventListener('click', changeColor);
    // Quando uma div é clicada, a função changeColor é chamada.
  }
  const colors = ['rgb(0, 0, 0)', 'rgb(140, 140, 140)', 'rgb(217, 217, 217)', 'rgb(242, 242, 242)'];
  const colorOfPalette = document.querySelectorAll('.color');
  for (let i2 = 0; i2 < colors.length; i2 += 1) {
    // Adiciona cor de fundo a cada div.
    colorOfPalette[i2].style.backgroundColor = colors[i2];
  }
  colorOfPalette[0].classList.add('selected');
  // Adiciona o atributo class='selected' a primeira div.
  return colorPalette;
}

function createPixelBoard(pixels) {
  // Cria um quadro quadrado com várias divs, adiciona atributo,
  // estilo e manipulador de evento a essas divs.
  for (let i = 0; i < pixels; i += 1) {
    for (let i2 = 0; i2 < pixels; i2 += 1) {
      createDiv('40px', '0');
      newDiv.setAttribute('class', 'pixel');
      newDiv.style.backgroundColor = 'white';
      pixelBoard.appendChild(newDiv);
      newDiv.addEventListener('click', paintBoard);
      // Quando uma div é clicada, a função paintBoard é chamada.
    }
  }
  return pixelBoard;
}

function clearBoard() {
  // Muda a cor de fundo de todas as divs com a classe 'pixel' para branco.
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

window.onload = function pixelArt() {
  createPaletteColor(4);
  createPixelBoard(5);

  clearBoardButton.addEventListener('click', clearBoard);
};

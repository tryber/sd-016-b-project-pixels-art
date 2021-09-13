const palette = document.getElementById('color-palette');
const board = document.getElementById('pixel-board');
const button = document.getElementById('clear-board');
const pixelsArr = document.getElementsByClassName('pixel');
let selectedColor = 'black';

// Cria a paletta que vamos pegar as cores
function createPaletteAndAddColor() {
  const colors = ['black', 'red', 'blue', 'yellow'];
  for (const c of colors) {
    const color = document.createElement('div');
    color.classList.add('color');
    palette.appendChild(color);
    color.style.backgroundColor = c;
    if (color.style.backgroundColor === 'black') {
      color.classList.add('selected');
    }
  }
}

// Criando os pixels do tabuleiro
function createPixels(line, column) {
  for (let l = 0; l < line; l += 1) {
    const lines = document.createElement('div');
    lines.classList.add('line');
    board.appendChild(lines);
    for (let c = 0; c < column; c += 1) {
      const pixel = document.createElement('div');
      pixel.classList.add('pixel');
      lines.appendChild(pixel);
      pixel.style.backgroundColor = 'white';
    }
  }
}

// Definindo div(cor) como selecionada
palette.addEventListener('click', function (event) {
  if (event.target.id !== 'color-palette') {
    for (const child of palette.children) {
      child.classList.remove('selected');
    }
    event.target.classList.add('selected');
    selectedColor = event.target.style.backgroundColor;
  }
});

// Pintando os pixels
board.addEventListener('click', function (event) {
  if (event.target.id !== 'pixel-board' && event.target.className !== 'line') {
    event.target.style.backgroundColor = selectedColor;
  }
});

// Limpando o board
button.addEventListener('click', function () {
  for (const pixel of pixelsArr) {
    pixel.style.backgroundColor = 'white';
  }
});

createPaletteAndAddColor();
createPixels(5, 5);

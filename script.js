function selectColor(event) {
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  event.target.classList.add('selected');
  // console.log(selectedColor);
  // console.log(event.target);
}

function paintPixel(event) {
  const selected = document.querySelector('.selected');
  const color = window.getComputedStyle(selected).backgroundColor;
  const pixel = event.target;
  pixel.style.backgroundColor = color;
}

function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

function removePixels(board) {
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
}

function createPixel() {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixel.addEventListener('click', paintPixel);
  return pixel;
}

function getBoardSize() {
  let size = document.querySelector('#board-size').value;
  if (size === '') return;

  if (size < 5) size = 5;
  else if (size > 50) size = 50;

  return size;
}

function generateBoard() {
  const size = getBoardSize();
  if (!size) {
    alert('Board inválido!');
    return;
  }
  const board = document.querySelector('#pixel-board');
  removePixels(board);
  // cria 'size' linhas
  for (let i = 0; i < size; i += 1) {
    const line = document.createElement('div');
    line.className = 'board-line';
    // cria 'size' pixels para cada linha
    for (let k = 0; k < size; k += 1) {
      line.appendChild(createPixel());
    }
    board.appendChild(line);
  }
}

window.onload = function main() {
  const paletaDeCores = document.querySelectorAll('.color');
  for (let i = 0; i < paletaDeCores.length; i += 1) {
    paletaDeCores[i].addEventListener('click', selectColor);
  }
  // adicionar evento para que ao clicar em um pixel ele seja preenchido com a cor selecionada
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', paintPixel);
  }
  const clearButton = document.querySelector('#clear-board');
  clearButton.addEventListener('click', clearBoard);
  // usuário muda o tamanho do quadro
  const generateBoardButton = document.querySelector('#generate-board');
  generateBoardButton.addEventListener('click', generateBoard);
};

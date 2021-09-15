const colorPalette = document.querySelector('#color-palette');
const color = document.querySelectorAll('.color');

const pixelBoard = document.querySelector('#pixel-board');

// Requisito 7
colorPalette.addEventListener('click', (event) => {
  for (let i = 0; i < color.length; i += 1) {
    color[i].classList.remove('selected');
  }

  if (event.target.classList.contains('color')) {
    event.target.classList.add('selected');
  }
});

// Requisito 8
pixelBoard.addEventListener('click', (event) => {
  if (event.target.classList.contains('pixel')) {
    const selected = document.querySelector('.selected');
    const selectedColor = getComputedStyle(selected).backgroundColor;
    const pixel = event.target;
    pixel.style.backgroundColor = selectedColor;
  }
});

// Requisito 9
const clearBoardButton = document.querySelector('#clear-board');

clearBoardButton.addEventListener('click', () => {
  const pixel = document.querySelectorAll('.pixel');

  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
});

// Requisito 10 e 11
function boardMaker(input) {
  // const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.innerHTML = '';
  for (let i = 0; i < input; i += 1) {
    const line = document.createElement('div');
    line.className = 'line';
    for (let ind = 0; ind < input; ind += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      line.appendChild(pixel);
    }
    pixelBoard.appendChild(line);
  }
}

const generateBoardButton = document.querySelector('#generate-board');

generateBoardButton.addEventListener('click', () => {
  const boardSize = document.querySelector('#board-size');
  let input = boardSize.value;
  if (input === '') { alert('Board inválido!'); }
  if (input < 5) {
    input = 5;
    boardSize.value = 5;
  }
  if (input > 50) {
    input = 50;
    boardSize.value = 50;
  }
  boardMaker(input);
});

// Requisito 12
for (let i = 1; i < color.length; i += 1) {
  const a = Math.random() * 255;
  const b = Math.random() * 255;
  const c = Math.random() * 255;
  color[i].style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
}

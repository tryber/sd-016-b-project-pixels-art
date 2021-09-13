const toPaintInBoard = document.getElementsByClassName('pixel');
const pixelBoard = document.getElementById('pixel-board');
const eraseButton = document.querySelector('#clear-board');
const black = document.getElementById('black');
const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');

function createBoard(grids) {
  for (let index = 1; index <= grids; index += 1) {
    const pixels = document.createElement('div');
    pixels.classList.add('pixel');
    pixelBoard.appendChild(pixels);
  }
}

createBoard(25);

function addSelected(event) {
  const select = document.querySelector('.selected');
  select.classList.remove('selected');
  event.target.classList.add('selected');
}

black.addEventListener('click', addSelected);
red.addEventListener('click', addSelected);
green.addEventListener('click', addSelected);
blue.addEventListener('click', addSelected);

// Referencias do getAttribute nesses videos https://youtu.be/UubFxrc0-kw , https://youtu.be/UftSB4DaRU4
function toPaintBoard(event) {
  const paint = document.querySelector('.selected').getAttribute('id');
  const toPaint = event.target;
  toPaint.classList.remove(...toPaint.classList);
  toPaint.classList.add('pixel');
  toPaint.classList.add(paint);
}

for (const index of toPaintInBoard) {
  index.addEventListener('click', toPaintBoard);
}

eraseButton.addEventListener('click', function () {
  const erase = document.getElementsByClassName('pixel');
  for (const erased of erase) {
    erased.classList.remove(...erased.classList);
    erased.classList.add('pixel');
  }
});

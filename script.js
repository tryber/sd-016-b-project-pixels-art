const pixelBoard = document.getElementById('pixel-board');
for (let i = 0; i < 25; i += 1) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixel.id = `pixel${i}`;
  pixel.style.backgroundColor = 'white';
  pixelBoard.appendChild(pixel);
}

const colorP = document.getElementById('color-palette');

function selectColor(event) {
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  event.target.className += ' selected';
}

for (let i = 0; i < colorP.children.length; i += 1) {
  colorP.children[i].addEventListener('click', selectColor);
}

function changeColor(event) {
  const selectedColor = document.querySelector('.selected');
  event.target.style.backgroundColor = getComputedStyle(selectedColor).backgroundColor;
  console.log(getComputedStyle(selectedColor).backgroundColor);
}

for (let i = 0; i < pixelBoard.children.length; i += 1) {
  pixelBoard.children[i].addEventListener('click', changeColor);
}

function changeToWhite() {
  for (let i = 0; i < pixelBoard.children.length; i += 1) {
    pixelBoard.children[i].style.backgroundColor = 'white';
  }
}

const button = document.getElementById('clear-board');
button.addEventListener('click', changeToWhite);

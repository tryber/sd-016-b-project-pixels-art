// Requisito2
const palette = document.getElementById('color-palette');
function createPalleteOfColor(colors) {
  const arrayId = ['black', 'blue', 'red', 'green'];
  for (let index = 0; index < colors.length; index += 1) {
    const addColor = colors[index];
    const divColor = document.createElement('div');
    divColor.className = 'color';
    divColor.id = arrayId[index];
    palette.appendChild(divColor);
    divColor.style.backgroundColor = addColor;
  }
}
createPalleteOfColor(['black', 'blue', 'red', 'green']);

const divBoardP = document.getElementById('pixel-board');
function createDiv() {
  for (let index = 0; index < 25; index += 1) {
    const creatDiv = document.createElement('div');
    creatDiv.className = 'pixel';
    divBoardP.appendChild(creatDiv);
  }
}
createDiv();

window.onload = function carregar() {
  const color = document.querySelector('.color');
  color.classList.add('selected');
};

palette.addEventListener('click', (event) => {
  for (let index = 0; index < palette.children.length; index += 1) {
    palette.children[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
});

divBoardP.addEventListener('click', (event) => {
  const evento = event.target;
  if (event.target.classList.contains('pixel')) {
    evento.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
  }
});
const button = document.getElementById('clear-board');
button.addEventListener('click', () => {
  const pixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
});

const boardGen = document.getElementById('generate-board');
function addPixel(n) {
  divBoardP.innerHTML = '';
  divBoardP.style.gridTemplateColumns = `repeat(${n}, 40px)`;
  const inputN = n ** 2;
  for (let i = 1; i <= inputN; i += 1) {
    const divAdd = document.createElement('div');
    divAdd.className = 'pixel';
    divBoardP.appendChild(divAdd);
  }
}

boardGen.addEventListener('click', () => {
  let inputN = document.getElementById('board-size').value;
  if (inputN === '') {
    window.alert('Board Inválido!');
  } else if (inputN < 5) {
    inputN = 5;
    addPixel(inputN);
  } else if (inputN > 50) {
    inputN = 50;
    addPixel(inputN);
  }
  addPixel(inputN);
});

function aleatoryColors() {
  const r = parseInt(Math.random() * 256, 10);
  const g = parseInt(Math.random() * 256, 10);
  const b = parseInt(Math.random() * 256, 10);
  return `rgb(${r}, ${g}, ${b})`;
}

function newColors() {
  const colors = document.querySelectorAll('.color');
  for (let i = 1; i < colors.length; i += 1) {
    colors[i].style.backgroundColor = aleatoryColors();
  }
}
newColors();

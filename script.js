function genColor() {
  const r = parseInt(Math.random() * 255, 10);
  const g = parseInt(Math.random() * 255, 10);
  const b = parseInt(Math.random() * 255, 10);
  return `rgb(${r}, ${g}, ${b})`;
}

function newColors() {
  const childrenColors = document.getElementById('color-palette').children;
  for (let i = 1; i < childrenColors.length; i += 1) {
    childrenColors[i].style.backgroundColor = genColor();
  }
}

function resetColor() {
  const blackColor = document.querySelector('.black');
  blackColor.classList.add('selected');
  newColors();
}

function addClassSelected(event) {
  const classSelected = document.querySelector('.selected');
  const eventTarget = event.target;
  if (
    eventTarget.classList.contains('selected') === false
    && eventTarget.classList.contains('color') === true
  ) {
    classSelected.classList.remove('selected');
    event.target.classList.add('selected');
  }
}

function paintPix(event) {
  const classSelected = document.querySelector('.selected');
  const eventTarget = event.target;
  const bgColor = window
    .getComputedStyle(classSelected, null)
    .getPropertyValue('background-color');
  eventTarget.style.backgroundColor = bgColor;
}

function clearBoard() {
  const pixelBoa = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixelBoa.length; i += 1) {
    pixelBoa[i].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

function buildPixelBoard(inputV) {
  const bigBoard = document.getElementById('pixel-board');
  bigBoard.innerText = '';
  bigBoard.style.gridTemplateColumns = `repeat(${inputV}, 40px)`;
  const inputVquad = inputV ** 2;
  for (let i = 1; i <= inputVquad; i += 1) {
    const newDiv = document.createElement('div');
    newDiv.className = 'pixel';
    bigBoard.appendChild(newDiv);
  }
}

function genBoard() {
  let inputValue = document.querySelector('#board-size').value;
  if (inputValue === '') {
    window.alert('Board Inválido!');
  } else if (inputValue < 5) {
    inputValue = 5;
    buildPixelBoard(inputValue);
  } else if (inputValue > 50) {
    inputValue = 50;
    buildPixelBoard(inputValue);
  }
  buildPixelBoard(inputValue);
}

// constantes
const btnRed = document.querySelector('.color__content');
const pixelBo = document.querySelector('#pixel-board');
const btnClear = document.querySelector('#clear-board');
const btnGen = document.querySelector('#generate-board');

window.onload = resetColor;

btnRed.addEventListener('click', addClassSelected);
pixelBo.addEventListener('click', paintPix);
btnClear.addEventListener('click', clearBoard);
btnGen.addEventListener('click', genBoard);

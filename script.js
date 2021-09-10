function resetColor() {
  const blackColor = document.querySelector('.black');
  blackColor.classList.add('selected');
}

function addClassSelected(event) {
  const classSelected = document.querySelector('.selected');
  const eventTarget = event.target;
  if (
    eventTarget.classList.contains('selected') === false &&
    eventTarget.classList.contains('color') === true
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

function genBoard() {
  const bigBoard = document.getElementById('pixel-board');
  const inputValue = document.querySelector('#board-size').value;
  if (inputValue === '') {
    window.alert('Board Inválido!');
  } else {
    bigBoard.innerText = '';
    bigBoard.style.gridTemplateColumns = `repeat(${inputValue}, 40px)`;
    const inputVquad = inputValue ** 2;
    for (let i = 1; i <= inputVquad; i += 1) {
      const newDiv = document.createElement('div');
      newDiv.className = 'pixel';
      bigBoard.appendChild(newDiv);
    }
  }
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

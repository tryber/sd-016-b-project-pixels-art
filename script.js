let baseGrid = 5;
const main = document.querySelector('main');
const aquarela = document.querySelector('#color-palette');
const pickedColor = document.querySelector('.color');
const container = document.getElementById('pixel-board');
const input = document.createElement('input');
const VQVbutton = document.createElement('button');

function grid(baseGrider) {
  baseGrid = baseGrider;
  if (baseGrid < 5) {
    baseGrid = 5;
  } else if (baseGrid > 50) {
    baseGrid = 50;
  }
  for (let i = 0; i < baseGrid; i += 1) {
    const rowDiv = document.createElement('div');
    rowDiv.className = 'gridRow';
    for (let index = 0; index < baseGrid; index += 1) {
      const columnGrid = document.createElement('div');
      columnGrid.className = 'pixel';
      container.appendChild(rowDiv);
      rowDiv.appendChild(columnGrid);
    }
  }
}

function remover(toRemove) {
  for (let index = 0; index < toRemove.length; index += 1) {
    toRemove[index].remove();
  }
  const removePixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < removePixels.length; i += 1) {
    removePixels[i].remove();
  }
}

function inputButton() {
  input.type = 'number';
  input.setAttribute('min', 1);
  input.setAttribute('max', 50);
  input.id = 'board-size';
  VQVbutton.id = 'generate-board';
  VQVbutton.innerHTML = 'VQV';
  main.insertBefore(input, main.childNodes[5]);
  main.insertBefore(VQVbutton, main.childNodes[6]);
  VQVbutton.addEventListener('click', function inputTest() {
    if (input.value === '') {
      alert('Board inválido!');
    }
    const remove = document.querySelectorAll('.gridRow');
    remover(remove);
    grid(input.value);
  });
}

function randomColors() {
  const aquarelaColor = document.querySelectorAll('.color');
  const randomAquarela = ['#F08080', '#9ACD32', '#EEE8AA', '#C0C0C0', '#7B68EE', '#0000CD',
    '#777777', '#FFFAFA', '#FF4500', '#4169E1', '#FFF0F5', '#DDA0DD', '#008B8B', '#FF69B4',
    '#DEB887', '#FF00FF', '#008080'];
  for (let i = 1; i < 4; i += 1) {
    const choosen = aquarelaColor[i];
    const getAcolor = Math.floor(Math.random() * 17);
    choosen.style.backgroundColor = randomAquarela[getAcolor];
  }
}

function select() {
  pickedColor.classList.add('selected');
  aquarela.addEventListener('click', function pickColor(toPaint) {
    const selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    toPaint.target.classList.add('selected');
  });
}

function getColored() {
  container.addEventListener('click', function paint(clickedPixel) {
    const currentColor = document.querySelector('.selected');
    const currentColors = window.getComputedStyle(currentColor).backgroundColor;
    const clickedTarget = clickedPixel.target;
    if (clickedTarget.className === 'pixel') {
      clickedTarget.style.backgroundColor = currentColors;
    }
  });
}

function clean() {
  const resetButton = document.createElement('button');
  main.insertBefore(resetButton, main.childNodes[4]);
  resetButton.id = ('clear-board');
  resetButton.innerText = 'Limpar';
  resetButton.addEventListener('click', function clearGrid() {
    const completeGrid = document.querySelector('#pixel-board').children;
    for (let i = 0; i < completeGrid.length; i += 1) {
      const gridDiv = completeGrid[i];
      for (let index = 0; index < completeGrid.length; index += 1) {
        const divPixel = gridDiv.children;
        divPixel[index].style.backgroundColor = 'white';
      }
    }
  });
}

window.onload = function start() {
  select();
  getColored();
  clean();
  inputButton();
  grid(baseGrid);
  randomColors();
};

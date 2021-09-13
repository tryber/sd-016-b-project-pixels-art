const colorSelected = document.querySelectorAll('#color-palette .color');
const btnClear = document.getElementById('clear-board');
const pixelBoard = document.getElementById('pixel-board');
// Seletores de cor
const fisrtColor = document.getElementById('firstColor');
const secondColor = document.getElementById('secondColor');
const thirdColor = document.getElementById('thirdColor');
const fourtColor = document.getElementById('fourtColor');

function createPixelBoxes(size) {
  for (let index = 0; index < size; index += 1) {
    const box = document.createElement('div');
    box.className = 'pixel';
    pixelBoard.append(box);
  }
}
createPixelBoxes(25);

const pixelBox = document.querySelectorAll('.pixel');
// console.log(pixelBox);

/**
 *Reseta os pixels
 */
function clearAll() {
  // Reseta a cor de fundo de todos os pixels
  for (let index = 0; index < pixelBox.length; index += 1) {
    pixelBox[index].style.backgroundColor = 'white';
  }
  // Reseta a cor selected para black
  for (let index = 0; index < colorSelected.length; index += 1) {
    if (colorSelected[index].style.backgroundColor !== 'black') {
      colorSelected[index].classList.remove('selected');
    } else {
      colorSelected[index].className = 'color selected';
    }
  }
}

let color = 'black';
btnClear.addEventListener('click', clearAll);

/**
 * Função que pinta os pixels
 */
function paintsElement(event) {
  if (event.target.className === 'pixel') {
    const colorToPaint = event.target;
    colorToPaint.style.backgroundColor = color;
  }
}

/**
 * Seta a cor escolhida e controla com a classe selected
 */
function chosenColor(event) {
  color = event.target.style.backgroundColor;
  for (let index = 0; index < colorSelected.length; index += 1) {
    if (color === colorSelected[index].style.backgroundColor) {
      colorSelected[index].className = 'color selected';
    } else {
      colorSelected[index].className = 'color';
    }
  }
}

/**
 *Adiciona eventos a todos os pixels
 */
for (let index = 0; index < pixelBox.length; index += 1) {
  pixelBox[index].addEventListener('click', paintsElement);
}

for (let index = 0; index < colorSelected.length; index += 1) {
  colorSelected[index].addEventListener('click', chosenColor);
  console.log(color);
}

function colorRgb() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgba(${red}, ${green}, ${blue}, 1)`;
}
console.log(colorRgb());

fisrtColor.style.background = 'black';
secondColor.style.backgroundColor = colorRgb();
thirdColor.style.backgroundColor = colorRgb();
fourtColor.style.backgroundColor = colorRgb();

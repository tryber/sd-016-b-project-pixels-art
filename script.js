//  exercicio 5.2 course
const elementPixelBoard = document.createElement('div');
elementPixelBoard.id = 'pixel-board';
document.body.appendChild(elementPixelBoard);

//  exercicio 4.2 / 5.2 course
const line = 5;
const column = 5;
for(let index = 0; index < line; index += 1) {
  for(let index2 = 0; index2 < column; index2 += 1) {
    const elementPixel = document.createElement('div');
    elementPixel.classList.add('pixel');
    elementPixelBoard.appendChild(elementPixel);
  }
}

//  exercicio 5.3 course
const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const fourthLi = document.getElementById('fourth-li');

function changindProp(event) {
  const elementSelected = document.querySelector('.selected');
  elementSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

firstLi.addEventListener('click', changindProp);
secondLi.addEventListener('click', changindProp);
thirdLi.addEventListener('click', changindProp);
fourthLi.addEventListener('click', changindProp);

function selectingColor() {
  const color = document.getElementById('pixel-board');
  color.addEventListener('click', function(pickedPixel) {
    const curColor = document.querySelector('.selected');
    const currentColor = window.getComputedStyle(curColor).backgroundColor;
    const pixelTarget = pickedPixel.target;
    if (pixelTarget.className === 'pixel') {
      pixelTarget.style.backgroundColor = currentColor;
    }
  });
}

function clearBoard() {
  const allPixels = document.querySelectorAll('.pixel');
  const button = document.getElementById('clear-board');
  button.addEventListener('click', function a() {
    allPixels.forEach ( function b(pixel) {
      const pixelColor = pixel.style;
      pixelColor.backgroundColor = 'white';
    });
  });
}

// requisito 9 feito
window.onload = function start() {
  selectingColor();
  clearBoard();
};

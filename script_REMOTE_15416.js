const firstColor = document.querySelector('#black');
firstColor.classList.add('selected');

const colors = document.querySelectorAll('.color');

for (let i = 0; i < colors.length; i++) {
  colors[i].addEventListener('click', checkColor);
}

function checkColor(color) {
  for (let i = 0; i < colors.length; i++) {
    colors[i].classList.remove('selected');
  }
  color.target.classList.add('selected');
}

const pixels = document.querySelectorAll('.pixel');

for (let i = 0; i < pixels.length; i++) {
  pixels[i].addEventListener('click', toColor);
}

function toColor(elem) {
  for (let i = 0; i < colors.length; i++) {
    let cor = document.querySelector('.selected');
    bgColor = window.getComputedStyle(cor, null).getPropertyValue("background-color");
  }
    elem.target.style.backgroundColor = bgColor;
}

const btnClear = document.querySelector('#clear-board');
btnClear.addEventListener('click', resetPixels );

let resetPixel = document.querySelectorAll('.pixel');

function resetPixels() {
  for (let i = 0; i < resetPixel.length; i++) {
    resetPixel[i].style.backgroundColor = 'white';
  }
}
const setColorsToDivs = document.getElementsByClassName('color');
const black = setColorsToDivs[0];
black.style.backgroundColor = 'black';
const red = setColorsToDivs[1];
red.style.backgroundColor = 'red';
const blue = setColorsToDivs[2];
blue.style.backgroundColor = 'blue';
const green = setColorsToDivs[3];
green.style.backgroundColor = 'green';

for (let index = 0; index < 25; index += 1) {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  document.querySelector('#pixel-board').appendChild(pixel);
}

black.classList.add('selected');
let selected = black;

for (let index = 0; index < setColorsToDivs.length; index += 1) {
  setColorsToDivs[index].addEventListener('click', function (event) {
    selected.classList.remove('selected');
    event.target.classList.add('selected');
    selected = event.target;
  });
}

const pixelClass = document.getElementsByClassName('pixel');
for (let index = 0; index < pixelClass.length; index += 1) {
  pixelClass[index].addEventListener('click', function (event) {
    const targetPixel = event.target;
    targetPixel.style.backgroundColor = selected.style.backgroundColor;
  });
}

const clearBoardId = document.getElementById('clear-board');
clearBoardId.addEventListener('click', function () {
  for(let index = 0; index < pixelClass.length; index += 1) {
    const targetPixel = pixelClass[index];
    targetPixel.style.backgroundColor = 'white';
  }
});
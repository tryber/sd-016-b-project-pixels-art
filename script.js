window.onload = function () {
  const firstColor = document.querySelector('#black');
  firstColor.classList.add('selected');
};

const black = document.getElementById('black');
const red = document.getElementById('green');
const blue = document.getElementById('blue');
const green = document.getElementById('red');

function changeClass(event) {
  const getClass = document.querySelector('.selected');
  getClass.classList.remove('selected');
  event.target.classList.add('selected');
}

black.addEventListener('click', changeClass);
red.addEventListener('click', changeClass);
blue.addEventListener('click', changeClass);
green.addEventListener('click', changeClass);

function changeColor(event) {
  const color = document.querySelector('.selected').getAttribute('id');
  const pixel = event.target;
  pixel.classList.remove(...pixel.classList);
  pixel.classList.add('pixel');
  pixel.classList.add(color);
}

const pixels = document.getElementsByClassName('pixel');
for (const pixel of pixels) {
  pixel.addEventListener('click', changeColor);
}

const button = document.querySelector('#clear-board');
button.addEventListener('click', function (event) {
  const pixelsX = document.getElementsByClassName('pixel');
  for (const pixel of pixelsX) {
    pixel.classList.remove(...pixel.classList);
    pixel.classList.add('pixel');
  }
});

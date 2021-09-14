const color = document.querySelectorAll('.color');
const pixel = document.querySelectorAll('.pixel');
const clearBoard = document.querySelector('#clear-board');

function selectedColor(event) {
  for (let i = 0; i < color.length; i += 1) {
    color[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}
  
  for (let i = 0; i < color.length; i += 1) {
  color[i].addEventListener('click', selectedColor);
}

function paint(event) {
  const coloredpixel = event.target;
  const selected = document.querySelector('.selected');
  const compStyle = window.getComputedStyle(selected);
  coloredpixel.style.backgroundColor = compStyle.backgroundColor;
}

  for (let i = 0; i < pixel.length; i += 1) {
  pixel[i].addEventListener('click', paint);
}

function clear() {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}

clearBoard.addEventListener('click', clear);

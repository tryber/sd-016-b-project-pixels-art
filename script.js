function addClassSelected(event) {
  const classSelected = document.querySelector('.selected');
  const eventTarget = event.target;
  if (eventTarget.classList.contains('selected') === false
  && eventTarget.classList.contains('color') === true) {
    classSelected.classList.remove('selected');
    event.target.classList.add('selected');
  }
}

function changeColor(event) {
  const eventTarget = event.target;
  const colorSelected = document.querySelector('.selected');
  const bgColor = window.getComputedStyle(colorSelected, null).getPropertyValue('background-color');
  eventTarget.style.backgroundColor = bgColor;
}
function cleanPixels() {
  const pixels = document.getElementsByClassName('pixel');
  const pixelBoard = document.getElementById('pixel-board');
  pixelBoard.style.backgroundColor = 'white';
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}
window.onload = function page() {
  const pixelColor = document.querySelector('#pixel-board');
  pixelColor.addEventListener('click', changeColor);
  const colorSelect = document.querySelector('#color-palette');
  colorSelect.addEventListener('click', addClassSelected);
  const clearBtn = document.querySelector('#clear-board');
  clearBtn.addEventListener('click', cleanPixels);
};

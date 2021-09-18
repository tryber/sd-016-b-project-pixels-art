// Requisito 7

const clearButton = document.getElementById('clear-board');
const colors = document.querySelectorAll('.color');
 
function changeSelectedColor (event) {
  const selected = document.querySelector('.selected');
    if (selected != null) {
      selected.classList.remove('selected');
      event.target.classList.add('selected');
    }
    event.target.classList.add('selected');
  } 
function selectColor () {
  for (let index = 0; index < colors.length; index += 1){
  colors[index].addEventListener('click', changeSelectedColor); 
 }
}

// Requisito 8 
const pixels = document.querySelectorAll('.pixel');

function paintPixel (event) {
  const selectedColor = document.querySelector('.selected');
  const colorToApply = window.getComputedStyle(selectedColor).getPropertyValue('background-color')
  event.target.style.backgroundColor = colorToApply
}

// pixels.addEventListener('click', paintPixel); 

function pixelsToPaint () {
  for (let index = 0; index < pixels.length; index += 1){
  pixels[index].addEventListener('click', paintPixel); 
 }
}

pixelsToPaint(colors)

// Requisito 9
function clearBoard () {
  const pixelToClear = document.querySelectorAll('.pixel') 
  for (let index = 0; index < pixelToClear.length; index += 1) {
  pixelToClear[index].style.backgroundColor = 'white';
 }
}

clearButton.addEventListener('click', clearBoard);
selectColor(colors);

const colorsDiv = document.querySelector('#color-palette');
const colorsChildren = colorsDiv.children;
const pixelsDiv = document.querySelector('#pixel-board');
const pixelsChildren = pixelsDiv.children;
const clearButton = document.getElementById('clear-board');
const vqvButton = document.getElementById('generate-board');
const boardSize = document.getElementById('board-size');
let theRealPixelNumber = 0;
let color = 'black';
let colors = ['black'];

function createColors() {
  const numberOfColors = 4;  
  let div;
  const letters = '0123456789ABCDEF';
  let newColor = '#'; 
  for (let index2 = 0; index2 < numberOfColors; index2 += 1) {
    for (let index1 = 0; index1 < 6; index1 += 1) {
      newColor += letters[Math.floor(Math.random() * 16)];
    }    
    colors.push(newColor);
    newColor ='#';
  }

  for (let index = 0; index < numberOfColors; index += 1) {    
    div = document.createElement('div');
    div.classList.add('color');
    colorsDiv.appendChild(div);
    colorsDiv.children[index].style.backgroundColor = (colors[index]);
  }
  colorsChildren[0].classList.add('selected');
}

function selectColor(event) {
  for (let index = 0; index < colorsChildren.length; index += 1) {
    colorsChildren[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
  color = event.target.style.backgroundColor;
}

function listenerColor() {
  for (let index = 0; index < colorsChildren.length; index += 1) {
    colorsChildren[index].addEventListener('click', selectColor);
  }
}

function createPixel(number) {
  let pixelNumber = 5;
  let div;
  let count = 0;
  let countId = 0;
  if (number > 4) { pixelNumber = number; }
  for (let index1 = 0; index1 < pixelNumber; index1 += 1) {
    div = document.createElement('div');
    div.classList.add('pixels-lines');
    pixelsDiv.appendChild(div);
    for (let index = 0; index < pixelNumber; index += 1) {
      div = document.createElement('div');
      div.classList.add('pixel');
      pixelsChildren[index1].appendChild(div);
      const pix = document.querySelectorAll('.pixel');
      pix[count].style.backgroundColor = 'white';
      pix[count].id = countId + 1;
      count += 1; countId += 1;
    }
  }
}

function clearBoard() {
  for (let index = 0; index < pixelsChildren.length; index += 1) {
    for (let index1 = 0; index1 < pixelsChildren.length; index1 += 1) {
      pixelsChildren[index].children[index1].style.backgroundColor = 'white';
    }
  }
}

clearButton.addEventListener('click', clearBoard);
function paintPixel() {
  const totalPixel = pixelsChildren.length * pixelsChildren.length;
  let countId = 1;
  for (let index = 0; index < totalPixel; index += 1) {
    const ids = document.getElementById(countId);
    ids.addEventListener('click', function setColor() {
      ids.style.backgroundColor = color;
    });
    countId += 1;
  }
}

vqvButton.addEventListener('click', () => {
  if (boardSize.value === '') {
    alert('Board inválido!');
  }
  theRealPixelNumber = boardSize.value;
  if (boardSize.value > 50) {
    theRealPixelNumber = 50;
  }  
  if (theRealPixelNumber > 4 && theRealPixelNumber < 51) {
    for (let index = 0; index < pixelsChildren.length; index += 1) {
      pixelsChildren[index].remove();
      index -= 1;
    }
    createPixel(theRealPixelNumber);
    listenerColor();
    paintPixel();
  }
});

window.onload = function start() {
  createColors();
  createPixel();
  listenerColor();
  paintPixel();
};

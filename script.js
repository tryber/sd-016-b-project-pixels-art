let newDiv;
const pixelBoard = document.querySelector('#pixel-board');
const colorPalette = document.querySelector('#color-palette');

function createDiv(divSize, marginSize) {
  newDiv = document.createElement('div');
  newDiv.style.border = '1px solid black';
  newDiv.style.display = 'inline-block';
  newDiv.style.margin = marginSize;
  newDiv.style.height = divSize;
  newDiv.style.width = divSize;
  return newDiv;
}

function createPaletteColor(n) {
  for (let i = 0; i < n; i += 1) {
    createDiv('20px', '0 5px');
    newDiv.setAttribute('class', 'color');
    colorPalette.appendChild(newDiv);
  }
  let colors = ['rgb(0, 0, 0)', 'rgb(140, 140, 140)', 'rgb(217, 217, 217)', 'rgb(242, 242, 242)'];
  const colorOfPalette = document.querySelectorAll('.color');
  for (let i2 = 0; i2 < colors.length; i2 += 1) {
    colorOfPalette[i2].style.backgroundColor = colors[i2];
  }
  return colorPalette;
}

function createPixelBoard(pixels) {
  
  for (let i = 0; i < pixels; i += 1) {
    for (let i2 = 0; i2 < pixels; i2 += 1) {
      createDiv('40px', '0');
      newDiv.setAttribute('class', 'pixel');
      newDiv.style.backgroundColor = 'white';
      pixelBoard.appendChild(newDiv);
    }
  }
  return pixelBoard;
}


window.onload = function () {
  createPaletteColor(4);
  createPixelBoard(5);
}
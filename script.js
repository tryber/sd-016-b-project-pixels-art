window.onload = function () {

  createPaletteColor(4);
  createPixelBoard(5);

}

let newDiv;
let colorInLine;
let colors;
let pixelBoard;
let pixelInLine;

function createDiv(divHeight, divWidth, marginSize, borderStyle, displayType) {
  newDiv = document.createElement('div');
  newDiv.style.border = borderStyle;
  newDiv.style.display = displayType;
  newDiv.style.margin = marginSize;
  newDiv.style.height = divHeight;
  newDiv.style.width = divWidth;
  return newDiv;
}

function createPaletteColor(n) {
  for (let i = 0; i < n; i += 1) {
    createDiv('20px', '20px', '0 5px', '1px solid black', 'inline-block');
    newDiv.setAttribute('class', 'color');
    let colorPalette = document.getElementById('color-palette');
    colorPalette.style.height = '22px';
    colorPalette.appendChild(newDiv);
    colorInLine += newDiv;
  }
  colors = ['rgb(0, 0, 0)', 'rgb(140, 140, 140)', 'rgb(217, 217, 217)', 'rgb(242, 242, 242)'];
  let colorOfPalette = document.getElementsByClassName('color');
  for (let i2 = 0; i2 < colors.length; i2 += 1) {
    colorOfPalette[i2].style.backgroundColor = colors[i2];
  }
  return colorInLine;
}

function createPixelBoard(pixels) {
  for (let i = 0; i < pixels; i += 1) {
    createDiv('42px', 'fit-content', '0', 'none', 'block');
    newDiv.setAttribute('class', 'pixels-container');
    document.getElementById('pixel-board').appendChild(newDiv);
    pixelBoard += newDiv;
  }
  for (let i2 = 0; i2 < pixels; i2 += 1) {
    for (let i3 = 0; i3 < pixels; i3 += 1) {
      createDiv('40px', '40px', '0', '1px solid black', 'inline-block');
      newDiv.setAttribute('class', 'pixel');
      document.getElementsByClassName('pixels-container')[i2].appendChild(newDiv);
      pixelInLine += newDiv;
    }
    pixelInLine += pixelInLine;
  }
  return pixelBoard;
}

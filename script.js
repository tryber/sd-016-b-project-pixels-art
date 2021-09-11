window.onload = function () {

  let newDiv;
  let colorInLine;
  let colors;

  createPaletteColor(4);

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
}

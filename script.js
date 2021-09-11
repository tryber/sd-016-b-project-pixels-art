window.onload = function () {

  let newDiv;
  let divInLine;

  createPaletteColor(4);

  function createDiv(pixelSize, marginSize) {
    newDiv = document.createElement('div');
    newDiv.style.border = '1px solid black';
    newDiv.style.display = 'inline-block';
    newDiv.style.margin = marginSize;
    newDiv.style.height = pixelSize;
    newDiv.style.width = pixelSize;
    return newDiv;
  }

  function createPaletteColor(n) {
    for (let i = 0; i < n; i += 1) {
      createDiv('20px', '5px');
      newDiv.setAttribute('class', 'color');
      document.getElementById('color-palette').appendChild(newDiv);
      divInLine += newDiv;
    }
    let colorOfPallete = document.getElementsByClassName('color');
    colorOfPallete[0].style.backgroundColor = 'rgb(0, 0, 0)';
    colorOfPallete[1].style.backgroundColor = 'rgb(140, 140, 140)';
    colorOfPallete[2].style.backgroundColor = 'rgb(217, 217, 217)';
    colorOfPallete[3].style.backgroundColor = 'rgb(242, 242, 242)';
    return divInLine;
  }
}

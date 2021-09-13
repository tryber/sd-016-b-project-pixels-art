function colorsPallete(colorsHexa) {
  const containerPallete = document.getElementById('color-palette');
  for (let i = 0; i < 4; i += 1) {
    const colorDiv = document.createElement('div');
    colorDiv.classList.add('color');
    colorDiv.style.backgroundColor = colorsHexa[i];
    containerPallete.appendChild(colorDiv);
  }
  return containerPallete;
}
colorsPallete(['#000000', '#D9D9D9', '#F2B138', '#003F63']);

function createPixel() {
  const boardPixel = document.getElementById('pixel-board');
  for (let i = 0; i < 25; i += 1) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    boardPixel.appendChild(pixel);
  }
  return boardPixel;
}
createPixel();

function removeClass(listDivs) {
  for (let i = 0; i < listDivs.length; i += 1) {
    listDivs[i].classList.remove('selected');
  }
  return listDivs;
}

function captureBgColor() {
  const colorSelected = document.querySelector('.selected');
  const pixelBgColor = window.getComputedStyle(colorSelected)
    .getPropertyValue('background-color');
  return pixelBgColor;
}

function paintPixels() {
  const pixels = document.querySelectorAll('.pixel');
  pixels.forEach((item) => {
    item.addEventListener('click', () => {
      const elementDiv = item;
      const bgColor = captureBgColor();
      elementDiv.style.backgroundColor = bgColor;
    });
  });
}

function cleanBoard() {
  const btnClean = document.getElementById('clear-board');
  btnClean.addEventListener('click', () => {
    const elements = document.querySelectorAll('.pixel');
    for (let i = 0; i < elements.length; i += 1) {
      elements[i].style.backgroundColor = '#fff';
    }
  });
}

function selectBrush() {
  const divsBrushs = document.querySelectorAll('.color');
  divsBrushs[0].classList.add('selected');
  paintPixels();
  cleanBoard();

  divsBrushs.forEach((item) => {
    item.addEventListener('click', (event) => {
      removeClass(divsBrushs);
      event.target.classList.add('selected');
      paintPixels();
    });
  });
}
selectBrush();

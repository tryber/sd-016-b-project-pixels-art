function generatePixel() {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';

  return pixel;
}

function generateRow(dimension) {
  const row = document.createElement('div');
  row.className = 'pixel-board-row';

  for (let counter = 0; counter < dimension; counter += 1) {
    row.appendChild(generatePixel());
  }
  return row;
}

function generatePixelBoard(dimension) {
  const pixelBoardContainer = document.querySelector('#pixel-board');

  for (let counter = 0; counter < dimension; counter += 1) {
    pixelBoardContainer.appendChild(generateRow(dimension));
  }
}

generatePixelBoard(5);

window.onload = function selectColor () {
    let firstload = true;
    if(firstload) {
      let colorSelect = document.querySelector('.color');
      colorSelect.classList.add('selected');
    }else {

    }
  }

  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('color')) {
      const selectedColor = document.querySelector('.selected');
      selectedColor.classList.remove('selected');
  
      event.target.classList.add('selected');
    }
  }, false);

  document.addEventListener('click', (event) => {
    const element = document.querySelector('.selected');
    const color = element.getAttribute('id');
    if (event.target.classList.contains('pixel')) {
    event.target.setAttribute('id', color);
    }
  })
    let clear = document.querySelector('#clear-board');
    clear.addEventListener('click', (event) => {
      let pixels = document.querySelectorAll('.pixel');
      for (pixel of pixels) {
        pixel.removeAttribute('id')
      }
    })
window.onload =  () => {
  divLines();
  divPixels();
  initialColor();
};

// Requisito 4-5
  function newDiv(name) {
    const newDivElement = document.createElement('div');
    newDivElement.className = name;
    return newDivElement;
  }

  function divLines() {
    const board = document.querySelector('#pixel-board');
    for (let index = 0; index < 5; index += 1) {
      board.appendChild(newDiv('line'));
    }
  }

  function divPixels() {
    const lines = document.querySelectorAll('.line');
    for (const line of lines) {
      for (let index = 0; index < 5; index += 1) {
        line.appendChild(newDiv('pixel'));
      }
    }
  }
// Requisito 6
  function initialColor() {
    const black = document.querySelector('#black');
    black.classList.add('selected');
    return black;
  }
  // Requisito 7

  // fonte de pesquisa :
  // event bubbling - https://stackoverflow.com/questions/4616694/what-is-event-bubbling-and-capturing para criação da função.

  // document.addEventListener('click', function (event) {
  //   if (event.target.classList.contains('color')) {
  //     const selectedColor = document.querySelector('.selected');
  //     selectedColor.classList.remove('selected');
  //     event.target.classList.add('selected');
  //   }
  // }, false);

  // Ambos deram certo para selecionar, porém a primeira forma estava dando erro nos demais requisitos.
function selectedPaint() {
  const colorSelected = document.querySelector('#color-palette');
  colorSelected.addEventListener('click', (event) => {
    const selected = document.querySelector('.selected');

    if (event.target.id !== 'color-palette') {
      selected.classList.remove('selected'); 
      event.target.classList.add('selected');
    }
  });
}

selectedPaint();

 // Requisito 8
 const board = document.getElementById('pixel-board');
 board.addEventListener('click', (event) => {
  if (event.target.className === 'pixel') {
    const currentColor = document.querySelector('.selected').id;
    const changeColorPixel = event.target;
    changeColorPixel.style.backgroundColor = currentColor;
  }
});
 
 
window.onload = function beginning() {
  document.getElementsByClassName('color')[0].classList.add('selected');

  // criando quadro de pixels 5x5
  const linesBoard = document.getElementsByClassName('pixel-row');
  for (let i = 0; i < linesBoard.length; i++) {
    for (let index = 0; index < 5; index++) {
      createPixelColumn(linesBoard[i]);
    }
  }

  function createPixelColumn(parent) {
    const column = document.createElement('div');
    column.classList.add('pixel');
    parent.appendChild(column);
  }

  // criando função que limpa os pixels
  document.querySelector('#clear-board').addEventListener('click', cleanAll);

  function cleanAll(event) {
    for (let i = 0; i < pixelsList.length; i++) {
      pixelsList[i].style.backgroundColor = 'white';
    }
  }

  // criando função para escolher o tamanho do quadro de pixels

  const board = document.getElementById('pixel-board');
  const row = document.getElementsByClassName('pixel-row');
  const pb = document.getElementById('pixel-board');

  document.getElementById('generate-board').addEventListener('click', createBoard);

  function createBoard() {
    const size = document.getElementById('board-size').value;

    if (size === '') {
      alert('Board inválido!');
    } else if (size < 5) {
      pb.innerHTML = '';
      createPixelRow(5);
      createPixelCol();
    } else if (size > 50) {
      pb.innerHTML = '';
      createPixelRow(50);
      createPixelCol();
    } else {
      pb.innerHTML = '';
      createPixelRow(size);
      createPixelCol();
    }
  }

  // funções que criam o quadro de acordo com o size recebido

  function createPixelRow(size) {
    for (let i = 0; i < size; i++) {
		 const line = document.createElement('div');
		 line.classList.add('pixel-row');
		 board.appendChild(line);
    }
  }

  function createPixelCol() {
    for (let index = 0; index < row.length; index++) {
      for (let i = 0; i < row.length; i++) {
        const col = document.createElement('div');
        col.classList.add('pixel');
        row[index].appendChild(col);
      }
    }
    document.getElementById('board-size').value = '';
  }

  // criando funcão que seleciona as cores da paleta
  const colorList = document.getElementsByClassName('color');
  for (let i = 0; i < colorList.length; i++) {
    colorList[i].addEventListener('click', changeColorSelected);
  }
  function changeColorSelected(event) {
    const lastColor = document.querySelector('.selected');
    lastColor.classList.remove('selected');
    event.target.classList.add('selected');
  }

 	// criando função que colore os pixels
  let pixelsList = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixelsList.length; i++) {
	  pixelsList[i].addEventListener('click', changeColor);
  }

  function changeColor(event) {
    if (event.target.classList.contains('pixel')) {
		  const currentSelected = document.querySelector('.selected');
		  const color = window.getComputedStyle(currentSelected).getPropertyValue('background-color');
		  event.target.style.backgroundColor = color;
    }
  }
  document.addEventListener('click', changeColor, false);

  // variando as cores

  const colorsForChange = document.getElementsByClassName('color');

  for (let i = 1; i < colorsForChange.length; i++) {
    colorsForChange[i].style.backgroundColor = randomColor();
  }

  function randomColor() {
    const rgb1 = Math.round(Math.random() * 255);
    const rgb2 = Math.round(Math.random() * 255);
    const rgb3 = Math.round(Math.random() * 255);

    return `rgb(${rgb1},${rgb2},${rgb3})`;
  }
}

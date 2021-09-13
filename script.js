// Funcao para criar elementos fora do dom, recebe como parametros respectivamente o tipo do elemento, o texto, as classes, e o id, se passar '' como parametro ele nao adiciona o parametro em questao.
function newChild(type, text, classs, id) {
  const newChildItem = document.createElement(type);
  newChildItem.innerText = text;
  if (classs !== '') {
    newChildItem.className = classs;
  }
  if (id !== '') {
    newChildItem.id = id;
  }
  return newChildItem;
}

// gera uma cor aleatoria
function generateRandomColor() {
  const colorArray = [];
  for (let index = 0; index < 3; index += 1) {
    colorArray.push([Math.floor(Math.random() * 255 + 1)]);
  }
  return colorArray;
}

// funcao para criar linhas onde serao colocados os pixels
function createLines(lines) {
  const board = document.querySelector('#pixel-board');
  for (let index = 0; index < lines; index += 1) {
    board.append(newChild('div', '', 'line', ''));
  }
}

// funcao para colocar pixels a serem pintados nas linhas
function createPixels(coluns) {
  const lines = document.querySelectorAll('.line');
  for (let indexLines = 0; indexLines < lines.length; indexLines += 1) {
    for (let index = 0; index < coluns; index += 1) {
      const newElement = newChild('div', '', 'pixel', '');
      newElement.style.backgroundColor = 'white';
      lines[indexLines].append(newElement);
    }
  }
}

// funcao para mudar a classe do elemento da palheta que voce clicar para ter selected, e remove do antigo que a possuia
function changeSelectedPosition(event) {
  if (event.target.classList.contains('color')) {
    const selectedColor = document.querySelector('.selected');
    selectedColor.classList.remove('selected');
    event.target.classList.add('selected');
  }
}

// funcao para pintar os pixels com a cor do elemento da palheta de cores que possui a classe selected
function paintPixels(event) {
  const pixel = event.target;
  if (pixel.classList.contains('pixel')) {
    const selectedColor = document.querySelector('.selected').style.backgroundColor;
    pixel.style.backgroundColor = selectedColor;
  }
}

// Remove todos os pixels previamente existentes
function clearBoard() {
  const divBoard = document.querySelector('#pixel-board');
  while (divBoard.firstChild) {
    divBoard.removeChild(divBoard.firstChild);
  }
}

// configura o tamanho dos pixels
function setSizePixels(boardSize) {
  const sizePixel = Math.floor(200 / boardSize);
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.width = `${sizePixel}px`;
    pixels[index].style.height = `${sizePixel}px`;
  }
}

/* Metodo event bubbling adquirido atraves deste link https://gomakethings.com/attaching-multiple-elements-to-a-single-event-listener-in-vanilla-js/ */
// evento que acontece quando clickamos em qualquer lugar da pagina
document.addEventListener('click', (event) => {
  changeSelectedPosition(event);
  paintPixels(event);
}, false);

// evento para setar o tabuleiro de acordo com o tamanho desejado
document.querySelector('#generate-board').addEventListener('click', () => {
  let bSize = document.querySelector('#board-size').value;
  if (bSize === '') {
    window.alert('Board inválido!');
  } else {
    bSize = (bSize < 5) * 5 + (bSize > 50) * 50 + bSize * ((bSize >= 5) && (bSize <= 50));
    clearBoard();
    createLines(bSize);
    createPixels(bSize);
    setSizePixels(bSize);
  }
});

// evento que acontece quando a pagina termina de carregar
window.onload = () => {
  createLines(5);
  createPixels(5);
  const palleteDivs = document.querySelectorAll('.color');
  palleteDivs[0].style.backgroundColor = 'black';
  for (let index = 1; index < palleteDivs.length; index += 1) {
    const color = generateRandomColor();
    palleteDivs[index].style.backgroundColor = `rgb(${color[0]},${color[1]},${color[2]})`;
  }
};

// evento que acontece quando clicamos no botao limpar
document.querySelector('#clear-board').addEventListener('click', () => {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
});

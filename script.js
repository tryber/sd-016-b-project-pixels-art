// const btnAndInput = document.querySelector('.main-content');
const btnAndInput = document.querySelector('.btnAndInput');
const divColorClass = document.getElementsByClassName('color');
const pixelBox = document.getElementsByClassName('pixel');
const getColor = document.querySelectorAll('.color');
const sectionPixel = document.getElementById('pixel-board');
let colorTabela = 'black';

// Cria o pixel padrão

function defaultSquare(boardStyle) {
  const square = boardStyle;
  square.style.border = '1px solid black';
  square.style.width = '40px';
  square.style.height = '40px';
  square.style.margin = '1px';
  square.style.padding = '15px';
  square.style.display = 'inline-block';
  square.style.backgroundColor = 'white';

  return boardStyle;
}

// Cria uma div genérica com Classe

function createDiv(nameClass) {
  const genericDiv = document.createElement('div');
  genericDiv.className = nameClass;

  return genericDiv;
}

// Cria uma seção genérica com ID

function createSectionClass(nameClass) {
  const genericSection = document.createElement('section');
  genericSection.className = nameClass;

  return genericSection;
}

// Cria a paleta de cores

// Cria a cor aleatória

function aleatoryColors() {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return randomColor;
  // Fonte para o código que gera cores aleatórias https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj
}

const colorPack = document.querySelectorAll('.color');

// Seleciona a cor da tabela e chama a criação da cor aleatória

function setColorPalette() {
  colorPack[0].style.backgroundColor = 'black';
  for (let index = 1; index < colorPack.length; index += 1) {
    colorPack[index].style.backgroundColor = aleatoryColors();
  }
}

setColorPalette();

// Cria o botão de limpar o quadro

function buttonClear() {
  const createButtonClear = document.createElement('div');
  createButtonClear.id = 'clear-board';
  btnAndInput.appendChild(createButtonClear).innerText = 'Limpar';
}

buttonClear();

// Cria o espaço para recuperar o tamanho que o usuário colocará

function boardInput() {
  const newBoardInput = document.createElement('input');
  newBoardInput.id = 'board-size';
  newBoardInput.min = 1;
  newBoardInput.max = 50;
  newBoardInput.placeholder = 'Insira aqui um valor entre 5 e 50';
  newBoardInput.type = 'number';

  btnAndInput.appendChild(newBoardInput);

  return newBoardInput.value;
}

boardInput();

// Cria botão para recuperar os dados do input

function valueBoardBtn() {
  const generateBoard = document.createElement('div');
  generateBoard.id = 'generate-board';
  btnAndInput.appendChild(generateBoard).innerText = 'VQV';
}

valueBoardBtn();

let newUserCount = document.querySelector('#board-size').value;
newUserCount = 5;
const valueBtnBoard = document.querySelector('#generate-board');

// Seleciona a cor correta para a pintura do pixel

function inputColor(e) {
  e.style.backgroundColor = colorTabela;
}

// Monta o quadro, criando as seções inicialmente e depois criando as divs e colocando dentro das seções

function mountBoard(numberBoard) {
  for (let index = 0; index < numberBoard; index += 1) {
    const sectionBoardPixel = createSectionClass('line');
    sectionPixel.appendChild(sectionBoardPixel);

    for (let indexY = 0; indexY < numberBoard; indexY += 1) {
      const divPixel = createDiv('pixel');
      // const divFather = document.querySelectorAll('.line');
      defaultSquare(divPixel);
      sectionBoardPixel.appendChild(divPixel);
    }
  }

  // for (let indexX = 0; indexX < numberBoard; indexX += 1) {

  // }
}

// exclui o quadro

function unMountBoard() {
  const board = document.querySelectorAll('.line');
  for (let index = 0; index < board.length; index += 1) {
    sectionPixel.removeChild(board[index]);
  }
}

// Insere evento a cada pixel e pinta cada um deles

function insertEventSquare() {
  for (let index = 0; index < pixelBox.length; index += 1) {
    pixelBox[index].addEventListener('click', () => {
      console.log(`pixelBox ${index}`);
      inputColor(pixelBox[index]);
    });
  }
}

// testa valores < > e vazio, exclui tabela antiga,
// monta a nova com o novo número do input e insere novamente o evento nos pixels

function eventNewBoard() {
  unMountBoard();
  mountBoard(newUserCount);
  insertEventSquare();
}

valueBtnBoard.addEventListener('click', () => {
  console.log('teste click newUserCount');
  newUserCount = document.querySelector('#board-size').value;

  if (newUserCount === '' || newUserCount === 0) {
    alert('Board inválido!');
  } else if (newUserCount < 5) {
    // alert('Valor é menor que 5');
    newUserCount = 5;
    eventNewBoard();
  } else if (newUserCount > 50) {
    // alert('Valor é maior que 50');
    newUserCount = 50;
    eventNewBoard();
  } else {
    newUserCount = parseInt(newUserCount, 10);
    eventNewBoard();
  }
});

mountBoard(newUserCount);

// altera as classes das cores, e insere o 'selected' na cor selecionada

function changeClass(cor) {
  let newString = '';
  for (let index = 0; index < divColorClass.length; index += 1) {
    if (divColorClass[index].className.includes('selected')) {
      newString = divColorClass[index].className.replace('selected', '');
      divColorClass[index].className = newString;
    } if (divColorClass[index].className.includes(cor)) {
      divColorClass[index].className = `color ${cor} selected`;
    }
  }
}
// busca as cores selecionadas

function getColorPalette(a) {
  if (a.target.className.includes('color1')) {
    colorTabela = colorPack[0].style.backgroundColor;
    changeClass('color1');
  } else if (a.target.className.includes('color2')) {
    colorTabela = colorPack[1].style.backgroundColor;
    changeClass('color2');
  } else if (a.target.className.includes('color3')) {
    colorTabela = colorPack[2].style.backgroundColor;
    changeClass('color3');
  } else if (a.target.className.includes('color4')) {
    colorTabela = colorPack[3].style.backgroundColor;
    changeClass('color4');
  }
  return colorTabela;
}

// Seleciona a cor correta para a pintura

for (let index = 0; index < getColor.length; index += 1) {
  getColor[index].addEventListener('click', (event) => {
    getColorPalette(event);
  });
}

insertEventSquare();

// insere cor branca em todos os pixels inicial

for (let index = 0; index < pixelBox.length; index += 1) {
  pixelBox[index].style.backgroundColor = 'white';
}

// Limpa toda a tabela pintando de branco

const clearScreen = document.getElementById('clear-board');

clearScreen.addEventListener('click', () => {
  for (let index = 0; index < pixelBox.length; index += 1) {
    pixelBox[index].style.backgroundColor = 'white';
  }
});

const headerPalette = document.getElementById('header-pixel-art');
const sectionBoard = document.getElementById('board');
const sectionTool = document.getElementById('tool');
const buttonVQV = document.getElementById('generate-board')
const input = document.getElementById('board-size');

// Função para criar paleta de cores
function createColorPalette() {
  const olColor = document.createElement('ul');
  olColor.id = 'color-palette';
  headerPalette.appendChild(olColor);
  for (let ind = 0; ind <= 3; ind += 1) {
    const palette = document.getElementById('color-palette');
    const liColor = document.createElement('li');
    liColor.classList.add('color');
    liColor.id = `color${ind}`;
    palette.appendChild(liColor);
    document.querySelector('#color0').classList.add('selected');
  }
}
createColorPalette();
// Função para gerar cores rgb
// Consultado site https://www.ti-enxame.com/pt/javascript/gerador-de-cores-aleatorias/967183954/
function createRandonColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return (`rgb(${red}, ${green}, ${blue})`);
}
// Função para adicionar as cores geradas á paleta de cores
function addColor() {
  const children = document.querySelectorAll('.color');
  for (let ind = 0; ind < children.length; ind += 1) {
    let color = createRandonColor();
    children[ind].style.backgroundColor = color;
    children[0].style.backgroundColor = 'rgb(0, 0, 0)';
  }
}
addColor();
// Função para criar o quadro de pixels
function createPixelBoard(sizeBoard) {
  let size = sizeBoard;
  const line = document.createElement('ul');
  line.id = ('pixel-board');
  sectionBoard.appendChild(line);
  if (size < 5){
    size = 5;
  } else if (size > 50){
    size = 50;
  }
  for (ind1 = 0; ind1 < size; ind1 += 1) {
    const colum = document.createElement('li');
    colum.classList.add('pixelColum');
    line.appendChild(colum);
    for (ind2 = 0; ind2 < size; ind2 += 1) {
      const box = document.createElement('div')
      box.classList.add('pixel');
      colum.appendChild(box);
      box.addEventListener('click', trocarCor);
    }
  }
}
createPixelBoard(5);
// Adicionando função ao botão #VQV
buttonVQV.addEventListener('click', function () {
  let inputSize = input.value;
  if (input !== '') {
    document.querySelector('#pixel-board').remove();
    createPixelBoard(inputSize);
  }
});
// Função seleciona a cor para desenhar
function corParaDesenho(event) {
  const corInitial = document.querySelector('.selected');
  corInitial.classList.remove('selected');
  event.target.classList.add('selected');
}
// Adicionando eventos de cores
const color1 = document.getElementById('color0');
color1.addEventListener('click', corParaDesenho);
const color2 = document.getElementById('color1');
color2.addEventListener('click', corParaDesenho);
const color3 = document.getElementById('color2');
color3.addEventListener('click', corParaDesenho);
const color4 = document.getElementById('color3');
color4.addEventListener('click', corParaDesenho);
// Função troca de cor
function trocarCor() {
  const colorPrint = document.getElementById('pixel-board');
  colorPrint.addEventListener('click', function (event) {
    const colorSelect = document.querySelector('.selected');
    const elementPixel = event.target.className;
    if (elementPixel === 'pixel') {
      event.target.style.backgroundColor = colorSelect.style.backgroundColor;
    }
  })
}
trocarCor()
// Função limpar board
function clear() {
  const clearPixel = document.querySelectorAll('.pixel');
  for (let ind = 0; ind < clearPixel.length; ind += 1) {
    clearPixel[ind].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}
// Adicionando função ao botão Limpar
const buttonClear = document.getElementById('clear-board');
buttonClear.addEventListener('click', clear);
// Validando o limite o tamanho mínimo e máximo do board
const validBoarderSize = document.getElementById('board-size');
const validBoarderGenerate = document.getElementById('generate-board')
validBoarderGenerate.addEventListener('click', function () {
  let height = validBoarderSize.value;
  if (height === '') {
    alert('Board inválido!');
  }
});

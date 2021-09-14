let number = 5;

// criar div para armazenar as cores do projeto, com classe "color" e ainda colocar a cor de forma dinâmica.
function createColorsPallete(color) {
  const palleteColor = document.getElementById('color-palette');
  const element = document.createElement('span');
  element.classList = 'color';
  element.style.backgroundColor = color;
  palleteColor.appendChild(element);
}
createColorsPallete('black');
createColorsPallete(geraCor());
createColorsPallete(geraCor());
createColorsPallete(geraCor());

// selecionando a cor preta do span com a classe selected
function colorBlack() {
  const colorFixed = document.getElementsByTagName('span')[0];
  colorFixed.className = 'color selected';
}
colorBlack();

// criar a div com id "container"
function createDivContainer() {
  const elementFather = document.querySelector('main');
  const createDiv = document.createElement('div');
  createDiv.id = 'container';
  elementFather.appendChild(createDiv);
}
createDivContainer();

// criar o Botão Clear
function createButtonClear() {
  const elementFather = document.querySelector('#container');
  const createButton = document.createElement('button');
  createButton.id = 'clear-board';
  createButton.innerText = 'Limpar';
  elementFather.appendChild(createButton);
}
createButtonClear();

// limpar o quadro pixel ao clicar no button
const clearPixels = document.getElementById('clear-board');
function clearBoarder() {
  const clearDivs = document.getElementsByClassName('pixel');
  for (let index = 0; index < clearDivs.length; index += 1) {
    clearDivs[index].style.backgroundColor = 'white';
  }
}
clearPixels.addEventListener('click', clearBoarder);

// criar a input com id "board-size"
function createInputText() {
  const elementFather = document.querySelector('#container');
  const createInput = document.createElement('input');
  createInput.id = 'board-size';
  createInput.placeholder = 'Adicione um número';
  createInput.type = 'number';
  createInput.min = '1';
  elementFather.appendChild(createInput);
}
createInputText();

// criar button com id 'button'
function createButtonVQV() {
  const elementFather = document.querySelector('#container');
  const createButton = document.createElement('button');
  createButton.id = 'generate-board';
  createButton.innerText = 'VQV';
  elementFather.appendChild(createButton);
}
createButtonVQV();

// criar a div com id "pixel-board'
function createDivFathetBoardPixel() {
  const elementFather = document.querySelector('main');
  const createDiv = document.createElement('div');
  createDiv.id = 'pixel-board';
  elementFather.appendChild(createDiv);
}
createDivFathetBoardPixel();

// criar quadro Pixel com 5 elementos de largura e 5 elementos de altura. Fazer a lógica do quadrado de asteriscos.
// Auxílio Airton Lopes para implementar a div line
function createboardPixel(number) {
  const boardPixel = document.querySelector('#pixel-board');
  // for para criar as linhas do Quadro Pixel.
  for (let index = 0; index < number; index += 1) {
    const div = document.createElement('div');
    boardPixel.appendChild(div);
    div.className = 'line';
    // for para criar as divs dentro da anterior.
    for (let index1 = 0; index1 < number; index1 += 1) {
      const divPai = document.querySelectorAll('.line')[index];
      const element = document.createElement('div');
      element.className = 'pixel';
      divPai.appendChild(element);
    }
  }
}
createboardPixel(number);

// remover o selected de onde estava:
// Auxilio do Luis Gustavo no segundo for.
const color = document.querySelectorAll('.color');
function alteraClass(event) {
  for (let index = 0; index < color.length; index += 1) {
    color[index].classList.remove('selected');
  }
  // seleciona o evento para iniciar ao ser clicado. toggle: alterna as classes.
  event.target.classList.toggle('selected');
}

for (let index = 0; index < color.length; index += 1) {
  color[index].addEventListener('click', alteraClass);
}

// selecionar cor e pintar os pixels ao clicar. Ajuda questão 10 do calendário.
// auxilio grupo de estudos.
function paintSelected() {
  const paintColorSelected = document.querySelector('.selected');
  paintColorSelected.addEventListener('click', function (event) {
    event.target.style.backgroundColor;
  });
}
paintSelected();

function printColor() {
  // Auxilio Grupo de estudo sabado noite: Luis Wanderson.
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', function (event) {
      const paintColorSelected = document.querySelector('.selected');
      event.target.style.backgroundColor = paintColorSelected.style.backgroundColor;
    });
  }
}
printColor();

// criar funcao para recuperar o valor do input ao clicar o botao com id generate-board (VQV)
// auxilio do Gabriel Silvestre, Victor Hugor Baum, Airton Lopes.
// pesquisa no site: https://www.w3schools.com/js/tryit.asp?filename=tryjs_form_elements
function valueInput() {
  const valueInput = document.querySelector('#board-size');
  const buttonValue = document.querySelector('#generate-board');
  const pixelBoard = document.querySelector('#pixel-board');
  buttonValue.addEventListener('click', function () {
    const numberInput = valueInput.value;
    number = numberInput;
    if (numberInput === '') {
      alert('Board inválido!');
    } else {
      // utilizando o innerHTML para remover o quadro pixel anterior.
      pixelBoard.innerHTML = '';
      createboardPixel(number);
      printColor();
    }
    if (numberInput < 5) {
      pixelBoard.innerHTML = '';
      createboardPixel(5);
      printColor();
    } else if (numberInput > 50) {
      pixelBoard.innerHTML = '';
      createboardPixel(50);
      printColor();
    }
  });
}
valueInput();

// gerar cor aleatória pesquisa internet
function geraCor(){
  const r = parseInt(Math.random() * 255);
  const g = parseInt(Math.random() * 255);
  const b = parseInt(Math.random() * 255);
  const novaCor = 'rgba(' + r + ',' + g + ','  + b + ')';
  return novaCor;
}
geraCor();
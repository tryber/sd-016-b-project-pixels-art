// Recebendo o elemento div color-palette.
const colorPalette = document.getElementById('color-palette');

// Função que cria cada div Color
function createDIVColor(classePrincipal, classeColor) {
  const elementColor = document.createElement('div');
  elementColor.classList.add(classePrincipal);
  elementColor.classList.add(classeColor);

  colorPalette.appendChild(elementColor);
}

// criando as divs que conterão as cores da paleta.
function addClassColor(cores) {
  // Percorro o array e passo e chamo a função que cria a div passando para ela a classe padrão color e dinamicamente a cor do array
  cores.forEach((key) => {
    createDIVColor('color', key);
  });
}

// Cores que eu vou usar para criar as divs da paleta dinamicamente.
const colors = ['black', 'red', 'yellow', 'pink'];

// Chama a função que adiciona a classe de cor ao criar um elemento da paleta
addClassColor(colors);

// ******************************************************************************************** //
// 4 - Adicione à página um quadro de pixels, com 25 pixels.
// Função que cria a coluna
function createColumn(elementoPai, qtdColunas) {
  let coluna;
  for (let index = 0; index < qtdColunas; index += 1) {
    coluna = document.createElement('div');
    coluna.classList.add('pixel');
    // coluna.classList.add('coluna');
    elementoPai.appendChild(coluna);
  }
}

// Pegando a div pixel-board
const pixelBoard = document.getElementById('pixel-board');
// Função que cria a linha
function createLine(qtdLinhas) {
  for (let index = 0; index < qtdLinhas; index += 1) {
    const linha = document.createElement('div');
    // linha.classList.add('pixel');
    linha.classList.add('linha');
    pixelBoard.appendChild(linha);

    createColumn(linha, 5);
  }
}

createLine(5);

// ******************************************************************************************** //
// 6 - Defina a cor preta como cor inicial. Ao carregar a página, a cor preta já deve estar selecionada para pintar os pixels.
const black = document.getElementsByClassName('color')[0];

// Função que remove a class selected do elemento que está com ela no momento e coloca no elemento passado como parâmetro.
function addRemoveClassSelected(elemento) {
  const classSelected = document.getElementsByClassName('selected');
  if (classSelected.length > 0) {
    classSelected[0].classList.remove('selected');
  }

  elemento.classList.add('selected');
}

// Faço com que só adicione a classe selected ao elementto black como padrão somente quando a página terminar de ser carregada.

// Apagar o código a baixo caso não der problema no avaliador
// window.onload = () => {
//   addRemoveClassSelected(black);
// };
addRemoveClassSelected(black);

// ******************************************************************************************** //
// 7 - Clicar em uma das cores da paleta faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.
// Pego todos os elementos que tem a classe color
const cores = document.getElementsByClassName('color');

// Para cada elemento do array com a classe color eu creio um evento de clique que chama a função addRemoveClassSelected();
for (let cor = 0; cor < cores.length; cor += 1) {
  cores[cor].addEventListener('click', () => {
    addRemoveClassSelected(cores[cor]);
  });
}

// ******************************************************************************************** //
// 8 - Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.
// Recebendo todas as divs com a classe pixel
const pixels = document.getElementsByClassName('pixel');

// Para cada elemento da classe pixel eu adiciono um evento de clique
for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', (elemento) => {
    // Pegando o pixel que foi clicado
    const pixel = elemento;

    // Pegando a cor que está com a classe selected
    const selected = document.getElementsByClassName('selected')[0];

    // O window.getComputedStyle abaixo foi baseado no exemplo que consta no site da w3schools no seguinte link: https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp

    // Pegando a cor do elemento que tem a classe selected.
    const corSelect = window.getComputedStyle(selected, null).getPropertyValue('background-color');
    pixel.target.style.backgroundColor = corSelect;
  });
}

// ******************************************************************************************** //
// 9 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.
// Estou pegando a segunda seção que vai ser o elemento pai.
const quadroPixels = document.getElementsByTagName('section')[1];
const buttonClear = document.createElement('button');
buttonClear.id = 'clear-board';
buttonClear.innerText = 'Limpar';

// Funciona como o appendChild mais consigo passar a posição informando primeiro o elemento que vai ser adicionado e o segundo parâmetro é um elemento filho de referência, ou seja o elemento adicionado vai ser adicionado antes do elemento de referência.
// A função abaixo é baseada na em uma função de exemplo no site da mozilla. Link: https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore
quadroPixels.insertBefore(buttonClear, pixelBoard);

// Função que limpa cada div pixel colocando todas as cores como branco.
function clearPixels() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

buttonClear.addEventListener('click', clearPixels);

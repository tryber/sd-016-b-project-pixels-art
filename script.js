// Cria divs com classe color com cores dinamicas
//  Adicione à página uma paleta contendo quatro cores distintas.
const chamaDivPai = document.getElementById('color-palette');
function colorPalette(cor) {
  const primeiroFilhoDaPaletaRosa = document.createElement('div');
  primeiroFilhoDaPaletaRosa.className = 'color';
  primeiroFilhoDaPaletaRosa.style.backgroundColor = cor;
  chamaDivPai.appendChild(primeiroFilhoDaPaletaRosa);
  if (cor === 'black') {
    primeiroFilhoDaPaletaRosa.classList.add('selected');
  }
}
colorPalette('black');
colorPalette('pink');
colorPalette('purple');
colorPalette('green');

//  Adicione à página um quadro de pixels, com 25 pixels.

function createDivBorderPixel(numero) {
  const divPixel = document.querySelector('#pixel-board');
  // for pra criar as linhas do quadro pixel.
  for (let index = 0; index < numero; index += 1) {
    const divLine = document.createElement('div');
    divPixel.appendChild(divLine);
    divLine.classList.add('line');

    // for pra criar as divs dentro das divline

    for (let segundoIndex = 0; segundoIndex < numero; segundoIndex += 1) {
      const divPaiLine = document.querySelectorAll('.line')[index];
      const divFilho = document.createElement('div');
      divPaiLine.appendChild(divFilho);
      divFilho.classList.add('pixel');
    }
  }
}

createDivBorderPixel(5);

// Clicar em uma das cores da paleta faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.

function adicionaSelected(event) {
  const selecionaCor = document.querySelectorAll('.color')
  for (let i = 0; i < selecionaCor.length; i += 1) {
    // className é uma constante, por isso vai manter color em todas. Pega o array inteiro
    selecionaCor[i].className = 'color';
    //  classList é uma lista de classes, pega o index do array
    event.target.classList.add('selected');
  }
}
chamaDivPai.addEventListener('click', adicionaSelected);

//  Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.
const classePixelBoard = document.querySelector('#pixel-board');
function pintaPixel(event) {
  const selecionarCor = document.querySelector('.selected');
  const cor = selecionarCor.style.backgroundColor;
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    event.target.style.backgroundColor = cor;
  }
}
classePixelBoard.addEventListener('click', pintaPixel);

// fiz o botão pelo html e então inseri o evento por aqui

const button = document.querySelector('#clear-board');
button.innerText = 'Limpar';
button.addEventListener('click', function () {
  const pixelClass = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixelClass.length; i += 1) {
    pixelClass[i].style.backgroundColor = 'white';
  }
});
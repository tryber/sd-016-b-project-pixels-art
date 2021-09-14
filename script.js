// Recebendo o elemento div color-palette.
const colorPalette = document.getElementById('color-palette');

// Função que cria cada div Color
function createDIVColor(classePrincipal, cor) {
  const elementColor = document.createElement('div');
  elementColor.classList.add(classePrincipal);
  elementColor.style.backgroundColor = cor;

  colorPalette.appendChild(elementColor);
}

// criando as divs que conterão as cores da paleta.
function addClassColor(cores) {
  // Percorro o array e passo e chamo a função que cria a div passando para ela a classe padrão color e dinamicamente a cor do array
  cores.forEach((key) => {
    createDIVColor('color', key);
  });
}

Math.floor(Math.random() * 256);
// Cores que eu vou usar para criar as divs da paleta dinamicamente.
const colors = ['black'];

// Gera um rgb de cor aleatório.
for (let index = 1; index < 4; index += 1) {
  let color = 'rgb(';
  for (let indice = 1; indice <= 3; indice += 1) {
    if (indice < 3) {
      color += `${Math.floor(Math.random() * 256)},`;
    } else {
      color += Math.floor(Math.random() * 256);
    }
  }
  color += ')';

  // Adiciona a cor gerada ao array de cores.
  colors.push(color);
}

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
    coluna.style.backgroundColor = 'white';
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

    createColumn(linha, qtdLinhas);
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

// Adiciona a classe selected ao elementto black como padrão.
addRemoveClassSelected(black);

// ******************************************************************************************** //
// 7 - Clicar em uma das cores da paleta faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.
// Pego todos os elementos que tem a classe color
const cores = document.getElementsByClassName('color');

// Para cada elemento do array com a classe color eu crio um evento de clique que chama a função addRemoveClassSelected();
for (let cor = 0; cor < cores.length; cor += 1) {
  cores[cor].addEventListener('click', () => {
    addRemoveClassSelected(cores[cor]);
  });
}

// ******************************************************************************************** //
// 8 - Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.
// Responsável por criar o evento que fica esperando o clique no pixel.
function eventoPrintPixel() {
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
      const corSelec = window.getComputedStyle(selected, null).getPropertyValue('background-color');
      pixel.target.style.backgroundColor = corSelec;
    });
  }
}

eventoPrintPixel();

// ******************************************************************************************** //
// 9 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.
// Estou pegando a segunda seção que vai ser o elemento pai.
const quadroPixels = document.getElementsByTagName('section')[1];

// Função para criar butões pois terei mais de um botão na página.
function createButton(id, texto) {
  const button = document.createElement('button');
  button.id = id;
  button.innerText = texto;

  return button;
}
const buttonClear = createButton('clear-board', 'Limpar');

// Funciona como o appendChild mais consigo passar a posição informando primeiro o elemento que vai ser adicionado e o segundo parâmetro é um elemento filho de referência, ou seja o elemento adicionado vai ser adicionado antes do elemento de referência.
// A função abaixo é baseada na em uma função de exemplo no site da mozilla. Link: https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore
quadroPixels.insertBefore(buttonClear, pixelBoard);

// Função que limpa cada div pixel colocando todas as cores como branco.
function clearPixels() {
  // Recebendo todas as divs com a classe pixel
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

buttonClear.addEventListener('click', clearPixels);

// ******************************************************************************************** //
// 10 - Faça o quadro de pixels ter seu tamanho definido pela pessoa usuária.
// Criando o input
const inputPixels = document.createElement('input');
inputPixels.type = 'number';
inputPixels.min = '1';
inputPixels.id = 'board-size';
inputPixels.placeholder = 'Qtd. de pixels';
// Inserindo o elemento input antes da div de quadro.
quadroPixels.insertBefore(inputPixels, pixelBoard);

// Criando o button
const buttonAddPixels = createButton('generate-board', 'VQV');
// Inserindo buttonAddPixels acima do elemento pixelBoard.
quadroPixels.insertBefore(buttonAddPixels, pixelBoard);

// Limpa o pixelBoard
function ClearQuadroPixel() {
  pixelBoard.innerHTML = '';
}

buttonAddPixels.addEventListener('click', () => {
  if (inputPixels.value === '') {
    alert('Board inválido!');
  } else {
    // Limpando o pixelBoard
    ClearQuadroPixel();

    // Fazendo com que o limite fique no padrão entre 5 e 50.
    if (inputPixels.value < 5) {
      inputPixels.value = 5;
    } else if (inputPixels.value > 50) {
      inputPixels.value = 50;
    }

    createLine(inputPixels.value);
    eventoPrintPixel();
    inputPixels.value = '';
  }
});

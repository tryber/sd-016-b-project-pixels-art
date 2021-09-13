const divPrincipal = document.getElementById('container');
const paleta = document.getElementById('color-palette');
const PIXEL_BOARD = 'pixel-board';

// Cria paleta de cores e seta a cor preta com a classe selected
function coresPaleta(lista, lista2) {
  const listaBackup = lista;
  const listaBackup2 = lista2;
  const tamanhoLista = listaBackup.length;
  for (let i = 0; i < tamanhoLista; i += 1) {
    listaBackup[i].style.backgroundColor = listaBackup2[i];
    if (listaBackup2[i] === 'black') {
      listaBackup[i].className += ' selected';
    }
  }
}

// gera cor aleatoria para a paleta de cores
function geraCorAleatoria() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

// cria paleta de cores com as corres da lista
coresPaleta(paleta.children, ['black', geraCorAleatoria(), geraCorAleatoria(), geraCorAleatoria()]);

const listaCores = document.getElementsByClassName('color');

// seta a cor inicial como preto
let corAtual = 'black';

// reseta a classe da paleta de cores
function resetClass(lista) {
  const listaBackup = lista;
  for (let i = 0; i < listaBackup.length; i += 1) {
    listaBackup[i].className = 'color';
  }
}

// adiciona evento de mudança da cor atual a todos os elementos com a classe color e adiciona a classe selected a cor selecionada
for (let i = 0; i < listaCores.length; i += 1) {
  listaCores[i].addEventListener('click', () => {
    corAtual = listaCores[i].style.backgroundColor;
    resetClass(listaCores);
    listaCores[i].className += ' selected';
  });
}

// criando input do tamanho da gradeFFF
const tamanhoInput = document.createElement('input');
tamanhoInput.setAttribute('id', 'board-size');
tamanhoInput.setAttribute('type', 'number');
tamanhoInput.setAttribute('min', '1');
divPrincipal.appendChild(tamanhoInput);

// criando botao pra setar tamanho da grade
const btnGrade = document.createElement('button');
btnGrade.setAttribute('id', 'generate-board');
btnGrade.innerText = 'VQV';
divPrincipal.appendChild(btnGrade);

// criando botao de limpar
const botaoReset = document.createElement('button');
botaoReset.setAttribute('id', 'clear-board');
botaoReset.innerText = 'Limpar';
divPrincipal.appendChild(botaoReset);

// cria uma tabela inicial com 25 pixels (5x5)
const tabela = document.createElement('table');
tabela.setAttribute('id', PIXEL_BOARD);
divPrincipal.appendChild(tabela);
for (let i = 0; i < 5; i += 1) {
  const row = document.createElement('tr');
  tabela.appendChild(row);
  for (let y = 0; y < 5; y += 1) {
    const celula = document.createElement('td');
    celula.addEventListener('click', () => {
      celula.style.backgroundColor = corAtual;
    });
    celula.setAttribute('class', 'pixel');
    row.appendChild(celula);
  }
}

// cria a tabela
function criaTabela(tamanho) {
  const tabela1 = document.createElement('table');
  tabela1.setAttribute('id', PIXEL_BOARD);
  divPrincipal.appendChild(tabela1);
  for (let i = 0; i < tamanho; i += 1) {
    const row = document.createElement('tr');
    tabela1.appendChild(row);
    for (let y = 0; y < tamanho; y += 1) {
      const celula = document.createElement('td');
      celula.addEventListener('click', () => {
        celula.style.backgroundColor = corAtual;
      });
      celula.setAttribute('class', 'pixel');
      row.appendChild(celula);
    }
  }
}

// cria tabela atraves do botão VQV
btnGrade.addEventListener('click', () => {
  const listBoard = document.getElementById(PIXEL_BOARD);
  let valorGrade = tamanhoInput.value;
  if (valorGrade === '') {
    alert('Board inválido!');
  } else {
    valorGrade = parseInt(tamanhoInput.value);
    if (valorGrade < 5) {
      valorGrade = 5;
    } else if (valorGrade > 50) {
      valorGrade = 50;
    }
    for (let j = 0; j < listBoard.children.length; j += 1) {
      listBoard.remove(listBoard.children[j]);
    }
    criaTabela(valorGrade);
  }
});

// adiciona evento de resetar cor dos pixels ao botao reset
const listaPixel = document.getElementsByClassName('pixel');
const btn = document.getElementById('clear-board');
btn.addEventListener('click', () => {
  for (let i = 0; i < listaPixel.length; i += 1) {
    listaPixel[i].style.backgroundColor = 'white';
  }
});

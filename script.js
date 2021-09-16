const colors = {
  active: 'black',
  previous: ['black', 'red', 'green', 'blue'],
};

const board = {
  size: 5,
  content: [],
};

/* Paleta de coress */
function generatePalette() {
  const element = document.querySelector('#color-palette');
  /* Ultimas cores selecionadas */
  colors.previous.forEach((item) => {
    const div = document.createElement('div');
    div.style.border = 'solid black 1px';
    div.classList.add('color');
    div.style.background = item;
    if (item === 'black') {
      div.classList.add('selected');
    }
    element.appendChild(div);
  });
}

function generatePixelGrid() {
  const columns = [];
  const element = document.querySelector('#pixel-board');
  for (let i = 0; i < board.size; i += 1) {
    const per = '40px';
    columns.push(per);
  }
  element.style.gridTemplateColumns = columns.join(' ');
  element.style.gridTemplateRows = columns.join(' ');
  for (let k = 0; k < board.size; k += 1) {
    for (let v = 0; v < board.size; v += 1) {
      const div = document.createElement('div');
      div.style.background = 'white';
      div.classList.add('pixel');
      div.style.background = 'white';
      div.classList.add('pixel');
      element.appendChild(div);
    }
  }
}
/*
* Atualiza as cores dos elementos;
*/
function updateElements(elements) {
  const e = elements;
  for (let i = 0; i < elements.length; i += 1) {
    e[i].style.background = colors.previous[i];
  }
}

function updatePalette() {
  const elements = document.querySelectorAll('.color:not(.colorpick)');
  let active;
  elements.forEach((element) => {
    element.addEventListener('click', () => {
      active = element.style.background;
      // Atualiza as cores da paleta
      updateElements(elements);
      elements.forEach((e) => {
        e.classList.remove('selected');
      });
      element.classList.add('selected');
      // Seleciona a cor
      colors.active = active;
    });
  });
}

function clearPixelGrid() {
  const elements = document.querySelectorAll('.pixel');
  elements.forEach((element) => {
    const e = element;
    e.style.background = 'white';
  });
}

window.onload = () => {
  // Inicializade uma paleta de cores com valores padrões
  generatePalette();
  // Atualizaz a paleta de cores;
  updatePalette();
  // Gera o Pixel Grid;
  generatePixelGrid();
  document.querySelector('#clear-board').addEventListener('click', () => {
    clearPixelGrid();
  });
  document.querySelectorAll('.pixel').forEach((element) => {
    element.addEventListener('click', () => {
      const e = element;
      e.style.background = colors.active;
    });
  });
};

// const cor = document.querySelectorAll('.color');
const linhaPixel = document.querySelectorAll('.linhaPixel');

// Cria uma quadrado com base nas diferentes classes
function criaQuadrado(className) {
  const box = document.createElement('div');
  box.className = className;
  return box;
}
// Percorre as linhas com a div que tem a classe com o nome pixel e preenche a linha
function percorrePixel(classePixel) {
  for (let index = 0; index < classePixel.length; index += 1) {
    for (let contador = 0; contador < classePixel.length; contador += 1) {
      const box = criaQuadrado('pixel');
      classePixel[contador].appendChild(box);
    }
  }
}
percorrePixel(linhaPixel);

function selecionarCor() {
  const corSelecionada = document.querySelector('#color-palette');
  corSelecionada.addEventListener('click', (event) => {
    const classeSelecionada = document.querySelector('.selected');
    classeSelecionada.classList.remove('selected');
    event.target.classList.toggle('selected');
  });
}
selecionarCor();

function pintarPixel() {
  const pixelSelecionado = document.querySelector('#pixel-board');
  pixelSelecionado.addEventListener('click', (event) => {
    const selecionaCor = document.querySelector('.selected');
    const cor = getComputedStyle(selecionaCor).backgroundColor;
    const evento = event;
    evento.target.style.backgroundColor = cor;
  });
}
pintarPixel();

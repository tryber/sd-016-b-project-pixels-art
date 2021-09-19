const pixelBox = document.getElementById('pixel-board');
const tamanhoBox = 5 * 5;
const paletaCores = document.getElementById('color-palette');
const listaCores = ['black', 'red', 'blue', 'green'];

function recebeColor() {
  for (let i = 0; i <= 3; i += 1) {
    const cor = document.createElement('div');
    cor.className = 'color';
    cor.style.backgroundColor = listaCores[i];
    paletaCores.appendChild(cor);
  }
}
recebeColor();

function selected() {
  const cor = document.getElementsByClassName('color');
  cor[0].className = 'color selected';
}
selected();

/*
function mudaCorSelected() {
  const cor = paletaCores.childNodes;

  for (let i = 0; i <= cor.length; i += 1) {
    
  }
  
}
*/

function pixelBlock() {
  for (let i = 1; i <= tamanhoBox; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';

    pixelBox.appendChild(pixel);
  }
}
pixelBlock();

/*
for (let index = 1; index <= 5; index += 1) {
    const linha = document.createElement('div');
    linha.className = 'pixel-linha';
    for (let i = 1; i <= 5; i += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';

      linha.appendChild(pixel);
    }
    pixelBox.appendChild(linha);
  }
  */

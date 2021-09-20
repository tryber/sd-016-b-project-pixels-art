const pixelBox = document.getElementById('pixel-board');
const tamanhoBox = 5 * 5;
const paletaCores = document.getElementById('color-palette');
const listaCores = ['black', 'red', 'blue', 'green'];
const button = document.getElementById('clear-board');

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

function mudaCorSelected(e) {
  const corSelected = document.getElementsByClassName('color selected')[0];
  corSelected.classList.remove('selected');
  e.target.classList.add('selected');
}
paletaCores.addEventListener('click', mudaCorSelected);

function selectColor(e) {
  const corSelected = document.querySelector('.selected');
  const pixel = e.target;
  pixel.style.backgroundColor = corSelected.style.backgroundColor;
}

function pixelBlock() {
  for (let i = 1; i <= tamanhoBox; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.addEventListener('click', selectColor);
    pixelBox.appendChild(pixel);
    button.addEventListener('click', function(){
      pixel.style.backgroundColor = 'white';
    });
  }
}
pixelBlock();

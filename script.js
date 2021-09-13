const pixelFrame = document.querySelector('#pixel-board');
function pixelCreator(tamanho) {
  for (let i = 0; i < tamanho; i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelFrame.appendChild(pixel);
    pixel.style.backgroundColor = 'white';
  }
}
pixelCreator('25');

const color = document.getElementsByClassName('color');
const paleta = document.getElementById('color-palette');

paleta.addEventListener('click', (event) => {
  for (let i = 0; i < color.length; i += 1) {
    color[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
});

function changeColor(event) {
  const selectedColor = document.querySelector('.selected');
  const eventTarget = event.target;
  const corPixel = window
    .getComputedStyle(selectedColor, null)
    .getPropertyValue('background-color');
  eventTarget.style.backgroundColor = corPixel;
}
pixelFrame.addEventListener('click', changeColor);

const botao = document.getElementById('clear-board');
const pixel = document.getElementsByClassName('pixel');

// Créditos ao Hugo Daniel.

botao.addEventListener('click', () => {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
});

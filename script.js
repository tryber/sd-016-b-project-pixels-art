const caixaDePixels = document.getElementById('pixel-board');

function caixaPixel(nPixels) {
  for (let i = 0; i < nPixels; i += 1) {
    const linhaDePixel = document.createElement('div');
    for (let j = 0; j < nPixels; j += 1) {
      const quadradoDePixel = document.createElement('div');
      quadradoDePixel.classList.add('pixel');
      linhaDePixel.appendChild(quadradoDePixel);
    }
    caixaDePixels.appendChild(linhaDePixel);
  }
}
caixaPixel(5);

const paleta = document.getElementById('color-palette');
function addRemoveClass(event) {
  const pegaCor = document.querySelector('.selected');
  console.log(pegaCor);
  pegaCor.classList.remove('selected');
  event.target.classList.add('selected');
}
paleta.addEventListener('click', addRemoveClass);

const colorePixel = document.querySelectorAll('.pixel');
for (let i = 0; i < colorePixel.length; i += 1) {
  colorePixel[i].addEventListener('click', (addColor) => {
    const pegaCor = document.querySelector('.selected');
    const pintaCor = addColor.target;
    pintaCor.style.backgroundColor = window.getComputedStyle(pegaCor).backgroundColor;
  });
}

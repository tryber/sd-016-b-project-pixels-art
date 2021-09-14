const colorOnload = document.getElementById('black');
colorOnload.classList.add('selected');

const colors = document.getElementsByClassName('color');
function colorSelection(event) {
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}
for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', colorSelection);
}
// Exercicio solucionado com auxilio do Gabriel Pinheiro.
function paintPixel() {
  const color = document.querySelector('.selected');
  event.target.style.backgroundColor = color.innerText;
}
const pixels = document.getElementsByClassName('pixel');
for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', paintPixel);
}
// botão que remove as cores:

function removeColors () {
  for (let index = 0; index < pixels.length; index += 1) {
    if (pixels[index].style.backgroundColor !== 'white') {
      pixels[index].style.backgroundColor = 'white';
    }
  }
}
document.getElementById('clear-board').addEventListener('click', removeColors);

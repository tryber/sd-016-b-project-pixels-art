// Gerar cores aleatórias para a peleta de cores.
function colorGenerator() {
  const r = Math.random() * 254;
  const g = Math.random() * 254;
  const b = Math.random() * 254;

  return `rgba(${r}, ${g}, ${b}`;
}
// Cor preta selecionada.
document.getElementsByClassName('color')[0].classList.add('selected');

const paleta = document.getElementsByClassName('color');
function paletaDeCores() {
  paleta[0].style.backgroundColor = 'black';
  for (let index = 1; index < paleta.length; index += 1) {
    paleta[index].style.backgroundColor = colorGenerator();
  }
}
paletaDeCores();

let colorSelected = paleta[0].style.backgroundColor;

// Gerar as linhas dos pixels.
const areaPixels = document.getElementById('pixel-board');
function linesPixels(valor) {
  for (let index = 0; index < valor; index += 1) {
    const line = document.createElement('div');
    line.className = 'lines';
    areaPixels.appendChild(line);
    for (let index2 = 0; index2 < valor; index2 += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      line.appendChild(pixel);
    }
  }
}

// Seleciona a cor para pintar.
const colorPalet = document.getElementById('color-palette');

colorPalet.addEventListener('click', (event) => {
  const alvo = event.target;
  for (let index = 0; index < paleta.length; index += 1) {
    colorPalet.children[index].className = 'color';
  }
  colorSelected = event.target.style.backgroundColor;
  alvo.classList.add('selected');
});

// Pinta os pixels.
areaPixels.addEventListener('click', (event) => {
  const alvo = event.target;
  alvo.style.backgroundColor = colorSelected;
});

// Limpa os pixels.
const pixels = document.getElementsByClassName('pixel');
const button = document.getElementById('clear-board');
button.addEventListener('click', () => {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
});

// Botão para setar a quantidade de pixels;
const vqv = document.getElementById('generate-board');
linesPixels(5);
vqv.addEventListener('click', () => {
  const buttonValue = document.querySelector('#board-size').value;
  let valorButton = buttonValue;
  if (buttonValue === '') {
    window.alert('Board Inválido!');
  } else if (buttonValue < 5) {
    valorButton = 5;
  } else if (buttonValue > 50) {
    valorButton = 50;
  }
  areaPixels.innerHTML = '';
  linesPixels(valorButton);
});

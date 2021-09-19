window.onload = function addClassSelected() {
  const blackInitial = document.getElementById('color-palette').firstElementChild; // recupera onde quero trabalhar, o primeiro filho do ID, no caso a cor black //
  blackInitial.classList.add('selected');
};
const palette = document.getElementById('color-palette'); // recupera onde quero trabalhar //
palette.addEventListener('click', (event) => { // seleciona o evento de "escuta" onde através do clique, ocorre a seguinte ação: //
  for (let index = 0; index < palette.children.length; index += 1) { // percorre todo o comprimento da paleta de cores //
    palette.children[index].classList.remove('selected'); // exclui a classe selected, e adiciona a classe selected ao ser clicado no novo evento de origem //
  }
  event.target.classList.add('selected');
});

function addColor(event) {
  const pixelSelecionado = event.target; // seleciona o evento de origem (todos os pixels)
  const selectColor = document.querySelector('.selected'); // seleciona a cor aplicada na paleta de cores
  pixelSelecionado.style.backgroundColor = selectColor.style.backgroundColor;
}

function paintingPixels() { // função criada para aplicar cor em todos os pixels ao clicar
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener('click', addColor);
  }
}

paintingPixels();

function clearPixels() {
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style = null;
  }
}

const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', clearPixels);

// referência: https://stackoverflow.com/questions/18691655/remove-style-on-element
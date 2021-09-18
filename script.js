// Exercicio 4
const number = 5;

const divPai = document.getElementById('pixel-board');

function matriz (numero) {
  let criaLinha = null;
  for(let index = 0; index < numero * numero; index += 1) {
    if(index % numero === 0) {
      criaLinha = document.createElement('div');
      criaLinha.className = 'linhaPixel';
      divPai.appendChild(criaLinha);
    }
    let criaPIxel = document.createElement('div');
    criaPIxel.className = 'pixel';
    criaLinha.appendChild(criaPIxel);
  }

}
matriz(number);



// Requisito 6: adiciona classe 'selected' para cor preta
window.addEventListener('load', function() {
  let corPreta = document.querySelector('#black');
  corPreta.classList.add('selected');
});

// Requisito 7: adicona classe 'selected' para as outras cores

let idBlack = document.querySelector('#black');
let idRed = document.querySelector('#red');
let idGreen = document.querySelector('#green');
let idBlue = document.querySelector('#blue');

function mudaClasseSelected (event) {
  let classSelected = document.querySelector('.selected');

  classSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

idBlack.addEventListener('click', mudaClasseSelected);
idRed.addEventListener('click', mudaClasseSelected);
idGreen.addEventListener('click', mudaClasseSelected);
idBlue.addEventListener('click', mudaClasseSelected);



// Requisito 8: pinta os pixels

function corPixel(event) {
  if (event.target.classList.contains('pixel')) {
    const classSelected = document.querySelector('.selected');
    const corDeFundo = window.getComputedStyle(classSelected, null).getPropertyValue('background-color');
    const pixel = event.target;
    pixel.style.backgroundColor = corDeFundo;
  }
}
document.addEventListener('click', corPixel);

// Requisito 9: botão para limpar o quadro

const botaoLimpar = document.querySelector('#clear-board');

botaoLimpar.addEventListener("click", function() {
  const pixels = document.querySelectorAll('.pixel');

  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
});

// Requisito 10

// botão VQV
const botaoVQV = document.getElementById('generate-board');
const input = document.getElementById('board-size');

botaoVQV.addEventListener('click', function() {

  if (input.value === '') {
    alert('Board inválido!');
    return;
  }

  if (input.value < 5) {
    input.value = 5;
  }
  if (input.value > 50) {
    input.value = 50;
  }

  divPai.innerHTML = '';
  matriz(input.value);

});

// Requisito 12: gera cores aleatórias
function corAleatoria() {
  const numeroUm = Math.round(Math.random() * 255);
  const numeroDOis = Math.round(Math.random() * 255);
  const numertoTres = Math.round(Math.random() * 255);

  return `rgb(${numeroUm}, ${numeroDOis}, ${numertoTres})`;
}

const classCorAleatoria = document.getElementsByClassName('corAleatoria');

for (let index = 0; index < classCorAleatoria.length; index += 1) {
  classCorAleatoria[index].style.backgroundColor = corAleatoria();
} 

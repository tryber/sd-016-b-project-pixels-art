function gerateColor() { // retirado a base da informação para gerar a cor aleatória do site https://www.codegrepper.com/code-examples/javascript/generate+random+rgb+color+javascript;
  function n() {
    const rn = Math.random() * 255;
    return rn;
  }
  const color = `rgb(${n()}, ${n()}, ${n()})`;
  return color;
}

function addBlack() {
  const element1 = document.querySelector('.cblack');
  element1.style.backgroundColor = 'black';
}
addBlack();
function addRed() {
  const element1 = document.querySelector('.cred');
  element1.style.backgroundColor = gerateColor();
}
addRed();
function addBlue() {
  const element1 = document.querySelector('.cblue');
  element1.style.backgroundColor = gerateColor();
}
addBlue();
function addGreen() {
  const element1 = document.querySelector('.cgreen');
  element1.style.backgroundColor = gerateColor();
}
addGreen();
function addWhite() {
  const element1 = document.querySelector('.pixel');
  element1.style.backgroundColor = 'white';
}
addWhite();

const getBlack = document.querySelector('.cblack');
const getBlue = document.querySelector('.cblue');
const getRed = document.querySelector('.cred');
const getGreen = document.querySelector('.cgreen');
window.onload = function () {
  function getColorBlack() { // está iniciando com o black selected
    getBlack.classList.add('selected');
  }
  getColorBlack();
};
// Selecionar cores
getBlue.addEventListener('click', function () {
  const getSelect = document.querySelector('.selected');
  getSelect.classList.remove('selected');
  getBlue.classList.add('selected');
});
getBlack.addEventListener('click', function () {
  const getSelect = document.querySelector('.selected');
  getSelect.classList.remove('selected');
  getBlack.classList.add('selected');
});
getRed.addEventListener('click', function () {
  const getSelect = document.querySelector('.selected');
  getSelect.classList.remove('selected');
  getRed.classList.add('selected');
});
getGreen.addEventListener('click', function () {
  const getSelect = document.querySelector('.selected');
  getSelect.classList.remove('selected');
  getGreen.classList.add('selected');
});
// pintar os quadrados ( pesquisei olhando o  exercicio 10 do dia de javascript eventos 5-3 para fazer colorir os pixels, visto que era parecido o modo de fazer)
const getDivFather = document.querySelector('#pixel-board');

getDivFather.addEventListener('click', function (event) {
  const pegaSelected = document.querySelector('.selected');
  const color = event.target.backgroundColor;
  const colorSelected = pegaSelected.style.backgroundColor;
  const eve = event.target.id;
  // if para pintar somente os quadrados
  if ((eve !== 'linePixels') && (color !== colorSelected) && (eve !== 'pixel-board')) {
    event.target.style.backgroundColor = colorSelected;
  }
});

// Botão
const getButton = document.querySelector('#clear-board');
getButton.addEventListener('click', function () {
  const getPixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < getPixel.length; i += 1) {
    getPixel[i].style.backgroundColor = 'white';
  }
});
// input
const getInput = document.querySelector('#board-size');
getInput.setAttribute('min', '1');
const getVQV = document.querySelector('#generate-board');
const getFloor = document.querySelector('#pixel-board');
function deleteDivs(n) {
  const getLine2 = document.getElementById('pixel-board');
  for (let i = 0; i < n; i += 1) {
    getLine2.removeChild(getLine2.firstElementChild);
    console.log('1');
  }
}
function criarSquareDivs (n){
  for (let i = 0; i < n; i += 1) {
    const criaDiv2 = document.createElement('div');
    criaDiv2.className = 'linePixels';
    getFloor.appendChild(criaDiv2);
    for (let i2 = 0; i2 < n; i2 += 1) {
      const criaDiv = document.createElement('div');
      criaDiv.className = 'pixel';
      criaDiv2.appendChild(criaDiv);
      criaDiv.style.backgroundColor = 'white';
    }
  }
}
getVQV.addEventListener('click', function () {
  const getLine = document.getElementById('pixel-board');
  const childLine = getLine.children;
  deleteDivs(childLine.length);

  if (getInput.value !== '') {
    let valor = getInput.value;
    if (valor < 5) {
      valor = 5;
    } else if (valor > 50) {
      valor = 50;
    }
    criarSquareDivs(valor);
    getInput.value = '';
  } else {
    alert('Board inválido!');
  }
});

const L1 = document.getElementById('L1');
const L2 = document.getElementById('L2');
const L3 = document.getElementById('L3');
const L4 = document.getElementById('L4');
const L5 = document.getElementById('L5');

function criacoluna (quadradao){
for (i=0; i<5; i+=1){
  const coluna= document.createElement('div');
  coluna.className='pixel';
  quadradao.appendChild(coluna);
}
}


criacoluna(L1)
criacoluna(L2)
criacoluna(L3)
criacoluna(L4)
criacoluna(L5)

let preto = document.querySelector('.black');
let rosa = document.querySelector('.pink');
const marrom = document.querySelector('.brown');
const roxo = document.querySelector('.purple');

function classSelected(event) {
  const elementContainSelected = document.querySelector('.selected');
  elementContainSelected.classList.remove('selected');
  event.target.classList.add('selected');
  console.log(elementContainSelected);
}

preto.addEventListener('click', classSelected);
rosa.addEventListener('click', classSelected);
marrom.addEventListener('click', classSelected);
roxo.addEventListener('click', classSelected);

function creatColor(event) {
  const pincel = document.querySelector('.selected');
  event.target.style.backgroundColor = window.getComputedStyle(pincel).backgroundColor;
}

function orelhao() {
  const arrayPixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < arrayPixel.length; index += 1) {
    const element = arrayPixel[index];
    element.addEventListener('click', creatColor);
  }
}

orelhao();


function branquinho() {
  const arrayPixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < arrayPixel.length; index += 1) {
    const element = arrayPixel[index];
    element.style.backgroundColor = 'white';
  }
}

const botao = document.getElementById('clear-board');
botao.addEventListener('click', branquinho);

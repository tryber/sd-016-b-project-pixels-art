let linhas = 5;

function criaHeader() {
  const titulo = document.querySelector('header');
  const criaH1 = document.createElement('h1');
  criaH1.innerText = 'Paleta de Cores';
  criaH1.id = 'title';
  titulo.appendChild(criaH1);
}
criaHeader();

function criaCores() {
  const cores = ['black'];
  const quadrados = document.querySelectorAll('.color');
  let value1 = 0;
  let value2 = 0;
  let value3 = 0;
  for (let index1 = 0; index1 < 3; index1 += 1) {
    value1 = Math.floor(Math.random() * (255));
    value2 = Math.floor(Math.random() * (255));
    value3 = Math.floor(Math.random() * (255));
    cores.push(`rgb(${value1}, ${value2}, ${value3})`);
  }
  for (let index = 0; index < cores.length; index += 1) {
    quadrados[index].style.backgroundColor = cores[index];
  }
}
criaCores();

function criaQuadro() {
  const localizaDiv = document.querySelector('#pixel-board');
  for (let index = 0; index < linhas; index += 1) {
    const criaUl = document.createElement('ul');
    criaUl.className = 'uls';
    localizaDiv.appendChild(criaUl);
    for (let index2 = 0; index2 < linhas; index2 += 1) {
      const localizaUl = document.querySelectorAll('.uls')[index];
      const criaLi = document.createElement('li');
      criaLi.className = 'pixel';
      localizaUl.appendChild(criaLi);
    }
  }
}
criaQuadro();

function trocaClass(event) {
  const pegaClass = document.querySelector('.selected');
  pegaClass.classList.remove('selected');
  event.target.classList.add('selected');
}

const black = document.getElementById('black');
const color2 = document.getElementById('color2');
const color3 = document.getElementById('color3');
const color4 = document.getElementById('color4');

black.addEventListener('click', trocaClass);
color2.addEventListener('click', trocaClass);
color3.addEventListener('click', trocaClass);
color4.addEventListener('click', trocaClass);

function trocaCor() {
  const pixel = document.getElementById('pixel-board');
  pixel.addEventListener('click', (event) => {
    if (event.target.className === 'pixel') {
      const corAtual = document.querySelector('.selected');
      const corSelecionada = event.target;
      corSelecionada.style.backgroundColor = corAtual.style.backgroundColor;
    }
  });
}
trocaCor();

function limpaQuadro() {
  document.getElementById('clear-board').addEventListener('click', () => {
    const pegaPixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < pegaPixels.length; index += 1) {
      pegaPixels[index].style.backgroundColor = 'white';
    }
  });
}
limpaQuadro();

function removeClasse(classe) {
  let remove = document.getElementsByClassName(classe);
  for (let index = 0; index < remove.length; index += 0) {
    remove[0].remove();
    remove = document.getElementsByClassName(classe);
  }
}

function inputQuadro() {
  const localizaInput = document.getElementById('board-size');
  document.getElementById('generate-board').addEventListener('click', () => {
    let tamanho = localizaInput.value;
    if (tamanho === ''){
      alert('Board inválido!');
    } else if (tamanho > 50) {
      tamanho = 50;
    }
    else if(tamanho < 5){
      tamanho = 5;
    }
    if (tamanho >= 5 && tamanho <= 50) {
      linhas = tamanho;
      removeClasse('uls');
      criaQuadro();
    }
  });
}
inputQuadro();

let teste = document.querySelector('.selected').style.backgroundColor;
console.log(teste);
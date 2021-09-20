window.onload = function () {
  let pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
  let select = document.querySelector('.black');
  select.className = 'color black selected';
};
// função Botão VQV
function botaoVQV() {
  let inputVqv = document.querySelector('#board-size');
  let numeroPixels = inputVqv.value;
  if (numeroPixels.length == 0) {
    numeroPixels.value = 5;
  }
  console.log(numeroPixels);
  return numeroPixels;
}
let vqv = document.querySelector('#generate-board');
// vqv.addEventListener('click', function(){

// const linhasColunas = vqv.addEventListener('click', botaoVQV);
const linhasColunas = 5;

const arrayCores = ['black', 'red', 'blue', 'green'];


// Criando as divs da paleta
for (let index = 0; index < arrayCores.length; index += 1) {
  let paleta = document.querySelector("#color-palette");
  let cor = arrayCores[index];
  let elemento = document.createElement('div');
  elemento.id = 'color-palette';
  elemento.className = "color " + cor;
  // console.log(elemento);
  paleta.appendChild(elemento);
}

// Criando o quadro de pixels
for (let linha = 0; linha < linhasColunas; linha += 1) {
  let quadro = document.querySelector('#pixel-board');
  let linhaQuadro = document.createElement('div');
  // linhaQuadro.className = 'pixel' //linha' + (linha + 1); 
  linhaQuadro.id = 'linha';
  quadro.appendChild(linhaQuadro);
}

function appendPixel() {
  let pixels = document.querySelectorAll('#linha');
  // console.log(pixels.length)
  for (let index = 0; index < pixels.length; index += 1) {
    // let posicaoLinha = pixels[index];
    let posicaoLinha = document.querySelectorAll('#linha')[index];
    // console.log(posicaoLinha);
    for (let segundoIndex = 0; segundoIndex < pixels.length; segundoIndex += 1) {
      // console.log(pixels[segundoIndex]);      
      let pixel = document.createElement('div');
      pixel.className = 'pixel';
      // console.log(pixel);
      posicaoLinha.appendChild(pixel);
    }
  }
}

appendPixel();

// pra remover classe -> element.classList.remove('nome')
//Dica retirada do site:
// https://www.codegrepper.com/code-examples/javascript/check+class+name+of+child+element+javascript
function removeSelected() {
  let paleta = document.querySelector('#color-palette');
  for (let index = 0; index < paleta.childNodes.length; index += 1) {
    // console.log(paleta.childNodes[index]);
    if (paleta.childNodes[index].classList.contains('selected')) {
      paleta.childNodes[index].classList.remove('selected');
    }
  }
}

// Selecionar cor - criar uma função anonima dentro do addEventListener
function selecionarCor () {
  removeSelected();
  EventTarget.classList.add('selected');
}

let paletaCores = document.querySelectorAll('.color');
// paletaCores.addEventListener('click', removeSelected);

let blocoPreto = document.querySelector('.black');
blocoPreto.addEventListener('click', function (){
  removeSelected ();
  blocoPreto.classList.add('selected');
});

let blocoVermelho = document.querySelector('.red');
blocoVermelho.addEventListener('click', function (){
  removeSelected ();
  blocoVermelho.classList.add('selected');
});

let blocoAzul = document.querySelector('.blue');
blocoAzul.addEventListener('click', function (){
  removeSelected ();
  blocoAzul.classList.add('selected');
});

let blocoVerde = document.querySelector('.green');
blocoVerde.addEventListener('click', function (){
  removeSelected ();
  blocoVerde.classList.add('selected');
});

function recuperaCorAlvo() {
  let paleta = document.querySelector('#color-palette');
  for (let index = 0; index < paleta.childNodes.length; index += 1) {
    // console.log(paleta.childNodes[index]);
    if (paleta.childNodes[index].classList.contains('selected')) {
      let corSelecionada = paleta.childNodes[index].classList[1];
      return corSelecionada;
      // console.log(corSelecionada);
    }
  }
}
// Exemplo de código que funciona em toda página
// window.onclick = (e) => {
//   console.log(e.target); // to get the element
//   console.log(e.target.tagName); // to get the element tag name alone
// };

window.onclick = function(event) {
  if (event.target.classList.contains('pixel')) {
    console.log('Cor selecionada: ' + recuperaCorAlvo(event));
    let corAlvo = recuperaCorAlvo(event);
    event.target.style.backgroundColor = corAlvo;
  }
  // console.log(event.target.className);
};

function limparPixels () {
  let pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

let botao = document.querySelector('#clear-board');
botao.addEventListener('click', limparPixels);


// let vqv = document.querySelector('#generate-board');
// vqv.addEventListener('click', function(){
//   let inputVqv = document.querySelector('#board-size');
//   let numeroPixels = inputVqv.value;
//   console.log(numeroPixels);
// });

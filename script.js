window.onload = function () {
let colorBlack = document.querySelector('.corBlack');
colorBlack.classList.add('selected');

let colorBlue = document.querySelector('.corBlue');
let colorGreen = document.querySelector('.corGreen');
let colorYellow = document.querySelector('.corYellow');
let board = document.getElementsByClassName('pixel');
let limp = document.getElementById('clear-board');
let fundo = 'black';
let controle1; // pra verificar se ta vazio

// ideia do formulario vazio do site:
// https://www.fabiobmed.com.br/site/verificar-se-um-campo-do-formulario-esta-vazio-via-javascript/


// Criação dos pixel dinamicos
let pixelBoard = document.querySelector('#pixel-board');
let n = 5;

// se apertar o vqv ele muda o valor de 'n'
let input1 = document.querySelector('input');
let generateBoard = document.getElementById('generate-board');

generateBoard.addEventListener('click', vqv);
function vqv(){
  let number1 = input1.value;
  controle1 = number1;

  // removendo pixels
  // olhei como apaga no site:
  // https://www.horadecodar.com.br/2021/06/27/remover-todos-os-elementos-filhos-com-javascript/
  
  pixelBoard.innerHTML = "";
 
  if(number1 >= 5 && number1 <= 50){
  n = number1;
} else if (number1 < 5){
  n = 5;
} else if (number1 > 50){
  n = 50;
}

// criar pixels
for (i = 0; i < n; i += 1) {
  let elemento = document.createElement('div');
  elemento.classList.add('linha');
  pixelBoard.appendChild(elemento);
  let pix = document.querySelectorAll('.linha')
  
  for (a = 0; a < n; a += 1) {
    let elemento1 = document.createElement('div');
    elemento1.classList.add('pixel');
    pix[i].appendChild(elemento1);
  }

}



// adicionar/remover a classe e a cor que sera pintada
colorBlue.addEventListener('click', selecaoBlue);

function selecaoBlue(){
  colorBlue.classList.add('selected');
  colorBlack.classList.remove("selected");
  colorGreen.classList.remove("selected");
  colorYellow.classList.remove("selected");
  fundo = 'blue'
} 

colorGreen.addEventListener('click', selecaoGreen);

function selecaoGreen(event){
  colorGreen.classList.add('selected');
  colorBlack.classList.remove("selected");
  colorBlue.classList.remove("selected");
  colorYellow.classList.remove("selected");
  fundo = 'green'
} 

colorYellow.addEventListener('click', selecaoYellow);

function selecaoYellow(){
  colorYellow.classList.add('selected');
  colorBlack.classList.remove("selected");
  colorBlue.classList.remove("selected");
  colorGreen.classList.remove("selected");
  fundo = 'yellow'
} 

colorBlack.addEventListener('click', selecaoBlack);

function selecaoBlack(){
  colorBlack.classList.add('selected');
  colorYellow.classList.remove("selected");
  colorBlue.classList.remove("selected");
  colorGreen.classList.remove("selected");
  fundo = 'black'
} 

// adicionando o evento de escutar em todos os pixels
for (let i = 0; i < board.length; i += 1) {
  board[i].addEventListener('click', cor);
}

// ao clicar no pixel ele pinda a cor que a pessoa escolher
function cor (event){
  event.target.style.backgroundColor = fundo;
}

// ao apertar no botão de limpar ele pinta os quadrados de branco
limp.addEventListener('click', limpar);

function limpar (){
  for (let i = 0; i < board.length; i += 1) {
    board[i].style.backgroundColor = 'white';
  }
}

}
vqv();

// verifica se ta vazio
generateBoard.addEventListener('click', controle);

function controle (){
  if (controle1.length < 1) {
    alert('Board inválido!');
  }
}
}
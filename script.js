window.onload = function () {
let colorBlack = document.querySelector('.corBlack');
colorBlack.classList.add('selected');

let colorBlue = document.querySelector('.corBlue');
let colorGreen = document.querySelector('.corGreen');
let colorYellow = document.querySelector('.corYellow');
let board = document.getElementsByClassName('pixel');
let limp = document.getElementById('clear-board');
let fundo = 'black';

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

for (let i = 0; i < board.length; i += 1) {
  board[i].addEventListener('click', cor);
}
 
  function cor (event){
  event.target.style.backgroundColor = fundo;
}
limp.addEventListener('click', limpar);

function limpar (){
  for (let i = 0; i < board.length; i += 1) {
    board[i].style.backgroundColor = 'white';
  }
}

}
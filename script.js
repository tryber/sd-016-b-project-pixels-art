let idx = 5;
let pixelBoard = document.getElementById("pixel-board");
let cor =document.querySelectorAll(".color");

function linha(){
   for (let index = 0; index < idx; index+=1) {
        let pixelLinha = document.createElement("div");
        pixelLinha.className = "linha";
        pixelBoard.appendChild(pixelLinha)
       coluna (pixelLinha)
   }   
}
function coluna (linha){
    for (let index = 0; index < idx; index+=1) {
        let pixelColuna = document.createElement("div");
        pixelColuna.className = "pixel"
        linha.appendChild(pixelColuna);
    }
}
linha();

function selecionarCor() {
    let colorSelected = document.querySelector('#color-palette');
    colorSelected.addEventListener('click', function(event){
      let selected = document.querySelector('.selected');
      if (event.target.id !== 'color-palette') {
        selected.classList.remove('selected'); 
        event.target.classList.add('selected'); 
      }
    });
  }
  selecionarCor();
  
  function paint () {
   pixelBoard.addEventListener('click', function(event){
    if (event.target.className === 'pixel') {
      let currentColor = document.querySelector('.selected'); 
      let changeColorPixel = event.target; 
      changeColorPixel.style.backgroundColor = currentColor.style.backgroundColor; 
    }
  });
  }
  paint ();
  
  
  function clearBoard() {
  let buttonClear = document.getElementById('clear-board'); 
  let pixels = document.getElementsByClassName('pixel');
  buttonClear.addEventListener('click', function(){
    for (let i = 0; i < pixels.length; i += 1) {   
      pixels[i].style.backgroundColor = 'white';
    }
  });
  }
  clearBoard();

let black = document.getElementById("black");
black.style.backgroundColor = "black";
let blue = document.getElementById("blue");
blue.style.backgroundColor = "blue";
let yellow = document.getElementById("yellow");
yellow.style.backgroundColor = "yellow";
let green = document.getElementById("green");
green.style.backgroundColor = "green";



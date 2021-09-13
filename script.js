// Referenciando o amigo Gabriel Fontes que me ajudou no Requisito 2
// Referenciando minha amiga Mariana Saraiva me ajudou nos espaçamento dos quadros
function quadroPixel(number) {
  const pixelBoard = document.querySelector('#pixel-board');
  for (let index = 0; index < number; index +=1) {
    let linhaBoard = document.createElement('div');
    linhaBoard.className = 'line';
    pixelBoard.appendChild(linhaBoard)
    for (let i = 0; i < number; i += 1) {
      let colunaBoard = document.getElementsByClassName('line')[index];
      let quadroB = document.createElement('div');
      quadroB.className = 'pixel';
      quadroB.style.backgroundColor = 'white';
      colunaBoard.appendChild(quadroB);
    }
  }
}
quadroPixel(5)

//  6 Requisito
window.onload = function carregaPag(){
  
  let coresDiv = document.querySelectorAll('.color');
  coresDiv[0].classList.add('selected');
}
 
// 7 Requisito (remove e adiciona a class "selected")
  const colors = document.getElementsByClassName('color');

  function pegaCor(event) {
    for(let index = 0; index < colors.length; index += 1){
      colors[index].classList.remove('selected')
    }
    event.target.classList.add('selected')
  }

  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', pegaCor);
  }

//  Requisito 8
// ajuda de sala de estudos = Luiz Wanderson
const pixelQuadro = document.getElementsByClassName('pixel');
function corQuadro(event) {
  for(let index = 0; index < pixelQuadro.length; index += 1){
    pixelQuadro[index].addEventListener('click', addCor);
  }
}
function addCor(name) {
  const selectPixel = document.querySelector('.selected');
  name.target.style.backgroundColor = selectPixel.style.backgroundColor;
}
corQuadro();

// Requisito 9
function limpaQuadr() {
  const pixelBord = document.getElementsByClassName('pixel');
  for(let index = 0; index < pixelBord.length; index += 1){
    pixelBord[index].style.backgroundColor = 'white';
  }
}

const buttonLimpa = document.querySelector('#clear-board');
buttonLimpa.addEventListener('click', limpaQuadr);



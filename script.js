const cores = document.querySelector('#color-palette');
const cor = document.querySelectorAll('.color'); //NodeList 0-black 1-lightblue 2-red 3-pink

//Selecionar cor

let selecionada = 'black';

function selecionarCor(e) {
  for (let i = 0; i < cor.length; i+=1){
    if (cor[i].classList.contains('selected')){
      cor[i].classList.remove('selected')
    } 
  } 
  
  e.target.classList.add('selected')
  selecionada = e.target.classList[1]
} 


cores.addEventListener('click', selecionarCor);

//Pintar pixel

  const pixels = document.querySelector('#pixel-board');
  const pixel = document.querySelectorAll('.pixel');
 
function pintarPixel(e) {
  e.stopPropagation();
  e.target.classList.remove('white')
  e.target.classList.add(selecionada)
}

pixels.addEventListener('click', pintarPixel);


const paleta = document.getElementById('color-palette');
const input = document.getElementById('board-size');
const button = document.getElementById('generate-board');
const pixelBoard = document.getElementById('pixel-board');
const pixel = document.querySelector('.pixel')
const buttonLimpar = document.getElementById('clear-board');

// Requisito 07
function selecionarCor(event){
    let selecionada = document.querySelector('.selected');
    let selecionar = event.target;
    selecionada.classList.remove('selected');
    selecionar.classList.add('selected');
}

paleta.addEventListener('click', selecionarCor)

// Requisito 08 
// https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
// getComputedStyle(elemento)

function pintar(event){
    let select = document.querySelector('.selected');
    let corSelecionada = getComputedStyle(select);
    let backgorund = corSelecionada.backgroundColor;
    event.target.style.backgroundColor = backgorund;
}

buttonLimpar.addEventListener('click', function(){
    const pix = document.querySelectorAll('.pixel');
    for (let index = 0; index < pix.length; index += 1){
        pix[index].style.backgroundColor = 'white'
    }
})

// Alerta botão VQV - Requisito 10
button.addEventListener('click', function(){
    if(input.value === ''){
      alert('Board inválido!');
  } else {
      createBoard();
  }
})

// Essa função aqui em baixo , está dentro da função de cima
function createBoard (){
    let n = input.value;
        if(n < 5) {
        n = 5
    } else if(n > 50){
        n = 50
    }
    pixelBoard.innerHTML = '';

    for (let i = 0; i < n ; i += 1){
        let linha = document.createElement('div');
        linha.classList.add('linha')
        pixelBoard.appendChild(linha);
        for(let index = 0; index < n ; index +=1){
            let coluna = document.createElement('div');
            linha.appendChild(coluna);  
            coluna.classList.add('pixel');
            coluna.addEventListener('click', pintar)
        }
    }
};
createBoard();

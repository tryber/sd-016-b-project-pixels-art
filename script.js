// Refiz o item 7 pois passou no npm test mas nao estava funcionando como deveria.

// Consultei o repositório do Pedro fonseca : https://github.com/tryber/sd-016-b-project-pixels-art/pull/16

const colors = document.querySelector('#color-palette'); // captura o id com querySelector.

// cria uma função com escutador addEventlistner com um clik e um evento.
function getColor() {
  colors.addEventListener('click', (event) => {
    const selected = document.querySelector('.selected'); // a função usa o querySlelctor para selecionar a classe selected.
    selected.classList.remove('selected'); // usando classList.remove select
    event.target.classList.toggle('selected'); // quando clicar target vai pegar, classList.toggle alternar entre remover e pegar a cor.
  });
}

getColor(); // executa a funcao para obter a cor.

function setColor() {
  const pixel = document.querySelectorAll('.pixel'); // seleciona a classe pixel.
  for (let i = 0; i < pixel.length; i++) { // for percorrendo a const pixel.
    pixel[i].addEventListener('click', () => { // coloca um escutador com a funcao de clik no pixel.
      const actualColor = document.querySelector('.selected'); // seleciona a cor e atribui ao cost actualColor
      console.log(actualColor);
      pixel[i].style.backgroundColor = window.getComputedStyle(actualColor).backgroundColor; // atribui as propriedades do css via getComputedStyle na const actualColor
    });
  }
}

setColor(); // executa a função de pintar o pixel.

// Requisito 9
const clearButton = document.querySelector('#clear-board'); // seleciona o id clear-bord e atribui a const.

clearButton.addEventListener('click', () => { // atribui um escutador na funcao que ao clicar vai executar um for que atribui bkcolor white a toda minha classe pixel.
  const pixel = document.querySelectorAll('.pixel');

  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
});
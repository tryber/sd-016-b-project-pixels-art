let printColor = 'black';

//chama cada pixel para uma let e add funcao de botao
function CreatBoardButton() {
  for(let index = 0; index < document.getElementsByClassName('pixel').length; index += 1) {
    pixel.push(document.getElementsByClassName('pixel')[index]);
    pixel[index].addEventListener('click', print);
  }
}

//limpa o quadro de pixel
function clearBoard () {
  for(index = 0; index < document.getElementsByClassName('pixel').length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}

//apaga a antiga tabela
function eraseBoard() {
  let elemento = document.getElementById("pixel-board");
  while (elemento.firstChild) {
  elemento.removeChild(elemento.firstChild);
  }
}

//indica o tamanho da board
function UserBoard() {
  let entrada = document.querySelector('#board-size').value;
  azul = entrada;
  if(azul == ""){
    alert("Board inválido!");
  }else if(azul < 5) {
    bordCreator (5);
  }else if(azul > 50){
    bordCreator (50);
  }else {
    bordCreator (azul);
  }
}

//cria a pixel-board de acordo com o tamanho indicado
function bordCreator(tamanho) {
  pixel = [];
  eraseBoard();
  for (let index = 0; index < tamanho; index += 1) {
    for (let indice = 0; indice < tamanho; indice += 1) {
      let div = document.createElement("div");
      document.querySelector('#pixel-board').appendChild(div).classList.add('pixel');
    }
    let br = document.createElement("br");
    document.querySelector('#pixel-board').appendChild(br);
  }
  CreatBoardButton();
  clearBoard();
}

//funcao que seleciona e desmarca as outras cores da palheta
function selectColor(event) {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
  printColor = event.target.classList[1];
}

//pinta a caixa selecionada
function print (event) {
  event.target.style.backgroundColor = printColor;
}

bordCreator(5);

window.onload = function() {  
//faz com que a cor black seja selecionada
  function setColor () {
    let colorSelect = document.querySelector('.color');
    colorSelect.classList.add('selected');
  }
setColor();

//cria os botoes especificos
  function CreatAllButton () {
    //cria o botao para limpar o board
    let buttonClean = document.querySelector('#clear-board');
    buttonClean.addEventListener('click', clearBoard);
    //botao para carregar o board
    let buttonUser = document.querySelector('#generate-board');
    buttonUser.addEventListener('click', UserBoard);
    //chama cada cor para uma let, adiciona evento nas cores, caso clicke chama uma função que marca ela e desmarca as outras cores
    let color = [];
    for(let index = 0; index < document.getElementsByClassName('color').length; index += 1) {
      color.push(document.getElementsByClassName('color')[index]);
      color[index].addEventListener('click', selectColor);
    }
  }
CreatAllButton();
}
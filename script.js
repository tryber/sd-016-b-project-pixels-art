 window.onload = function() {
  let rows = 5;
  let columns = 5;

createColorPalette();
createRows();
createColumns();
blackColorSelected();
clickColor();
paintPixel();

function createColorPalette() {
  const colors = ['black', 'yellow', 'red', 'blue'];
  let recoveryDivColor = document.getElementById('color-palette');
    
  for(let index = 0; index < colors.length; index += 1) {
    let divColor = document.createElement('div');
    divColor.className = 'color';
    recoveryDivColor.appendChild(divColor);
    divColor.style.backgroundColor = colors[index];
    }
}

function createRows() { 
  let recoveryDivPixelB = document.getElementById('pixel-board');
  for(let index = 0; index < rows; index += 1) {  //cria as linhas
    let divRow = document.createElement('div');
    divRow.className = 'pixel';
    divRow.style.backgroundColor = 'white';
    recoveryDivPixelB.appendChild(divRow);
  }
}

function createColumns() {
    let recoveryDivPixelB = document.getElementById('pixel-board');
    for(let index = 0; index < rows; index += 1) {
        for(let index2 = 0; index2 < (columns -1); index2 +=1 ) { // o columns -1 é usado pq a primeira linha já foi criada na função anterior
        let divColumn = document.createElement('div');
        divColumn.className = 'pixel'
        divColumn.style.backgroundColor = 'white';
        recoveryDivPixelB.appendChild(divColumn);
    }
}
}

 function blackColorSelected() { // Requisito 6
    let recoveryDivColor = document.querySelector('.color');
    recoveryDivColor.classList.add('selected');
   // recoveryDivColor.addEventListener('click',alertEvent)
    // console.log(recoveryDivColor);
 }

 function changeColorSelected () {
 // Essa função meio que repete a próxima por conta de eu não tá conseguindo criar a função após o 'click'
  let colorSelected = document.getElementsByClassName('color');
    
  for(let index = 0; index < colorSelected.length; index += 1) {
    let selectedColor = colorSelected[index];
    selectedColor.classList.remove('selected'); // mesmo que retira ele vai adicionar com event.target
  }
    event.target.classList.add('selected'); // adiciona elemento naquele que foi clicado
  }

function clickColor() { // Requisito 7
    let colorSelected = document.getElementsByClassName('color');
    
    for(let index = 0; index < colorSelected.length; index += 1) {
      let selectedColor = colorSelected[index];
      selectedColor.addEventListener('click', changeColorSelected); // dando erro pra criar outra função aqui
    }
}

function paintPixel() {
  let recoveryDivPixelPaint = document.getElementsByClassName('pixel');
  for(let index3 = 0; index3 < recoveryDivPixelPaint.length; index3 += 1) {
    let pixeis = recoveryDivPixelPaint[index3];
    pixeis.addEventListener('click',menssagem);
  }
}

function menssagem(event) {
  // alert ('Está sendo clicado');
  let recoveryClassSelected = document.querySelector('.selected');
  if(recoveryClassSelected.style.backgroundColor === 'black' ){
    event.target.style.backgroundColor = 'black';
  }
  else if(recoveryClassSelected.style.backgroundColor === 'yellow' ){
    event.target.style.backgroundColor = 'yellow';
  }
  else if(recoveryClassSelected.style.backgroundColor === 'red' ){
    event.target.style.backgroundColor = 'red';

} else if(recoveryClassSelected.style.backgroundColor === 'blue' ){
  event.target.style.backgroundColor = 'blue';
} 
}

let recoveryButton = document.getElementById('clear-board');
function buttonWhite() {
   let pixelWhite = document.getElementsByClassName('pixel');
   for(let cont = 0; cont < pixelWhite.length; cont += 1){
     let elemento = pixelWhite[cont];
    elemento.style.backgroundColor = 'white';
   }
}
recoveryButton.addEventListener('click', buttonWhite)


 }
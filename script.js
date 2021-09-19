const colorNameList = ['black', 'red', 'yellow', 'green'];

function createColorPalete () {
  let getColorPallete = document.querySelector('#color-palette');
  for (let i = 0; i < colorNameList.length; i += 1 ) {
    let getColorElement = colorNameList[i];
    let setColorElement = document.createElement('div');
    setColorElement.classList.add('color');
    setColorElement.style.backgroundColor = getColorElement;
    setColorElement.style.border = 'thin solid black';
    getColorPallete.appendChild(setColorElement);
  }
}

createColorPalete();


function createPixelBoard() {
  let getPixelBoard = document.querySelector('#pixel-board');
  for (let i = 0; i < 5; i ++) {
    let SetPixelLineContainer = document.createElement('div');
    SetPixelLineContainer.classList.add('pixelContainer');
    getPixelBoard.appendChild(SetPixelLineContainer);
    
    for (let i = 0; i < 5; i ++) {
      let setPixelLine = document.createElement('div');
      setPixelLine.classList.add('pixel');
      setPixelLine.style.border = 'thin solid black';
      SetPixelLineContainer.appendChild(setPixelLine);
    }
  }
}

createPixelBoard();

function selectFirstColor() {
  let getBlack = document.getElementsByClassName('color')[0];
  getBlack.classList.add('color','selected');
}

selectFirstColor()
// Código abaixo  (até o ".") Inspirado Por Juliane Cardoso: 
//https://github.com/tryber/sd-016-b-project-pixels-art/pull/30/commits/372f2ce3dea0943945b8b4b573e45c1b80073429#diff-ed3ee7e0beea2498ff3b8ca85973d122fc6fa3d585d62b5807ec034d0cf076b3R18
let getColors = document.getElementsByClassName('color');

function removeSelect() {
  for (let i = 0; i < getColors.length; i += 1) {
    getColors[i].classList.remove('selected');
  }
}

function addSelect(event) {
  event.target.classList.add('selected');
}

for (let i = 0; i < getColors.length; i += 1) {
  getColors[i].addEventListener('click', removeSelect);
  getColors[i].addEventListener('click', addSelect);
}


function SetPixelColor(event) {
  if (event.target.classList.contains('pixel')) {
    let getSelected = document.querySelector('.selected');
    let getBckgcolor = window.getComputedStyle(getSelected).getPropertyValue('background-color');
    event.target.style.backgroundColor = getBckgcolor;
  }
}
document.addEventListener('click', SetPixelColor);
//. 
    
    
let butt = document.getElementById('clear-board');
let pixel = document.querySelectorAll('.pixel');
    
function cleanButton() {
  for (i = 0; i < pixel.length; i += 1){
    pixel[i].style.backgroundColor = 'white';
  }
}
    
butt.addEventListener('click', cleanButton);
    
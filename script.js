let inputButton = document.querySelector('#color-palette');

let buttonQuantity = 4;
let pixelLine = 5;
let row = 5;
let selectorColor = '';


let div = document.querySelectorAll('.color');

for(let index1 =0; index1 < buttonQuantity; index1 +=1) {
    let div = document.createElement('div');
    div.className = 'color'   
    let colorButton = ['black', 'red', 'blue', 'purple'];
switch(index1) {
    case 0:
        div.classList.add('color', 'selected');
        selectorColor =  div.style.backgroundColor = colorButton[index1];
        break  
    case 1:
        div.classList.add('color');
        selectorColor[index1] =  div.style.backgroundColor = colorButton[index1];
        break  
    case 2:
        div.classList.add('color');
        selectorColor[index1] =  div.style.backgroundColor = colorButton[index1];
        break  
    default:
        div.classList.add('color');
        selectorColor[index1] =  div.style.backgroundColor = colorButton[index1];
        break

    
    
}

inputButton.appendChild(div);


}

let pixelBoard = document.querySelector('#pixel-board');


for(let index2 = 0; index2 < pixelLine; index2+=1) {
    let pixelDiv =document.createElement('div');
    pixelDiv.id += 'pixel-line'
    pixelBoard.appendChild(pixelDiv);
  
    for(let index3 = 0; index3 < row; index3+=1) {
       let pixelRow = document.createElement('div');
       pixelRow.classList += "pixel";
       pixelRow.style.border = '1px solid black';
       pixelRow.style.backgroundColor = 'white';
       
       pixelDiv.appendChild(pixelRow); 
    }
}

function colorPixel () {
    let colorSelect = document.querySelectorAll('.color');
       
    
    for (i of colorSelect) {
        i.addEventListener('click', function() {

            selectorColor = this.style.backgroundColor;
            let element = document.querySelector('.selected');            
            element.classList.remove('selected');
            this.classList.add('selected');
            
            

        })
    }

}

colorPixel();

function coloredPixel() {
  let whitepixel = document.querySelectorAll('.pixel');
  for(let i of whitepixel) {
      i.addEventListener('click', function() {
          this.style.backgroundColor = selectorColor;
      })
  }
}  

coloredPixel();


let buttonInputSection = document.querySelector('#button-input');
let clearButton = document.createElement('button');
clearButton.innerHTML = 'Limpar';
clearButton.type = 'submit';
clearButton.className = 'limpar';
clearButton.id = 'clear-board';

buttonInputSection.appendChild(clearButton);

function clearBoard () {
    let clearButton = document.querySelector('#clear-board');
    clearButton.addEventListener('click', function () {
        let pixel = document.querySelectorAll('.pixel');
        for(let i of pixel) {
            i.style.backgroundColor = 'white';
        }


    })
}

clearBoard();

buttonInputSection = document.querySelector('#button-input');
let boardSizeInput = document.createElement('input');
boardSizeInput.id = 'board-size'
boardSizeInput.placeholder = 'Tamanho do Quadro de Pixel'
boardSizeInput.style.border = '1px solid black';
boardSizeInput.type = 'number'
boardSizeInput.min = '1';
boardSizeInput.max = '50';
boardSizeInput.minLength = '0';

let generateBoardButton = document.createElement('button');
generateBoardButton.id = 'generate-board';
generateBoardButton.innerHTML = 'VQV';


buttonInputSection.appendChild(boardSizeInput);
buttonInputSection.appendChild(generateBoardButton);

function captureInput () {
    boardSizeInput = document.querySelector('#board-size');
    pixelLine = boardSizeInput.value;
    row = boardSizeInput.value;
    if(pixelLine <= 0 || row <= 0 || boardSizeInput.value < 0) {
        alert ('Board inválido!');
    }
    if(pixelLine < 5 || row < 5) {
        pixelLine = 5;
        row = 5;
    } else {
        pixelLine;
        row;
    }
    if(pixelLine > 50 || row > 50) {
        pixelLine = 50;
        row = 50;
    } else {
        pixelLine;
        row;
    }

    changePixelFrame(pixelLine, row);
    
}

generateBoardButton = document.querySelector('#generate-board');

generateBoardButton.addEventListener('click', captureInput)

function changePixelFrame (pixelDiv, pixelRow) {
    pixelBoard = document.querySelector('#pixel-board');
    pixelBoard.innerHTML = '';
    for(let i = 0; i < pixelLine; i += 1) {
        pixelDiv = document.createElement('div');
        pixelDiv.id = 'pixel-line'
        pixelBoard.appendChild(pixelDiv);
        for (let i2 = 0 ; i2 < row; i2 += 1) {
            pixelRow = document.createElement('div');
            pixelRow.style.border = '1px solid black';
            pixelRow.style.backgroundColor = 'white';    
            pixelDiv.appendChild(pixelRow);
            pixelRow.classList.add('pixel');
        }
    }
}
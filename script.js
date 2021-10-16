let inputButton = document.querySelector('#color-palette');

let buttonQuantity = 4;
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
let pixelLine = 5;
let row = 5;

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
let inputButton = document.querySelector('#color-palette');
let buttonQuantity = 4;

for(let index = 0; index < buttonQuantity; index+=1) {
    let div = document.createElement('div');
    div.className = 'color'
    inputButton.appendChild(div);

}


let divPixelBoard = document.querySelectorAll('.color');

for(let index1 =0; index1 < buttonQuantity; index1 +=1) {
    let colorButton = ['black', 'red', 'blue', 'green'];
    divPixelBoard[index1].style.backgroundColor = colorButton[index1];        
}

let pixelBoard = document.querySelector('#pixel-board');
let pixelLine = 5;

for(index2 = 0; index2 < pixelLine; index2+=1) {
    let pixelDiv = document.createElement('div');
    pixelDiv.classList = 'pixel';
    pixelDiv.style.border = '1px solid black';
    pixelDiv.style.backgroundColor = 'white';

    pixelBoard.appendChild(pixelDiv);
    let row = 5;
    for(index3 = 0; index3 < row; index3+=1) {
       let pixelRow = document.createElement('div');
       pixelRow.classList = 'pixel';
       pixelRow.style.border = '1px solid black';
       pixelRow.style.backgroundColor = 'white';
       pixelDiv.appendChild(pixelRow); 
    }
}
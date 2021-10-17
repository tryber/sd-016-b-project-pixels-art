const board = document.getElementById('pixel-board');
const palette = document.getElementById('color-palette');
const colorList = document.getElementsByClassName('color');
const pixel = document.getElementsByClassName('pixel');
const clearButton = document.getElementById('clear-board');
const vqvButton = document.getElementById('generate-board');
const input = document.getElementById('board-size');

function pixelBoard() {
    for(let index = 1; index <= 25; index += 1) {
        let pixel = document.createElement('div')
        pixel.className = 'pixel'
        board.appendChild(pixel)
    }
};

function selectedColor(event) {
    let id = event.target.id;

    for(let index = 0; index < colorList.length; index++) {
        if (colorList[index].id === id) {
            colorList[index].className = 'color selected'
        } else {
            colorList[index].className = 'color'
        }
    }
}

function paintPixels(event) {
    const colorSelected = document.querySelector('.selected');
    const paintIt = window.getComputedStyle(colorSelected).getPropertyValue('background-color');
    const element = event.target;

    element.style.backgroundColor = paintIt;
    board.style.backgroundColor = 'white';
}

function resetBoard() {
    for (let i = 0; i < pixel.length; i += 1) {
        const actualPixel = pixel[i];
        actualPixel.style.backgroundColor = 'white';
    }
}

function vqvGenerator(n) {
    board.innerHTML = '';
    board.style.gridTemplateColumns = `repeat(${n}, 40px)`;

    const inputNumber = n ** 2;
    for(let i = 1; i <= inputNumber; i += 1) {
        const divAdd = document.createElement('div');
        divAdd.className = 'pixel';
        board.appendChild(divAdd);
    }
}

function vqvFunction() {
    let inputNumber = document.getElementById('board-size').value;
    if (inputNumber === '')  {
        window.alert('Board Inválido!');
    } else if (inputNumber < 5) {
        inputNumber = 5;
        vqvGenerator(inputNumber);
    } else if (inputNumber > 50) {
        inputNumber = 50;
        vqvGenerator(inputNumber);
    }
    vqvGenerator(inputNumber);
}

palette.addEventListener('click', selectedColor);

board.addEventListener('click', paintPixels);

clearButton.addEventListener('click', resetBoard);

vqvButton.addEventListener('click', vqvFunction);

window.onload = function() {
    pixelBoard();
}

const board = document.getElementById('pixel-board')
const palette = document.getElementById('color-palette')
const colorList = document.getElementsByClassName('color')

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

palette.addEventListener('click', selectedColor);

board.addEventListener('click', paintPixels);


window.onload = function() {
    pixelBoard();
}

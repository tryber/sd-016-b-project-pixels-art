window.onload = function () {
    const firstColor = document.getElementById('color1');
    firstColor.classList.add('selected');

    randomColors()

    let secondColor = document.getElementById('color2');
    let thirdColor = document.getElementById('color3');
    let fourthColor = document.getElementById('color4');

    secondColor.style.backgroundColor = randomColor;
    thirdColor.style.backgroundColor = randomColor2;
    fourthColor.style.backgroundColor = randomColor3;
};

const firstColor = document.getElementById('color1');
let secondColor = document.getElementById('color2');
let thirdColor = document.getElementById('color3');
let fourthColor = document.getElementById('color4');
let clearButton = document.getElementById('clear-board');

function selectColor(event) {
    const selectedColor = document.querySelector('.selected');
    const glowColor = window.getComputedStyle(selectedColor).backgroundColor;
    selectedColor.classList.remove('selected');
    event.target.classList.add('selected')
}

function colorPixel(event) {
    const selected = document.querySelector('.selected');
    const color = window.getComputedStyle(selected).backgroundColor;
    const pixel = event.target;
    pixel.style.backgroundColor = color;

}

const pixels = document.getElementsByClassName('pixel');
for (const pixel of pixels) {
  pixel.addEventListener('click', colorPixel);
}

function randomColors(){
    let rgbValue1 = Math.floor(Math.random() * 215) + 1;
    let rgbValue2 = Math.floor(Math.random() * 225) + 1;
    let rgbValue3 = Math.floor(Math.random() * 235) + 1;

    randomColor = `rgb(${rgbValue1}, ${rgbValue2}, ${rgbValue3})`;
    randomColor2 = `rgb(${rgbValue3}, ${rgbValue2}, ${rgbValue1})`;
    randomColor3 = `rgb(${rgbValue2}, ${rgbValue1}, ${rgbValue3})`;
}

function clearBoard(){
    const paintedPixels = document.querySelectorAll('.pixel');
    for (let i = 0; i < paintedPixels.length; i+= 1){
        paintedPixels[i].style.backgroundColor = 'white';
    }
}

firstColor.addEventListener('click', selectColor);
secondColor.addEventListener('click', selectColor);
thirdColor.addEventListener('click', selectColor);
fourthColor.addEventListener('click', selectColor);
clearButton.addEventListener('click', clearBoard);

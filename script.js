function pickColor() {
    let currentColor = document.getElementsByClassName('selected');
    for (let i = 0; i < currentColor.length; i += 1) {
      currentColor[i].classList.remove('selected');
    }
    this.classList.add('selected');
  }
  
let colors = document.querySelectorAll('.color');
for (let i of colors) {
    i.addEventListener('click', pickColor)
}

function paintPixel() {
 let currentColor = document.getElementsByClassName('selected')[0];
 let actualColor = window.getComputedStyle(currentColor).backgroundColor //https://stackoverflow.com/questions/1887104/how-to-get-the-background-color-of-an-html-element
 this.style.backgroundColor = actualColor
}

let pixels = document.querySelectorAll('.pixel');
for (let i of pixels) {
    i.addEventListener('click', paintPixel)
}

function clearCanvas() {
  let canvas = document.getElementsByClassName('pixel')
  for (const i of canvas) {
    i.style.backgroundColor = 'white'
  }
}
document.getElementById('clear-board').addEventListener('click', clearCanvas)


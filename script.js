const BOARD_SIZE = 5;
const COLORS = ['#000000', '#DDE8B3', '#63734A', '#BFCC98'];
const INITIAL_COLOR = '#000000'
let currentColor = INITIAL_COLOR

const clearButton = document.querySelector('#clear-board')


function handleSelectedColor(event) {
  const selectedElement = document.querySelector('.selected')
  const currentElement = event.target
  const selectedColor = currentElement.getAttribute('data-color')

  currentColor = selectedColor
  // localStorage.setItem('selectedColor', selectedColor)
  selectedElement.classList.remove('selected')
  currentElement.classList.add('selected')


  // const colorList = document.querySelectorAll('.color')

  // colorList.forEach((color) => {
  //   if (color.classList.contains('selected')) {
  //     color.classList.remove('selected')
  //   }
  // })
}


function createPaletteColors() {
  const colorPalette = document.querySelector('#color-palette')

  COLORS.forEach((color) => {
    // const colorElement = `<div data-color="${color}" class="color"></div>`
    const colorElement = document.createElement('div')

    colorElement.classList.add('color')
    colorElement.setAttribute('data-color', color)
    colorElement.onclick = handleSelectedColor

    colorPalette.appendChild(colorElement)
    // colorPalette.insertAdjacentHTML('beforeend', colorElement)
  })
}


function handlePaintPixel(event) {
  // const selectedColor = localStorage.getItem('selectedColor')
  event.target.style.backgroundColor = currentColor
}


function createPixelBoard() {
  const board = document.getElementById('pixel-board')

  for (let row = 0; row < BOARD_SIZE; row++) {
    const boardRow = document.createElement('div')

    // const id = '2'
    // const boardRow = `<div id="${id}"></div>`

    boardRow.classList.add('boardRow')

    for (let column = 0; column < BOARD_SIZE; column++) {
      const pixelItem = document.createElement('div')

      pixelItem.classList.add('pixel')
      pixelItem.onclick = handlePaintPixel
      boardRow.appendChild(pixelItem)

    }
    board.appendChild(boardRow)
  }
}


function setInitialSelectedColor() {
  const initialColor = document.querySelector('.color')

  initialColor.classList.add('selected')
}

clearButton.addEventListener('click', () => {
  const pixels = document.querySelectorAll('.pixel')
  pixels.forEach((pixel) => {
    pixel.style.backgroundColor = '#ffffff'
  })
})


window.addEventListener('load', () => {
  createPixelBoard()
  createPaletteColors()
  setInitialSelectedColor()
})


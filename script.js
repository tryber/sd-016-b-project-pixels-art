window.onload = function() {

  function selectClass() {
    let colors = document.getElementsByClassName('color')

    for(let i = 0; i < colors.length; i++) {
      colors[i].addEventListener('click', function(event) {
        for(let x = 0; x < colors.length; x++) {
          colors[x].classList.remove('selected')
        }
        event.target.classList.add('selected')
      })
    }
  }

  selectClass();


  function resetBoardPixels() {
    let pixels = document.getElementsByClassName('pixel')
    let resetButton = document.getElementById('clear-board')

    resetButton.addEventListener('click', function(event){
      for(let i = 0; i < pixels.length; i++) {
        pixels[i].style.backgroudColor = 'white'
      }
    })
  }

  resetBoardPixels();

}
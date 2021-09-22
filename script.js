window.onload = function() {


  function resetBoardPixels() {
    let pixels = document.getElementsByClassName('pixel')
    let resetButton = document.getElementById('clear-board')

    resetButton.addEventListener('click', function(){
      for(let i = 0; i < pixels.length; i++) {
        pixels[i].style.backgroundColor = 'white'
      }
    })
  }

  resetBoardPixels();

}
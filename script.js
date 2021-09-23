window.onload = function() {
  
    function alertInvalido() {
      let input = document.getElementById('board-size').value
      if(input == ''){
        alert('Board inválido!')
      }

    }  

    function boardIvalido(){
      let btn = document.getElementById('generate-board')
      btn.addEventListener('click',alertInvalido)
    }

    boardIvalido();

    function pintaQuadro() {
      document.getElementById('color1').style.backgroundColor = 'black'
      document.getElementById('color2').style.backgroundColor = 'red'
      document.getElementById('color3').style.backgroundColor = 'green'
      document.getElementById('color4').style.backgroundColor = 'yellow'
      }


    pintaQuadro();
    
    function pintaPixel(event) {
      let selectedColor = document.querySelector('.selected').style.backgroundColor
      event.target.style.backgroundColor = selectedColor
    }

    let gradePixel = document.getElementsByClassName('pixel')
    for(let i = 0; i < gradePixel.length; i++) {
      gradePixel[i].addEventListener('click', pintaPixel)
    }
    

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
        pixels[i].style.backgroundColor = 'white'
      }
    })
  }

  resetBoardPixels();

}
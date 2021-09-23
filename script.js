window.onload = function() {
  
    /*function geraPixel() {
      let input = document.getElementById('board-size').value
      let fatherBoard = document.getElementsByClassName('conteiner')[1]
      let criaDiv = document.createElement('div')
      criaDiv.id('pixel-board')
      fatherBoard.appendChild(criaDiv)
      for(let col = 0; col < input; col++) {
        for(let linha = 0; linha < input; linha ++) {
          let criaPixel = document.createElement('button')
          criaDiv.appendChild(criaPixel)
        }
        
      }
    }*/

    function randomColor() {
      let arryColor = []

      for(let i = 0; i < 3; i++) {
        arryColor.push(Math.round(Math.random() * 255))
      }
      let randomColor = `rgb(${arryColor[0]}, ${arryColor[1]}, ${arryColor[2]})`
      return randomColor
    }

    function removePixel() {
      let fatherBoard = document.getElementsByClassName('conteiner')[1]
      let pixelBoard = document.getElementById('pixel-board')
      fatherBoard.removeChild(pixelBoard)
      geraPixel()
    }

    function alertInvalido() {
      let input = document.getElementById('board-size').value
      if(input == ''){
        alert('Board inválido!')
      }else{
        removePixel()
      }

    }  

    function boardIvalido(){
      let btn = document.getElementById('generate-board')
      btn.addEventListener('click',alertInvalido)
    }

    boardIvalido();

    function pintaQuadro() {
      document.getElementById('color1').style.backgroundColor = 'black'
      document.getElementById('color2').style.backgroundColor = randomColor()
      document.getElementById('color3').style.backgroundColor = randomColor()
      document.getElementById('color4').style.backgroundColor = randomColor()
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
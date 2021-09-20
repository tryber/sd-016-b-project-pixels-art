window.onload = function() {
  

  function selectedColor() {
    let pixelColor = document.getElementsByClassName('color') 
    let selected = document.getElementsByClassName('selected')[0]
    for(let i = 0; i < pixel.length; i++) {
       pixelColor[i].addEventListener('click',function(event){
         event.target.style.backgroundColor = 'black'
       })
    }

  }

  selectedColor()
//-----------------------------------------------------------------------------------------------------------------------------------------------------------
 function pintaPixel() {
  let pixel = document.getElementsByClassName('pixel')
  let selectedColor = document.getElementsByClassName('selected')
  for(let i = 0; i < pixel.length; i++) {
    pixel[i].addEventListener('click', function(){
      pixel[i].style.backgroundColor = selectedColor[0].style.backgroundColor
    })
  }
 }

 pintaPixel();
 


}
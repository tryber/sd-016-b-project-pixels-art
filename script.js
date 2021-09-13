window.onload = function(){

  let colorOne = document.querySelector('#palettOne');
  let colorTwo = document.querySelector('#palettTwo');
  let colorThree = document.querySelector('#palettThree');
  let colorFour = document.querySelector('#palettFour');
  let pixel = document.querySelectorAll('.pixel');
  let board = document.querySelector('#pixel-board');
  let clearButton = document.querySelector('button');


  function randomColor(){
    let colorR = Math.round(Math.random()* 255);
    let colorG = Math.round(Math.random()* 255);
    let colorB = Math.round(Math.random()* 255);
    let fullColor = `rgb(${colorR}, ${colorG}, ${colorB})`;
    return fullColor;
   }
   randomColor()
 
   function putNewColor(){
     colorTwo.style.backgroundColor = randomColor();
     colorThree.style.backgroundColor = randomColor();
     colorFour.style.backgroundColor = randomColor();
   }
 
   putNewColor();
 
  

  colorOne.addEventListener('click',function(){
    if(colorOne.className !== "selected"){
      colorOne.classList.add('selected')
      colorTwo.classList.remove('selected')
      colorThree.classList.remove('selected')
      colorFour.classList.remove('selected')
    }
  })

  colorTwo.addEventListener('click',function(){
    if(colorTwo.className !== "selected"){
      colorTwo.classList.add('selected')
      colorOne.classList.remove('selected')
      colorThree.classList.remove('selected')
      colorFour.classList.remove('selected')
    }
  })

  colorThree.addEventListener('click',function(){
    if(colorThree.className !== "selected"){
      colorThree.classList.add('selected')
      colorTwo.classList.remove('selected')
      colorOne.classList.remove('selected')
      colorFour.classList.remove('selected')
    }
  })

  colorFour.addEventListener('click',function(){
    if(colorFour.className !== "selected"){
      colorFour.classList.add('selected')
      colorTwo.classList.remove('selected')
      colorThree.classList.remove('selected')
      colorOne.classList.remove('selected')
    }
  })

  board.addEventListener('click', function(evt){
    const selectedColor = document.querySelector('.selected');
    const cor = selectedColor.style.backgroundColor;
    let div = evt.target;
    


    if(div.style.backgroundColor !== selectedColor.style.backgroundColor){
      div.style.backgroundColor = cor;
    }
  })

  clearButton.addEventListener('click', function(){
    for(let i = 0; i < pixel.length; i += 1){  
      pixel[i].style.backgroundColor = 'white';
    }
  })

}




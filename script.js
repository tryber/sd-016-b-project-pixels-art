 window.onload = function(){

    let palettes = document.getElementsByClassName('color');
    let pixel = document.getElementsByClassName('pixel');
    let color = 'black';
    clearBoard();
    //adicionando a classe selected a cor preta
    palettes[0].className = 'color selected';
    
    //adicionando o escutador nas paletas
    for (let index = 0; index < palettes.length; index++) {
  
    palettes[index].addEventListener('click', selected);
    
    }
    //adicionando o escutador nos quadrados que serao pintado
   for (let index = 0; index < pixel.length; index++) {
   
    pixel[index].addEventListener('click', paint);
    
    }
  


function selected(event){ 
   
    let position = Array.from(palettes).indexOf(event.target);
    let targetClassName = event.target.className;
    
        if (targetClassName == 'color'){

            palettes[position].className = 'color selected';            
            color = palettes[position].id;

            for (let index = 0; index < palettes.length; index++) {
                
                if (palettes[position] != palettes[index]){
                    palettes[index].className = 'color';
                }
                
            }
       
    }
  
}

function paint (event){
    
    let position = Array.from(pixel).indexOf(event.target);
    
    if (color == 'vine'){
        pixel[position].style.backgroundColor =  'rgb(125, 0, 0)';
    }
    pixel[position].style.backgroundColor = color;
   
}

function clearBoard(){

    let buttonClear = document.getElementById('clear-board');

    buttonClear.addEventListener('click',function(){

        for (let index = 0; index < pixel.length; index++) {
  
            pixel[index].style.backgroundColor = 'white';
            
            }
        })

  
}

 }   
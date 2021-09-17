
const pixelBoardSection = document.getElementById('pixel-board');
const getPallete = document.getElementById('color-palette');
const getBlack = document.getElementById('black');
const getGreen= document.getElementById('green');
const getBlue = document.getElementById('blue');
const getPurple = document.getElementById('purple');
const allColors = document.querySelectorAll('.color')
const selectAllPixels = document.getElementsByClassName('pixel')
const CreateButton = document.createElement( 'button')
getPallete.style.backgroundColor = 'white'


let pixelQuantity = 25;

window.onload = () =>{
    for(let i = 0; i < selectAllPixels.length; i +=1) { 
        selectAllPixels[i].addEventListener('click', () =>{
            selectAllPixels[i].style.backgroundColor = 'black'
        })
    }
}


//Cria o "tabuleiro".
function createPixels() {
  for(let i = 1; i<= pixelQuantity; i +=1) {
    const CreateDivPixel = document.createElement('div');
    CreateDivPixel.className = 'pixel';
    CreateDivPixel.style.backgroundColor = 'white';
    pixelBoardSection.appendChild(CreateDivPixel);
  }
}
createPixels();


function select () { 
 for (let i = 0; i < allColors.length; i += 1){
     allColors[i].addEventListener('click',function(event){
        for (let i =0; i<allColors.length; i += 1){ 
        allColors[i].classList.remove('selected');}
      event.target.classList.add('selected')} )
 }
}
select();



getBlack.addEventListener('click',()=> {
    for(let i = 0; i < selectAllPixels.length; i +=1){
        selectAllPixels[i].addEventListener('click', () => {
            selectAllPixels[i].style.backgroundColor = 'black'
        })
    }
})

getGreen.addEventListener('click',()=> {
    for(let i = 0; i < selectAllPixels.length; i +=1){
        selectAllPixels[i].addEventListener('click', () => {
            selectAllPixels[i].style.backgroundColor = 'green'
        })
    }
})

getBlue.addEventListener('click',()=> {
    for(let i = 0; i < selectAllPixels.length; i +=1){
        selectAllPixels[i].addEventListener('click', () => {
            selectAllPixels[i].style.backgroundColor = 'Blue'
        })
    }
})

getPurple.addEventListener('click',()=> {
    for(let i = 0; i < selectAllPixels.length; i +=1){
        selectAllPixels[i].addEventListener('click', () => {
            selectAllPixels[i].style.backgroundColor = 'Purple'
        })
    }
})


CreateButton.id = 'clear-board'
CreateButton.innerHTML = 'Limpar'
getPallete.appendChild(CreateButton)

CreateButton.addEventListener('click', () =>{
for(let i = 0; i < pixelQuantity; i +=1){ 
    selectAllPixels[i].style.backgroundColor = 'white';
}
})





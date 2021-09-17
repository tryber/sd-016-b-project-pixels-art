const blackBox = document.getElementById('black');
const blueBox = document.getElementById('blue');
const redBox = document.getElementById('red');
const yellowBox = document.getElementById('yellow');

blackBox.addEventListener('click', selectColor);
blueBox.addEventListener('click', selectColor);
redBox.addEventListener('click', selectColor);
yellowBox.addEventListener('click', selectColor);
localStorage.setItem('color', 'black');

function removeClass(){
    const remove = document.querySelectorAll('.color');
    for (let index = 0; index < remove.length; index+=1) {
        remove[index].classList.remove('selected');
    }
}

function selectColor(event){
    removeClass();
    const element =  event.target;
    element.classList.add('selected')
    const color = this.id
    localStorage.setItem('color', color)
}
let bigBox = document.querySelectorAll('.pixel');
for (let index = 0; index < bigBox.length; index+=1) {
    bigBox[index].addEventListener('click', aplication);
}

function aplication(event){
    const element = event.target
  element.style.backgroundColor = localStorage.getItem("color")
}

let clear = document.getElementById('clear-board');

clear.addEventListener('click', clearBigBox);
function clearBigBox(){
    for (let i = 0; i < bigBox.length; i+=1) {
        bigBox[i].style.backgroundColor = 'white';
      
    }
}
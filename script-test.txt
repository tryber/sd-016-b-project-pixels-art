let blackColor = document.getElementsByClassName('black');
let redColor = document.getElementsByClassName('red');
let blueColor = document.getElementsByClassName('blue');
let greenColor = document.getElementsByClassName('green');
let colors = document.querySelector("#color-palette");
let allChildren = colors.children; 
let classColor = allChildren[0].classList;

function firstSelect() {
  let count = 0;
  for (index = 0; index < allChildren.length; index +=1) {
    classColor = allChildren[index].classList;
    if (classColor.contains('selected')){
    } else {
      count += 1;
    }
  }
  if (count == allChildren.length) {
    blackColor[0].classList.add('selected');
  }
}
firstSelect();

let blackNumber = document.getElementById('1');
let redNumber = document.getElementById('2');
let blueNumber = document.getElementById('3');
let greenNumber = document.getElementById('4');
let allNumber = [blackNumber, redNumber, blueNumber, greenNumber];
blackNumber.addEventListener('click', select);
redNumber.addEventListener('click', select);
blueNumber.addEventListener('click', select);
greenNumber.addEventListener('click', select);


function select(evento) {
  for (index = 0; index < allChildren.length; index +=1) {
    classColor = allChildren[index].classList;
    if (classColor.contains('selected')) {
      classColor.remove('selected')
    }
  }
  allNumber[evento.target.id - 1].classList.add('selected');
  console.log(blackColor, redColor, blueColor, greenColor);
}

let pix = document.querySelectorAll('.pixel');
function createId () {
  count = 1;  
  for (index = 0; index < pix.length; index += 1) {
   pix[index].id = (index + count);
  }
}
createId();

function createListenePixel () {
  for (index = 0; index < pix.length; index += 1) {
    pix[index].addEventListener('click', )
  }
}
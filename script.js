const colorPalette = document.querySelector('#color-palette');
const mainTag = document.getElementsByTagName('main')[0];

colorPalette.children[0].style.backgroundColor = 'black';
colorPalette.children[1].style.backgroundColor = 'green';
colorPalette.children[2].style.backgroundColor = 'red';
colorPalette.children[3].style.backgroundColor = 'blue';

colorPalette.children[0].setAttribute('class', 'color selected');

// function clearBoard() {
//   for (let i = 0; i < 25; i += 1) {
//     document.querySelector('#pixel-board').children[i].style.backgroundColor = 'white';
//   }
// }
// Requisito 9
const createButton = document.createElement('button');
mainTag.appendChild(createButton);
createButton.setAttribute('id', 'clear-board');
createButton.innerText = 'Limpar';

// const button = document.getElementsByClassName('clear-board')[0];
// button.addEventListener('click', clearBoard);

// Requisito 4
const createUl = document.createElement('ul');
mainTag.appendChild(createUl);
createUl.setAttribute('id', 'pixel-board');
for (let i = 1; i <= 25; i += 1) {
  const createLi = document.createElement('li');
  document.getElementById('pixel-board').appendChild(createLi);
  createLi.setAttribute('class', 'pixel');
}

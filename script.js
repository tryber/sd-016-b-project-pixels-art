const colorPalette = document.querySelector('#color-palette');
colorPalette.children[0].style.backgroundColor = 'black';
colorPalette.children[1].style.backgroundColor = 'green';
colorPalette.children[2].style.backgroundColor = 'red';
colorPalette.children[3].style.backgroundColor = 'blue';

colorPalette.children[0].setAttribute('class', 'color selected');

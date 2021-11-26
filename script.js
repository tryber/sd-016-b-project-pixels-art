let quadradoSelecao = 0;
function criandoPixels(numberSize) {

  const pixelBoard = document.getElementById('pixel-board');
  for (let coluna = 1; coluna <= numberSize; coluna += 1) {
    const pixel = document.createElement('div');
    pixel.setAttribute('id', coluna);
    pixel.setAttribute('class', 'pixel');
    pixel.onclick = new Function('colorir(this)');
    pixelBoard.appendChild(pixel);
  }
}
document.getElementById('square1').onclick = function square1() {
  quadradoSelecao = 0;
};
document.getElementById('square2').onclick = function square2() {
  quadradoSelecao = 1;
};
document.getElementById('square3').onclick = function square3() {
  quadradoSelecao = 2;
};
document.getElementById('square4').onclick = function square4() {
  quadradoSelecao = 3;
};
function adicionarClasse(event) {
  const selecionado = document.querySelector('.selected');
  selecionado.classList.remove('selected');
  event.target.classList.add('selected');
}
function paletaListenner() {
  const listaPaleta = document.getElementsByClassName('color');
  for (let i = 0; i < listaPaleta.length; i += 1) {
    listaPaleta[i].addEventListener('click', adicionarClasse);
  }
}

function colorir(a) {
  switch (quadradoSelecao) {
  case 0:
    document.getElementById(a.id).style.background = 'rgb(0, 0, 0)';
    break;
  case 1:
    document.getElementById(a.id).style.background = 'rgb(111, 214, 203)';
    break;
  case 2:
    document.getElementById(a.id).style.background = 'rgb(240, 233, 72)';
    break;
  case 3:
    document.getElementById(a.id).style.background = 'rgb(67, 0, 245)';
    break;
  default:
  }
}

function removerSelected() {
  for (let index = 0; index <= document.getElementsByClassName('color').length; index += 1) {
    document.getElementsByClassName('color')[index].classList.remove('selected');
  }
}
document.getElementById('clear-board').onclick = () => {
  for (let index = 0; index < document.getElementsByClassName('pixel').length; index += 1) {
    document.getElementsByClassName('pixel')[index].style = 'background:rgb(255, 255, 255)';
  }
};

document.getElementById('generate-board').onclick = () => {
  const pixelBoard = document.querySelectorAll('.pixel');
  const input = document.getElementById('board-size');
  if (!input.value) {
    alert('Board inválido!');
  } else {
    pixelBoard.forEach((element) => {
      element.remove();
    });
    if (input.value < 5) {
      input.value = 5;
      criandoPixels(input.value * input.value);
    } else if (input.value > 50) {
      input.value = 50;
      criandoPixels(input.value * input.value);
    } else {
      criandoPixels(input.value * input.value);
    }
  }
};

window.onload = () => {
  criandoPixels(25);
  paletaListenner();
};
